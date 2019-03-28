import React from 'react';

import { SketchPicker } from 'react-color';
import './CustomColorPicker.scss';

export default class CustomColorPicker extends React.Component {
    render() {
        const { bg, toggle, picker, close, color, change, popup } = this.props;

        const styles = {
            backgroundColor: bg
        };
        return (
            <div className="color-picker">
                <div onClick={toggle} className="color-box" style={styles} />

                {picker && (
                    <div
                        className={
                            popup
                                ? 'color-picker-popover popup'
                                : 'color-picker-popover'
                        }
                    >
                        <div className="color-picker-cover" onClick={close} />
                        <SketchPicker
                            color={color}
                            onChange={change}
                            disableAlpha
                        />
                    </div>
                )}
            </div>
        );
    }
}
