const formatDate = (article) => {
  const date = new Date(article.created_at);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export default formatDate;
