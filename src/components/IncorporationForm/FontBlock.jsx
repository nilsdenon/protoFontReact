import React from 'react';

import './FontBlock.scss';

export default class FontBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            primaryText: 'Hello my name is',
            blocks: [
                {
                    primaryText: 'Hello my name is',
                    secondaryText: 'Damien Pierre'
                }
            ]
        };
    }

    handlePrimaryFontblockNameChange = idx => evt => {
        const newblocks = this.state.blocks.map((fontblock, sidx) => {
            if (idx !== sidx) return fontblock;
            return {
                ...fontblock,
                primaryText: evt.target.value
            };
        });

        this.setState({ blocks: newblocks });
    };
    handleSecondaryFontblockNameChange = idx => evt => {
        const newblocks = this.state.blocks.map((fontblock, sidx) => {
            if (idx !== sidx) return fontblock;
            return {
                ...fontblock,
                secondaryText: evt.target.value
            };
        });

        this.setState({ blocks: newblocks });
    };

    handleAddFontblock = () => {
        this.setState({
            blocks: this.state.blocks.concat([
                {
                    primaryText: this.state.primaryText,
                    secondaryText: this.state.secondaryText
                }
            ])
        });
    };

    handleRemoveFontblock = idx => () => {
        this.setState({
            blocks: this.state.blocks.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {
        return (
            <div>
                {this.state.blocks.map((fontblock, idx) => (
                    <div key={idx} className="fontblock is-open">
                        <section className="fontblock__body">
                            <div className="fontblock__headline">
                                <div className="font-container">
                                    <div className="font font-primary">
                                        {fontblock.primaryText}
                                    </div>
                                    <dl className="hud hud--fontdetails">
                                        <dt>Font Family</dt>
                                        <dd className="hud-fontName">test</dd>
                                        <dt>Font Size</dt>
                                        <dd className="hud-fontSize">test</dd>
                                        <dt>Letter-Spacing</dt>
                                        <dd className="hud-letterSpacing">
                                            test
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="fontblock__bodytext">
                                <div className="font-container">
                                    <div
                                        id="font_1_2"
                                        className="font font-secondary"
                                    >
                                        {fontblock.secondaryText}
                                    </div>
                                    <dl
                                        id="hud_1_2"
                                        className="hud_1_2 hud hud--fontdetails"
                                    >
                                        <dt>Font Family</dt>
                                        <dd className="hud-fontName">test</dd>
                                        <dt>Font Size</dt>
                                        <dd className="hud-fontSize">test</dd>
                                        <dt>Letter-Spacing</dt>
                                        <dd className="hud-letterSpacing">
                                            test
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </section>
                        <aside className="fontblock__menu">
                            <nav className="fontblock__nav">
                                <form
                                    name="fontblock_form_1"
                                    className="fontblock__form"
                                    action=""
                                >
                                    <fieldset
                                        className="sep"
                                        id="subform__headline"
                                    >
                                        <legend>Headline</legend>
                                        <div className="form-group">
                                            <textarea
                                                className="custom-textarea"
                                                placeholder={`Primary Text #${idx +
                                                    1}`}
                                                onChange={this.handlePrimaryFontblockNameChange(
                                                    idx
                                                )}
                                                defaultValue={
                                                    fontblock.primaryText
                                                }
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset
                                        className="sep"
                                        id="subform__bodytext"
                                    >
                                        <legend>Body Text</legend>
                                        <div className="form-group">
                                            <textarea
                                                className="custom-textarea"
                                                placeholder={`Secondary Text #${idx +
                                                    2}`}
                                                onChange={this.handleSecondaryFontblockNameChange(
                                                    idx
                                                )}
                                                defaultValue={
                                                    fontblock.secondaryText
                                                }
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </nav>
                        </aside>

                        <button
                            type="button"
                            onClick={this.handleRemoveFontblock(idx)}
                            className="small"
                        >
                            -
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddFontblock}
                    className="small"
                >
                    Add Fontblock
                </button>
            </div>
        );
    }
}
