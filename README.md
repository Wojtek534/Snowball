# Snowball hugo theme

## Preperation

Before installation make sure that Hugo is installed on your device and that's your familiar with hugo framework. More informations you can find in official [Hugo](https://gohugo.io/) documentation.

## a. New project creation

Create new hugo project using Hugo CLI:
```bash
$ hugo new site my_new_site
```
## b. Theme install

Clone [repository](https://github.com/Wojtek534/Snowball.git) into theme folder 
or
add as submodule
```bash
$ git submodule add https://github.com/Wojtek534/Snowball.git themes/snowball

```
## c. Configuration

Copy or replace manually config from example site to your project
```bash
cp themes/snowball/exampleSite/config.toml config.toml
```

setup your own archetypes or copy from example
```bash
cp themes/snowball/archetypes/default.md archetypes/default.md
```

## d. Content
Create your first hugo content file

```bash
hugo new _index.md
```

## e. Start


## Launch example

To launch example site locally, navigate to 'exampleSite' folder, and run hugo command including theme dir as property. You can also expand it with additional commands such as '-D' to include content marked as draft or '--noHTTPCache' to prevent http caching. More commands [here](https://gohugo.io/commands/hugo_server/).

```bash
$ cd exampleSite
$ hugo server --themesDir ../.. -D --noHTTPCache
```