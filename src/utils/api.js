import ncnewsApi from "../utils/axiosInstance";

export const getArticleViaId = (article_id) => {
  return ncnewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article[0];
  });
};

export const getAllArticles = (topic, sortByQuery, orderByQuery) => {
  return ncnewsApi
    .get(`/articles`, {
      params: {
        topic: topic,
        sort_by: sortByQuery,
        order: orderByQuery,
      },
    })
    .then((data) => {
      return data.data.articles;
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

export const postNewComment = (comment, article_id) => {
  // console.log(article_id);
  // console.log(comment);
  let data = {
    username: "grumpy19",
    body: comment,
  };

  return ncnewsApi
    .post(`/articles/${article_id}/comments`, data)
    .then((data) => {
      // console.log(data.data.comment[0]);
      return data.data.comment[0];
    })
    .catch((err) => {
      // console.log(err);
    });
};

export const deleteCommentApi = (comment_id) => {
  return ncnewsApi.delete(`/comments/${comment_id}`);
};

export const getAllTopics = () => {
  return ncnewsApi.get("/topics").then((data) => {
    return data.data.topics;
  });
};
