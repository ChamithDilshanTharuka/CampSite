// Products.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CardDeck from './CardDeck';

const Products = () => {
  const [active, setActive] = useState('Accessories');

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <>
      <Header />

      <div className='main-layout'>
        <div className='content-home'>
{/* SideMenu */}
          <div className='aside'>
            <div className="p-4 text-white">
              <span className="fs-2">Product Categories</span>
              <hr />
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                <button
                    className={`nav-link ${active === 'All' ? 'active' : ''}`}
                    onClick={() => handleClick('All')}
                   >
                    All Products
                  </button>
                  <button
                    className={`nav-link ${active === 'Accessories' ? 'active' : ''}`}
                    onClick={() => handleClick('Accessories')}
                   >
                    Accessories
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${active === 'Backpack' ? 'active' : ''}`}
                    onClick={() => handleClick('Backpack')}
                  >
                    Backpack
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${active === 'Gear' ? 'active' : ''}`}
                    onClick={() => handleClick('Gear')}
                  >
                    Gear
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${active === 'Tents' ? 'active' : ''}`}
                    onClick={() => handleClick('Tents')}
                  >
                    Tents
                  </button>
                </li>
              </ul>
            </div>
          </div>

{/* Main content */}
          <div>
          {active === 'All' && (
                <div className='row All-div'>
                  <h2>Find All Your Needs Here</h2>
                  <CardDeck />
                  <CardDeck />
                  <CardDeck />
                </div>
              )}
            {active === 'Accessories' && (
                <div className='row Accessories-div'>
                  <h2>Accessories</h2>
                  <CardDeck />
                </div>
              )}
            {active === 'Backpack' && (
                <div className='row Backpack-div'>
                  <h2>Backpack</h2>
                  <CardDeck />
                </div>
              )}
            {active === 'Gear' && (
                <div className='row Gear-div'>
                  <h2>Gear</h2>
                  <CardDeck />
                </div>
              )}
            {active === 'Tents' && (
                <div className='row Tents-div'>
                  <h2>Tents</h2>
                  <CardDeck />
                </div>
              )}
          </div>
        </div>

        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
