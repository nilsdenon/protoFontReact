import React from 'react';

import './IncorporationForm.scss';

export default class IncorporationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            shareholders: [{ name: '' }]
        };
    }

    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.shareholders.map(
            (shareholder, sidx) => {
                if (idx !== sidx) return shareholder;
                return { ...shareholder, name: evt.target.value };
            }
        );

        this.setState({ shareholders: newShareholders });
    };

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: '' }])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
            shareholders: this.state.shareholders.filter(
                (s, sidx) => idx !== sidx
            )
        });
    };

    render() {
        return (
            <div>
                {this.state.shareholders.map((shareholder, idx) => (
                    <div key={idx} className="shareholder">
                        <textarea
                            placeholder={`Shareholder #${idx + 1} name`}
                            onChange={this.handleShareholderNameChange(idx)}
                        />
                        <div className="text">
                            <p>{shareholder.name}</p>
                        </div>
                        <button
                            type="button"
                            onClick={this.handleRemoveShareholder(idx)}
                            className="small"
                        >
                            -
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddShareholder}
                    className="small"
                >
                    Add Shareholder
                </button>
            </div>
        );
    }
}
