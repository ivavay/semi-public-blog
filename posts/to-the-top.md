---
layout: layouts/post.njk
title: To the top
date: 2021-08-17T07:00:00.000Z
tags:
  - update
---
I was trying to see if I can get the latest posts to show up in the \`postlist.njk\`. I ended up using this reverse thing \`{% set postslist = collections.posts | reverse %}\` in the \`index.njk\`