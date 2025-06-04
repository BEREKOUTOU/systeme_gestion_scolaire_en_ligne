import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import StudentRegistration from './pages/Registration/StudentRegistration';
import DocumentUpload from './pages/Registration/DocumentUpload';
import RegistrationStatus from './pages/Registration/RegistrationStatus';
import InvoiceList from './pages/Billing/InvoiceList';
import InvoiceDetails from './pages/Billing/InvoiceDetails';
import Payment from './pages/Billing/Payment';
import StudentResults from './pages/Academic/StudentResults';
import ReportCard from './pages/Academic/ReportCard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (e.g., checking auth status, loading preferences)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes - wrapped in MainLayout */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          {/* Registration routes */}
          <Route path="/registration" element={
            <ProtectedRoute>
              <MainLayout>
                <StudentRegistration />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/registration/documents/:registrationId" element={
            <ProtectedRoute>
              <MainLayout>
                <DocumentUpload />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/registration/status" element={
            <ProtectedRoute>
              <MainLayout>
                <RegistrationStatus />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          {/* Billing routes */}
          <Route path="/billing" element={
            <ProtectedRoute>
              <MainLayout>
                <InvoiceList />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/billing/:invoiceId" element={
            <ProtectedRoute>
              <MainLayout>
                <InvoiceDetails />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/billing/payment/:invoiceId" element={
            <ProtectedRoute>
              <MainLayout>
                <Payment />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          {/* Academic routes */}
          <Route path="/academic/results" element={
            <ProtectedRoute>
              <MainLayout>
                <StudentResults />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/academic/report/:studentId/:termId" element={
            <ProtectedRoute>
              <MainLayout>
                <ReportCard />
              </MainLayout>
            </ProtectedRoute>
          } />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;