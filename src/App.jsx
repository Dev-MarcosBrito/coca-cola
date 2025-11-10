import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Particles from './components/Particles';
import BackToTop from './components/BackToTop';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Particles />
      <Header />
      <main id="main">
        <Hero />
        <Historia />
        <Produtos />
        <Contato />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

