import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="Nav-header">
            <p>navigation bar</p>
            <div className="Nav-dropdown">
                <p>drop</p>
                <div className="Nav-dropdown-content">
                    <button onClick={() => console.log("load Property Owner options")}>Property Owner</button>
                    <button onClick={() => console.log("load Resident page")}>Resident</button>
                    <button onClick={() => console.log("load Installer page")}>Installer</button>
                    <button type="button" onClick={() => console.log("load Contact page")}>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Header;