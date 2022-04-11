import React from 'react';
import NpcCard from './NpcCard';

class NpcSidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            ...this.state,
            npcs: [
                {
                    tier: 'Minor',
                    name: 'Mako Hiratsuka'
                },
                {
                    tier: 'Master',
                    name: 'Keiko Hiratsuka'
                },
                {
                    tier: 'Major',
                    name: 'Shinsuke Hiratsuka'
                },
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.npcs.map( (npc) => (
                <NpcCard
                    npc= {npc}
                />
                ))}
            </div>
        )
    }
}

export default NpcSidebar;