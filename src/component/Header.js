import './Header.css';

function Header() {
  return(
    <div className="Header">
      <h3>Today 🗓️</h3>
      <h1 className="Header_date">{new Date().toDateString()}</h1>
    </div>
  );
}

export default Header;