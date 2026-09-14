# Interactive Multi-Page Portfolio Website with Backend Integration

A responsive personal portfolio website built using **React.js and Vite** with a **Node.js/Express backend**. This is the extended version of Assignment 2, now integrated with a full-stack architecture.

## 🎯 Overview

This project demonstrates full-stack development principles:
- **Frontend**: React with Vite, client-side routing, state management
- **Backend**: Express.js API server with CORS enabled
- **Data Persistence**: File-based JSON storage for projects and contact submissions
- **Integration**: Fetch/useEffect-based API communication

## ✨ Features

### Frontend Features
- Reusable React components with props
- Dark/Light theme toggle (persisted via `localStorage`)
- Dynamic routing with React Router
- Form validation (client and server-side)
- Loading and error states
- Responsive design for mobile, tablet, and desktop

### Backend Features
- REST API endpoints for projects and contact submissions
- Server-side validation and error handling
- CORS enabled for frontend communication
- Environment-based configuration
- Centralized error handling and 404 responses
- File-based JSON data storage

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- React Router DOM
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- CORS
- dotenv (for environment configuration)

## 📁 Project Structure

```
FSD-portfolio/
│
├── src/                              # Frontend source code
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm-updated.jsx   # ✨ Updated for backend
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects-updated.jsx      # ✨ Updated for backend
│   │   ├── ProjectDetail-updated.jsx # ✨ Updated for backend
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── projects.js               # (Old - no longer used by frontend)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── server/                           # Backend source code
│   ├── server.js                     # Main Express server
│   ├── data/                         # JSON data storage
│   │   ├── projects.json            # Projects data
│   │   └── submissions.json         # Contact form submissions
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   └── .env                         # (Not in repo - create from .env.example)
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amritasrikantam123/FSD-portfolio.git
   cd FSD-portfolio
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Setup environment variables**:
   ```bash
   # In server directory
   cp server/.env.example server/.env
   # Edit server/.env if needed (default values work for local development)
   ```

### Running the Application

You need to run **two terminal windows**:

#### Terminal 1 - Start the Backend Server:
```bash
cd server
npm start
# Output: ✅ Server running on http://localhost:5000
```

Or for development with auto-reload:
```bash
cd server
npm run dev
```

#### Terminal 2 - Start the Frontend Development Server:
```bash
npm run dev
# Output: VITE v... ready in XXX ms
# ➜  Local:   http://localhost:5173/FSD-portfolio/
```

Open **http://localhost:5173/FSD-portfolio/** in your browser.

---

## 📡 Backend API Documentation

### Base URL
- **Development**: `http://localhost:5000`
- **Environment Variable**: Configurable via `.env` file

### Authentication
- **Not required** for this assignment
- All endpoints are publicly accessible

---

### API Endpoints

#### **B1. Health Check**
**Endpoint**: `GET /`

**Description**: Verify the API is running

**Response** (200 OK):
```json
{
  "status": "ok"
}
```

**Test**:
```bash
curl http://localhost:5000/
```

---

#### **B2. Get All Projects**
**Endpoint**: `GET /api/projects`

**Description**: Retrieve all portfolio projects

**Query Parameters**: None

**Response** (200 OK):
```json
[
  {
    "id": "aarohi",
    "title": "Aarohi",
    "description": "A multilingual MERN-based education and empowerment platform...",
    "techStack": ["React", "Node.js", "Express", "MongoDB", "JWT"],
    "image": "https://placehold.co/900x520/FDECEF/3E2C2C?text=Aarohi",
    "link": "https://github.com/Amritasrikantam123/Aarohi"
  },
  {
    "id": "speak2code",
    "title": "Speak2Code",
    "description": "A compiler prototype that translates restricted natural language...",
    "techStack": ["Python", "Compiler Design", "AST", "NLP"],
    "image": "https://placehold.co/900x520/F9EFEA/3E2C2C?text=Speak2Code",
    "link": "https://github.com/Amritasrikantam123/24csboa75-cd"
  },
  {
    "id": "portfolio",
    "title": "Personal Portfolio",
    "description": "A responsive portfolio application showcasing education, projects...",
    "techStack": ["React", "Vite", "CSS", "React Router"],
    "image": "https://placehold.co/900x520/F4EAF2/3E2C2C?text=Portfolio",
    "link": "#"
  }
]
```

