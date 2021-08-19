---
layout: layouts/post.njk
title: How this blog was built
date: 2021-08-17T07:00:00.000Z
tags:
  - dev
---
I pretty much just followed an [article ](https://dev.to/koabrook/creating-a-basic-blog-with-eleventy-and-netlify-cms-completely-from-scratch-197e)that also had an accompanying Youtube tutorial to set up this blog with 11ty and Netlify in less than an afternooon.

I used [ prism ](https://prismjs.com/) for the syntax highligher. For styling inline code snippets (since it doesn't come with prism), I had to add some styling to the `<code>` to make it work.

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css" rel="stylesheet" />
```

This below are the script tags at the very bottom.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"></script>
```

The posts don't show up from the most recent by default. So I added this `reverse %` to both the `index.njk` and `tags.njk` like this ```{% set postslist = collections.posts | reverse %}``` so the posts would show up from most recent to oldest. 

Figuring out how the tag system works took the most time. But I'm glad I got it to work the way I want to, thanks so stackoverflow answers! I also added post counts to the tags by following the code in this [article](https://www.markllobrera.com/posts/eleventy-tag-list-sorting-and-post-count/). 

I don't think there's anything else I want to add to this blog. I could add an estimated reading time feature but I don't want others or myself to get turned off from reading just because something it's over 3 minutes long. 

I'm sure I'd want to change the styling of this blog pretty soon in a few months or so. So I'm glad I didn't build this with a starter template and instead coded the CSS myself so I could have the flexibility of changing it up in the future.