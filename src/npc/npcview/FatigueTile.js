import React from 'react'

class FatigueTile extends React.Component {
    constructor(props) {
        super();
        this.state = {...this.state, ...props};
    }

    _decrementFatigue() {
        var fatigue = this.state.curr_fatigue;
        this.setState({
            ...this.state,
            curr_fatigue: fatigue > 0 ? fatigue - 1 : fatigue
        });
    }

    _incrementFatigue() {
        var fatigue = this.state.curr_fatigue;
        this.setState({
            ...this.state,
            curr_fatigue: fatigue < this.state.max_fatigue ? fatigue + 1 : fatigue
        });
    }

    _clearFatigue() {
        this.setState({
            ...this.state,
            curr_fatigue: 0
        });
    }

    render() {
        return (
            <div>
                <div
                style={{
                    marginBottom: 7
                }}
                >
                    <h3
                    style={{ marginBottom: 10 }}
                    >Fatigue</h3>
                    <button
                        onClick={() => this._decrementFatigue()}
                        style={{ marginRight: 3 }}
                    >-</button>
                    {this.state.curr_fatigue} / {this.state.max_fatigue}
                    <button
                        onClick={() => this._incrementFatigue()}
                        style={{ marginLeft: 3 }}
                    >+</button>
                </div>
                <button
                    onClick={() => this._clearFatigue()}
                >Clear</button>
            </div>
        );
    }
}

export default FatigueTile;