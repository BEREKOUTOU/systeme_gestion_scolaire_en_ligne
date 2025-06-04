// API configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Other constants can be added here as needed
export const API_TIMEOUT = 30000; // 30 seconds
export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// User roles
export const USER_ROLES = {
  PARENT: 'parent',
  TEACHER: 'teacher',
  ADMIN: 'admin',
};

// Registration status
export const REGISTRATION_STATUS = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  PENDING_DOCUMENTS: 'pending_documents',
  IN_REVIEW: 'in_review',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

// Document types required for registration
export const DOCUMENT_TYPES = {
  ID_CARD: 'id_card',
  BIRTH_CERTIFICATE: 'birth_certificate',
  RESIDENCE_PROOF: 'residence_proof',
  VACCINATION_RECORD: 'vaccination_record',
  PREVIOUS_SCHOOL_RECORD: 'previous_school_record',
  PHOTO: 'photo',
};

// Invoice status
export const INVOICE_STATUS = {
  DRAFT: 'draft',
  ISSUED: 'issued',
  PARTIALLY_PAID: 'partially_paid',
  PAID: 'paid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
};

// Payment methods
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  BANK_TRANSFER: 'bank_transfer',
  CASH: 'cash',
  CHECK: 'check',
};

// School levels
export const SCHOOL_LEVELS = {
  PRESCHOOL: {
    id: 'preschool',
    name: 'Maternelle',
    grades: [
      { id: 'ps', name: 'Petite Section' },
      { id: 'ms', name: 'Moyenne Section' },
      { id: 'gs', name: 'Grande Section' },
    ],
  },
  PRIMARY: {
    id: 'primary',
    name: 'Primaire',
    grades: [
      { id: 'cp', name: 'CP' },
      { id: 'ce1', name: 'CE1' },
      { id: 'ce2', name: 'CE2' },
      { id: 'cm1', name: 'CM1' },
      { id: 'cm2', name: 'CM2' },
    ],
  },
  MIDDLE_SCHOOL: {
    id: 'middle_school',
    name: 'Collège',
    grades: [
      { id: '6eme', name: '6ème' },
      { id: '5eme', name: '5ème' },
      { id: '4eme', name: '4ème' },
      { id: '3eme', name: '3ème' },
    ],
  },
  HIGH_SCHOOL: {
    id: 'high_school',
    name: 'Lycée',
    grades: [
      { id: '2nde', name: '2nde' },
      { id: '1ere', name: '1ère' },
      { id: 'terminale', name: 'Terminale' },
    ],
  },
};

// Academic terms
export const ACADEMIC_TERMS = [
  { id: 1, name: '1er Trimestre', shortName: 'T1' },
  { id: 2, name: '2ème Trimestre', shortName: 'T2' },
  { id: 3, name: '3ème Trimestre', shortName: 'T3' },
];

// Grade scale (for high school)
export const GRADE_SCALE = {
  A: { min: 18, max: 20, description: 'Excellent' },
  B: { min: 16, max: 17.99, description: 'Très bien' },
  C: { min: 14, max: 15.99, description: 'Bien' },
  D: { min: 12, max: 13.99, description: 'Assez bien' },
  E: { min: 10, max: 11.99, description: 'Moyen' },
  F: { min: 0, max: 9.99, description: 'Insuffisant' },
};

// Validation messages for forms
export const VALIDATION_MESSAGES = {
  REQUIRED: 'Ce champ est obligatoire',
  EMAIL: 'Veuillez entrer une adresse email valide',
  PASSWORD_MIN_LENGTH: 'Le mot de passe doit contenir au moins 8 caractères',
  PASSWORD_MATCH: 'Les mots de passe ne correspondent pas',
  PHONE: 'Veuillez entrer un numéro de téléphone valide',
  DATE: 'Veuillez entrer une date valide',
  FILE_SIZE: 'La taille du fichier ne doit pas dépasser 5MB',
  FILE_TYPE: 'Type de fichier non supporté',
};