**Test**:
```bash
curl http://localhost:5000/api/projects
```

---

#### **B3. Get Single Project**
**Endpoint**: `GET /api/projects/:id`

**Description**: Retrieve a specific project by ID

**URL Parameters**:
| Parameter | Type | Description |
|-----------|------|-------------|
| id | string | Project ID (e.g., "aarohi") |

**Success Response** (200 OK):
```json
{
  "id": "aarohi",
  "title": "Aarohi",
  "description": "A multilingual MERN-based education and empowerment platform...",
  "techStack": ["React", "Node.js", "Express", "MongoDB", "JWT"],
  "image": "https://placehold.co/900x520/FDECEF/3E2C2C?text=Aarohi",
  "link": "https://github.com/Amritasrikantam123/Aarohi"
}
```

**Error Response** (404 Not Found):
```json
{
  "error": "Project not found"
}
```

**Test - Success**:
```bash
curl http://localhost:5000/api/projects/aarohi
```

**Test - Not Found**:
```bash
curl http://localhost:5000/api/projects/nonexistent
```

---

#### **B4. Submit Contact Form**
**Endpoint**: `POST /api/contact`

**Description**: Submit a contact form message

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in collaborating on your projects."
}
```

**Success Response** (201 Created):
```json
{
  "success": true,
  "message": "Message sent successfully.",
  "data": {
    "id": "1693521234567",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in collaborating on your projects.",
    "timestamp": "2024-09-14T10:30:45.123Z"
  }
}
```

**Error Response - Missing Field** (400 Bad Request):
```json
{
  "name": "Name is required."
}
```

**Error Response - Invalid Email** (400 Bad Request):
```json
{
  "email": "Enter a valid email."
}
```

**Test - Success**:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Hello!"}'
```

**Test - Missing Name**:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","message":"Hello!"}'
```

**Test - Invalid Email**:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"invalid-email","message":"Hello!"}'
```

---

#### **B5. Get All Contact Submissions**
**Endpoint**: `GET /api/contact`

**Description**: Retrieve all contact form submissions (for verification)

**⚠️ Security Note**: This is an open endpoint with no authentication. In production, this should be protected.

**Response** (200 OK):
```json
[
  {
    "id": "1693521234567",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I'm interested in collaborating on your projects.",
    "timestamp": "2024-09-14T10:30:45.123Z"
  },
  {
    "id": "1693521245678",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "Great portfolio!",
    "timestamp": "2024-09-14T10:35:20.456Z"
  }
]
```

**Test**:
```bash
curl http://localhost:5000/api/contact
```

---

#### **B6. Error Handling - Undefined Route**
**Endpoint**: `GET /api/undefined`

**Response** (404 Not Found):
```json
{
  "error": "Route not found: GET /api/undefined"
}
```

**Test**:
```bash
curl http://localhost:5000/api/doesnotexist
```

---

## 🧪 Test Scripts

### Bash Script for Testing All Endpoints

Create a file named `test-api.sh` in the project root:

