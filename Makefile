# vue-project-scaffold Makefile
# author: Eli Kotyluk <elijah@elijahkotyluk.com>
# copyright: Elijah Kotyluk 2018


SHELL := /bin/bash

# vars
THIS_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PKG_DIR := $(THIS_DIR)/node_modules

YARN := $(shell command -v yarn 2> /dev/null)
WEBPACK := $(PKG_DIR)/.bin/webpack

TARGETS := $(THIS_DIR)/dist/main.bundle.*	&&	$(THIS_DIR)/dist/server.bundle.*

.PHONY: all build clean distclean watch

all: clean build

build: $(PKG_DIR)
	@echo "Building bundled assets..."
	@$(WEBPACK)

clean:
	@echo "Cleaning bundled assets..."
	-@rm -rf $(TARGETS) 2> /dev/null

distclean:
	@echo "Cleaning downloaded packages..."
	-@rm -rf $(PKG_DIR) 2> /dev/null

watch: $(PKG_DIR)
	@echo "Building bundled assets and watching for changes..."
	@$(WEBPACK) --watch

$(PKG_DIR):
	@echo "Installing build dependencies..."
ifndef YARN
	@echo "You don't have Yarn installed. To install, type 'npm install -g yarn'."
	@exit 1
endif
	@yarn
