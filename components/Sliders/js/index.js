import React from 'react';
import ReactDOM from 'react-dom/client';
import EmblaCarousel from './EmblaCarousel';
import Header from './Header';
import Footer from './Footer';
// import '../css/base.css';
// import '../css/sandbox.css';
// import '../css/embla.css';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => {
  return (
    <main className='sandbox'>
      <Header />
      <section className='sandbox__carousel'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <Footer />
    </main>
  );
};

export default App;
