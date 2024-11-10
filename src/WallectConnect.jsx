import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      <Button className="add-task-btn"
      onClick={connectWallet}
      style={{
    backgroundColor: walletAddress ? "#4CAF50" : "#008CBA", // Green when connected, blue otherwise
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  }}>
        {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
      </Button>
    </div>
  );
};

export default WalletConnect;