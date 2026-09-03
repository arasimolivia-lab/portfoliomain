source "https://rubygems.org"

# This uses the same Jekyll + plugin versions GitHub Pages uses in production,
# so what you see locally matches what deploys. If you'd rather manage Jekyll
# yourself, swap this line for: gem "jekyll", "~> 4.3"
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility shims (harmless to leave in on Mac/Linux)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw]
