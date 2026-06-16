# 🎬 Filmy Duniya

Filmy Duniya is a full-stack movie and TV show discovery platform built using the **MERN Stack** and **React Native**. The application allows users to explore detailed information about movies and series, search for their favorite content, and discover trending titles based on real user search behavior.

## 🚀 Features

### 🎥 Movie & TV Show Information

* Browse movies and TV series.
* View detailed information including:

  * Ratings
  * Budget
  * Cast & Stars
  * Directors
  * Release Date
  * Overview & Plot Summary

### 🔍 Smart Search

* Search for any movie or TV series instantly.
* Fast and responsive search experience.

### 📈 Custom Trending Algorithm

* Developed a custom trending system that analyzes user search activity.
* Frequently searched movies and shows are automatically ranked higher in the trending section.
* Trending content updates dynamically based on user behavior.

### 📱 Cross-Platform Support

* **Web Application:** Built with React.js.
* **Mobile Application:** Built with React Native for Android and iOS.

## 🛠️ Tech Stack

### Frontend (Web)

* React.js
* JavaScript
* CSS / Tailwind CSS

### Mobile Application

* React Native

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### APIs

* Movie Database APIs (TMDB or similar)

## 📂 Project Structure

```bash
filmy-duniya/
│
├── client/          # React Web Application
├── mobile/          # React Native Application
├── server/          # Node.js & Express Backend
├── database/        # MongoDB Models & Schemas
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Abdul-Majeed20/Filmy-Duniya.git
cd filmy-duniya
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

#### Mobile App

```bash
cd mobile
npm install
```

## 🔑 Environment Variables

Create a `.env` file in the backend directory and add:

```env
MONGO_URI=your_mongodb_connection_string
MOVIE_API_KEY=your_movie_api_key
PORT=5000
```

## ▶️ Running the Application

### Start Backend

```bash
npm run server
```

### Start Frontend

```bash
npm start
```

### Start React Native App

```bash
npx react-native run-android
```

or

```bash
npx react-native run-ios
```

## 🧠 Trending Algorithm

The platform includes a custom-built trending engine that:

1. Tracks user search queries.
2. Stores search frequency data.
3. Calculates popularity scores.
4. Displays the most searched movies and TV shows in the Trending section.

This provides users with real-time insights into what content is currently attracting the most attention.

## 🎯 Future Improvements

* User Authentication
* Watchlist Feature
* Personalized Recommendations
* Movie Reviews & Ratings
* Advanced Filtering
* AI-Powered Suggestions

## 👨‍💻 Author

**Abdul Majeed**

Full Stack Developer | MERN & Next.js  | React native
---

⭐ If you like this project, consider giving it a star on GitHub!
