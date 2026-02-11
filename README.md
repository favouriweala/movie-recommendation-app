# 🎬 Cinemiq – Movie Recommendation App

## 📌 Project Overview

**Cinemiq** is a dynamic web application built with **Next.js and TypeScript** that allows users to browse trending movies and save their favorite selections.  

This project demonstrates real-world frontend development skills, including API integration, dynamic routing, local data storage, reusable component design, and responsive UI implementation.  

**Why the name “Cinemiq”?**  
- Unique and original  
- Short, catchy, and memorable  
- Suggests movies and modern technology  
- Ideal for future branding or professional use  

The application fetches live movie data from **The Movie Database (TMDB) API** and provides an interactive and seamless browsing experience.

---

## 🎯 Project Objectives

- Build **Cinemiq**, a movie recommendation platform  
- Integrate TMDB API to fetch trending and recommended movies  
- Implement dynamic routing using Next.js  
- Enable user personalization via local storage for favorites  
- Build reusable, scalable components  
- Create a responsive and interactive UI  
- Follow proper Git workflow and version control practices

---

## 🛠️ Technologies Used

- **Next.js** – Server-side rendering and routing  
- **TypeScript** – Type safety and scalable development  
- **Styled Components** – Component-based styling  
- **TMDB API** – Fetching live movie data  
- **Local Storage** – Saving favorite movies  
- **Vercel / Netlify** – Deployment  

---

## ✨ Key Features

1. **API Integration**  
   - Fetches trending movies dynamically from TMDB  
   - Handles loading and error states  
   - Displays real-time movie data  

2. **Dynamic Routing**  
   - Movie detail pages using Next.js dynamic routing  
   - Each movie has its own dedicated page  

3. **Save Favorite Movies**  
   - Users can save movies to favorites  
   - Favorites stored locally in the browser  
   - Dedicated favorites page for easy management  

4. **Responsive & Interactive UI**  
   - Responsive grid layout for movie cards  
   - Smooth hover effects and animations  
   - Mobile-friendly design  

---

## 📂 Project Structure

cinemiq/
│
├── components/
│ ├── CinemiqMovieCard.tsx
│ └── CinemiqLayout.tsx
│
├── lib/
│ └── cinemiqApi.ts
│
├── pages/
│ ├── index.tsx
│ ├── movie/
│ │ └── [id].tsx
│ └── favorites.tsx
│
├── styles/
├── .env.local
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repo

*bash

git clone https://github.com/favouriweala/cinemiq.git
cd cinemiq

Install Dependencies
npm install

3️⃣ Environment Variables

Create .env.local:

NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

4️⃣ Run Development Server
npm run dev


Open: http://localhost:3000

🔄 Git Commit Workflow

feat: for new features

fix: for bug fixes

style: for UI changes

docs: for documentation

Example:

feat: create Cinemiq API helper
feat: add CinemiqMovieCard component
feat: implement dynamic movie detail page
style: responsive design for movie dashboard
docs: add README instructions

📈 Future Improvements

Add search and filter functionality

Integrate user authentication

Save favorites to backend database

Add dark mode

Movie recommendations using user preferences

👩🏽‍💻 Author

Nkeiruka Iweala – Software Engineer 

solving real-world problems with code.
