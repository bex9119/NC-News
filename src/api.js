import axios from 'axios'

const newsApi = axios.create({
  baseURL: "https://news-13r8.onrender.com/api"
});

const getAllArticles = (order, sortBy) => {
    return newsApi.get('/articles', {params: {order:order, sort_by: sortBy}})
        .then(({data}) => {
        return data.articles
    })
}

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

export default getAllArticles
export {getIndividualArticle, getArticleComments, patchArticle, postComment}