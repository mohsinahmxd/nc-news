import ncnewsApi from "../utils/axiosInstance";

export const getArticleViaId = (article_id) => {
  return ncnewsApi
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article[0];
    })
    .catch((err) => {
      console.log("there's an err", err);
    });
};

export const getAllArticles = () => {
  return ncnewsApi
    .get("/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log("there's an err", err);
    });
};

export const getCommentsForArticle = (article_id) => {
  return ncnewsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => {
      console.log("there's an err", err);
    });
};

export const voteOnArticle = (choice, article_id) => {
  let data = {};

  if (choice === "upvote") {
    data.inc_votes = 1;
  } else {
    data.inc_votes = -1;
  }

  return ncnewsApi.patch(`/articles/${article_id}`, data).then((response) => {
    // console.log(response);
  });
};
