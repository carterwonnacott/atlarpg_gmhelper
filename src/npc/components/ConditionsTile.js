import React from 'react'

class ConditionsTile extends React.Component {
    constructor(props) {
        super();
        this.state = {...this.state, ...props}
    }

    _handleConditionMarking(condition) {
        condition.marked = !condition.marked;
    }

    render() {
        return (
            <div>
                <h3>Conditions</h3>
                { this.state.conditions.map((condition) => (
                    <label>
                        <input 
                            key={condition.name} 
                            type="checkbox" 
                            onChange={ () => this._handleConditionMarking(condition)} 
                            defaultChecked={condition.marked} 
                            value={condition.name} 
                        />
                        {condition.name}
                    </label>
                ))}
            </div>
        );
    }
}

export default ConditionsTile;