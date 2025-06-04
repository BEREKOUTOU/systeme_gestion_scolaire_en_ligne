// Mock data for development and testing

// Mock Users
export const mockUsers = [
  {
    id: 1,
    email: 'parent@exemple.fr',
    firstName: 'Thomas',
    lastName: 'Dubois',
    role: 'parent',
    phone: '0612345678',
    address: '123 Rue de Paris',
    city: 'Paris',
    postalCode: '75001',
    profession: 'Ingénieur',
    createdAt: '2023-01-15T10:30:00',
    lastLogin: '2023-08-25T14:22:15',
  },
  {
    id: 2,
    email: 'enseignant@exemple.fr',
    firstName: 'Marie',
    lastName: 'Laurent',
    role: 'teacher',
    phone: '0687654321',
    department: 'Mathématiques',
    qualification: 'Agrégée',
    subjects: ['Mathématiques', 'Physique'],
    createdAt: '2023-01-10T09:15:00',
    lastLogin: '2023-08-24T16:45:30',
  },
  {
    id: 3,
    email: 'admin@exemple.fr',
    firstName: 'Pierre',
    lastName: 'Moreau',
    role: 'admin',
    phone: '0698765432',
    department: 'Administration',
    position: 'Directeur',
    createdAt: '2023-01-01T08:00:00',
    lastLogin: '2023-08-25T18:10:22',
  },
];

// Mock Students
export const mockStudents = [
  {
    id: 101,
    firstName: 'Sophie',
    lastName: 'Dubois',
    dateOfBirth: '2015-05-12',
    gender: 'F',
    classId: 3,
    academicLevel: 'ce2',
    parentIds: [1],
    isActive: true,
    photoUrl: '/assets/images/students/student1.jpg',
    medicalInfo: 'Allergique aux arachides',
    createdAt: '2023-02-01T10:15:00',
  },
  {
    id: 102,
    firstName: 'Lucas',
    lastName: 'Dubois',
    dateOfBirth: '2011-09-23',
    gender: 'M',
    classId: 7,
    academicLevel: '6eme',
    parentIds: [1],
    isActive: true,
    photoUrl: '/assets/images/students/student2.jpg',
    medicalInfo: '',
    createdAt: '2023-02-01T10:20:00',
  },
];

// Mock Classes
export const mockClasses = [
  { id: 1, name: 'Petite Section A', level: 'ps', academicYear: 2023, capacity: 25, teacherId: 5, roomNumber: 101 },
  { id: 2, name: 'CP B', level: 'cp', academicYear: 2023, capacity: 30, teacherId: 6, roomNumber: 201 },
  { id: 3, name: 'CE2 A', level: 'ce2', academicYear: 2023, capacity: 28, teacherId: 7, roomNumber: 205 },
  { id: 7, name: '6ème C', level: '6eme', academicYear: 2023, capacity: 32, teacherId: 2, roomNumber: 301 },
];

// Mock Registrations
export const mockRegistrations = [
  {
    id: 201,
    studentId: 101,
    classId: 3,
    academicYear: 2023,
    submissionDate: '2023-06-15T14:30:00',
    status: 'approved',
    adminComments: 'Tous les documents sont en ordre.',
    reviewedBy: 3,
    reviewedAt: '2023-07-05T11:25:00',
    documents: [
      {
        id: 301,
        registrationId: 201,
        documentType: 'birth_certificate',
        filePath: '/uploads/documents/birth_cert_101.pdf',
        fileName: 'certificat_naissance.pdf',
        uploadedAt: '2023-06-15T14:32:00',
        isVerified: true,
        verificationComments: 'Document vérifié',
      },
      {
        id: 302,
        registrationId: 201,
        documentType: 'residence_proof',
        filePath: '/uploads/documents/residence_101.pdf',
        fileName: 'justificatif_domicile.pdf',
        uploadedAt: '2023-06-15T14:35:00',
        isVerified: true,
        verificationComments: 'Document vérifié',
      },
    ],
  },
  {
    id: 202,
    studentId: 102,
    classId: 7,
    academicYear: 2023,
    submissionDate: '2023-06-15T15:00:00',
    status: 'approved',
    adminComments: 'Dossier complet',
    reviewedBy: 3,
    reviewedAt: '2023-07-05T11:40:00',
    documents: [
      {
        id: 303,
        registrationId: 202,
        documentType: 'birth_certificate',
        filePath: '/uploads/documents/birth_cert_102.pdf',
        fileName: 'certificat_naissance.pdf',
        uploadedAt: '2023-06-15T15:02:00',
        isVerified: true,
        verificationComments: 'Document vérifié',
      },
      {
        id: 304,
        registrationId: 202,
        documentType: 'residence_proof',
        filePath: '/uploads/documents/residence_102.pdf',
        fileName: 'justificatif_domicile.pdf',
        uploadedAt: '2023-06-15T15:05:00',
        isVerified: true,
        verificationComments: 'Document vérifié',
      },
      {
        id: 305,
        registrationId: 202,
        documentType: 'previous_school_record',
        filePath: '/uploads/documents/school_record_102.pdf',
        fileName: 'bulletin_precedent.pdf',
        uploadedAt: '2023-06-15T15:10:00',
        isVerified: true,
        verificationComments: 'Document vérifié',
      },
    ],
  },
];

