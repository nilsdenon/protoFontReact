//import FontBlockComponent from './FontBlockComponent';
import FontBlockText from './FontBlockInputText';
import React from 'react';

import './FontBlock.scss';

export default class FontBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            primaryText: 'Hello my name is',
            secondaryText: 'Damien Pierre',
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
                        <button className="burger-menu">
                            <div className="burger-menu-inner">
                                <span />
                                <span />
                                <span />
                            </div>
                        </button>
                        <section className="fontblock__body">
                            <FontBlockText
                                blockname={'headline'}
                                text={fontblock.primaryText}
                            />
                            <FontBlockText
                                blockname={'bodytext'}
                                text={fontblock.secondaryText}
                            />
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
                                {this.state.blocks.length > 1 ? (
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            onClick={this.handleRemoveFontblock(
                                                idx
                                            )}
                                            className="small btn btn-danger btn-sm"
                                        >
                                            Remove Fontblock -
                                        </button>
                                    </div>
                                ) : null}
                            </nav>
                        </aside>
                    </div>
                ))}
                {this.state.blocks.length >= 1 ? (
                    <button
                        type="button"
                        onClick={this.handleAddFontblock}
                        className="btn btn-sm btn-primary"
                    >
                        Add Fontblock
                    </button>
                ) : null}
            </div>
        );
    }
}
