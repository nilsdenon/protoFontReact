import React from 'react';
import { Range, getTrackBackground } from 'react-range';

export default class CustomRangeSliderLabeled extends React.Component {
    render() {
        const {
            label,
            step,
            min,
            max,
            values,
            handleChangeValues
        } = this.props;
        const MIN = min;
        const MAX = max;
        return (
            <div className="form-group">
                {label && <label className="form-label">{label}</label>}

                <Range
                    step={step}
                    min={min}
                    max={max}
                    values={values}
                    onChange={handleChangeValues}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px',
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '5px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: this.props.values,
                                        colors: ['#333', '#ccc'],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '18px',
                                width: '18px',
                                borderRadius: '50%',
                                backgroundColor: '#008cff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA'
                            }}
                        />
                    )}
                />
            </div>
        );
    }
}
