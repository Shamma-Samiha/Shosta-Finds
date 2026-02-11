# Shosta Finds 🛍️

A modern e-commerce platform featuring curated finds including trendy apparel, elegant decor, and green companions. Built with React + TypeScript frontend and Django backend.

## 🚀 Features

- **Shopping Categories**: Browse products in Men, Women, Kids, Plants, and Home Decor sections
- **User Authentication**: Login and Registration system
- **Modern UI**: Dark-themed, responsive design built with Tailwind CSS
- **Fast Development**: Vite-powered React frontend with hot module replacement
- **RESTful Backend**: Django REST API for catalog, orders, users, and support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) and **npm**
- **Python** (v3.8 or higher) and **pip**
- **Git**

## 🛠️ Installation

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - **Windows**:
   ```bash
   venv\Scripts\activate
   ```
   - **macOS/Linux**:
   ```bash
   source venv/bin/activate
   ```

4. Install dependencies:
```bash
pip install django
```

5. Run database migrations:
```bash
python manage.py migrate
```

6. (Optional) Create a superuser for admin access:
```bash
python manage.py createsuperuser
```

## 🏃 Running the Application

### Frontend Development Server

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173/`

### Backend Development Server

1. Navigate to the backend directory:
```bash
cd backend
```

2. Start the Django development server:
```bash
python manage.py runserver
```


## 📁 Project Structure

```
Shosta_Finds/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable components (Navbar, Footer)
│   │   ├── pages/          # Page components (Home, Landing, Men, Women, etc.)
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Application entry point
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
│
└── backend/                 # Django backend
    ├── catalog/            # Product catalog app
    ├── orders/             # Order management app
    ├── users/              # User management app
    ├── support/            # Customer support app
    ├── core/               # Django project settings
    └── manage.py           # Django management script
```

## 🎨 Available Routes

- `/` - Landing page
- `/home` - Home page
- `/men` - Men's products
- `/women` - Women's products
- `/kids` - Kids' products
- `/plants` - Plants section
- `/home-decor` - Home decor products
- `/contact` - Contact page
- `/login` - User login
- `/register` - User registration

## 🛠️ Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend

- `python manage.py runserver` - Start Django development server
- `python manage.py migrate` - Apply database migrations
- `python manage.py makemigrations` - Create new migrations
- `python manage.py createsuperuser` - Create admin user

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Django 5.2** - Python web framework
- **SQLite** - Database (development)

## 📝 Development Notes

- The frontend uses Vite for fast development with HMR (Hot Module Replacement)
- The backend uses Django's built-in development server
- Both servers can run simultaneously on different ports
- Make sure to configure CORS settings in Django if connecting frontend to backend API


## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Shamma Samiha 
---

**Happy Shopping! 🛍️**
