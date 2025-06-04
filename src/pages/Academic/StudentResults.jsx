import React, { useState } from 'react';

const StudentResults = () => {
  const [selectedSemester, setSelectedSemester] = useState('Spring 2025');

  // Mock data - replace with API call
  const semesters = [
    'Spring 2025',
    'Fall 2024',
    'Spring 2024',
    'Fall 2023'
  ];

  const results = {
    'Spring 2025': {
      gpa: 3.75,
      totalCredits: 15,
      courses: [
        {
          code: 'CS301',
          name: 'Data Structures',
          credits: 3,
          grade: 'A',
          score: 92
        },
        {
          code: 'CS302',
          name: 'Algorithms',
          credits: 3,
          grade: 'A-',
          score: 88
        },
        {
          code: 'MATH201',
          name: 'Linear Algebra',
          credits: 3,
          grade: 'B+',
          score: 85
        },
        {
          code: 'ENG101',
          name: 'Technical Writing',
          credits: 3,
          grade: 'A',
          score: 94
        },
        {
          code: 'PHYS201',
          name: 'Physics I',
          credits: 3,
          grade: 'A-',
          score: 89
        }
      ]
    }
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

  const calculateGradeDistribution = (courses) => {
    const distribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
    courses.forEach(course => {
      distribution[course.grade[0]]++;
    });
    return distribution;
  };

  const semesterData = results[selectedSemester] || {
    gpa: 0,
    totalCredits: 0,
    courses: []
  };

  const gradeDistribution = calculateGradeDistribution(semesterData.courses);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Academic Results</h1>
          <p className="mt-2 text-sm text-gray-600">
            View your academic performance and course grades
          </p>
        </div>

        {/* Semester Selection */}
        <div className="mb-8">
          <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
            Select Semester
          </label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {semesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Semester GPA</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{semesterData.gpa.toFixed(2)}</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Credits</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{semesterData.totalCredits}</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Courses Taken</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{semesterData.courses.length}</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Highest Grade</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {semesterData.courses.length > 0 ? Math.max(...semesterData.courses.map(c => c.score)) : 'N/A'}
              </dd>
            </div>
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Grade Distribution</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="grid grid-cols-5 gap-4">
              {Object.entries(gradeDistribution).map(([grade, count]) => (
                <div key={grade} className="text-center">
                  <div className={`text-2xl font-bold ${getGradeColor(grade)}`}>{grade}</div>
                  <div className="text-sm text-gray-500">{count} courses</div>
                  <div className="mt-2 h-24 bg-gray-100 rounded relative">
                    <div
                      className={`absolute bottom-0 w-full ${getGradeColor(grade)} bg-opacity-20`}
                      style={{
                        height: `${(count / semesterData.courses.length) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Results Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Course Results</h2>
          </div>
          <div className="border-t border-gray-200">
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
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {semesterData.courses.map((course) => (
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
                      {course.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;
