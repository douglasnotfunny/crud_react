import React, { useState } from 'react';

function Create() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const [productId, setProductId] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(json => setProductId(json.id));
  }

  return (
    <div>
      <h2>Add Product</h2>
      {productId && <p>Product ID: {productId}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={product.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={product.description} onChange={handleInputChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Create;
