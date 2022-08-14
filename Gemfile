source "https://rubygems.org"

gem "jekyll", "~> 4.2.1"
gem "webrick", "~> 1.7"
gem "rouge", "~> 3.30"
gem "kramdown", "~> 2.4"
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.16"
  gem "jekyll-archives"
  gem "jekyll-paginate-v2"
  gem 'jekyll-seo-tag', '~> 2.8'
  gem "jekyll-toc", "~> 0.17.1"
  # gem "jekyll-i18n", "~> 1.0"
  # gem "jekyll-admin"
end


# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem 'wdm', '>= 0.1.1' if Gem.win_platform?
