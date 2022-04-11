import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NpcView from './npc/npcview/NpcView';
import NpcSidebar from './npc/sidebar/NpcSidebar';

let style = {
  display: 'flex',
  flexDirection: 'row',
  margin: 15
};

ReactDOM.render((
  <div
    style={style}
  >
    <NpcSidebar />
    <NpcView />
  </div>
  ),
  document.getElementById('root')
);