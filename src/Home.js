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
            if(typeof window.ethereum !== 'undefined'){
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                try{
                    const signer = provider.getSigner();
                    const address = await signer.getAddress();
                    console.log(address);
                    setCurrentAccount(address);
                    window.ethereum.on('accountsChanged', (accounts)=>{
                        setCurrentAccount(accounts[0]);
                        console.log(currentAccount);
                    })
                }catch(err){
                    console.error(err)
                }
            }else{
                alert('Please install meta mask to use this application')
            }
        };

        const contract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
        loadBlockchainData();
    }, [currentAccount]);
}

export default Home;