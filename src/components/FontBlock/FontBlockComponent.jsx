import React from 'react';
import FontBlockText from './FontBlockInputText';
import CustomRangeSliderLabeled from './customRangeSliderLabeled';

export default class FontBlockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            // Als Zufallswert soll das Fontblock Menü immer sichtbar sein!
            active: true,
            primaryFontValues: [50],
            secondaryFontValues: [50]
        };
        //this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }

    handleToggleMenu = () => {
        this.setState({
            active: !this.state.active
        });
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
                    className={
                        this.state.active
                            ? 'burger-menu is-active'
                            : 'burger-menu'
                    }
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
                        fontSize={this.state.primaryFontValues}
                    />
                    <FontBlockText
                        blockname={'bodytext'}
                        text={this.props.secondaryText}
                        fontSize={this.state.secondaryFontValues}
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

                                <div className="form-group">
                                    <CustomRangeSliderLabeled
                                        className="custom-rs"
                                        step={1}
                                        min={6}
                                        max={340}
                                        values={this.state.primaryFontValues}
                                        handleChangeValues={primaryFontValues =>
                                            this.setState({ primaryFontValues })
                                        }
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
                                <div className="form-group">
                                    <CustomRangeSliderLabeled
                                        className="custom-rs"
                                        step={1}
                                        min={6}
                                        max={340}
                                        values={this.state.secondaryFontValues}
                                        handleChangeValues={secondaryFontValues =>
                                            this.setState({
                                                secondaryFontValues
                                            })
                                        }
                                    />
                                </div>
                            </fieldset>
                        </form>
                        {this.props.deleteButton}
                    </nav>
                </aside>
            </div>
        );
    }
}
