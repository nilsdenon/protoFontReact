import React from 'react';

import FontBlockText from './FontBlockInputText';
/*{
    idx,
    primaryText,
    secondaryText,
    handlePrimaryFontblockNameChange,
    handleSecondaryFontblockNameChange,
    length,
    handleRemoveFontblock
}*/

export default class FontBlockComponent extends React.Component {
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

    render() {
        return (
            <div
                id={`fontblock-${this.props.id + 1}`}
                className="fontblock is-open"
            >
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
                        text={this.props.primaryText}
                    />
                    <FontBlockText
                        blockname={'bodytext'}
                        text={this.props.secondaryText}
                    />
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
                                        placeholder={`Primary Text #${this.props
                                            .idx + 1}`}
                                        onChange={this.props.handlePrimaryFontblockNameChange(
                                            this.props.idx
                                        )}
                                        defaultValue={this.props.primaryText}
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="sep" id="subform__bodytext">
                                <legend>Body Text</legend>
                                <div className="form-group">
                                    <textarea
                                        className="custom-textarea"
                                        placeholder={`Secondary Text #${this
                                            .props.idx + 2}`}
                                        onChange={this.props.handleSecondaryFontblockNameChange(
                                            this.props.idx
                                        )}
                                        defaultValue={this.props.secondaryText}
                                    />
                                </div>
                            </fieldset>
                        </form>
                        <div className="form-group">
                            <button
                                type="button"
                                onClick={this.props.handleRemoveFontblock(
                                    this.props.idx
                                )}
                                className="small btn btn-danger btn-sm"
                            >
                                Remove Fontblock -
                            </button>
                        </div>
                    </nav>
                </aside>
            </div>
        );
    }
}
