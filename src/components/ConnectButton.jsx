import React, { useState } from 'react';

const ConnectButton = ({ setAddress, recordPoint }) => {
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('MetaMaskをインストールしてください');
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={connectWallet}>MetaMaskに接続</button>
      ) : (
        <button onClick={recordPoint}>ポイントを記録</button>
      )}
    </div>
  );
};

export default ConnectButton;
