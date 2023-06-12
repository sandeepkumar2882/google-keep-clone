import React from 'react';
import './App.scss';
import CreateNote from './Component/CreateNote/CreateNote';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Note from './Component/Note/Note';

function App() {

  return (
    <>
      <Header />
      <CreateNote />
      
      {/* Pass a parent class for all notes */}
      <div className='cardsNote'>
        <Note />
      </div>
      <Footer />
    </>
  );
}

export default App;
