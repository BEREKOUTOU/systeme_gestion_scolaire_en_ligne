import React from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';


const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api. get('/auth/me');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);
  
  return (
    <MainLayout>
     <h1>Home</h1>
    </MainLayout>
  );
};

export default Home;
