import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <div className="headerImgDiv" style={{ width: '100vw', height: '60vh', objectFit:'contain'}}>
      <h1 style={{position:'absolute',top:'35%',left:'50%',transform:'translate(-50%,-50%)',zIndex:'1',fontSize:'180px',fontFamily:'Montserrat',fontWeight:'550',whiteSpace:"nowrap",color:"white",textShadow:'0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 6px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%)'}}> SHOE FANATIC </h1>
        <img src="../images/MJ-header.jpg" style={{width:'inherit',height:'inherit',objectFit:'cover', objectPosition:"50% 90%", filter:"contrast(1.09)",filter:"blur(1px)",transform:'scale(1.01)'}} ></img>
      </div>
      <CategoryMenu />
      <ProductList />
      <Footer/>
    </div>
  );
};

export default Home;
