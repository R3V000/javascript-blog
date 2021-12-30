"use strict";

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("Link was clicked!");
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /* [DONE] add class 'active' to the clicked link */
  console.log("clickedElement:", clickedElement);
  clickedElement.classList.add("active");

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const clickedLinkAttr = clickedElement.getAttribute("href");
  console.log(clickedLinkAttr);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(clickedLinkAttr);
  console.log(correctArticle);

  /* [DONE] add class 'active' to the correct article */
  correctArticle.classList.add("active");
};

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optArticleTagsSelector = ".post-tags .list";

const generateTitleLinks = function () {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = "";

  let html = "";
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    /* get the article id */
    const articleID = article.getAttribute("id");
    console.log(articleID);

    /* find the title element */ /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleID +
      '"><span>' +
      articleTitle +
      "</span></a></li>";
    console.log(linkHTML);

    /* insert link into titleList */
    //titleList.innerHTML = titleList.innerHTML + linkHTML;
    //titleList.insertAdjacentHTML("beforeend", '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>');
    html = html + linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll(".titles a");

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
};
generateTitleLinks();

function generateTags() {
  console.log("Logs of generateTags: ");
  /* find all articles */
  const articles = document.querySelectorAll(".posts .post");
  console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    tagsWrapper.innerHTML = "";
    console.log(tagsWrapper);
    /* make html variable with empty string */
    let html = "";
    /* get tags from data-tags attribute */ /* split tags into array */
    const tags = article.getAttribute("data-tags").split(" ");
    console.log(tags);
    /* START LOOP: for each tag */
    for (let tag of tags) {
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#">' + tag + "</a></li> ";
      console.log(linkHTML);
      /* add generated code to html variable */
      html = html + linkHTML;
      /* END LOOP: for each tag */
      console.log(html);
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
}
generateTags();
