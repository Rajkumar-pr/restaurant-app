

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { MenuList } from "../data/data";
import CartPage from "./CartPage";
import UserContext from "../UserContext";

const Menu = () => {
  const { cartItems, setCartItems, tot, setTot } = useContext(UserContext);

  const addToCart = (menu) => {
    setTot((tot) => tot + menu.price);
    setCartItems([...cartItems, menu]);
  };

  const removeFromCart = (menu) => {
     
    let t=false;
    {cartItems.map((men)=>{
      if(men.id===menu.id & !t)
      {
      setTot((tot) => tot - menu.price);
      t==true;
      }
    })}
    setCartItems(updatedCart);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Render Menu Items */}
        {MenuList.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                {/* Add to Cart Button */}
                <button style={{ backgroundColor: 'blue', marginTop: '20px' }} onClick={() => addToCart(menu)}>Add To Cart</button>
                <br />
                <button style={{ backgroundColor: 'red', marginTop: '20px' }} onClick={() => removeFromCart(menu)}>Remove from Cart</button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* Render Cart Component */}
      <Link to='/cart'>
        <button>
          View Total Cart
        </button>
      </Link>
    </Layout>
  );
};

export default Menu;
