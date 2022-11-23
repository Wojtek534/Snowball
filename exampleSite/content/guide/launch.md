---
title: "Snowball theme launch"
date: 2022-11-13T15:50:36+01:00
lastmod: 2022-11-15T18:49:42+01:00
draft: true
type: "guide"
tags: ["guide","setup", "code"]
---
## Launch

To launch example site locally, navigate to 'exampleSite' folder, and run hugo command including theme dir as property. You can also expand it with additional commands such as '-D' to include content marked as draft or '--noHTTPCache' to prevent http caching. More commands [here](https://gohugo.io/commands/hugo_server/).

```bash
$ cd exampleSite
$ hugo server --themesDir ../.. -D --noHTTPCache
```