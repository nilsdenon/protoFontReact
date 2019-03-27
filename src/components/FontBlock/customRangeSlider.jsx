import React from 'react';
import { Range } from 'react-range';

export default class CustomRangeSlider extends React.Component {
    render() {
        const { step, min, max, values, handleChangeValues } = this.props;

        return (
            <div className="custom-range-slider">
                <Range
                    step={step}
                    min={min}
                    max={max}
                    values={values}
                    onChange={handleChangeValues}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '3px',
                                borderRadius: '3px',
                                width: '100%',
                                backgroundColor: '#333333'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '15px',
                                width: '15px',
                                borderRadius: '50%',
                                backgroundColor: '#008cff'
                            }}
                        />
                    )}
                />
            </div>
        );
    }
}
