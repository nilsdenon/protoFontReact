import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 0.1;
const MIN = 6;
const MAX = 340;

class RangeLabeled extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <Range
                    values={this.props.value}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={this.props.handleChangeSliderValue}
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
                                        values: this.state.values,
                                        colors: ['#548BF4', '#ccc'],
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
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '42px',
                                width: '42px',
                                borderRadius: '4px',
                                backgroundColor: '#FFF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA'
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-28px',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    fontFamily:
                                        'Arial,Helvetica Neue,Helvetica,sans-serif',
                                    padding: '4px',
                                    borderRadius: '4px',
                                    backgroundColor: '#548BF4'
                                }}
                            >
                                {this.state.values[0]}
                            </div>
                            <div
                                style={{
                                    height: '16px',
                                    width: '5px',
                                    backgroundColor: isDragged
                                        ? '#548BF4'
                                        : '#CCC'
                                }}
                            />
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default RangeLabeled;
