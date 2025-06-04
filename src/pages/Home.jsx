import React from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/auth/me');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <MainLayout>
      <section
        className="hero py-32 text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/assets/images/Ecole.png')`,
        }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Bienvenue à l'Établissement Scolaire</h1>
        <p className="text-2xl mb-8 drop-shadow-lg">Du maternelle au secondaire, une éducation de qualité pour votre enfant</p>
        <Button href="/Registration/StudentRegistration" className="px-8 py-4 text-lg font-semibold drop-shadow-lg bg-blue-600 hover:bg-blue-700 rounded">
          Inscrire mon enfant
        </Button>
      </section>

      <section className="info-cards grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4 max-w-6xl mx-auto">
        <Card>
          <h2 className="text-2xl font-semibold mb-2">Inscription à distance</h2>
          <p>Permettez aux parents d'inscrire leurs enfants facilement depuis chez eux, en toute sécurité.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold mb-2">Facturation automatique</h2>
          <p>Les factures sont générées automatiquement lors de la validation des inscriptions.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold mb-2">Résultats trimestriels</h2>
          <p>Consultez les résultats trimestriels des élèves en toute transparence.</p>
          <Button href="/Academic/StudentResults" className="mt-4 px-4 py-2">
            Voir les résultats
          </Button>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Home;
