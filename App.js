import React, { useState } from "react";
import "./App.css";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Ballpoint Pen",
      price: 30,
      image: "https://4.imimg.com/data4/NR/OE/MY-28057574/flair-marathon-gel-pen-500x500.jpg",
    },
    {
      id: 2,
      name: "Flair Writo Meter Pen",
      price: 50,
      image: "https://onmob.in/wp-content/uploads/2022/01/Flair-Writo-meter.jpg",
    },
    {
      id: 3,
      name: "Flair Ezee Click Pen",
      price: 20,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/DI/XP/RJ/136014931/ezee-click-th-500x500.jpg",
    },
    {
      id: 4,
      name: "Flair Pen",
      price: 30,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/QM/FY/IH/136014931/q-five-th-500x500.jpg",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.find((item) => item.id === product.id);
      if (isInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Shopping Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price} × {product.quantity}{" "}
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default App;
