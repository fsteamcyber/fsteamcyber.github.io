---
layout: project
type: project
image: ../images/projects/jekyll-embed-video/embed-square.jpg
title: Jekyll Embed Video
permalink: projects/jekyll-embed-video
date: 2017

youtubeId: lDi9uFcD7XI
vimeoId: 22439234
twitchId: SpinelessGeniusWaterKappaClaus

labels:
  - Jekyll
  - Plugin
  - HTML
  - CSS
summary: Embed YouTube, Vimeo, and Twitch videos in Jekyll webpages without a plugin 
---
### Project Overview
Embed videos in Jekyll webpages without a plugin. If you are hosting your webpage using Github pages, you can't use third party plugins. Here is a method to use 'includes' instead of plugins.

Source: <a href="https://github.com/nathancy/jekyll-embed-video" target="_blank"><i class="large github icon"></i>https://github.com/nathancy/jekyll-embed-video</a>

## Demos
### YouTube

{% include youtubePlayer.html id=page.youtubeId %}

### Vimeo

{% include vimeoPlayer.html id=page.vimeoId %}

### Twitch

{% include twitchPlayer.html id=page.twitchId %}
