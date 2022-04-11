import React from 'react';

class NpcCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            ...this.state,
            ...props,
            pstyle: { marginBottom: 0 },
            h3style: { marginTop: 0 },
            divstyle: { 
                marginRight: 10,
                borderStyle: 'solid',
                borderWidth: '0px 0px 2px 0px'
            }
        }
    }

    render() {
        return (
            <div
            style={this.state.divstyle}
            >
                <p
                style={this.state.pstyle}
                >{this.state.npc.tier} NPC</p>
                <h3
                style={this.state.h3style}
                >{this.state.npc.name}</h3>
            </div>
        );
    }
}

export default NpcCard;