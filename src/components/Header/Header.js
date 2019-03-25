import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="branding">
                    <span className="branding__name">
                        {this.props.branding}
                    </span>
                    <span className="branding__claim">{this.props.claim}</span>
                </div>
                <button id="burger" className="burger-menu">
                    <div className="burger-menu-inner">
                        <span />
                        <span />
                        <span />
                    </div>
                </button>
            </header>
        );
    }
}

export default Header;
