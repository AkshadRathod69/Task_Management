# Task Manager Pro

A modern, feature-rich task management application built with React and Vite. This project demonstrates collaborative development with multiple team members working on different features.

![Task Manager Pro](https://img.shields.io/badge/React-18+-blue) ![Vite](https://img.shields.io/badge/Vite-5.4+-green) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## 🎯 Features

### 1. **Authentication System done by karan** 
- User login with localStorage persistence
- User context management across the application
- Secure session handling
- User profile with custom avatar colors

### 2. **Task Management (CRUD) chaitali**
- ✅ Create new tasks with title and description
- 📝 Edit existing tasks inline
- 🗑️ Delete tasks with confirmation
- ✓ Mark tasks as complete/incomplete

### 3. **Task Status & Assignment arjun**
- 📊 Task status tracking (To Do, In Progress, Completed)
- 👤 Assign tasks to team members
- 🏷️ Visual status badges
- 📋 Task details and metadata

### 4. **Dashboard & UI pavan**
- 📱 Responsive design (mobile, tablet, desktop)
- 🎨 Modern gradient UI with smooth animations
- 📊 Statistics sidebar with progress tracking
- 🌟 Intuitive user experience

### 5. **Activity Logging akshad**
- 📝 Track all task operations (create, update, delete, assign)
- ⏰ Timestamp for each activity
- 👤 User attribution for actions
- 🔍 Searchable activity history

### 6.Activity Log & Testing **
Activity log (task created/updated)
Basic testing
README documentation
Components:
ActivityLog.jsx
README.md

## 📁 Project Structure

```
task-manager-project/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Main dashboard layout
│   │   ├── Dashboard.css
│   │   ├── TaskForm.jsx           # Task creation/edit form
│   │   ├── TaskForm.css
│   │   ├── TaskCard.jsx           # Individual task display
│   │   ├── TaskCard.css
│   │   ├── TaskList.jsx           # Task list container
│   │   ├── TaskList.css
│   │   ├── Login.jsx              # Authentication page
│   │   ├── Login.css
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── Navbar.css
│   │   ├── Sidebar.jsx            # Stats sidebar
│   │   ├── Sidebar.css
│   │   ├── StatusDropdown.jsx     # Status selector
│   │   ├── StatusDropdown.css
│   │   ├── ActivityLog.jsx        # Activity history
│   │   └── ActivityLog.css
│   ├── context/
│   │   └── AuthContext.js         # Authentication context
│   ├── App.jsx                    # Main app component
│   ├── App.css
│   ├── style.css                  # Global styles
│   ├── main.jsx                   # React entry point
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
└── README.md
```

## 👥 Team Task Distribution

### Member 1 - Project Lead & Git Manager
**Responsibilities:**
- Create and setup GitHub repository
- Initialize React project with Vite
- Define folder structure and conventions
- Create main and develop branches
- Review and merge pull requests
- Resolve merge conflicts

**Deliverables:**
- Repository setup
- Project initialization
- PR reviews
- Conflict resolution

---

### Member 2 - Authentication & User Module
**Responsibilities:**
- Build login page (UI + logic)
- Implement user context (React Context)
- Handle localStorage for user persistence
- Manage user sessions

**Components Developed:**
- `Login.jsx` - Authentication UI
- `AuthContext.js` - User state management

**Branch:** `feature/auth`

---

### Member 3 - Task CRUD (Core Logic)
**Responsibilities:**
- Implement Add Task functionality
- Implement Edit Task functionality
- Implement Delete Task functionality
- Design task data model

**Components Developed:**
- `TaskForm.jsx` - Task creation/editing form
- `TaskList.jsx` - Task listing container

**Branch:** `feature/task-crud`

---

### Member 4 - Task Status & Assignment
**Responsibilities:**
- Implement task status updates
- Allow assigning tasks to team members
- Create status badge UI
- Design assignment interface

**Components Developed:**
- `TaskCard.jsx` - Enhanced task display
- `StatusDropdown.jsx` - Status selector
- Status management logic

**Branch:** `feature/task-status`

---

### Member 5 - Dashboard & UI Design
**Responsibilities:**
- Design dashboard layout
- Create responsive navigation (Navbar/Sidebar)
- Implement responsive design (CSS)
- Ensure consistent UI/UX

**Components Developed:**
- `Dashboard.jsx` - Main dashboard
- `Navbar.jsx` - Top navigation
- `Sidebar.jsx` - Stats sidebar
- All component CSS files

**Branch:** `feature/ui-dashboard`

---

### Member 6 - Activity Log & Testing
**Responsibilities:**
- Implement activity logging system
- Track task creation/updates/deletions
- Perform basic testing
- Document project in README

**Components Developed:**
- `ActivityLog.jsx` - Activity history display
- Activity tracking logic
- `README.md` - Project documentation

**Branch:** `feature/activity-log`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager-project.git
   cd task-manager-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔑 Login Instructions

The application includes a demo login system. Use any username and password to login:

- **Username:** Any text (e.g., "john", "alice", "bob")
- **Password:** Any password
- **Auto-save:** User data is stored in localStorage

## 🎨 Color Scheme

The application uses a modern gradient color scheme:
- **Primary:** Purple gradient (#667eea to #764ba2)
- **Success:** Green (#4caf50)
- **Warning:** Orange (#ffc107)
- **Info:** Blue (#2196f3)
- **Background:** Light gray (#f5f5f5)

## 📝 Task Statuses

- 📝 **To Do** - Task not started
- ⚙️ **In Progress** - Task being worked on
- ✅ **Completed** - Task finished

## 🔄 Data Flow

```
Login Page
    ↓
Authentication (AuthContext)
    ↓
Dashboard
    ├── Navbar (User info, Logout)
    ├── Sidebar (Statistics, Progress)
    ├── Task Form (Create/Edit tasks)
    ├── Task Cards (Display, Edit, Delete, Assign)
    └── Activity Log (Track changes)
```

## 💾 Local Storage

User data is persisted in localStorage:
```javascript
localStorage.setItem('user', JSON.stringify(userData))
```

## 🧪 Testing

The application includes:
- Form validation
- Error handling
- User input sanitization
- Activity tracking

## 📦 Dependencies

- **React** - UI library
- **Vite** - Build tool and development server
- **Poppins Font** - Google Fonts

## 🔐 Security Notes

**Note:** This is a demo application. For production:
- Never store passwords in localStorage
- Implement proper backend authentication
- Use secure HTTP headers
- Validate all user inputs on the server
- Implement CSRF protection

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Commit with descriptive messages
4. Push to your branch
5. Create a Pull Request for review

## 📄 Git Workflow

```
main (stable releases)
  ↓
develop (integration branch)
  ↓
feature/auth (Member 2)
feature/task-crud (Member 3)
feature/task-status (Member 4)
feature/ui-dashboard (Member 5)
feature/activity-log (Member 6)
```

## 🐛 Common Issues

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```


---

**Made with ❤️ by the Task Manager Team**
