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
            </header>
        );
    }
}

export default Header;
