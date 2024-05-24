import React from 'react';


function CardDeck() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/ImageCategory/backpack.jpeg" className="card-img-top" alt="backpackImg"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/ImageCategory/backpack.jpeg" className="card-img-top" alt="backpackImg"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/ImageCategory/backpack.jpeg" className="card-img-top" alt="backpackImg"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="/ImageCategory/backpack.jpeg" className="card-img-top" alt="backpackImg"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDeck;