```bash
#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

BASE_URL="http://localhost:5000"

echo -e "${BLUE}=== FSD Portfolio Backend API Tests ===${NC}\n"

# B1: Health Check
echo -e "${BLUE}[B1] Testing Health Check${NC}"
curl -s "${BASE_URL}/" | jq .
echo ""

# B2: Get All Projects
echo -e "${BLUE}[B2] Testing GET /api/projects${NC}"
curl -s "${BASE_URL}/api/projects" | jq .
echo ""

# B3: Get Single Project (Success)
echo -e "${BLUE}[B3a] Testing GET /api/projects/:id (Valid ID)${NC}"
curl -s "${BASE_URL}/api/projects/aarohi" | jq .
echo ""

# B3: Get Single Project (Not Found)
echo -e "${BLUE}[B3b] Testing GET /api/projects/:id (Invalid ID)${NC}"
curl -s "${BASE_URL}/api/projects/nonexistent" | jq .
echo ""

# B4a: Submit Contact Form (Success)
echo -e "${BLUE}[B4a] Testing POST /api/contact (Valid Submission)${NC}"
curl -s -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }' | jq .
echo ""

# B4b: Submit Contact Form (Missing Name)
echo -e "${BLUE}[B4b] Testing POST /api/contact (Missing Name)${NC}"
curl -s -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "message": "This is a test message"
  }' | jq .
echo ""

# B4c: Submit Contact Form (Invalid Email)
echo -e "${BLUE}[B4c] Testing POST /api/contact (Invalid Email)${NC}"
curl -s -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "invalid-email",
    "message": "This is a test message"
  }' | jq .
echo ""

# B4d: Submit Contact Form (Missing Message)
echo -e "${BLUE}[B4d] Testing POST /api/contact (Missing Message)${NC}"
curl -s -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com"
  }' | jq .
echo ""

# B5: Get All Submissions
echo -e "${BLUE}[B5] Testing GET /api/contact${NC}"
curl -s "${BASE_URL}/api/contact" | jq .
echo ""

# B6: 404 Handler
echo -e "${BLUE}[B6] Testing 404 Handler (Undefined Route)${NC}"
curl -s "${BASE_URL}/api/undefined" | jq .
echo ""

echo -e "${GREEN}=== Tests Complete ===${NC}"
```

#### Make the script executable:
```bash
chmod +x test-api.sh
```

#### Run the tests:
```bash
./test-api.sh
```

---

### cURL Commands (Manual Testing)

#### Health Check
```bash
curl http://localhost:5000/
```

#### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

#### Get Specific Project
```bash
curl http://localhost:5000/api/projects/aarohi
curl http://localhost:5000/api/projects/nonexistent  # Test 404
```

#### Submit Valid Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I love your portfolio!"
  }'
```

#### Submit with Missing Name (Error)
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "message": "Hello"
  }'
```

#### Submit with Invalid Email (Error)
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "not-an-email",
    "message": "Hello"
  }'
```

#### Get All Contact Submissions
```bash
curl http://localhost:5000/api/contact
```

#### Test 404 Error
```bash
curl http://localhost:5000/api/doesnotexist
```

---

## 📋 Frontend Integration Changes

### Updated Components

The following components were updated to fetch from the backend:

1. **`src/pages/Projects-updated.jsx`**
   - Replaced static import of projects data
   - Added `useEffect` hook to fetch from `GET /api/projects`
   - Implemented loading state
   - Added error handling with user-friendly messages

2. **`src/pages/ProjectDetail-updated.jsx`**
   - Fetch single project from `GET /api/projects/:id`
   - Handle 404 responses gracefully
   - Show loading state during fetch

3. **`src/components/ContactForm-updated.jsx`**
   - Changed from client-side only validation
   - Now submits to `POST /api/contact`
   - Displays server-side validation errors
   - Shows connection errors if backend is unavailable

### How to Integrate

Replace the original files with the updated versions:

```bash
# Backup originals (optional)
mv src/pages/Projects.jsx src/pages/Projects.jsx.backup
mv src/pages/ProjectDetail.jsx src/pages/ProjectDetail.jsx.backup
mv src/components/ContactForm.jsx src/components/ContactForm.jsx.backup

# Copy updated versions
cp src/pages/Projects-updated.jsx src/pages/Projects.jsx
cp src/pages/ProjectDetail-updated.jsx src/pages/ProjectDetail.jsx
cp src/components/ContactForm-updated.jsx src/components/ContactForm.jsx
```

---

## 🔧 Environment Configuration

### Backend (.env)

Create `server/.env` based on `.env.example`:

```env
# Server Configuration
PORT=5000

