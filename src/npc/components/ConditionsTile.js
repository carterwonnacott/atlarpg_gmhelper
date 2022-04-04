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
                { this.state.conditions.map((condition) => (
                    <input 
                        key={condition.name} 
                        type="checkbox" 
                        onChange={ () => this._handleConditionMarking(condition)} 
                        defaultChecked={condition.marked} 
                        value={condition.name} 
                    />
                ))}
            </div>
        );
    }
}

export default ConditionsTile;