import React from 'react'

const SideMenu = () => {
  return (
    <div>
         <aside className='aside'>
        <ul>
                <li><a href="/category/Tents">Tents</a></li>
                <li><a href="/category/Gear">Gears</a></li>
                <li><a href="/category/Backpack">Backpack</a></li>
                <li><a href="/category/Accessories">Accessories</a></li>
            </ul>
       </aside>
    </div>
  )
}

export default SideMenu