# CORS Configuration - Frontend URL
ALLOWED_ORIGIN=http://localhost:5173
```

### Important Notes

- **Never commit `.env`** - It may contain secrets
- **Always commit `.env.example`** - Shows required variables
- Default values work for local development

---

## 📦 Data Storage

### Projects Data (`server/data/projects.json`)

The backend automatically initializes with default projects on first run. This can be modified by editing `server/data/projects.json`.

### Contact Submissions (`server/data/submissions.json`)

Contact form submissions are stored as JSON. This file grows with each submission.

**Example structure**:
```json
[
  {
    "id": "1693521234567",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Test message",
    "timestamp": "2024-09-14T10:30:45.123Z"
  }
]
```

---

## 🚨 Troubleshooting

### Issue: Frontend shows error "Failed to connect to server"
**Solution**: 
- Ensure backend is running on port 5000
- Check that `ALLOWED_ORIGIN` in `server/.env` matches your frontend URL
- Verify CORS is not blocked in browser console

### Issue: 404 Not Found on `/api/projects`
**Solution**:
- Backend server may not be running
- Check that you're accessing `http://localhost:5000`
- Verify the route is correct

### Issue: Contact form submission fails with CORS error
**Solution**:
- Stop backend: `Ctrl+C`
- Check `server/.env` has correct `ALLOWED_ORIGIN`
- Restart backend: `npm start`

### Issue: Projects don't load on detail page
**Solution**:
- Ensure backend is running
- Check network tab in browser DevTools
- Verify project ID exists in the API response

---

## 🔐 Security Considerations

⚠️ **Note**: This implementation is for learning purposes.

### Current Implementation
- No authentication/authorization
- All endpoints are publicly accessible
- Projects and contact data are unencrypted

### For Production
- Implement authentication (JWT, OAuth)
- Use environment variables for secrets
- Add rate limiting
- Validate and sanitize all inputs
- Use HTTPS
- Implement proper CORS policies
- Add request logging
- Secure contact submissions (email, database encryption)

---

## 📝 Academic Integrity Notice

This assignment was completed individually. Use of AI coding assistants was limited to debugging small snippets as permitted. No full solution generation was used.

---

## 🔗 Deployment

### GitHub Repository
[https://github.com/Amritasrikantam123/FSD-portfolio](https://github.com/Amritasrikantam123/FSD-portfolio)

### Frontend Deployment
- **Platform**: GitHub Pages
- **URL**: [https://amritasrikantam123.github.io/FSD-portfolio/](https://amritasrikantam123.github.io/FSD-portfolio/)
- **Note**: Backend must be running separately for full functionality

### Video Drive Link
https://drive.google.com/file/d/1XdStNaizCxeLHQsa_N2T66L-HJ_TplBk/view?usp=sharing

### Backend Deployment (Optional)
For production deployment, consider:
- Heroku
- Railway
- Render
- AWS EC2
- DigitalOcean

---

## 📚 Learning Outcomes

✅ Built and ran a minimal Express server
✅ Designed REST endpoints for existing frontend consumption
✅ Used fetch inside useEffect to load remote data
✅ Managed loading and error states correctly
✅ Validated data on server and displayed errors on client
✅ Enabled CORS for cross-origin requests
✅ Implemented centralized error handling
✅ Used environment-based configuration

---

## 📄 License

ISC

---

## 👤 Author

**Amrita Srikantam**
- College: National Institute of Technology Warangal
- Email: amritasrikantam@gmail.com
- GitHub: [@Amritasrikantam123](https://github.com/Amritasrikantam123)
- LinkedIn: [linkedin.com/in/amrita-srikantam](https://www.linkedin.com/in/amrita-srikantam)

---

**Last Updated**: September 2026

**GitHub Repository:**
[https://github.com/Amritasrikantam123/FSD-portfolio](https://github.com/Amritasrikantam123/FSD-portfolio)
