import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Aperçu</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Statut</span>
                <span className="font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Inscription</span>
                <span className="font-medium">Complet</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Documents</span>
                <span className="font-medium">2/3 Téléchargé</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                Télécharger des documents
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                Voir le profil
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                Modifier les informations
              </button>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Notifications </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3">
                <p className="font-medium">Vérification des documents </p>
                <p className="text-sm text-gray-600">Vos documents sont en cours d'examen</p>
                <p className="text-xs text-gray-400">il y a 2 heures</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3">
                <p className="font-medium">Inscription effectuée</p>
                <p className="text-sm text-gray-600">Votre inscription a bien été effectuée</p>
                <p className="text-xs text-gray-400">il y a 1 jour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
