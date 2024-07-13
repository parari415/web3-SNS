import React, { useState } from 'react';
import ConnectButton from './components/ConnectButton';

const App = () => {
  const [address, setAddress] = useState(null);
  const [points, setPoints] = useState(0);
  const [pointHistory, setPointHistory] = useState([]);

  const handleRecordPoint = () => {
    const newPoints = points + 1;
    setPoints(newPoints);
    setPointHistory([...pointHistory, { points: newPoints, timestamp: new Date() }]);
  };

  return (
    <div>
      <h1>ポイントアプリ</h1>
      <ConnectButton setAddress={setAddress} recordPoint={handleRecordPoint} />
      {address && <p>アドレス: {address}</p>}
      <p>ポイント: {points}</p>
      <h2>ポイント履歴</h2>
      <ul>
        {pointHistory.map((entry, index) => (
          <li key={index}>{`ポイント: ${entry.points} 時刻: ${entry.timestamp.toLocaleString()}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
