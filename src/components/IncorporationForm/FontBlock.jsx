import React from 'react';

import './IncorporationForm.scss';

export default class FontBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            primaryText: 'Hello my name is',
            blocks: [
                {
                    primaryText: 'Hello my name is',
                    secondaryText: 'Damien Pierre'
                }
            ]
        };
    }

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
    handleSecondaryFontblockNameChange = idx => evt => {
        const newblocks = this.state.blocks.map((fontblock, sidx) => {
            if (idx !== sidx) return fontblock;
            return {
                ...fontblock,
                secondaryText: evt.target.value
            };
        });

        this.setState({ blocks: newblocks });
    };

    handleAddFontblock = () => {
        this.setState({
            blocks: this.state.blocks.concat([
                { primaryText: '', secondaryText: '' }
            ])
        });
    };

    handleRemoveFontblock = idx => () => {
        this.setState({
            blocks: this.state.blocks.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {
        return (
            <div>
                {this.state.blocks.map((fontblock, idx) => (
                    <div key={idx} className="fontBlock">
                        <textarea
                            placeholder={`Primary Text #${idx + 1}`}
                            onChange={this.handlePrimaryFontblockNameChange(
                                idx
                            )}
                        />
                        <div className="text">
                            <p>{fontblock.primaryText}</p>
                        </div>

                        <textarea
                            placeholder={`Secondary Text #${idx + 2}`}
                            onChange={this.handleSecondaryFontblockNameChange(
                                idx
                            )}
                        />
                        <div className="text">
                            <p>{fontblock.secondaryText}</p>
                        </div>
                        <button
                            type="button"
                            onClick={this.handleRemoveFontblock(idx)}
                            className="small"
                        >
                            -
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddFontblock}
                    className="small"
                >
                    Add Fontblock
                </button>
            </div>
        );
    }
}
