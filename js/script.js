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
  optTitleListSelector = ".titles";

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
