import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/bar/SideBar';
import MainContent from '../components/ui/MainContent';


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Index;