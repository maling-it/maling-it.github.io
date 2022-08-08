ALIAS=maling-it.github.io

help:
	@echo "HomePage: https://github.com/maling-it/${ALIAS}\n"
	@echo "Usage:"
	@echo "    make [subcommand]\n"
	@echo "Subcommands:"
	@echo "    install   Install the theme dependencies"
	@echo "    clean     Clean the workspace"
	@echo "    status    Display status before push"
	@echo "    build     Build the test site"
	@echo "    server    Make a livereload jekyll server to development"


install:
	@gem install jekyll bundler
	@bundle install

clean:
	@bundle exec jekyll clean

status: clean
	@git status

build:
	@bundle exec jekyll build --safe --profile

server:
	@bundle exec jekyll server --safe --livereload
