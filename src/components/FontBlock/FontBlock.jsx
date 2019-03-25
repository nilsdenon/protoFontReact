import React, { Component } from 'react';

import './FontBlock.scss';

export default class FontBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fontBlocks: [
                {
                    primaryText: 'Hello, my name is',
                    secondaryText: 'Damien Pierre'
                }
            ]
        };
    }
    render() {
        return (
            <div className="fontBlock">
                <section className="fontblock__body">
                    <div className="fontblock__headline">
                        <div className="font-container">
                            <div className="font font-primary">
                                Lorem ipsum dolor sit amet
                            </div>
                            <dl className="hud hud--fontdetails">
                                <dt>Font Family</dt>
                                <dd className="hud-fontName">test</dd>
                                <dt>Font Size</dt>
                                <dd className="hud-fontSize">test</dd>
                                <dt>Letter-Spacing</dt>
                                <dd className="hud-letterSpacing">test</dd>
                            </dl>
                        </div>
                    </div>
                </section>
                <aside className="fontblock__menu">
                    <nav className="fontblock__nav">
                        <fieldset className="sep">
                            <legend>Headline</legend>
                            <div className="form-group">
                                <textarea
                                    className="custom-textarea"
                                    name="fontText_1_1"
                                    placeholder="Lorem ipsum dolor sit amet"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Font-family
                                </label>
                                <select
                                    className="form-control"
                                    name="fontSelect_1_1"
                                    id="fontSelect_1_1"
                                />
                            </div>
                        </fieldset>
                    </nav>
                </aside>
            </div>
        );
    }
}
