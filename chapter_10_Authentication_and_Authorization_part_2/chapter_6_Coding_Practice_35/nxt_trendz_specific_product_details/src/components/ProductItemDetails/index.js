import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Cookies from 'js-cookie';
import './index.css'; // Add a CSS file for styling

function ProductItemDetails() {
  const { id } = useParams(); // Extract the product ID from the URL
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token');
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/products/${id}`, options);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        setProductData(data); // Set the fetched product data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="loader-container">Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="error-container">Error: {error}</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="product-details-container">
        <div className="product-image">
          <img src={productData.image_url} alt={productData.name} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{productData.name}</h1>
          <p className="product-description">{productData.description}</p>
          <p className="product-price">Price: ${productData.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetails;
