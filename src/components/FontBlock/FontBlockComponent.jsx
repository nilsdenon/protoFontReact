import React from 'react';
import FontBlockText from './FontBlockInputText';
import CustomRangeSliderLabeled from './customRangeSliderLabeled';
import FontPicker from 'font-picker-react';

export default class FontBlockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            // Als Zufallswert soll das Fontblock Menü immer sichtbar sein!
            activeFontPrimary: 'Open Sans',
            activeFontSecondary: 'Source Sans Pro',
            active: true,
            primaryFontValues: [24],
            primaryFontletterSpacing: [1],
            secondaryFontValues: [16],
            secondaryFontLetterSpacing: [1]
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
                        className={`apply-font-primary${this.props.id + 1}`}
                        blockname={'headline'}
                        text={this.props.primaryText}
                        fontSize={this.state.primaryFontValues}
                        letterSpacing={this.state.primaryFontletterSpacing}
                    />
                    <FontBlockText
                        className={`apply-font-secondary${this.props.id + 1}`}
                        blockname={'bodytext'}
                        text={this.props.secondaryText}
                        fontSize={this.state.secondaryFontValues}
                        letterSpacing={this.state.secondaryFontLetterSpacing}
                    />
                </section>
                <aside className="fontblock__menu">
                    <nav className="fontblock__nav">
                        <fieldset className="se fontblock__form">
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
                                <label className="form-label">
                                    Font-family
                                </label>
                                <FontPicker
                                    apiKey="AIzaSyBcJ0zfjh1BYgpDtpXDmigTl-53aojQ-Wc"
                                    activeFont={this.state.activeFontPrimary}
                                    options={{
                                        name: 'primary' + (this.props.id + 1),
                                        variants: ['regular', '700']
                                    }}
                                    onChange={nextFont =>
                                        this.setState({
                                            activeFontPrimary: nextFont.family
                                        })
                                    }
                                />
                            </div>

                            <CustomRangeSliderLabeled
                                label="Font-size"
                                step={1}
                                min={6}
                                max={340}
                                values={this.state.primaryFontValues}
                                handleChangeValues={primaryFontValues =>
                                    this.setState({ primaryFontValues })
                                }
                            />
                            <CustomRangeSliderLabeled
                                label="Letter-spacing"
                                step={0.005}
                                min={-50}
                                max={150}
                                values={this.state.primaryFontletterSpacing}
                                handleChangeValues={primaryFontletterSpacing =>
                                    this.setState({ primaryFontletterSpacing })
                                }
                            />
                        </fieldset>
                        <fieldset className="sep fontblock__form">
                            <legend>Body Text</legend>
                            <div className="form-group">
                                <textarea
                                    className="custom-textarea"
                                    placeholder={`Secondary Text #${this.props
                                        .idx + 2}`}
                                    onChange={
                                        this.props
                                            .handleSecondaryFontblockNameChange
                                    }
                                    defaultValue={this.props.secondaryText}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Font-family
                                </label>
                                <FontPicker
                                    apiKey="AIzaSyBcJ0zfjh1BYgpDtpXDmigTl-53aojQ-Wc"
                                    activeFont={this.state.activeFontSecondary}
                                    options={{
                                        name: 'secondary' + (this.props.id + 1)
                                    }}
                                    onChange={nextFont =>
                                        this.setState({
                                            activeFontSecondary: nextFont.family
                                        })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <CustomRangeSliderLabeled
                                    label="Font-size"
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
                                <CustomRangeSliderLabeled
                                    label="Letter-spacing"
                                    step={0.005}
                                    min={-50}
                                    max={150}
                                    values={
                                        this.state.secondaryFontLetterSpacing
                                    }
                                    handleChangeValues={secondaryFontLetterSpacing =>
                                        this.setState({
                                            secondaryFontLetterSpacing
                                        })
                                    }
                                />
                            </div>
                        </fieldset>

                        {this.props.deleteButton}
                    </nav>
                </aside>
            </div>
        );
    }
}
