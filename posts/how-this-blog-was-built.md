---
layout: layouts/post.njk
title: How this blog was built
date: 2021-08-16T07:00:00.000Z
tags:
  - dev
---
I pretty much just followed an article that also had an accompanying Youtube tutorial to make this blog with 11ty and Netlify in less than an afternoon.

I used [ prism ](https://prismjs.com/) for the syntax highligher. Since styling inline code snippets, I had to add some styling to the `<code>` to make it work.

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css" rel="stylesheet" />
```

This below are the links in the body tag at the very bottom.

```html
 <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"></script>
```