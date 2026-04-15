

Here’s a **clean, minimal but complete spec (MD)** you can actually build from using plain HTML/CSS + light JS. No fluff.

---

````markdown
# Article Review System — Minimal Spec (HTML/CSS + Vanilla JS)

## 1. Goal

Build a **simple client-side web app** where users can:

- Add articles (via URL or manual input)
- View a list of articles
- Open an article page
- Submit reviews based on criteria
- See aggregated review scores
- Filter articles

⚠️ Constraints:
- No backend
- No authentication
- No database
- Use `localStorage` for persistence
- Frontend: HTML, CSS, Vanilla JS only

---

## 2. Data Model

### Article

```json
{
  "id": "string",
  "title": "string",
  "url": "string (optional)",
  "description": "string",
  "createdAt": "timestamp",
  "reviews": [Review]
}
````

### Review

```json
{
  "id": "string",
  "clarity": number (1-5),
  "accuracy": number (1-5),
  "depth": number (1-5),
  "comment": "string",
  "createdAt": "timestamp"
}
```

---

## 3. Pages / Views

### 3.1 Home Page (Article List)

**Purpose:** Display all articles

#### UI Components:

* Header:

  * App title
  * "Add Article" button

* Filter Bar:

  * Search input (title/description)
  * Sort dropdown:

    * Newest
    * Highest Rated

* Article List:

  * Cards displaying:

    * Title
    * Short description
    * Average rating
    * Number of reviews
    * "View" button

---

### 3.2 Add Article Modal/Page

#### Fields:

* Title (required)
* URL (optional)
* Description (required)

#### Actions:

* Submit → Save to `localStorage`
* Cancel → Close modal

#### Validation:

* Title cannot be empty
* Description cannot be empty

---

### 3.3 Article Page

**Purpose:** Core interaction page

#### Sections:

##### A. Article Info

* Title
* Description
* External link (if exists)

---

##### B. Review Summary

Display:

* Average scores:

  * Clarity
  * Accuracy
  * Depth
* Overall average score
* Total number of reviews

---

##### C. Add Review Form

Fields:

* Clarity (1–5)
* Accuracy (1–5)
* Depth (1–5)
* Comment (optional)

Button:

* Submit Review

Validation:

* All ratings required

---

##### D. Review List

Each review shows:

* Scores (clarity, accuracy, depth)
* Comment
* Date

---

## 4. Core Logic

### 4.1 Storage

Use:

```js
localStorage.setItem("articles", JSON.stringify(data))
```

Load:

```js
const articles = JSON.parse(localStorage.getItem("articles")) || []
```

---

### 4.2 Average Calculation

For each article:

```js
avg = (clarity + accuracy + depth) / 3
```

Global average:

```js
sum(all review scores) / total number of values
```

---

### 4.3 Filtering

* Text match on:

  * title
  * description

* Sorting:

  * By date
  * By average rating

---

## 5. File Structure

```
/project
  index.html        (article list)
  article.html      (single article page)
  styles.css
  app.js
  storage.js
```

---

## 6. UI Guidelines (Keep It Simple)

* Use Flexbox or Grid
* Card-based layout
* Max width: 800px
* Neutral colors (white, gray, black)
* No frameworks

---

## 7. Minimal JS Modules

### storage.js

* getArticles()
* saveArticles()
* addArticle(article)
* addReview(articleId, review)

---

### app.js

Handles:

* Rendering article list
* Filtering & sorting
* Navigation (via query params)

---

## 8. Navigation Strategy

Use query params:

```
article.html?id=123
```

---

## 9. Non-Goals (DO NOT BUILD)

* No authentication
* No backend API
* No real-time updates
* No complex UI frameworks

---

## 10. MVP Checklist

* [ ] Add article
* [ ] Store in localStorage
* [ ] Display article list
* [ ] Filter articles
* [ ] View article page
* [ ] Add review
* [ ] Compute averages
* [ ] Display reviews

---

## 11. Stretch (Optional)

* Delete article
* Delete review
* Star rating UI instead of numbers
* Dark mode
