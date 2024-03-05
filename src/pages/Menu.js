// Menu.js
// Menu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import { MenuList } from "../data/data";
import CartPage from "./CartPage";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menu) => {
    setCartItems([...cartItems, { ...menu, quantity: 1 }]); // Assuming each item has a quantity property.
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
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
                <button onClick={() => addToCart(menu)}>Add to Cart</button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* Render Cart Component */}
      {cartItems.length > 0 && <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
      <Link to="/cart">
        <button>View Cart</button>
      </Link>
    </Layout>
  );
};

export default Menu;
