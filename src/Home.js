import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import constants from "./constants";

function Home() {
    const [currentAccount, setCurrentAccount] = useState("");
    const [contractInstance, setContractInstance] = useState("");
    const [status, setStatus] = useState(false);
    const [winner, setWinner] = useState("");

    useEffect(() => {
        const loadBlockchainData = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                try {
                    const signer = provider.getSigner();
                    const address = await signer.getAddress(); // This should be valid.

                    console.log(address);
                    // setCurrentAccount(address);
                } catch (err) {
                    console.error(err);
                }
            } else {
                alert('Please install metamask to use this application');
            }
        };
        loadBlockchainData();
    }, [])
}

export default Home;