// Mock Fee Structure
export const mockFeeStructure = [
  {
    id: 1,
    level: 'preschool',
    academicYear: 2023,
    tuitionFee: 3000,
    registrationFee: 250,
    booksFee: 150,
    activitiesFee: 200,
    mealsFee: 800,
    isActive: true,
  },
  {
    id: 2,
    level: 'primary',
    academicYear: 2023,
    tuitionFee: 3500,
    registrationFee: 250,
    booksFee: 200,
    activitiesFee: 200,
    mealsFee: 800,
    isActive: true,
  },
  {
    id: 3,
    level: 'middle_school',
    academicYear: 2023,
    tuitionFee: 4000,
    registrationFee: 300,
    booksFee: 300,
    activitiesFee: 250,
    mealsFee: 900,
    isActive: true,
  },
  {
    id: 4,
    level: 'high_school',
    academicYear: 2023,
    tuitionFee: 4500,
    registrationFee: 300,
    booksFee: 400,
    activitiesFee: 250,
    mealsFee: 900,
    isActive: true,
  },
];

// Mock Invoices
export const mockInvoices = [
  {
    id: 401,
    parentId: 1,
    studentId: 101,
    registrationId: 201,
    amount: 4050,
    currency: 'EUR',
    issueDate: '2023-07-10',
    dueDate: '2023-08-15',
    status: 'paid',
    invoiceNumber: 'INV-2023-401',
    payments: [
      {
        id: 501,
        invoiceId: 401,
        amount: 4050,
        currency: 'EUR',
        paymentMethod: 'bank_transfer',
        transactionId: 'TR-12345',
        paymentDate: '2023-07-20T09:30:00',
        status: 'completed',
        receiptUrl: '/uploads/receipts/receipt_501.pdf',
      },
    ],
  },
  {
    id: 402,
    parentId: 1,
    studentId: 102,
    registrationId: 202,
    amount: 5750,
    currency: 'EUR',
    issueDate: '2023-07-10',
    dueDate: '2023-08-15',
    status: 'partially_paid',
    invoiceNumber: 'INV-2023-402',
    payments: [
      {
        id: 502,
        invoiceId: 402,
        amount: 2875,
        currency: 'EUR',
        paymentMethod: 'credit_card',
        transactionId: 'TR-23456',
        paymentDate: '2023-07-22T14:15:00',
        status: 'completed',
        receiptUrl: '/uploads/receipts/receipt_502.pdf',
      },
    ],
  },
];

// Mock Subjects
export const mockSubjects = [
  { id: 1, name: 'Français', code: 'FRA', level: 'primary', coefficient: 3, teacherIds: [8, 9] },
  { id: 2, name: 'Mathématiques', code: 'MAT', level: 'primary', coefficient: 3, teacherIds: [7, 10] },
  { id: 3, name: 'Découverte du Monde', code: 'DDM', level: 'primary', coefficient: 2, teacherIds: [7, 8] },
  { id: 4, name: 'Français', code: 'FRA', level: 'middle_school', coefficient: 4, teacherIds: [11, 12] },
  { id: 5, name: 'Mathématiques', code: 'MAT', level: 'middle_school', coefficient: 4, teacherIds: [2, 13] },
  { id: 6, name: 'Histoire-Géographie', code: 'HGE', level: 'middle_school', coefficient: 3, teacherIds: [14, 15] },
  { id: 7, name: 'Sciences Physiques', code: 'PHY', level: 'middle_school', coefficient: 3, teacherIds: [2, 16] },
];

