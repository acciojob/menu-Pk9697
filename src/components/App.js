import React, { useState } from 'react'
import '../styles/App.css'
import menusData from '../data/data'

const App = () => {
    const [menus, setMenus] = useState(menusData)
    const uniqueCategories = [...new Set(menusData.map(menu => menu.category))]
    const capitalizeEveryWordFirstCharacter = (str) => {
        return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const handleClick = (category) => {
        if (category === "all") {
            setMenus(menusData)
        } else {
            setMenus(menusData.filter(menu => menu.category === category))
        }
    }

	return (
        <div id="main" className='app'>
            <div>
                <h1>Our Menu</h1>
                <hr/>
            </div>
			<ul>
                <li onClick={()=>handleClick("all")}>All</li>
                {uniqueCategories.map((category,idx) => (
                    <li id={`filter-btn-${idx+1}`} key={category} onClick={()=>handleClick(category)}>{category[0].toUpperCase() + category.slice(1)}</li>
                ))}
			</ul>
            <div className='menu-grid'>
                {menus.map((menu) => (
                    <div data-test-id={`menu-item-${menu.category}`} key={menu.id} className='item-grid'>
                        <div className='item-image'>
                            <img src='http://unsplash.it/400/300?random&gravity=center' />
                        </div>
                        <div className='item-name_price'>
                            <h4 className='item-name'>{capitalizeEveryWordFirstCharacter(menu.title)}</h4>
                            <h4 className='item-price'>$ {menu.price}</h4>
                        </div>
                        <p className='item-description'>{menu.desc}</p>
                    </div>
                ))}
			</div>
		</div>
	)
}

export default App
