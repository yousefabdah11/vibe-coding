// app.js - Main application logic

// Utility functions
function calculateAverage(reviews) {
  if (reviews.length === 0) return { clarity: 0, accuracy: 0, depth: 0, overall: 0 };
  const totals = reviews.reduce((acc, review) => ({
    clarity: acc.clarity + review.clarity,
    accuracy: acc.accuracy + review.accuracy,
    depth: acc.depth + review.depth
  }), { clarity: 0, accuracy: 0, depth: 0 });
  const avg = {
    clarity: totals.clarity / reviews.length,
    accuracy: totals.accuracy / reviews.length,
    depth: totals.depth / reviews.length
  };
  avg.overall = (avg.clarity + avg.accuracy + avg.depth) / 3;
  return avg;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

function renderStars(rating, interactive = false, name = '') {
  let starsHtml = '';

  if (interactive) {
    for (let i = 1; i <= 5; i++) {
      starsHtml += `
        <input type="radio" id="${name}-${i}" name="${name}" value="${i}" class="star-input">
        <label for="${name}-${i}" class="star-label">★</label>
      `;
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? 'star' : 'star empty';
      starsHtml += `<span class="${starClass}">★</span>`;
    }
  }

  return `<div class="stars">${starsHtml}</div>`;
}

function getStarRating(name) {
  const radios = document.querySelectorAll(`input[name="${name}"]:checked`);
  return radios.length > 0 ? parseInt(radios[0].value) : 0;
}

// For index.html - Article List Page
function renderArticleList(articles, filterText = '', sortBy = 'newest') {
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(filterText.toLowerCase()) ||
    article.description.toLowerCase().includes(filterText.toLowerCase())
  );

  filtered.sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === 'highest') {
      const avgA = calculateAverage(a.reviews).overall;
      const avgB = calculateAverage(b.reviews).overall;
      return avgB - avgA;
    }
    return 0;
  });

  const container = document.getElementById('article-list');
  container.innerHTML = '';

  filtered.forEach((article, index) => {
    const avg = calculateAverage(article.reviews);
    const card = document.createElement('div');
    card.className = 'article-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <div class="rating">
        ${renderStars(avg.overall)}
        <span>${avg.overall.toFixed(1)} (${article.reviews.length} reviews)</span>
      </div>
      <button class="view-btn" onclick="viewArticle('${article.id}')">View Article</button>
    `;
    container.appendChild(card);
  });
}

function viewArticle(id) {
  window.location.href = `article.html?id=${id}`;
}

// For article.html - Single Article Page
function renderArticlePage(articleId) {
  const article = getArticleById(articleId);
  if (!article) return;

  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-description').textContent = article.description;
  if (article.url) {
    document.getElementById('article-link').href = article.url;
    document.getElementById('article-link').style.display = 'inline-flex';
  }

  renderReviewSummary(article.reviews);
  renderReviewList(article.reviews);
  renderStarRatingForm();
}

function renderStarRatingForm() {
  const container = document.getElementById('star-rating-container');
  if (!container) return;

  container.innerHTML = `
    <div class="rating-group">
      <label>Clarity</label>
      <div class="stars-input">
        ${renderStars(0, true, 'clarity')}
      </div>
    </div>
    <div class="rating-group">
      <label>Accuracy</label>
      <div class="stars-input">
        ${renderStars(0, true, 'accuracy')}
      </div>
    </div>
    <div class="rating-group">
      <label>Depth</label>
      <div class="stars-input">
        ${renderStars(0, true, 'depth')}
      </div>
    </div>
  `;
}

function renderReviewSummary(reviews) {
  const avg = calculateAverage(reviews);
  const summaryGrid = document.getElementById('summary-grid');
  summaryGrid.innerHTML = `
    <div class="summary-item">
      <div class="label">Clarity</div>
      <div class="value">${avg.clarity.toFixed(1)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Accuracy</div>
      <div class="value">${avg.accuracy.toFixed(1)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Depth</div>
      <div class="value">${avg.depth.toFixed(1)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Overall</div>
      <div class="value">${avg.overall.toFixed(1)}</div>
    </div>
    <div class="summary-item">
      <div class="label">Reviews</div>
      <div class="value">${reviews.length}</div>
    </div>
  `;
}

function renderReviewList(reviews) {
  const container = document.getElementById('review-list');
  container.innerHTML = '';

  if (reviews.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No reviews yet. Be the first to review this article!</p>';
    return;
  }

  reviews.forEach(review => {
    const reviewEl = document.createElement('div');
    reviewEl.className = 'review';
    reviewEl.innerHTML = `
      <div class="rating-display">
        ${renderStars(review.clarity)} <span>Clarity</span>
        ${renderStars(review.accuracy)} <span>Accuracy</span>
        ${renderStars(review.depth)} <span>Depth</span>
      </div>
      ${review.comment ? `<p class="comment">${review.comment}</p>` : ''}
      <div class="date">${formatDate(review.createdAt)}</div>
    `;
    container.appendChild(reviewEl);
  });
}

function submitReview(articleId) {
  const submitBtn = document.querySelector('#review-form .submit-btn');
  const originalText = submitBtn.textContent;

  // Show loading state
  submitBtn.textContent = 'Submitting...';
  submitBtn.disabled = true;

  const clarity = getStarRating('clarity');
  const accuracy = getStarRating('accuracy');
  const depth = getStarRating('depth');
  const comment = document.getElementById('comment').value;

  if (!clarity || !accuracy || !depth) {
    alert('Please provide ratings for all criteria');
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    return;
  }

  const review = { clarity, accuracy, depth, comment };
  addReview(articleId, review);

  // Simulate a brief delay for better UX
  setTimeout(() => {
    // Re-render
    const article = getArticleById(articleId);
    renderReviewSummary(article.reviews);
    renderReviewList(article.reviews);

    // Clear form
    document.getElementById('review-form').reset();
    // Reset star ratings
    document.querySelectorAll('.star-input').forEach(input => input.checked = false);

    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Show success message
    showSuccessMessage('Review submitted successfully!');
  }, 500);
}

function showSuccessMessage(message) {
  const notification = document.createElement('div');
  notification.className = 'notification success';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--success-color);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    z-index: 1001;
    animation: slideInRight 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Modal functions for adding article
function showAddArticleModal() {
  document.getElementById('add-article-modal').style.display = 'flex';
}

function hideAddArticleModal() {
  document.getElementById('add-article-modal').style.display = 'none';
}

function submitArticle() {
  const title = document.getElementById('article-title-input').value;
  const url = document.getElementById('article-url-input').value;
  const description = document.getElementById('article-description-input').value;

  if (!title || !description) {
    alert('Title and description are required');
    return;
  }

  const article = { title, url, description };
  addArticle(article);
  hideAddArticleModal();
  document.getElementById('add-article-form').reset();
  // Re-render list
  const articles = getArticles();
  renderArticleList(articles);
}