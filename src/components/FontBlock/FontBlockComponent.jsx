import React from 'react';
import FontBlockText from './FontBlockInputText';
import CustomRangeSliderLabeled from './customRangeSliderLabeled';
import FontPicker from 'font-picker-react';

import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

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
            secondaryFontLetterSpacing: [1],
            primaryFontColorPicker: false,
            primaryFontColor: '#333',
            secondaryFontColor: '#4e4e4e',
            secondaryFontColorPicker: false
        };
        //this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }
    handleTogglePrimaryColorPicker = () => {
        this.setState({
            primaryFontColorPicker: !this.state.primaryFontColorPicker
        });
    };

    handleClosePrimaryColorPicker = () => {
        this.setState({ primaryFontColorPicker: false });
    };

    handlePrimaryFontColor = color => {
        this.setState({ primaryFontColor: color.hex });
    };

    handleSecondaryFontColor = color => {
        this.setState({ secondaryFontColor: color.hex });
    };

    handleToggleMenu = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render() {
        const styles = reactCSS({
            default: {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px'
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer'
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2'
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px'
                }
            }
        });
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
                        color={this.state.primaryFontColor}
                    />
                    <FontBlockText
                        className={`apply-font-secondary${this.props.id + 1}`}
                        blockname={'bodytext'}
                        text={this.props.secondaryText}
                        fontSize={this.state.secondaryFontValues}
                        letterSpacing={this.state.secondaryFontLetterSpacing}
                        color={this.state.secondaryFontColor}
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
                                <div className="colorPicker">
                                    <div
                                        style={styles.swatch}
                                        onClick={
                                            this.handleTogglePrimaryColorPicker
                                        }
                                    >
                                        <div style={styles.color} />
                                    </div>
                                    {this.state.primaryFontColorPicker && (
                                        <div style={styles.popover}>
                                            <div
                                                style={styles.cover}
                                                onClick={
                                                    this
                                                        .handleClosePrimaryColorPicker
                                                }
                                            />
                                            <SketchPicker
                                                color={
                                                    this.state.primaryFontColor
                                                }
                                                onChange={
                                                    this.handlePrimaryFontColor
                                                }
                                                disableAlpha
                                            />
                                        </div>
                                    )}
                                </div>
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
                                <div className="colorPicker">
                                    <SketchPicker
                                        color={this.state.secondaryFontColor}
                                        onChangeComplete={
                                            this.handleSecondaryFontColor
                                        }
                                        disableAlpha
                                    />
                                </div>
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
