import React, { CSSTransitionGroup } from 'react';

import { SketchPicker } from 'react-color';
import './CustomColorPicker.scss';

export default class CustomColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="colorPicker">
                <div
                    className="color-picker-swatch"
                    style={this.props.styles.swatch}
                    onClick={this.props.handleTogglePrimaryColorPicker}
                >
                    <div style={this.props.styles.color} />
                </div>

                {this.props.primaryFontColorPicker && (
                    <div style={this.props.styles.popover}>
                        <div
                            style={this.props.styles.cover}
                            onClick={this.props.handleClosePrimaryColorPicker}
                        />
                        <SketchPicker
                            color={this.props.primaryFontColor}
                            onChange={this.props.handlePrimaryFontColor}
                            disableAlpha
                        />
                    </div>
                )}
            </div>
        );
    }
}
