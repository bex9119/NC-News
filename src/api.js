import axios from 'axios'

const newsApi = axios.create({
  baseURL: "https://news-13r8.onrender.com/api"
});

const getAllArticles = () => {
    return newsApi.get('/articles')
        .then(({data}) => {
        return data.articles
    })
}

const getArticleComments = () => {
  return newsApi.get('/articles/1/comments')
    .then(({data}) => {
    return data.comments
  })
}

export default getAllArticles
export {getArticleComments}