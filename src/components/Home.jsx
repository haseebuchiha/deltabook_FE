import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const homeStyles = {
    marginTop: '5rem',
  };

  return (
    <div style={homeStyles}>
      <Link to="/TicTacToe">
        <button>TicTacToe</button>
      </Link>
      <Link to="/RockPaperScissor">
        <button>RockPaperScissor</button>
      </Link>
      <Link to="/TowerOfHanoi">
        <button>TowerOfHanoi</button>
      </Link>
        <Link to="/Friends">
            <button>Add Friends</button>
        </Link>
    </div>
  );
}
