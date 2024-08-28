// src/components/Header.js
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const handleLogoClick = () => {
        navigate('/');
      };

    return (
    <header>
    <div className='navcontainer'>
        <div className="logo">
            <img src="https://skillnation.ai/wp-content/uploads/2023/08/SN_logo-17-1024x415.png"
            alt="Logo"
            onClick={handleLogoClick}
            >

            </img>
        </div>
        <div className='navmenu'>
            <ul>
                <li><a href="https://skillnation.ai/contact/" target='_blank'>Contact Us</a></li>
                <li><a href="https://skillnation.ai/about-us/" target='_blank'>About Us</a></li>
                
            </ul>
        </div>
        <div className='button'>
            <button className="loginbutton">Login</button>
        </div>
        <div className="elementor-menu-toggle" role="button"  aria-label="Menu Toggle" aria-expanded={isMenuOpen} onClick={toggleMenu} >
            {isMenuOpen ? (<svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path></svg>) : (<svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path></svg>)}
		</div>
    </div>
        
        <nav className={`elementor-nav-menu--dropdown elementor-nav-menu__container ${isMenuOpen ? 'open' : ''}`}>
			<ul className="elementor-nav-menu" >
              <li><a href="https://skillnation.ai/contact/" target='_blank' aria-current="page" className="elementor-item elementor-item-active" >Contact Us</a></li>
              <li><a href="https://skillnation.ai/about-us/" target='_blank' className="elementor-item" >About Us</a></li>
            </ul>			
        </nav> 

    
  </header>
    );
};

export default Header;
