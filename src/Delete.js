import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (index) => {
    const productId = products[index].id;

    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
      });
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
