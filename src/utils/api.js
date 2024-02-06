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
