import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  
  // Only show relevant menu items based on user role
  const isParent = user?.role === 'parent';
  const isAdmin = user?.role === 'admin';
  const isTeacher = user?.role === 'teacher';

  return (
    <aside className={`bg-gray-800 text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && <h2 className="text-xl font-semibold">Menu</h2>}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-md hover:bg-gray-700"
        >
          {collapsed ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
            </svg>
          )}
        </button>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              {!collapsed && <span className="ml-3">Tableau de bord</span>}
            </NavLink>
          </li>
          
          {/* Registration Menu - Parents only */}
          {isParent && (
            <li>
              <NavLink 
                to="/registration" 
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                {!collapsed && <span className="ml-3">Inscription</span>}
              </NavLink>
            </li>
          )}

          {/* Registration status - Parents only */}
          {isParent && (
            <li>
              <NavLink 
                to="/registration/status" 
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                {!collapsed && <span className="ml-3">Suivi d'inscription</span>}
              </NavLink>
            </li>
          )}
          
          {/* Admin registration approval */}
          {isAdmin && (
            <li>
              <NavLink 
                to="/admin/registrations" 
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {!collapsed && <span className="ml-3">Validations</span>}
              </NavLink>
            </li>
          )}
          
          {/* Billing - Parents only */}
          {isParent && (
            <li>
              <NavLink 
                to="/billing" 
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                {!collapsed && <span className="ml-3">Facturation</span>}
              </NavLink>
            </li>
          )}
          
          {/* Academic Results - Parents and Teachers */}
          {(isParent || isTeacher) && (
            <li>
              <NavLink 
                to="/academic/results" 
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                {!collapsed && <span className="ml-3">Résultats académiques</span>}
              </NavLink>
            </li>
          )}
          
          {/* Grade entry - Teachers only */}
          {isTeacher && (
            <li>
              <NavLink 
                to="/teacher/grades" 
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                {!collapsed && <span className="ml-3">Saisie des notes</span>}
              </NavLink>
            </li>
          )}
          
          {/* Administration - Admin only */}
          {isAdmin && (
            <>
              <li>
                <NavLink 
                  to="/admin/users" 
                  className={({ isActive }) => 
                    `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  {!collapsed && <span className="ml-3">Utilisateurs</span>}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/classes" 
                  className={({ isActive }) => 
                    `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  {!collapsed && <span className="ml-3">Classes</span>}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/reports" 
                  className={({ isActive }) => 
                    `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-700' : 'hover:bg-gray-700'}`
                  }
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  {!collapsed && <span className="ml-3">Rapports</span>}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;