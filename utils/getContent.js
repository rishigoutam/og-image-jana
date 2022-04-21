import { getAbsoluteURL } from "./getAbsoluteUrl";

export const getCss = (fontFamily, fontFamilyUrl, fontSize, background) => {
  return `
    /* Import ET Book styles
    adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */

    @font-face {
    font-family: "et-book";
    src: url("./et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot");
    src: url("./et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix")
        format("embedded-opentype"),
      url("./et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff")
        format("woff"),
      url("./et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf")
        format("truetype"),
      url("./et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf")
        format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    @font-face {
    font-family: "et-book";
    src: url("./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot");
    src: url("./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix")
        format("embedded-opentype"),
      url("./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff")
        format("woff"),
      url("./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf")
        format("truetype"),
      url("./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf")
        format("svg");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    }

    @font-face {
    font-family: "et-book";
    src: url("./et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot");
    src: url("./et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix")
        format("embedded-opentype"),
      url("./et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff")
        format("woff"),
      url("./et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf")
        format("truetype"),
      url("./et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf")
        format("svg");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    }

    @font-face {
    font-family: "et-book-roman-old-style";
    src: url("./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot");
    src: url("./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix")
        format("embedded-opentype"),
      url("./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff")
        format("woff"),
      url("./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf")
        format("truetype"),
      url("./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf")
        format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia;
    color: #111;
    }

    .container {
    background: url(${background ?? getAbsoluteURL(`/ogbackground.svg`)});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 1200px;
    height: 630px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3.5rem;
    }

    .content {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 2.5rem;
    }

    .content > h1 {
    max-width: 80%;
    font-size: ${fontSize ?? "2em"};
    }

    .logo {
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
    align-items: center;
    font-weight: bold;
    width: 100%;
    }

    .tags {
    font-size: 0.4em;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    padding: 2rem 0;
    opacity: 0.7;
    }

    .pill{
      background: #caa8ff33;
      color: white;
      padding: 0.25rem 1rem;
      border-radius: 50rem;
      text-transform: capitalize;
      box-shadow: 0 0 1rem rgba(0,0,0,0.1);
      font-weight: bold;
    }
    `;
};

export const getContent = (tags, title, handle, logo, css) => {
  return `
    <html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
       ${css}
    </style>
    <body>
        <div class='container'>

        <div class="content">
            <h1>${title ?? "Welcome to this site"}</h1>
            <div class="tags">
            ${
              tags
                ? tags
                    .split(",")
                    .map((tag) => {
                      return `<span key=${tag} class="pill">${tag}</span>`;
                    })
                    .join("")
                : ""
            }
            </div>
        </div>
        <div class="logo">
            <img src="${
              logo ?? getAbsoluteURL(`/memoji.png`)
            }" alt="logo" width="100px" height="100px" >
            <div class="handle">${handle ?? "@rishigoutam"}</div>
        </div>
        </div>
    </body>
    </html>`;
};
