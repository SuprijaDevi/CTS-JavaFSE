import React, { useState } from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import { books } from './data';

function App() {
  const [view, setView] = useState('books');

  const renderComponentIfElse = () => {
    if (view === 'books') return <BookDetails books={books} />;
    else if (view === 'blogs') return <BlogDetails />;
    else return <CourseDetails />;
  };

  const renderComponentTernary =
    view === 'books' ? (
      <BookDetails books={books} />
    ) : view === 'blogs' ? (
      <BlogDetails />
    ) : (
      <CourseDetails />
    );

  return (
    <div className="App">
      <h1>Blogger App</h1>

      <div className="buttons">
        <button onClick={() => setView('books')}>Book Details</button>
        <button onClick={() => setView('blogs')}>Blog Details</button>
        <button onClick={() => setView('courses')}>Course Details</button>
      </div>

      <hr />

      <div className="view-section">
        <h2>Using If-Else Conditional Rendering:</h2>
        {renderComponentIfElse()}
      </div>

      <div className="view-section">
        <h2>Using Ternary Operator:</h2>
        {renderComponentTernary}
      </div>

      <div className="view-section">
        <h2>Using Logical &&:</h2>
        {view === 'books' && <BookDetails books={books} />}
        {view === 'blogs' && <BlogDetails />}
        {view === 'courses' && <CourseDetails />}
      </div>
    </div>
  );
}

export default App;
