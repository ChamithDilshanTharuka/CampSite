import React, { useState } from 'react'
import Featured from './Featured'
import BestSellers from './BestSellers';


function Latest() {

    const [visibleSection, setVisibleSection] = useState('featured');

    const handleClick = (section) => {
        setVisibleSection(section);
    };

return (
    <div>
        <div className="d-flex justify-content-center align-items-center">
            <button className={`btn mx-2 ${visibleSection === 'featured' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleClick('featured')}>FEATURED</button>
            <button className={`btn mx-2 ${visibleSection === 'best-sellers' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleClick('best-sellers')}>BEST SELLERS</button>
        </div>
        {visibleSection === 'featured' &&(
            <div className='featured'>
                <Featured/>
            </div>
        )}
  
        {visibleSection === 'best-sellers' &&(
            <div className='best-sellers'>
                <BestSellers/>
            </div>
        )}
        
    </div>
   
);

}

export default Latest