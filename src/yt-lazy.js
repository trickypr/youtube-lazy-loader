/**
 * Gets the value of a global css variable
 *
 * @param {string} name The name of the CSS variable that you want to get
 * @returns {string} The value of the css variable
 */
function getCSSVariable(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--${name}`
  );
}

const observer = new IntersectionObserver((entries) => {
  const attributes = {
    style: "background: #000",
    frameborder: 0,
    allowfullscreen: 1,
    width: getCSSVariable("yt-width"),
    height: getCSSVariable("yt-height"),
  };

  for (const { target, isIntersecting } of entries) {
    if (!isIntersecting) continue;

    const iframe = document.createElement("iframe");
    // We need to work around google's closure compiler
    iframe.src = `https://www.youtube.com/embed/${target.dataset["videoId"]}`;

    for (const attribute in attributes) {
      iframe.setAttribute(attribute, attributes[attribute]);
    }

    target.replaceWith(iframe);
  }
});

document
  .querySelectorAll(".youtube-video")
  .forEach((placeholder) => observer.observe(placeholder));
