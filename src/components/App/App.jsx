import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import 'normalize.css';
import './App.scss';
import AppHero from '../AppHero/AppHero';
import ProjectsPanel from '../ProjectsPanel/ProjectsPanel';

const App = () => {
  return (
    <>
      <AppHeader />
      <AppHero />
      <main>
        <ProjectsPanel />
      </main>
      <AppFooter />
    </>
  );
};

export default App;
