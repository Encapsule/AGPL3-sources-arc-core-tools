####
# ARC project Makefile.
#
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

# DIR_OUT_BUILD_STAGE01 directory contains a mix of ES5 (e.g. jsgraph) and ES6 (e.g. Coffeescript compiler output) derived from SOURCES by various means.
DIR_OUT_BUILD_STAGE01=$(DIR_OUT_BUILD)/stage01
DIR_OUT_BUILD_STAGE01_ARCCORE=$(DIR_OUT_BUILD_STAGE01)/arccore
DIR_OUT_BUILD_STAGE01_ARCTOOLS=$(DIR_OUT_BUILD_STAGE01)/arctools

# DIR_OUT_BUILD_STAGE02 directory contains the output of running DIR_OUT_BUILD_STAGE02 through the babel transpiler to obtain uniform ES5 usable everywhere.
DIR_OUT_BUILD_STAGE02=$(DIR_OUT_BUILD)/stage02
DIR_OUT_BUILD_STAGE02_ARCCORE=$(DIR_OUT_BUILD_STAGE02)/arccore
DIR_OUT_BUILD_STAGE02_ARCTOOLS=$(DIR_OUT_BUILD_STAGE02)/arctools

# DIR_OUT_BUILD_STAGE03 directory contains the output of running webpack on the contents of DIR_OUT_BUILD_STAGE02 to produce release bundles for arccore and arctools packages.
DIR_OUT_BUILD_STAGE03=$(DIR_OUT_BUILD)/stage03
DIR_OUT_BUILD_STAGE03_ARCCORE=$(DIR_OUT_BUILD_STAGE03)/arccore
DIR_OUT_BUILD_STAGE03_ARCTOOLS=$(DIR_OUT_BUILD_STAGE03)/arctools

# DIR_OUT_BUILD_STAGE04 directory contains the output of minimizing/compacting webpack bundles produced for STAGE03 via another run through babel.
DIR_OUT_BUILD_STAGE04=$(DIR_OUT_BUILD)/stage04
DIR_OUT_BUILD_STAGE04_ARCCORE=$(DIR_OUT_BUILD_STAGE04)/arccore
DIR_OUT_BUILD_STAGE04_ARCTOOLS=$(DIR_OUT_BUILD_STAGE04)/arctools

# .gitignore'd resources managed via yarn package (as in Node.js) manager.
DIR_MODULES=$(DIR_ROOT)/node_modules
# Node.js runtime (compile and install from sources locally) and yarn pacakage
# manager are global development environment prerequisites. All other tools
# are expected to included in the devDependencies section of package.json
# in order that their application be versioned
DIR_TOOLS=$(DIR_MODULES)/.bin

TOOL_COFFEELINT=$(DIR_TOOLS)/coffeelint
TOOL_COFFEECC=$(DIR_TOOLS)/coffee
TOOL_COFFEECC_FLAGS=--compile --output $(DIR_OUT_BUILD_STAGE01_ARCCORE)

TOOL_MOCHA=$(DIR_TOOLS)/mocha

TOOL_WEBPACK=$(DIR_TOOLS)/webpack

TOOL_BABEL=$(DIR_TOOLS)/babel
TOOL_BABEL_FLAGS=--verbose --no-comments

TOOL_UGLIFY=$(DIR_TOOLS)/uglifyjs
TOOL_UGLIFY_FLAGS=--verbose --mangle

default:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo default
	@echo Not going to make your day. What can I say.
	@echo '////////////////////////////////////////////////////////////////'

clean:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo clean
	@echo ----------------------------------------------------------------
	rm -rfv $(DIR_OUT_BUILD)
	@echo ----------------------------------------------------------------
	@echo clean
	@echo '////////////////////////////////////////////////////////////////'

reset: clean
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo reset
	@echo ----------------------------------------------------------------
	@echo
	@echo "**** DO NOT PROCEED IF YOU ARE OFFLINE ****"
	@echo
	@echo "Hit ENTER to proceed. CTRL-C to abort..."
	@read aok
	rm -rfv $(DIR_MODULES)
	@echo Reset complete. You will need to 'make dependencies' to re-install 3rd-party libs and packages.
	@echo ----------------------------------------------------------------
	@echo reset
	@echo '////////////////////////////////////////////////////////////////'

