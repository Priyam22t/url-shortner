# 🔗 TRIMRR – URL Shortener

TRIMRR is a modern full-stack URL shortener application built with React, Vite, Tailwind CSS, and shadcn/ui. It allows users to create, manage, and track shortened links with authentication and a clean dashboard interface. The project is designed with scalability and real-world architecture in mind.

---

## ✨ Features

- 🔐 User authentication (Signup & Login)
- ✂️ Create short URLs from long links
- 🔗 Optional custom aliases for links
- 📊 Dashboard showing:
  - Total links created
  - Total clicks
- 📈 Click tracking for each link
- 📱 QR code generation for links
- 🔍 Filter and search links
- 🎨 Modern UI using shadcn/ui + Tailwind CSS
- ⚡ Fast development powered by Vite

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- Yup (Form validation)
- React Spinners
- QR Code generation

### Backend / Services
- Supabase (Authentication & Database)
- PostgreSQL (via Supabase)

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Route pages (dashboard, auth, landing)
├── db/                # Supabase API calls
├── hooks/             # Custom hooks (useFetch)
├── layouts/           # App layout wrapper
├── context.jsx        # Global auth & app state
├── lib/               # Utility/helper functions
├── assets/            # Images & static assets
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/trimrr.git
cd trimrr
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root directory and add:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4️⃣ Run the Application
```bash
npm run dev
```

The app will run at:
```
http://localhost:5173
```

---

## 🔐 Authentication Flow

- Users can sign up and log in securely
- Authentication state is managed globally using React Context
- Protected routes ensure only authenticated users can access the dashboard

---

## 🔗 Link Creation Flow

1. User clicks Create New Link
2. Enters title, long URL, and optional custom alias
3. QR code is generated automatically
4. Link data is stored in the database
5. Dashboard updates with the newly created link

---

## 📊 Dashboard

- Displays total links created
- Displays total clicks across all links
- Lists all user-created links
- Supports filtering links by title
- Each link has its own detailed view

---

## ⚠️ Current Status

This project is under active development. Some Supabase policies and advanced features may still be in progress or temporarily disabled during testing.

---

## 📌 Future Improvements

- Analytics charts & insights
- Public redirect pages
- Link expiration support
- Improved error handling
- Toast notifications (Sonner)
- Role-based access control
- Better mobile responsiveness

---

## 🤝 Contributing

Contributions are welcome.  
Feel free to fork this repository, create a new branch, and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- shadcn/ui
- Supabase
- Tailwind CSS
- React Community

---

Built with ❤️ for learning and exploring full-stack web development.
