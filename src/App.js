import React from 'react';
import TagComponent from './components/TagComponent'
import './App.scss';

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Tag React Component</h1>
        <h2 className="subtitle">A simple react component where you can add and remove Tags</h2>
        <TagComponent/>
      </div>
    </section>
  );
}

export default App;
