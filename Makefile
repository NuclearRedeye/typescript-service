# Make related globals.
QUIET ?= @
RM    := rm

# NPM related globals.
NPM_BIN   := npm
NPM_OPTS  := 

# Target related globals.
TARGET 		   := experiment.typescript-service
TARGET_SOURCES := $(shell find ./src -name *.ts ! -name *.test.ts)
TARGET_DEPS    := node_modules \
                  Makefile \
                  tslint.json \
                  tsconfig.json \
				  package.json \
				  jestconfig.json \
				  .prettierrc \
				  ${TARGET_SOURCES}

# Phony Target declarations, e.g. targets that don't produce any output.
.PHONY: lint \
		docs \
        test \
        clean \
        distclean \
		publish \
		${TARGET}

# The default target to run when no target is specified.
.DEFAULT_GOAL := ${TARGET}

# The target to run when no target is specified.
${TARGET}: ${TARGET_DEPS}
	${QUIET}${NPM_BIN} run build

# Install build/run-time dependancies.
node_modules:
	${QUIET}${NPM_BIN} install

# Run the linter and static analysis tools against all source files.
lint:
	${QUIET}${NPM_BIN} run lint

# Generate package documentation.
docs:
	${QUIET}${NPM_BIN} run docs

# Run package tests.
test:
	${QUIET}${NPM_BIN} run test

# Clean intermediate output.
clean:
	${QUIET}${RM} -rf ./dist

# Completely clean the package.
distclean:
	${QUIET}${MAKE} -s clean
	${QUIET}${RM} -rf ./node_modules

# If running under CI, Publishes the package to NPM. Otherwise, link on the local filesystem.
publish:
ifeq (${CI}${TRAVIS},"truetrue")
	${QUIET}docker login --username=${DOCKER_HUB_USERNAME} --password=${DOCKER_HUB_PASSWORD}
    ${QUIET}docker build -t joelsummerfield/experiment.typescript-service .
    ${QUIET}docker tag joelsummerfield/experiment.typescript-service joelsummerfield/experiment.typescript-service:${TRAVIS_TAG#?}
    ${QUIET}docker push joelsummerfield/experiment.typescript-service
else
	${QUIET}echo Publish is only intended to run on the CI system.
endif