// Mock Terms
export const mockTerms = [
  { id: 1, academicYear: 2023, name: '1er Trimestre', startDate: '2023-09-01', endDate: '2023-11-30', gradeSubmissionDeadline: '2023-12-10', reportPublicationDate: '2023-12-15' },
  { id: 2, academicYear: 2023, name: '2ème Trimestre', startDate: '2023-12-01', endDate: '2024-03-15', gradeSubmissionDeadline: '2024-03-25', reportPublicationDate: '2024-03-30' },
  { id: 3, academicYear: 2023, name: '3ème Trimestre', startDate: '2024-03-16', endDate: '2024-06-30', gradeSubmissionDeadline: '2024-07-05', reportPublicationDate: '2024-07-10' },
];

// Mock Grades
export const mockGrades = [
  // Grades for Sophie (CE2)
  { id: 1001, studentId: 101, teacherId: 7, subjectId: 1, termId: 1, score: 16.5, comments: 'Excellent travail en français', submittedAt: '2023-11-28T10:15:00', isPublished: true },
  { id: 1002, studentId: 101, teacherId: 7, subjectId: 2, termId: 1, score: 14.0, comments: 'Bonne maîtrise des bases', submittedAt: '2023-11-28T10:20:00', isPublished: true },
  { id: 1003, studentId: 101, teacherId: 7, subjectId: 3, termId: 1, score: 17.0, comments: 'Très curieuse et participative', submittedAt: '2023-11-28T10:25:00', isPublished: true },
  
  // Grades for Lucas (6ème)
  { id: 1004, studentId: 102, teacherId: 11, subjectId: 4, termId: 1, score: 13.5, comments: 'Des progrès en expression écrite', submittedAt: '2023-11-29T14:00:00', isPublished: true },
  { id: 1005, studentId: 102, teacherId: 2, subjectId: 5, termId: 1, score: 16.0, comments: 'Excellente maîtrise des concepts', submittedAt: '2023-11-29T14:10:00', isPublished: true },
  { id: 1006, studentId: 102, teacherId: 14, subjectId: 6, termId: 1, score: 14.5, comments: 'Bonnes connaissances, participation à améliorer', submittedAt: '2023-11-29T14:20:00', isPublished: true },
  { id: 1007, studentId: 102, teacherId: 2, subjectId: 7, termId: 1, score: 15.0, comments: 'Bonne compréhension des expériences', submittedAt: '2023-11-29T14:30:00', isPublished: true },
];

// Mock Report Cards
export const mockReportCards = [
  {
    id: 601,
    studentId: 101,
    termId: 1,
    classId: 3,
    generalComments: 'Sophie est une élève sérieuse et appliquée. Elle a réalisé un excellent premier trimestre.',
    teacherComments: 'Continue ainsi, tu es sur la bonne voie !',
    generatedAt: '2023-12-12T09:00:00',
    isPublished: true,
  },
  {
    id: 602,
    studentId: 102,
    termId: 1,
    classId: 7,
    generalComments: 'Lucas s\'est bien adapté au collège. Ses résultats sont bons dans l\'ensemble.',
    teacherComments: 'Bon trimestre, mais peut encore améliorer sa participation en classe.',
    generatedAt: '2023-12-12T10:30:00',
    isPublished: true,
  },
];

// Export mock data in a structured way
export const mockData = {
  users: mockUsers,
  students: mockStudents,
  classes: mockClasses,
  registrations: mockRegistrations,
  feeStructure: mockFeeStructure,
  invoices: mockInvoices,
  subjects: mockSubjects,
  terms: mockTerms,
  grades: mockGrades,
  reportCards: mockReportCards,
};

export default mockData;