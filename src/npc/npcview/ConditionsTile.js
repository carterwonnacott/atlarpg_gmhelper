import React from 'react'

class ConditionsTile extends React.Component {
    constructor(props) {
        super();
        this.state = {...this.state, ...props}
    }

    _handleConditionMarkToggle(e, conditionParam) {
        var conditions = this.state.conditions;
        conditions.forEach(condition => {
            if (condition.name === conditionParam.name) 
                condition.marked = e.target.checked;
        });
        this.setState({
            ...this.state, 
            conditions: conditions
        })
    }

    _handleClearConditions() {
        var conditions = this.state.conditions;
        conditions.forEach(condition => {
            condition.marked = false;
        });
        this.setState({
            ...this.state, 
            conditions: conditions
        })
    }

    render() {
        return (
            <div>
                <h3
                style={{
                    marginBottom: 8
                }}
                >Conditions</h3>
                <div
                style={{
                    marginBottom: 5
                }}
                >
                    { this.state.conditions.map((condition) => (
                        <label>
                            <input 
                                key={condition.name} 
                                type="checkbox" 
                                onChange={ e => this._handleConditionMarkToggle(e, condition)} 
                                checked={!!condition.marked} 
                                value={condition.name} 
                            />
                            {condition.name}
                        </label>
                    ))}
                </div>
                <button
                    onClick={() => this._handleClearConditions()}
                >Clear</button>
            </div>
    );
    }
}

export default ConditionsTile;