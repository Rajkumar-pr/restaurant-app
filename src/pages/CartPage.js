// Cart.js
// Menu.js
// CartPage.js
import React ,{useContext} from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import Layout from "../component/Layout/Layout";
const CartPage = () => {
  const {cartItems,tot}=useContext(UserContext);

  return (
    <Layout>
    <div>
      <h2>Cart Items on Cart Page items:</h2>
      <table>
        <thead>
          <tr>
            <td>name</td>
           <td>price</td>
          </tr>
        </thead>
        <tbody>
         {
          cartItems.map((car)=>(
                 <tr>
                  <td>
                    {car.name}
                  </td>
                  <td>
                    <img src={car.image} style={{height:'30px',width:'30px'}} alt='image'/>
                  </td>
                  <td>
                    {car.price}
                  </td>
                 </tr>
          ))

          
         }
         </tbody>
         </table>
         total bill:{tot}
         <br/>
         <Link to='/back'>
          <button>
          load to menuoption
          </button>
         </Link>
         
    </div>
    </Layout>
  );
};

export default CartPage;
