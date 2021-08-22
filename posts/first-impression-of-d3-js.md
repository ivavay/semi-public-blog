---
layout: layouts/post.njk
title: First impression of D3.js
date: 2021-08-21T07:00:00.000Z
tags:
  - dev
---
I think I just spent 4 hours trying to go through the first introductory lesson of building a line graph in this book. I think I spent half of that time figuring out what kind of data I’d want to plot from the number of apis that openweathermap offers (some free, some not). After exploring a bit, I finally settled on the [air pollution api](https://openweathermap.org/api/air-pollution) which can give you the air pollution forecast for 5 days with hourly granularity. But when I got the json file, I saw that it actually gave me the hourly data from 8/15 to 8/25 instead, which means that it’s giving me the data from the past 5 days, the present of course, and the future five days. The time units are all in unix times (which I had never even come across before this) so I’ve been trying to figure out how to convert that into date objects for the last two hours. Then, I called it a day by posting my question on stackoverflow. 

I hope this is not overkill for trying to just visualize something as simple as a line graph. I’m sure there are other tools (like Tableau?) that can make this job much easier. 

I’ll be revisiting my motivation for venturing into the world of D3 in my sleep tonight.