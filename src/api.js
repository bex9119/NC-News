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

const patchArticle = () => {
  return newsApi.patch('/articles/4', { inc_votes: 1 })
    .then(({data}) => {
      return data.article
  })
}

export default getAllArticles
export {patchArticle}