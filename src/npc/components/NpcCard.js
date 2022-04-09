import React from 'react';
import ConditionsTile from './ConditionsTile';
import FatigueTile from './FatigueTile';
import BalanceTile from './BalanceTile';

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
        var balance = {
            principle: 'Peace',
            center: 0,
            curr_balance: 1,
            max_balance: 3
        }
        var test_npc = {
            name: 'Keiko Hiratsuka',
            tier: 'Master',
            conditions: conditions,
            curr_fatigue: 3,
            max_fatigue: 10,
            techniques: null,
            balance: balance,
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
                <FatigueTile 
                    curr_fatigue={this.state.test_npc.curr_fatigue}
                    max_fatigue={this.state.test_npc.max_fatigue}
                />
                <BalanceTile 
                    balance={this.state.test_npc.balance}
                />
            </div>
        );
    }
}

export default NpcCard;