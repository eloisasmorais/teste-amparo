import React from 'react';
import '../Styles/header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="main-header">
                <h1 className="header-title">FaleMais</h1>
                <ul className="menu">
                    <li className="item">A plataforma</li>
                    <li className="item">O produto</li>
                    <li className="item">Valores</li>
                    ><li className="item">Simulação</li>
                </ul>
            </div>
        )
    }
}

export default Header;