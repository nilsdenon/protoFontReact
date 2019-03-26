import React from 'react';

export default class Block extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.props = {
            idx,
            primaryText,
            secondaryText,
            handlePrimaryFontblockNameChange,
            handleSecondaryFontblockNameChange,
            length,
            handleRemoveFontblock
        };
    }

    render() {
        return (
            <div className="fontblock is-open">
                <button className="burger-menu">
                    <div className="burger-menu-inner">
                        <span />
                        <span />
                        <span />
                    </div>
                </button>
                <section className="fontblock__body">
                    <div className="fontblock__headline">
                        <div className="font-container">
                            <div className="font font-primary">
                                {this.props.primaryText}
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
                    <div className="fontblock__bodytext">
                        <div className="font-container">
                            <div id="font_1_2" className="font font-secondary">
                                {secondaryText}
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
                                <dd className="hud-letterSpacing">test</dd>
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
                            <fieldset className="sep" id="subform__headline">
                                <legend>Headline</legend>
                                <div className="form-group">
                                    <textarea
                                        className="custom-textarea"
                                        placeholder={`Primary Text #${idx + 1}`}
                                        onChange={handlePrimaryFontblockNameChange(
                                            idx
                                        )}
                                        defaultValue={primaryText}
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="sep" id="subform__bodytext">
                                <legend>Body Text</legend>
                                <div className="form-group">
                                    <textarea
                                        className="custom-textarea"
                                        placeholder={`Secondary Text #${idx +
                                            2}`}
                                        onChange={handleSecondaryFontblockNameChange(
                                            idx
                                        )}
                                        defaultValue={secondaryText}
                                    />
                                </div>
                            </fieldset>
                        </form>
                        {length > 1 ? (
                            <div className="form-group">
                                <button
                                    type="button"
                                    onClick={handleRemoveFontblock(idx)}
                                    className="small btn btn-danger btn-sm"
                                >
                                    Remove Fontblock -
                                </button>
                            </div>
                        ) : null}
                    </nav>
                </aside>
            </div>
        );
    }
}
