---
title: "Code"
date: 2022-11-15T18:49:45+01:00
lastmod: 2022-11-15T18:49:42+01:00
draft: false
type: "content"
tags: ["content", "sample", "code"]
---
# Code content

## Sample from [github documentation](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository){:target="_blank"}
1. Stage the file for commit to your local repository
```bash
$ git add .
# Adds the file to your local repository and stages it for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
```

2. Commit the file that you've staged in your local repository
```bash
$ git commit -m "Add existing file"
# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
```
3. Push the changes in your local repository to GitHub.com
```bash
$ git push origin YOUR_BRANCH
# Pushes the changes in your local repository up to the remote repository you specified as the origin
```
