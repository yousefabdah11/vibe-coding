# 📚 Article Review System

A beautiful, modern web application for reviewing and rating articles. Built with vanilla HTML, CSS, and JavaScript, featuring a sleek star-rating system and smooth animations.

![Article Review System](https://via.placeholder.com/800x400/6366f1/ffffff?text=Article+Review+System)

## ✨ Features

### 🎯 Core Functionality
- **Add Articles**: Submit articles with title, description, and optional URL
- **Browse Articles**: View all articles in a clean, card-based layout
- **Search & Filter**: Find articles by title or description
- **Sort Options**: Sort by newest or highest rated
- **Detailed Reviews**: Comprehensive review system with multiple criteria

### ⭐ Advanced Rating System
- **Star Ratings**: Interactive 5-star rating system for:
  - Clarity
  - Accuracy
  - Depth
- **Aggregated Scores**: Automatic calculation of average ratings
- **Review Comments**: Optional text comments for detailed feedback

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Delightful transitions and micro-interactions
- **Dark/Light Theme Ready**: Modern design system with CSS custom properties
- **Professional Styling**: Clean, card-based layout with subtle shadows

### 💾 Data Persistence
- **Local Storage**: All data persists in browser storage
- **No Backend Required**: Runs entirely client-side
- **Data Export Ready**: Easy to extend for backend integration

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for running the local server)

### Installation

1. **Clone or Download** the project files to your local machine

2. **Navigate to the project directory**
   ```bash
   cd path/to/article-review-system
   ```

3. **Start the local server**
   ```bash
   # Using Python (recommended)
   python -m http.server 8000

   # Or using Python 3 specifically
   python3 -m http.server 8000
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:8000
   ```

That's it! The application will load immediately.

## 📖 Usage Guide

### Adding Articles
1. Click the **"Add Article"** button in the header
2. Fill in the required fields:
   - **Title**: Article headline (required)
   - **Description**: Brief summary (required)
   - **URL**: Link to original article (optional)
3. Click **"Add Article"** to save

### Browsing Articles
- **Search**: Use the search bar to find articles by title or description
- **Sort**: Choose between "Newest First" or "Highest Rated"
- **View Details**: Click "View Article" on any card to see full details

### Reviewing Articles
1. Navigate to an article's detail page
2. Scroll to the **"Add Your Review"** section
3. **Rate each criterion** by clicking the stars:
   - ⭐ Clarity: How clear is the article?
   - ⭐ Accuracy: How accurate is the information?
   - ⭐ Depth: How in-depth is the coverage?
4. **Add a comment** (optional) to provide detailed feedback
5. Click **"Submit Review"** to save

### Viewing Reviews
- **Review Summary**: See aggregated ratings at the top of each article
- **Individual Reviews**: Browse all submitted reviews below
- **Rating Breakdown**: View detailed scores for each criterion

## 🏗️ Project Structure

```
article-review-system/
├── index.html          # Main article listing page
├── article.html        # Individual article detail page
├── styles.css          # Modern CSS styling with animations
├── app.js             # Main application logic
├── storage.js         # Data persistence functions
├── spec.md            # Project specification
└── README.md          # This file
```

### File Descriptions

- **`index.html`**: Homepage displaying all articles with search/filter functionality
- **`article.html`**: Article detail page with reviews and rating form
- **`styles.css`**: Comprehensive styling with modern design system
- **`app.js`**: Core application logic, rendering, and user interactions
- **`storage.js`**: localStorage management for data persistence
- **`spec.md`**: Original project requirements and specifications

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with:
  - CSS Custom Properties (variables)
  - Flexbox & Grid layouts
  - CSS Animations & Transitions
  - Responsive design with media queries
- **Vanilla JavaScript**: No frameworks, pure JS with:
  - ES6+ features
  - DOM manipulation
  - Event handling
  - localStorage API

### Development Tools
- **Python HTTP Server**: For local development
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Text Editor**: VS Code or any modern editor

## 🎨 Design System

### Colors
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#f8fafc` (Light Gray)
- **Text**: `#1e293b` (Dark Slate)
- **Accent**: `#fbbf24` (Amber for stars)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Sizes**: Responsive scaling

### Components
- **Cards**: White backgrounds with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Modals**: Centered overlays with backdrop blur

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
  --primary-color: #6366f1;    /* Change primary color */
  --text-color: #1e293b;       /* Change text color */
  --border-radius: 12px;      /* Adjust border radius */
}
```

### Adding Features
The codebase is modular and extensible:

- **New Rating Criteria**: Add to the data model in `storage.js`
- **Additional Filters**: Extend the filtering logic in `app.js`
- **Backend Integration**: Replace localStorage calls with API calls

### Dark Mode
The design system supports dark mode. To implement:

1. Add a theme toggle button
2. Create dark mode CSS variables
3. Toggle classes on the body element

## 📊 Data Model

### Article Object
```javascript
{
  id: "string",           // Unique identifier
  title: "string",        // Article title
  url: "string",          // Optional external link
  description: "string",  // Article summary
  createdAt: "timestamp", // Creation date
  reviews: [Review]       // Array of reviews
}
```

### Review Object
```javascript
{
  id: "string",           // Unique identifier
  clarity: number,        // 1-5 rating
  accuracy: number,       // 1-5 rating
  depth: number,          // 1-5 rating
  comment: "string",      // Optional text
  createdAt: "timestamp"  // Review date
}
```

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:

- **GitHub Pages**: Free hosting for public repos
- **Netlify**: Automatic deployments with custom domains
- **Vercel**: Fast deployments with global CDN
- **Firebase Hosting**: Google's hosting solution

### Backend Integration
For production use with multiple users:

1. **Database**: Replace localStorage with a database (MongoDB, PostgreSQL)
2. **API**: Create REST endpoints for CRUD operations
3. **Authentication**: Add user accounts and login system
4. **Real-time**: Implement live updates with WebSockets

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature-name`
3. **Make** your changes and test thoroughly
4. **Commit** your changes: `git commit -m 'Add new feature'`
5. **Push** to the branch: `git push origin feature-name`
6. **Submit** a Pull Request

### Development Guidelines
- Follow the existing code style
- Test on multiple browsers
- Ensure responsive design
- Add comments for complex logic
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Inter Font**: Used under the SIL Open Font License
- **Design Inspiration**: Modern web design principles
- **Open Source Community**: For the tools and inspiration

## 📞 Support

If you have questions or need help:

- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Start a discussion for general questions
- **Email**: Contact the maintainers directly

---

**Built with ❤️ using vanilla web technologies**

*Last updated: April 15, 2026*</content>
<parameter name="filePath">d:\ITMO\Courses\2nd Semester\WAD\Yussef-Vibe-coding\README.md