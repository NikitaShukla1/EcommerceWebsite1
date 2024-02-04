import React, { useState } from "react";
import './Hamburger.css'
import { Link } from "react-router-dom";

const Hamburger = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [iscrossClicked, setIscrossClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
    }
    const closeNav = () => {
        if (!iscrossClicked) {
            setMenuClass("menu hidden")
        }
    }
    return (
        <div style={{ width: '100%',position: 'fixed',zIndex:'2' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <ul>
                    <li>
                        <Link to="/AddProduct">Add New Product</Link>
                    </li>
                    <li>
                        <Link to="/ViewProducts">View Product</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger