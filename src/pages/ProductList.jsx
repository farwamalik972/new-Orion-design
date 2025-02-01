import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CustomNav from '../components/CustomNav';
import Banner from '../components/Banner';
import BannerCards from '../components/BannerCards';
import Footer from '../components/Footer';
import config from "../config.js";


function LedBulb() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/api/gettype/${id}`)
      .then(response => {
        if (response.data.length > 0) {
          setProduct(response.data[0]);
        }
      })
      .catch(error => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  return (
    <div className='led-bulb-page'>
      <CustomNav />
      {product ? (
        <>
          <Banner
            Image={`${config.API_BASE_URL}/storage/${product.image}`} 
            title={product.category_name} 
            description={"Shop Now"}
          />
          <BannerCards categoryId={id} /> 
        </>
      ) : (
        <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '50px' }}>
        <p>Product Not Found</p>
      </div>
      )}
      <Footer />
    </div>
  );
}

export default LedBulb;
