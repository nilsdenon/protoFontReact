import React from 'react';

import FontBlockText from './FontBlockInputText';

export default class FontBlockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            active: true
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }

    handleToggleMenu = () => {
        this.setState({
            active: !this.state.active
        });
    };

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
                className={
                    this.state.active ? 'fontblock is-open' : 'fontblock'
                }
            >
                <button
                    className={`burger-menu ${this.state.active &&
                        'is-active'}`}
                    onClick={this.handleToggleMenu}
                >
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
                                        onChange={
                                            this.props
                                                .handlePrimaryFontblockNameChange
                                        }
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
                                        onChange={
                                            this.props
                                                .handleSecondaryFontblockNameChange
                                        }
                                        defaultValue={this.props.secondaryText}
                                    />
                                </div>
                            </fieldset>
                        </form>
                        <div className="form-group">
                            <button
                                type="button"
                                onClick={this.props.handleRemoveFontblock}
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
