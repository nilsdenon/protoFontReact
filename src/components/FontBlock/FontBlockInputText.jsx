import React from 'react';

export default class FontBlockText extends React.Component {
    render() {
        return (
            <div className={`"fontblock__${this.props.blockname}"`}>
                <div className="font-container">
                    <div id="font_1_2" className="font font-secondary">
                        {this.props.text}
                    </div>
                    <dl id="hud_1_2" className="hud_1_2 hud hud--fontdetails">
                        <dt>Font Family</dt>
                        <dd className="hud-fontName">test</dd>
                        <dt>Font Size</dt>
                        <dd className="hud-fontSize">test</dd>
                        <dt>Letter-Spacing</dt>
                        <dd className="hud-letterSpacing">test</dd>
                    </dl>
                </div>
            </div>
        );
    }
}