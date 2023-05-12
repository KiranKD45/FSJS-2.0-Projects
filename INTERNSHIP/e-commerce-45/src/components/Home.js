import React from 'react'
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
     <div className='home-container'>
<img className='home-image'
src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg" alt='home-image'/>
     </div>

    <div className='home-row'>

     <Product title="Noise Pulse 2 Max Advanced Bluetooth Calling Smart Watch with 1.85'' Display, 550 NITS Brightness, Smart DND, 10 Days Battery." rating={5} price={"Rs. 3499"} image = "https://m.media-amazon.com/images/I/61SSVxTSs3L._AC_UL600_FMwebp_QL65_.jpg"/>

     <Product title="HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M" rating={5} price={"Rs. 53499"} image = "https://m.media-amazon.com/images/I/81wJJj6jLfL._AC_UL480_QL65_.jpg" />
      </div> 
    <div className='home-row'>
    <Product title="Nivia Storm Football - Size 5" rating={5} price={"Rs. 499"} image = "https://m.media-amazon.com/images/I/61RpRYFb2wL._SX679_.jpg" />

     <Product title="Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating" rating={4} price={"Rs. 1499"} image = "https://m.media-amazon.com/images/I/61S9aVnRZDL._AC_UL600_FMwebp_QL65_.jpg" /> 
     
     <Product title="Fire-Boltt Ring 3 Smart Watch 1.8 Biggest Display with Advanced Bluetooth Calling Chip, Voice Assistance" rating={3} price={"Rs. 3499"} image = "https://m.media-amazon.com/images/I/61uUuRZ8yuL._AC_UL600_FMwebp_QL65_.jpg" />
     </div>

    <div className='home-row'> <Product title="Dr. Morepen BG-03 Blood Glucose Test Strips 50s Pack" rating={5} price={"Rs. 1199"} image = "https://m.media-amazon.com/images/I/41Jgu6BDxAL._AC_UL480_QL65_.jpg" /></div>

         </div>
  )
}

export default Home