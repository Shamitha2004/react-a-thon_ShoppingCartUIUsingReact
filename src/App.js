import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Img1 from './imgs/d3.jpg';
import Img2 from './imgs/d4.jpg';
import Img3 from './imgs/d5.jpg';
import Img4 from './imgs/d6.jpg';
import Img5 from './imgs/d7.jpg';
import Img6 from './imgs/d8.jpg';
import Img7 from './imgs/j1.jpg';
import Img8 from './imgs/j2.jpg';
import Img9 from './imgs/j3.jpg';
import Img10 from './imgs/l1.jpg';
import Img11 from './imgs/l2.jpg';
import Img12 from './imgs/l3.jpg';
import Img13 from './imgs/j4.jpg';
import Img14 from './imgs/j5.jpg';
import Img15 from './imgs/j6.png';
import Img16 from './imgs/l4.png';
import Img17 from './imgs/l5.png';
import Img18 from './imgs/l6.jpeg';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="App" align='center'>
      <header className="App-header" id='header'>
      <h1>GHOST : The Shopping Cart</h1>
        < Nav />
      </header>
      
      <div className="content">
      <div className='product-heading'>
          <h2>Products</h2>
          </div>
          <div>
          <h1 id='headings'>CLOTHINGS</h1>
          </div>
          <div className="product-list">
          <Product id={1} name="Kurta - Men" img={Img1} price={900} addToCart={addToCart} />
          <Product id={2} name="Daily Use T-shirts" img={Img2}  price={150} addToCart={addToCart} />
          <Product id={3} name="Lehenga" img={Img3}  price={900} addToCart={addToCart} />
          
          <Product id={4} name="Denim Jacket" img={Img4} price={999} addToCart={addToCart} />
          <Product id={5} name="Kids Wear - Girls" img={Img5}  price={700} addToCart={addToCart} />
          <Product id={6} name="Kids Wear - Boys" img={Img6}  price={800} addToCart={addToCart} />
          </div>
          <div>
          <h1 id='headings'>JEWELLERIES</h1>
          </div>
          <div className="product-list">
          <Product id={7} name="Necklace" img={Img7} price={150} addToCart={addToCart} />
          <Product id={13} name="Ring (White Stone)" img={Img13} price={300} addToCart={addToCart} />
          <Product id={8} name="Bracelet" img={Img8}  price={100} addToCart={addToCart} />
          <Product id={14} name="Necklace(Sapphire Stone)" img={Img14}  price={500} addToCart={addToCart} />
          <Product id={9} name="Earing" img={Img9}  price={120} addToCart={addToCart} />
          <Product id={15} name="Necklace Set" img={Img15}  price={300} addToCart={addToCart} />
          </div>
          <div>
          <h1 id='headings'>LAPTOPS</h1>
          </div>
          <div className="product-list">
          <Product id={10} name="Dell Inspiron Laptop" img={Img10} price={59600} addToCart={addToCart} />
          <Product id={11} name="HP Pavilon Laptop" img={Img11}  price={67800} addToCart={addToCart} />
          <Product id={12} name="Lenovo Idea-Pad" img={Img12}  price={90900} addToCart={addToCart} />

          <Product id={16} name="MacBook Air (M1 chip)" img={Img16} price={180000} addToCart={addToCart} />
          <Product id={17} name="MacBook Pro with Retina Display" img={Img17}  price={255000} addToCart={addToCart} />
          <Product id={18} name="Asus Vivobook" img={Img18}  price={70000} addToCart={addToCart} />
        </div>
        </div>< hr />
        <div className="cart">
          <h2>Cart</h2>
          <Cart items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        
      </div>
      <button class="back-button"><a href="#header"><strong>↪</strong></a></button>

      <footer>
    <hr/>
    <div id="contact" align="center">
        <h2 id="ph1">Contact Us</h2>
        <table>
            <br />
            <tr>
                <td align="right top">Address :</td>
                <td>GHOST-The eCart,</td>
            </tr>
            <tr>
                <td><br /></td>
                <td>Sahyadri Building,</td>
            </tr>
            <tr>
                <td><br /></td>
                <td>Adyar, Mangalore,</td>
            </tr>
            <tr>
                <td><br/></td>
                <td>PIN : 575007.</td>
            </tr>
        </table>

    </div>
</footer>
    </div>
    
  );
}
export default App;
