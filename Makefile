DIR_ROOT=.
DIR_SOURCES=$(DIR_ROOT)/SOURCES
DIR_SOURCES_ARCCORE=$(DIR_SOURCES)/core
DIR_SOURCES_ARCCORE_UTIL=$(DIR_SOURCES_ARCCORE)/util
DIR_SOURCES_ARCCORE_TYPES=$(DIR_SOURCES_ARCCORE)/types
DIR_SOURCES_ARCCORE_IDENTIFIER=$(DIR_SOURCES_ARCCORE)/identifier
DIR_SOURCES_ARCCORE_GRAPH=$(DIR_SOURCES_ARCCORE)/graph
DIR_SOURCES_ARCCORE_FILTER=$(DIR_SOURCES_ARCCORE)/filter
DIR_SOURCES_ARCCORE_FILTERDAG=$(DIR_SOURCES_ARCCORE)/filter-dag
DIR_SOURCES_ARCCORE_DISCRIMINATOR=$(DIR_SOURCES_ARCCORE)/discriminator

DIR_SOURCES_ARCTOOLS=$(DIR_SOURCES)/tools

DIR_PROJECT=$(DIR_ROOT)/PROJECT

DIR_OUT_BUILD=$(DIR_ROOT)/BUILD
DIR_OUT_BUILD_ARCCORE=$(DIR_OUT_BUILD)/arccore
DIR_OUT_BUILD_ARCTOOLS=$(DIR_OUT_BUILD)/arctools
DIR_OUT_STAGE=$(DIR_ROOT)/STAGE
DIR_OUT_STAGE_ARCCORE=$(DIR_OUT_STAGE)/arccore
DIR_OUT_STAGE_ARCTOOLS=$(DIR_OUT_STAGE)/arctools

DIR_MODULES=$(DIR_ROOT)/node_modules

DIR_TOOLS=$(DIR_MODULES)/.bin

TOOL_COFFEELINT=$(DIR_TOOLS)/coffeelint
TOOL_COFFEECC=$(DIR_TOOLS)/coffee
TOOL_COFFEECC_FLAGS=--compile --no-header --output $(DIR_OUT_BUILD_ARCCORE)
TOOL_MOCHA=$(DIR_TOOLS)/mocha
TOOL_WEBPACK=$(DIR_TOOLS)/webpack

default: stages
	@echo ================================================================
	@echo default
	@echo ================================================================

clean:
	@echo ================================================================
	@echo clean
	@echo ================================================================
	rm -rfv $(DIR_OUT_BUILD)
	rm -rfv $(DIR_OUT_STAGE)

reset: clean
	@echo ================================================================
	@echo reset
	@echo ================================================================
	rm -rfv $(DIR_MODULES)
	@echo Reset complete. You will need to re-install module dependencies via \'yarn install\'.
	@echo



lib_modules: coffee_compile js_copy build_tag
	@echo ================================================================
	@echo lib_modules
	@echo ================================================================

lib_tests: lib_modules
	@echo ================================================================
	@echo lib_tests
	@echo STARTING TESTS OF LIB MODULES IN $(DIR_OUT_BUILD_ARCCORE)
	@echo ================================================================
	$(TOOL_MOCHA) TESTS/test_arc.js

build_tag:
	@echo ================================================================
	@echo build_tag
	@echo ================================================================
	node ./PROJECT/generate_build_tag.js

# Lint all coffeescript modules in `$(SOURCES_ROOT)` per rules in `$(PROJECT_ROOT)/coffeelint.json`.
coffee_lint:
	@echo ================================================================
	@echo coffee_lint
	@echo ================================================================
	$(TOOL_COFFEELINT) $(DIR_SOURCES)

# Compile Coffeescript library sources to ES5 and write output to appropriate subdirs of `$(DIR_OUT_BUILD)`.
coffee_compile: coffee_lint
	@echo ================================================================
	@echo coffee_compile
	@echo ================================================================
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_UTIL)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_TYPES)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_IDENTIFIER)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_FILTER)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_FILTERDAG)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_DISCRIMINATOR)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE)/*.coffee

js_copy: js_copy_graph js_copy_tools
	@echo ================================================================
	@echo js_copy
	@echo ================================================================

# jsgraph is written in native ES5 and is merely copied.
js_copy_graph:
	@echo ================================================================
	@echo js_copy_graph
	@echo ================================================================
	mkdir -p $(DIR_OUT_BUILD_ARCCORE)
	cp -v $(DIR_SOURCES_ARCCORE_GRAPH)/*.js $(DIR_OUT_BUILD_ARCCORE)

# arc_tools sources are written in native ES5 and is merely copied.
js_copy_tools:
	@echo ================================================================
	@echo js_copy_tools
	@echo ================================================================
	mkdir -p $(DIR_OUT_BUILD_ARCTOOLS)
	cp -rv $(DIR_SOURCES_ARCTOOLS)/* $(DIR_OUT_BUILD_ARCTOOLS)

bundles: lib_tests bundle_arccore bundle_arctools
	@echo ================================================================
	@echo bundles
	@echo ================================================================

bundle_arccore:
	@echo ================================================================
	@echo bundle_arccore
	@echo ================================================================
	$(TOOL_WEBPACK) --config $(DIR_PROJECT)/webpack.config.arccore.js

bundle_arctools:
	@echo ================================================================
	@echo bundle_arctools
	@echo ================================================================
	$(TOOL_WEBPACK) --config $(DIR_PROJECT)/webpack.config.arctools.js

stages: bundles stage_arccore stage_arctools
	@echo ================================================================
	@echo stages
	@echo ================================================================

stage_arccore:
	@echo ================================================================
	@echo stage_arccore
	@echo ================================================================
	mkdir -p $(DIR_OUT_STAGE_ARCCORE)
	cp $(DIR_OUT_BUILD_ARCCORE)/index.js $(DIR_OUT_STAGE_ARCCORE)

stage_arctools:
	@echo ================================================================
	@echo stage_arctools
	@echo ================================================================
	mkdir -p $(DIR_OUT_STAGE_ARCTOOLS)
	cp $(DIR_OUT_BUILD_ARCTOOLS)/lib.js $(DIR_OUT_STAGE_ARCTOOLS)
