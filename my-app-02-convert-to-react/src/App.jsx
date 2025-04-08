import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BookTable from './components/BookTable';

function App() {
  const [books, setBooks] = useState([]);

    // Modified to use the deployed backend URL - Unit 7 - Lesson 4 - deployment
    //        fetch('http://localhost:3000/api/books') // Fetch from backend
    useEffect(() => {
        fetch('https://books-service-fr34.onrender.com/api/books') // Fetch from backend
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error))
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className='d-flex align-items-center mb-4'>
          <img src="/img/books.png" style={{ width: '90px', height:'auto' }} alt="Books" />
          &nbsp;<h1>Book Inventory</h1>
        </div>
        <BookTable books={books} />
      </div>
      <Footer />
    </div>
  )
}

export default App
