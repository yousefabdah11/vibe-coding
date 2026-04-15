// storage.js - Data persistence using localStorage

function getArticles() {
  const articles = JSON.parse(localStorage.getItem('articles')) || [];
  return articles;
}

function saveArticles(articles) {
  localStorage.setItem('articles', JSON.stringify(articles));
}

function addArticle(article) {
  const articles = getArticles();
  article.id = Date.now().toString(); // Simple ID generation
  article.createdAt = new Date().toISOString();
  article.reviews = [];
  articles.push(article);
  saveArticles(articles);
  return article.id;
}

function addReview(articleId, review) {
  const articles = getArticles();
  const article = articles.find(a => a.id === articleId);
  if (article) {
    review.id = Date.now().toString();
    review.createdAt = new Date().toISOString();
    article.reviews.push(review);
    saveArticles(articles);
  }
}

function getArticleById(id) {
  const articles = getArticles();
  return articles.find(a => a.id === id);
}