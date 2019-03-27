import React from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 0.1;
const MIN = 6;
const MAX = 340;

export default class CustomRangeSliderLabeled extends React.Component {
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
