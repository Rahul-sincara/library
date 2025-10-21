# My Library - Educational Resource Platform

A comprehensive educational resource library platform built with HTML, CSS, and JavaScript using localStorage for data persistence.

## Project Overview

This platform provides students with access to educational resources organized by academic year and semester. The application features:

- User authentication (login/registration)
- Course organization by year and semester
- Resource management
- Interactive UI with theme switching
- Real-time chat functionality
- Responsive design for all devices
- **Admin dashboard for user management**

## Key Features

### Authentication
- Secure user login and registration
- Student information management
- Session persistence
- **Admin access with special privileges**

### Course Management
- Organized course structure by academic year
- First Year: 6 + 7 courses
- Second Year: 9 + 2 courses
- Detailed course information and resources

### Database Implementation
- SQL-like database using localStorage
- Course and student data management
- Full CRUD operations
- Export/import capabilities

### User Interface
- Modern, responsive design
- Light, Dark, and Black theme options
- Animated transitions and effects
- Intuitive navigation

### Communication
- Real-time chat system
- Community interaction features

### Administration
- **Admin dashboard for user management**
- **View all registered users and their details**
- **Delete users (except admin)**
- **Default admin account with credentials**

## Technical Architecture

### Frontend
- HTML5 semantic markup
- CSS3 with Flexbox and Grid
- JavaScript ES6+ with modular structure
- Font Awesome for icons

### Data Storage
- localStorage for client-side data persistence
- Custom SQL-like database implementation
- Structured course and user data

### File Structure
```
library/
├── css/
│   ├── chat.css
│   └── styles.css
├── database/
│   ├── db.js
│   ├── courseDb.js
│   ├── demo.js
│   ├── utils.js
│   ├── testDb.js
│   ├── README.md
│   ├── SUMMARY.md
│   ├── structure.md
│   └── test.html
├── js/
│   ├── animations.js
│   ├── auth.js
│   ├── chat.js
│   └── script.js
├── index.html
├── login.html
├── register.html
├── admin.html
├── test-admin.html
└── README.md
```

## Database Structure

The platform uses a custom SQL-like database implementation stored in localStorage. For detailed information about the database structure and API, see [database/README.md](file:///c%3A/Users/rahul/OneDrive/VS_CODE/PROJECT/library/database/README.md).

### Courses
- First Year Semester 1: 6 courses
- First Year Semester 2: 7 courses
- Second Year Semester 1: 9 courses
- Second Year Semester 2: 2 courses

### Students
- Student registration and authentication
- Academic year tracking

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Register a new account or login with existing credentials
4. Select your academic year to view courses

### Admin Access
- **Default Admin Credentials:**
  - Name: Administrator
  - Student ID: admin
  - Password: admin123
- After logging in with these credentials, you'll see an "Admin Dashboard" link on the main page
- Click this link to access the admin dashboard where you can view and manage all users
- **Important:** Change the default admin password after first login for security

### User Management
- Admins can view all registered users in the system
- Admins can delete any user account (except the admin account)
- User details include name, student ID, academic year, registration date, and last login

## Development

### Project Structure
- All HTML files in the root directory
- CSS files in the `css/` directory
- JavaScript files in the `js/` directory
- Database implementation in the `database/` directory

### Custom Database API
The project includes a custom SQL-like database implementation:
- `DatabaseManager` - Core database functionality
- `CourseDatabase` - Course-specific operations
- `DatabaseUtils` - Management utilities

For detailed API documentation, see [database/README.md](file:///c%3A/Users/rahul/OneDrive/VS_CODE/PROJECT/library/database/README.md).

## Testing

A database test page is available at [database/test.html](file:///c%3A/Users/rahul/OneDrive/VS_CODE/PROJECT/library/database/test.html) for verifying functionality.

An admin test page is available at [test-admin.html](file:///c%3A/Users/rahul/OneDrive/VS_CODE/PROJECT/library/test-admin.html) for testing admin functionality.

## Contributing

This is an educational project. Contributions are welcome in the form of:
- Bug fixes
- Feature enhancements
- Documentation improvements
- UI/UX improvements

## License

This project is for educational purposes and does not have a specific license. Please use it for learning and reference only.

## Author

Educational Resource Library Platform