import React, { useState, useEffect } from 'react'
import '../stylesheet/TowerOfHonoi.css'

function Disk({ id, isDraggable }) {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', id.toString());
  };

  return (
    <div
      className={`disk`}
      id={`disk${id}`}
      draggable={isDraggable ? true : false}
      onDragStart={isDraggable ? handleDragStart : null}
    ></div>
  );
}

function TowerOfHonoi() {
  const numOfDisks = 6;
  const [currentMoves, setCurrentMoves] = useState(0);
  const minimumMoves = Math.pow(2, numOfDisks) - 1;

  const [towers, setTowers] = useState({
    1: Array.from({ length: numOfDisks }, (_, index) => index + 1),
    2: [],
    3: [],
  });

  const handleDrop = (event, towerId) => {
    event.preventDefault();
    const diskId = parseInt(event.dataTransfer.getData('text/plain'));
    moveDisk(diskId, towerId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const moveDisk = (diskId, towerId) => {
    const updatedTowers = { ...towers };
    const sourceTower = Object.entries(towers).find(
      ([_, disks]) => disks.includes(diskId)
    );

    // Check if the source tower is found
    if (!sourceTower) {
      return;
    }

    const [sourceTowerId, sourceDisks] = sourceTower;
    const diskIndex = sourceDisks.indexOf(diskId);
    const destinationDisks = updatedTowers[towerId];

    // Check if the destination tower has a larger disk
    if (
      destinationDisks.length > 0 &&
      destinationDisks[destinationDisks.length - 1] > diskId
    ) {
      return;
    }

    updatedTowers[sourceTowerId].splice(diskIndex, 1);
    updatedTowers[towerId].push(diskId);
    setTowers(updatedTowers);
    setCurrentMoves(currentMoves + 1);

    // Check if all disks are in tower3
    setTimeout(() => {
      if (updatedTowers[3].length === numOfDisks) {
        alert('Congratulations! You have won the game!');
      }
    }, 2);
  };

  const renderDisks = (towerId) => {
    const disks = towers[towerId];
    const isLastDisk = (index) => index === disks.length - 1;

    return towers[towerId].map((diskId, index) => (
      <Disk key={diskId} id={diskId} isDraggable={isLastDisk(index)} />
    ));
  };

  const handleNewGame = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="TowerOfHonoi">
        <h1 className="title">Tower Of Hanoi</h1>
        <h2 id="moves">Minimum Moves: {minimumMoves}</h2>
        <h2 id="currentMoves">Current Moves: {currentMoves}</h2>
        <div className="container">
          <div
            id="tower1"
            className="tower"
            onDrop={(event) => handleDrop(event, 1)}
            onDragOver={handleDragOver}
          >
            {renderDisks(1)}
          </div>
          <div
            id="tower2"
            className="tower"
            onDrop={(event) => handleDrop(event, 2)}
            onDragOver={handleDragOver}
          >
            {renderDisks(2)}
          </div>
          <div
            id="tower3"
            className="tower"
            onDrop={(event) => handleDrop(event, 3)}
            onDragOver={handleDragOver}
          >
            {renderDisks(3)}
          </div>
        </div>
        <button className="startButton" onClick={handleNewGame}>
          Start New Game
        </button>
      </div>
    </>
  );
}

export default TowerOfHonoi;
