import FontBlockComponent from './FontBlockComponent';
import React from 'react';

import './FontBlock.scss';

export default class FontBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            primaryText: 'Hello my name is',
            secondaryText: 'Damien Pierre',
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
                {
                    primaryText: this.state.primaryText,
                    secondaryText: this.state.secondaryText
                }
            ])
        });
    };

    handleRemoveSingleFontBlock = () => {
        this.setState({
            blocks: this.state.blocks.slice(0, -1)
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
                    <FontBlockComponent
                        {...this.props}
                        key={idx}
                        id={idx}
                        primaryText={fontblock.primaryText}
                        secondaryText={fontblock.secondaryText}
                        handlePrimaryFontblockNameChange={this.handlePrimaryFontblockNameChange(
                            idx
                        )}
                        handleSecondaryFontblockNameChange={this.handleSecondaryFontblockNameChange(
                            idx
                        )}
                        deleteButton={
                            this.state.blocks.length > 1 && (
                                <div className="form-group">
                                    <button
                                        type="button"
                                        onClick={this.handleRemoveFontblock(
                                            idx
                                        )}
                                        className="small btn btn-danger btn-sm"
                                    >
                                        Remove this Fontblock -
                                    </button>
                                </div>
                            )
                        }
                    />
                ))}
                <nav className="nav-bottom-controls">
                    <button
                        type="button"
                        onClick={this.handleAddFontblock}
                        className="btn btn-sm btn-success"
                    >
                        Add Fontblock
                    </button>
                    {this.state.blocks.length > 1 && (
                        <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={this.handleRemoveSingleFontBlock}
                        >
                            Remove Last Block
                        </button>
                    )}
                </nav>
            </div>
        );
    }
}
