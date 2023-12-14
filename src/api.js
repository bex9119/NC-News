import axios from 'axios'

const newsApi = axios.create({
  baseURL: "https://news-13r8.onrender.com/api"
});

const getAllArticles = (selectTopic) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: selectTopic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

const getIndividualArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
    return data.comments
  })
}

const patchArticle = (article_id, patchObject) => {
  return newsApi.patch(`/articles/${article_id}`, patchObject)
    .then(({data}) => {
      return data.article
  })
}

const postComment = (article_id, commentToPost) => {
  return newsApi.post(`/articles/${article_id}/comments`, commentToPost)
    .then(({data}) => {
      return data.postedComment
    });
};

const getAllTopics = () => {
  return newsApi.get('/topics').then(({data}) => {
    return data.topics
  })
}

const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
}

export default getAllArticles
export {getIndividualArticle, getArticleComments, patchArticle, postComment, getAllTopics, deleteComment}