/**
 * Course Database Implementation
 * Specific database structure for the educational resource library
 */

// Initialize the course database
const courseDb = new DatabaseManager('courseLibrary');

// Create tables for courses based on the required structure
function initializeCourseDatabase() {
  // Check if tables already exist
  const tables = courseDb.showTables();
  
  // Create courses table if it doesn't exist
  if (!tables.includes('courses')) {
    courseDb.createTable('courses', [
      { name: 'id', type: 'INTEGER', primaryKey: true, autoIncrement: true },
      { name: 'name', type: 'TEXT', notNull: true },
      { name: 'code', type: 'TEXT', notNull: true },
      { name: 'year', type: 'INTEGER', notNull: true },
      { name: 'semester', type: 'INTEGER', notNull: true },
      { name: 'description', type: 'TEXT' },
      { name: 'resources', type: 'TEXT' } // JSON string of resources
    ]);
  }
  
  // Create students table for authentication data
  if (!tables.includes('students')) {
    courseDb.createTable('students', [
      { name: 'id', type: 'INTEGER', primaryKey: true, autoIncrement: true },
      { name: 'studentId', type: 'TEXT', notNull: true },
      { name: 'name', type: 'TEXT', notNull: true },
      { name: 'academicYear', type: 'INTEGER', notNull: true }
    ]);
  }
  
  console.log('Course database initialized');
}

// Populate database with required course structure
function populateCourseData() {
  // Clear existing data to avoid duplicates
  try {
    courseDb.delete('courses', {});
  } catch (e) {
    // Table might not exist yet
    console.log('Creating courses table...');
  }
  
  // First Year Semester 1 (6 courses)
  const firstYearSem1 = [
    { name: 'C Language', code: 'CLANG', year: 1, semester: 1, description: 'Fundamentals of C programming language' },
    { name: 'Internet of Things', code: 'IOT', year: 1, semester: 1, description: 'Introduction to IoT concepts and applications' },
    { name: 'Communication', code: 'COMM1', year: 1, semester: 1, description: 'Basic communication skills' },
    { name: 'Vedic Math', code: 'VMATH', year: 1, semester: 1, description: 'Ancient Indian mathematical techniques' },
    { name: 'Discrete Math', code: 'DMATH', year: 1, semester: 1, description: 'Mathematical structures discrete rather than continuous' },
    { name: 'Human Value', code: 'HVALUE', year: 1, semester: 1, description: 'Ethics and human values education' }
  ];
  
  // First Year Semester 2 (7 courses)
  const firstYearSem2 = [
    { name: 'Digital Design and Computer Architecture', code: 'DDCA', year: 1, semester: 2, description: 'Digital logic and computer architecture fundamentals' },
    { name: 'Basic Electrical and Electronic Circuits', code: 'BEEC', year: 1, semester: 2, description: 'Basic electrical and electronic circuit analysis' },
    { name: 'Data Structure', code: 'DS', year: 1, semester: 2, description: 'Data organization and management techniques' },
    { name: 'Linear Algebra', code: 'LINALG', year: 1, semester: 2, description: 'Vector spaces and linear transformations' },
    { name: 'Communication', code: 'COMM2', year: 1, semester: 2, description: 'Advanced communication skills' },
    { name: 'Indian Constitution', code: 'ICONST', year: 1, semester: 2, description: 'Study of Indian constitutional framework' },
    { name: 'SIL', code: 'SIL', year: 1, semester: 2, description: 'Service and Inclusive Leadership' }
  ];
  
  // Second Year Semester 1 (9 courses)
  const secondYearSem1 = [
    { name: 'Database Management Systems', code: 'DBMS', year: 2, semester: 1, description: 'Database design and management systems' },
    { name: 'Computer Network', code: 'CN', year: 2, semester: 1, description: 'Computer networking fundamentals' },
    { name: 'Front End', code: 'FE', year: 2, semester: 1, description: 'Front-end web development technologies' },
    { name: 'Object Oriented Programming using Java', code: 'OOPS', year: 2, semester: 1, description: 'Object-oriented programming concepts with Java' },
    { name: 'Artificial Intelligence and Machine Learning', code: 'AIML', year: 2, semester: 1, description: 'Introduction to AI and ML algorithms' },
    { name: 'Data Analytics', code: 'DA', year: 2, semester: 1, description: 'Data analysis and visualization techniques' },
    { name: 'Processor and Controller', code: 'PC', year: 2, semester: 1, description: 'Microprocessors and microcontrollers' },
    { name: 'Mathematical Optimization', code: 'MO', year: 2, semester: 1, description: 'Optimization techniques in mathematics' },
    { name: 'Japanese Language', code: 'JL', year: 2, semester: 1, description: 'Japanese language basics' }
  ];
  
  // Second Year Semester 2 (2 courses)
  const secondYearSem2 = [
    { name: 'Operating System', code: 'OS', year: 2, semester: 2, description: 'Operating system concepts and design' },
    { name: 'Probability', code: 'PROB', year: 2, semester: 2, description: 'Probability theory and applications' }
  ];
  
  // Insert all courses
  [...firstYearSem1, ...firstYearSem2, ...secondYearSem1, ...secondYearSem2].forEach(course => {
    try {
      courseDb.insert('courses', course);
    } catch (e) {
      console.log(`Error inserting course ${course.name}:`, e.message);
    }
  });
  
  console.log('Course data populated successfully');
}

// Course database utility functions
const CourseDatabase = {
  // Get all courses
  getAllCourses: () => {
    return courseDb.select('courses');
  },
  
  // Get courses by year and semester
  getCoursesByYearAndSemester: (year, semester) => {
    return courseDb.select('courses', {
      where: { year: year, semester: semester }
    });
  },
  
  // Get course by ID
  getCourseById: (id) => {
    const results = courseDb.select('courses', {
      where: { id: id }
    });
    return results.length > 0 ? results[0] : null;
  },
  
  // Get course by code
  getCourseByCode: (code) => {
    const results = courseDb.select('courses', {
      where: { code: code }
    });
    return results.length > 0 ? results[0] : null;
  },
  
  // Add a student
  addStudent: (studentData) => {
    return courseDb.insert('students', studentData);
  },
  
  // Get student by studentId
  getStudentByStudentId: (studentId) => {
    const results = courseDb.select('students', {
      where: { studentId: studentId }
    });
    return results.length > 0 ? results[0] : null;
  },
  
  // Initialize the database
  init: () => {
    initializeCourseDatabase();
    populateCourseData();
  }
};

// Initialize when the script loads
document.addEventListener('DOMContentLoaded', () => {
  CourseDatabase.init();
});

// Export for use in other modules
window.CourseDatabase = CourseDatabase;