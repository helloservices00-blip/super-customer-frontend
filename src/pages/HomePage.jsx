// HomePage.jsx
export default function HomePage({ user }) {
  return <div style={cardStyle}><h1>Welcome, {user.name}!</h1><p>This is Home page.</p></div>;
}

// AccountPage.jsx
export default function AccountPage({ user }) {
  return <div style={cardStyle}><h1>Account Info</h1><p>Name: {user.name}</p><p>Email: {user.email}</p></div>;
}

// CartPage.jsx
export default function CartPage() {
  return <div style={cardStyle}><h1>Cart</h1><p>Your cart is empty.</p></div>;
}

const cardStyle = { background:"#fff", padding:"40px", borderRadius:"16px", textAlign:"center", boxShadow:"0 8px 20px rgba(0,0,0,0.2)" };
