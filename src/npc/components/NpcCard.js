import React from 'react';
import ConditionsTile from './ConditionsTile';

class NpcCard extends React.Component {
    constructor() {
        super();
        var conditions = [
            {
                name: 'Afraid',
                marked: false
            },
            {
                name: 'Angry',
                marked: true
            },
            {
                name: 'Guilty',
                marked: false
            },
            {
                name: 'Insecure',
                marked: false
            },
            {
                name: 'Troubled',
                marked: false
            },
        ];
        var test_npc = {
            name: 'Keiko Hiratsuka',
            tier: 'Master',
            conditions: conditions,
            curr_fatigue: 3,
            max_fatigue: 10,
            techniques: null,
            balance: null,
            notes: null
        };
        this.state = {...this.state, test_npc};
    }

    render() {
        return (
            <div>
                <p> NPC { this.state.test_npc.tier } </p>
                <h2> { this.state.test_npc.name } </h2>
                <ConditionsTile
                    conditions={this.state.test_npc.conditions} 
                />
            </div>
        );
    }
}

export default NpcCard;