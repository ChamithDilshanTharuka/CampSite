import React from 'react'

function RectangleCard() {
  return (
    <div>
       <div className="container mt-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="card h-100">
            <img src="SmallBanner/small-banner1.jpg" className="card-img-top" alt="SmallBanner1" style={{ height: '200px' }}/>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
          <div className="card h-100">
            <img src="SmallBanner/small-banner2.jpg" className="card-img-top" alt="SmallBanner2"style={{ height: '200px' }}/>
          </div>
        </div>
    </div>
 </div>
</div>
  )
}

export default RectangleCard