# Youtube Lazy Loader

A tiny, fast lazy loader specificity for youtube videos. YouTube can add a
significant amount of time to site load times. For example, they use `764KiB` of
bandwidth. For our site, that is equivalent to around 1.8 seconds, which is
significant. The goal of this script is to provide lazy loader that is tiny,
fast and easy to use.

## Installation

In the `head` of your page, you need to include a css configuration style:

```html
<!-- Configuration variables -->
<style>
  :root {
    --yt-width: 640px;
    --yt-height: 360px;
  }
</style>
```

And the stylesheet required by the plugin. I would also recommend adding a preconnect:

```html
<!-- Preconnect to improve performance -->
<link rel="preconnect" href="https://cdn.jsdelivr.net" />

<!-- Stylesheet that should be loaded -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/yt-lazy@1.0.2/dist/yt-lazy.min.css"
/>
```

You should then replace your youtube embeds with the following:

```html
<div class="youtube-video" data-video-id="[video_id]"></div>
```

Where the `video_id` is the string at the end of a YouTube URL. For example,
the video ID for `https://www.youtube.com/watch?v=dQw4w9WgXcQ` is
`dQw4w9WgXcQ`.

Finally, you need to include the script at the bottom of your page:

```html
<script
  src="https://cdn.jsdelivr.net/npm/yt-lazy@1.0.2/dist/yt-lazy.min.js"
  async
></script>
```
