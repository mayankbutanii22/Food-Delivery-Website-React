// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { clearCart } from '../Redux/cartSlice';
// import { addOrder } from '../Redux/userSlice';        
// import { nanoid } from '@reduxjs/toolkit';            
// import { useNavigate } from 'react-router-dom';       
// import styles from './CheckoutPage.module.css';

// const CheckoutPage = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch  = useDispatch();
//   const navigate  = useNavigate();                   


//   const [form, setForm] = useState({
//     fullName: '', email: '', address: '',
//     postalCode: '', mobile: '', payment: '',
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const isEmail  = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//   const isMobile = (v) => /^[6-9]\d{9}$/.test(v);         
//   const isPostal = (v) => /^\d{6}$/.test(v);               

  
//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity, 0
//   );


//   const handlePlaceOrder = () => {
//     const { fullName, email, address, postalCode, mobile, payment } = form;

//     const valid =
//       fullName && isEmail(email) && address &&
//       isPostal(postalCode) && isMobile(mobile) && payment;

//     if (!valid) {
//       alert('Please fill out all fields with valid data.');
//       return;
//     }

    
//     const newOrder = {
//       id: nanoid(),
//       items: cartItems,
//       total,
//       status: 'Placed',
//       date: new Date().toISOString(),
//       shipping: { fullName, address, postalCode, mobile },
//       paymentMethod: payment,
//     };

    
//     dispatch(addOrder(newOrder));
//     dispatch(clearCart());

    
//     setForm({
//       fullName: '', email: '', address: '',
//       postalCode: '', mobile: '', payment: '',
//     });
//     navigate('/profile');  
//   };

//   return (
//     <div className={styles.checkoutContainer}>
//       <h2 className={styles.heading}>Checkout</h2>

      
//       <div className={styles.section}>
//         <h4>Customer Details</h4>
//         <input
//           name="fullName"
//           placeholder="Full Name"
//           value={form.fullName}
//           onChange={handleChange}
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//         />
//       </div>

  
//       <div className={styles.section}>
//         <h4>Delivery Address</h4>
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={form.address}
//           onChange={handleChange}
//         />
//         <input
//           name="postalCode"
//           placeholder="Postal Code"
//           value={form.postalCode}
//           onChange={handleChange}
//         />
//         <input
//           name="mobile"
//           placeholder="Mobile Number"
//           value={form.mobile}
//           onChange={handleChange}
//         />
//       </div>

      
//       <div className={styles.section}>
//         <h4>Payment Method</h4>
//         <select
//           name="payment"
//           value={form.payment}
//           onChange={handleChange}
//         >
//           <option value="">Select Payment</option>
//           <option value="cod">Cash on Delivery</option>
//           <option value="card">Credit / Debit Card</option>
//           <option value="upi">UPI</option>
//         </select>
//       </div>

      
//       <div className={styles.section}>
//         <h4>Order Summary</h4>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map((it) => (
//             <p key={it.id}>{it.name} × {it.quantity}</p>
//           ))
//         )}
//         <h4 className={styles.total}>Total&nbsp;: ₹{total}</h4>
//       </div>

//       <button
//         className={styles.placeOrderBtn}
//         onClick={handlePlaceOrder}
//         disabled={cartItems.length === 0}
//       >
//         Place&nbsp;Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;




import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../Redux/cartSlice';
import { addOrder } from '../Redux/userSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import store  from '../Redux/store'; 
import styles from './CheckoutPage.module.css';


const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    postalCode: '',
    mobile: '',
    payment: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

 
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isMobile = (v) => /^[6-9]\d{9}$/.test(v);
  const isPostal = (v) => /^\d{6}$/.test(v);


  const handlePlaceOrder = () => {
    const { fullName, email, address, postalCode, mobile, payment } = form;

    const valid =
      fullName &&
      isEmail(email) &&
      address &&
      isPostal(postalCode) &&
      isMobile(mobile) &&
      payment;

    if (!valid) {
      alert('Please fill out all fields with valid data.');
      return;
    }

    const newOrder = {
      id: nanoid(),
      items: cartItems,
      total,
      status: 'Placed',
      date: new Date().toISOString(),
      shipping: { fullName, address, postalCode, mobile },
      paymentMethod: payment,
    };

    
    dispatch(addOrder(newOrder));
    console.log('orders after add →', store.getState().user.orders);
    dispatch(clearCart());

  
    window.alert('Order placed successfully!');


    navigate('/profile/orders');


    setForm({
      fullName: '',
      email: '',
      address: '',
      postalCode: '',
      mobile: '',
      payment: '',
    });
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.heading}>Checkout</h2>

      {/* Customer Details */}
      <div className={styles.section}>
        <h4>Customer Details</h4>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Delivery Address */}
      <div className={styles.section}>
        <h4>Delivery Address</h4>
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          name="postalCode"
          placeholder="Postal Code"
          value={form.postalCode}
          onChange={handleChange}
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />
      </div>

      {/* Payment Method */}
      <div className={styles.section}>
        <h4>Payment Method</h4>
        <select name="payment" value={form.payment} onChange={handleChange}>
          <option value="">Select Payment</option>
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit / Debit Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>

      {/* Order Summary */}
      <div className={styles.section}>
        <h4>Order Summary</h4>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <p key={item.id}>
              {item.name} × {item.quantity} – ₹{item.price * item.quantity}
            </p>
          ))
        )}
        <h4 className={styles.total}>Total : ₹{total}</h4>
      </div>

      {/* CTA */}
      <button
        className={styles.placeOrderBtn}
        onClick={handlePlaceOrder}
        disabled={cartItems.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;