dependencies: reset
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo dependencies
	@echo ----------------------------------------------------------------
	yarn install
	@echo ----------------------------------------------------------------
	@echo dependencies
	@echo '////////////////////////////////////////////////////////////////'


# ****************************************************************
# ****************************************************************
# ****************************************************************

stage01: stage01_coffee_compile stage01_js_copy stage01_buildtag
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01 - aggregation target complete.
	@echo '////////////////////////////////////////////////////////////////'

stage01_buildtag:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01_build
	@echo ----------------------------------------------------------------
	node ./PROJECT/generate_build_tag.js
	@echo ----------------------------------------------------------------
	@echo stage01_build
	@echo '////////////////////////////////////////////////////////////////'

# Lint all coffeescript modules in `$(SOURCES_ROOT)` per rules in `$(PROJECT_ROOT)/coffeelint.json`.
stage01_coffee_lint:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01_coffee_lint
	@echo ----------------------------------------------------------------
	$(TOOL_COFFEELINT) $(DIR_SOURCES)
	@echo ----------------------------------------------------------------
	@echo stage01_coffee_lint
	@echo '////////////////////////////////////////////////////////////////'

# Compile Coffeescript library sources to ES5 and write output to appropriate subdirs of `$(DIR_OUT_BUILD)`.
stage01_coffee_compile: stage01_coffee_lint
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01_coffee_compile
	@echo ----------------------------------------------------------------
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_UTIL)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_TYPES)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_IDENTIFIER)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_FILTER)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_FILTERDAG)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE_DISCRIMINATOR)/*.coffee
	$(TOOL_COFFEECC) $(TOOL_COFFEECC_FLAGS) $(DIR_SOURCES_ARCCORE)/*.coffee
	@echo ----------------------------------------------------------------
	@echo stage01_coffee_compile
	@echo '////////////////////////////////////////////////////////////////'

stage01_js_copy: stage01_js_copy_graph stage01_js_copy_tools
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01_js_copy - aggregation target complete.
	@echo '////////////////////////////////////////////////////////////////'

# jsgraph is written in native ES5 and is merely copied.
stage01_js_copy_graph:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01_js_copy_graph
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE01_ARCCORE)
	cp -v $(DIR_SOURCES_ARCCORE_GRAPH)/*.js $(DIR_OUT_BUILD_STAGE01_ARCCORE)
	@echo ----------------------------------------------------------------
	@echo stage01_js_copy_graph
	@echo '////////////////////////////////////////////////////////////////'

# arc_tools sources are written in native ES5 and is merely copied.
stage01_js_copy_tools:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage01_js_copy_tools
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE01_ARCTOOLS)
	cp -rv $(DIR_SOURCES_ARCTOOLS)/* $(DIR_OUT_BUILD_STAGE01_ARCTOOLS)
	@echo ----------------------------------------------------------------
	@echo stage01_js_copy_tools
	@echo '////////////////////////////////////////////////////////////////'

# ****************************************************************
# ****************************************************************
# ****************************************************************

stage02: stage01 stage02_transpile_arccore stage02_transpile_arctools stage02_tests
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage02 - aggregation target complete
	@echo '////////////////////////////////////////////////////////////////'

stage02_transpile_arccore:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage02_transpile_arccore
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE02_ARCCORE)
	$(TOOL_BABEL) $(DIR_OUT_BUILD_STAGE01_ARCCORE)/ $(TOOL_BABEL_FLAGS) --out-dir $(DIR_OUT_BUILD_STAGE02_ARCCORE)/
	@echo ----------------------------------------------------------------
	@echo stage02_transpile_arccore
	@echo '////////////////////////////////////////////////////////////////'

stage02_transpile_arctools:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage02_transpile_arctools
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE02_ARCTOOLS)
	$(TOOL_BABEL) $(DIR_OUT_BUILD_STAGE01_ARCTOOLS)/ $(TOOL_BABEL_FLAGS) --out-dir $(DIR_OUT_BUILD_STAGE02_ARCTOOLS)/
	@echo ----------------------------------------------------------------
	@echo stage02_transpile_arctools
	@echo '////////////////////////////////////////////////////////////////'

stage02_tests:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage02_tests
	@echo STARTING TESTS OF LIB MODULES IN $(DIR_OUT_BUILD_STAGE02_ARCCORE)
	@echo ----------------------------------------------------------------
	$(TOOL_MOCHA) TESTS/test_arc.js
	@echo ----------------------------------------------------------------
	@echo stage02_tests
	@echo '////////////////////////////////////////////////////////////////'

# ****************************************************************
# ****************************************************************
# ****************************************************************

stage03: stage02 stage03_bundle_arccore stage03_bundle_arctools
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage03 - aggregation target complete
	@echo '////////////////////////////////////////////////////////////////'

stage03_bundle_arccore:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage03_bundle_arccore
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE03_ARCCORE)
	$(TOOL_WEBPACK) --config $(DIR_PROJECT)/webpack.config.arccore.js
	@echo ----------------------------------------------------------------
	@echo stage03_bundle_arccore
	@echo '////////////////////////////////////////////////////////////////'

stage03_bundle_arctools:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage03_bundle_arctools
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE03_ARCTOOLS)
	$(TOOL_WEBPACK) --config $(DIR_PROJECT)/webpack.config.arctools.js
	@echo ----------------------------------------------------------------
	@echo stage03_bundle_arctools
	@echo '////////////////////////////////////////////////////////////////'


# ****************************************************************
# ****************************************************************
# ****************************************************************

stage04: stage03 stage04_minbundle_arccore stage04_minbundle_arctools
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage04 - aggregation target complete
	@echo '////////////////////////////////////////////////////////////////'

stage04_minbundle_arccore:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage04_minbundle_arctools
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE04_ARCCORE)
	$(TOOL_UGLIFY) $(DIR_OUT_BUILD_STAGE03_ARCCORE)/index.js $(TOOL_UGLIFY_FLAGS) --output $(DIR_OUT_BUILD_STAGE04_ARCCORE)/index.js
	@echo ----------------------------------------------------------------
	@echo stage04_minbundle_arctools
	@echo '////////////////////////////////////////////////////////////////'

stage04_minbundle_arctools:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage04_minbundle_arctools
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_BUILD_STAGE04_ARCTOOLS)
	$(TOOL_UGLIFY) $(DIR_OUT_BUILD_STAGE03_ARCTOOLS)/lib.js $(TOOL_UGLIFY_FLAGS) --output $(DIR_OUT_BUILD_STAGE04_ARCTOOLS)/lib.js
	@echo ----------------------------------------------------------------
	@echo stage04_minbundle_arctools
	@echo '////////////////////////////////////////////////////////////////'

# ****************************************************************
# ****************************************************************
# ****************************************************************

stages: bundles stage_arccore stage_arctools
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stages
	@echo '////////////////////////////////////////////////////////////////'

stage_arccore:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage_arccore
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_STAGE_ARCCORE)/babel/
	$(TOOL_BABEL) --version
	$(TOOL_BABEL) $(DIR_OUT_BUILD_ARCCORE)/index.js --minified --compact --no-comments --out-file $(DIR_OUT_STAGE_ARCCORE)/index.js
	$(TOOL_BABEL) $(DIR_OUT_BUILD_ARCCORE)/ --out-dir $(DIR_OUT_STAGE_ARCCORE)/babel
#	cp $(DIR_OUT_BUILD_ARCCORE)/index.js $(DIR_OUT_STAGE_ARCCORE)
	@echo ----------------------------------------------------------------
	@echo stage_arccore
	@echo '////////////////////////////////////////////////////////////////'


stage_arctools:
	@echo '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'
	@echo stage_arctools
	@echo ----------------------------------------------------------------
	mkdir -p $(DIR_OUT_STAGE_ARCTOOLS)
	cp $(DIR_OUT_BUILD_ARCTOOLS)/lib.js $(DIR_OUT_STAGE_ARCTOOLS)
	@echo ----------------------------------------------------------------
	@echo stage_arctools
	@echo '////////////////////////////////////////////////////////////////'
