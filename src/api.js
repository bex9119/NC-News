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

const getAllTopics = () => {
  return newsApi.get('/topics').then(({data}) => {
    return data.topics
  })
}

export default getAllArticles
export {getIndividualArticle, getAllTopics}