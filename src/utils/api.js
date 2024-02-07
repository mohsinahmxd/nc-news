import ncnewsApi from "../utils/axiosInstance";

export const getArticleViaId = (article_id) => {
  return ncnewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article[0];
  });
};

export const getAllArticles = () => {
  return ncnewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getCommentsForArticle = (article_id) => {
  return ncnewsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
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
