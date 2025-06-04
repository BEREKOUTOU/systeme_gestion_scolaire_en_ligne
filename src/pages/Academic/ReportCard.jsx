import React, { useState } from 'react';

const ReportCard = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  // Mock data - replace with API call
  const academicYears = ['2024-2025', '2023-2024'];
  
  const reportData = {
    '2024-2025': {
      studentInfo: {
        name: 'John Doe',
        id: 'STU2025001',
        program: 'Computer Science',
        year: '2nd Year',
        advisor: 'Dr. Smith'
      },
      performance: {
        fallGPA: 3.75,
        springGPA: 3.82,
        cumulativeGPA: 3.79,
        creditsEarned: 30,
        totalCredits: 60,
        academicStanding: 'Good Standing'
      },
      semesters: {
        Fall: {
          courses: [
            {
              code: 'CS301',
              name: 'Data Structures',
              credits: 3,
              grade: 'A',
              instructor: 'Dr. Johnson'
            },
            {
              code: 'MATH201',
              name: 'Linear Algebra',
              credits: 3,
              grade: 'B+',
              instructor: 'Prof. Williams'
            },
            {
              code: 'CS303',
              name: 'Database Systems',
              credits: 3,
              grade: 'A-',
              instructor: 'Dr. Davis'
            }
          ]
        },
        Spring: {
          courses: [
            {
              code: 'CS302',
              name: 'Algorithms',
              credits: 3,
              grade: 'A',
              instructor: 'Dr. Brown'
            },
            {
              code: 'CS304',
              name: 'Software Engineering',
              credits: 3,
              grade: 'A',
              instructor: 'Prof. Miller'
            },
            {
              code: 'CS305',
              name: 'Operating Systems',
              credits: 3,
              grade: 'A-',
              instructor: 'Dr. Wilson'
            }
          ]
        }
      },
      achievements: [
        "Dean's List - Fall 2024",
        "Dean's List - Spring 2025",
        "Outstanding Academic Performance Award"
      ],
      comments: "Excellent academic performance throughout the year. Shows strong aptitude in core computer science subjects."
    }
  };

  const yearData = reportData[selectedYear] || {
    studentInfo: {},
    performance: {},
    semesters: {},
    achievements: [],
    comments: ''
  };

  const getGradeColor = (grade) => {
    switch (grade[0]) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-yellow-600';
      case 'D': return 'text-orange-600';
      default: return 'text-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Academic Report Card</h1>
              <p className="mt-2 text-sm text-gray-600">
                Comprehensive academic performance report
              </p>
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {academicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Student Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{yearData.studentInfo.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Student ID</dt>
                <dd className="mt-1 text-sm text-gray-900">{yearData.studentInfo.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Program</dt>
                <dd className="mt-1 text-sm text-gray-900">{yearData.studentInfo.program}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Year Level</dt>
                <dd className="mt-1 text-sm text-gray-900">{yearData.studentInfo.year}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Academic Advisor</dt>
                <dd className="mt-1 text-sm text-gray-900">{yearData.studentInfo.advisor}</dd>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Performance Summary */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Academic Performance Summary</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <dt className="text-sm font-medium text-gray-500">Fall GPA</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {yearData.performance.fallGPA?.toFixed(2)}
                </dd>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <dt className="text-sm font-medium text-gray-500">Spring GPA</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {yearData.performance.springGPA?.toFixed(2)}
                </dd>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <dt className="text-sm font-medium text-gray-500">Cumulative GPA</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {yearData.performance.cumulativeGPA?.toFixed(2)}
                </dd>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <dt className="text-sm font-medium text-gray-500">Credits Earned</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {yearData.performance.creditsEarned}
                </dd>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <dt className="text-sm font-medium text-gray-500">Total Credits</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {yearData.performance.totalCredits}
                </dd>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <dt className="text-sm font-medium text-gray-500">Academic Standing</dt>
                <dd className="mt-1 text-lg font-semibold text-green-600">
                  {yearData.performance.academicStanding}
                </dd>
              </div>
            </div>
          </div>
        </div>

        {/* Semester Results */}
        {Object.entries(yearData.semesters).map(([semester, data]) => (
          <div key={semester} className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">{semester} Semester Courses</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course Code
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Credits
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Grade
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Instructor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.courses.map((course) => (
                      <tr key={course.code}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {course.code}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.credits}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`font-medium ${getGradeColor(course.grade)}`}>
                            {course.grade}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {course.instructor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Achievements */}
        {yearData.achievements.length > 0 && (
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Achievements</h2>
              <ul className="space-y-2">
                {yearData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Comments */}
        {yearData.comments && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Academic Comments</h2>
              <p className="text-sm text-gray-600">{yearData.comments}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
