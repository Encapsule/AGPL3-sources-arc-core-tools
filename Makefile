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

target_default: lib_tests
	@echo ARC_master repo Makefile evaluation default target...

clean:
	rm -rfv $(DIR_OUT_BUILD)
	rm -rfv $(DIR_OUT_STAGE)

lib_modules: coffee_compile js_copy lib_build_tag

lib_tests: lib_modules
	@echo STARTING TESTS OF LIB MODULES IN $(DIR_OUT_BUILD_ARCCORE)
	$(TOOL_MOCHA) TESTS/test_arc.js

lib_build_tag:
	node ./PROJECT/generate_build_tag.js

# Lint all coffeescript modules in `$(SOURCES_ROOT)` per rules in `$(PROJECT_ROOT)/coffeelint.json`.
coffee_lint:
	$(TOOL_COFFEELINT) $(DIR_SOURCES)

# Compile Coffeescript library sources to ES5 and write output to appropriate subdirs of `$(DIR_OUT_BUILD)`.
coffee_compile: coffee_lint
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_UTIL)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_TYPES)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_IDENTIFIER)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_FILTER)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_FILTERDAG)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_DISCRIMINATOR)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE)/*.coffee

js_copy: js_copy_graph js_copy_tools

# jsgraph is written in native ES5 and is merely copied.
js_copy_graph:
	mkdir -p $(DIR_OUT_BUILD_ARCCORE)
	cp -v $(DIR_SOURCES_ARCCORE_GRAPH)/*.js $(DIR_OUT_BUILD_ARCCORE)

js_copy_tools:
	mkdir -p $(DIR_OUT_BUILD_ARCTOOLS)
	cp -rv $(DIR_SOURCES_ARCTOOLS)/* $(DIR_OUT_BUILD_ARCTOOLS)

bundles: lib_tests bundle_arccore bundle_arctools

bundle_arccore:
	$(TOOL_WEBPACK) --config $(DIR_PROJECT)/webpack.config.arccore.js

bundle_arctools:
	$(TOOL_WEBPACK) --config $(DIR_PROJECT)/webpack.config.arctools.js

stages: bundles stage_arccore stage_arctools

stage_arccore:
	mkdir -p $(DIR_OUT_STAGE_ARCCORE)
	cp $(DIR_OUT_BUILD_ARCCORE)/index.js $(DIR_OUT_STAGE_ARCCORE)

stage_arctools:
	mkdir -p $(DIR_OUT_STAGE_ARCTOOLS)
	cp $(DIR_OUT_BUILD_ARCTOOLS)/lib.js $(DIR_OUT_STAGE_ARCTOOLS)
