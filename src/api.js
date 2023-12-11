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

export default getAllArticles