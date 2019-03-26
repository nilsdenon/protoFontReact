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
                    {this.props.version && (
                        <span className="branding__version">
                            {this.props.version}
                        </span>
                    )}
                </div>
            </header>
        );
    }
}

export default Header;
