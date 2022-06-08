import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  const [showcase, setShowcase] = React.useState(false);

  const handleClick = () => {
    setShowcase(true);
  };
  return (
    <div className="home__container">
      <button onClick={handleClick} className="showcases">
        <h1>Showcases</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2823&q=80"
            alt=""
          />
          <br />
          <b>Real Madrid vs FC Barcelona</b>
        </div>
      </button>
      {showcase && (
        <div>
          <h1>Exclusive Pools 👑</h1>
          <Button type="primary">
            <Link to="/pool/duo">Duo</Link>
          </Button>
          <Button type="primary">
            <Link to="/pool/trip">Trio</Link>
          </Button>
          <h1>Premium Regular Pools 💵</h1>
          <Button type="primary">
            <Link to="/pool/9">9 unit pool</Link>
          </Button>
          <Button type="primary">
            <Link to="/pool/19">19 unit pool</Link>
          </Button>
          <Button type="primary">
            <Link to="/pool/49">49 unit pool</Link>
          </Button>
          <Button type="primary">
            <Link to="/pool/99">99 unit pool</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
