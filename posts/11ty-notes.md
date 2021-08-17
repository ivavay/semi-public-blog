---
layout: layouts/post.njk
title: 11ty notes
date: 2021-08-17T07:00:00.000Z
tags:
  - dev
---
I used this in the \`index.njk\` to get the most recent posts on the top.

\`{% set postslist = collections.posts | reverse %}\`

It keeps on saying tag set not found. Sometiems, it works though.