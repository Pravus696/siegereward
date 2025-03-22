import React, { useState } from 'react';

export default function Calculator() {
    // Declare state variables
    // tax totals from each city
    const [stoneguardSollant, setStoneguardSollant] = useState(0);
    const [stoneguardLucent, setStoneguardLucent] = useState(0);
    // const [vientaSollant, setVientaSollant] = useState(0);
    // const [vientaLucent, setVientaLucent] = useState(0);
    // combined tax totals
    const [totalSollant, setTotalSollant] = useState(0);
    const [totalLucent, setTotalLucent] = useState(0);
    // amounts that will be used for the siege
    const [rewardSollant, setRewardSollant] = useState(0);
    const [rewardLucent, setRewardLucent] = useState(0);
    // vault and pillage amounts
    const [vaultSollant, setVaultSollant] = useState(0);
    const [vaultLucent, setVaultLucent] = useState(0);
    const [pillageSollant, setPillageSollant] = useState(0);
    const [pillageLucent, setPillageLucent] = useState(0);
    const [intervalSollant, setIntervalSollae] = useState(0);
    const [intervalLucent, setIntervalLucent] = useState(0);
    

    // Calculate totals
    const calculateRewards = () => {
        const rSollant = totalSollant * 0.4;
        const rLucent = totalLucent * 0.4;
        setRewardSollant(rSollant);
        setRewardLucent(rLucent);
        const vSollant = rSollant * 0.5;
        const vLucent = rLucent * 0.5;
        setVaultSollant(vSollant);
        setVaultLucent(vLucent);
        const pSollant = rSollant * 0.1;
        const pLucent = rLucent * 0.1;
        setPillageSollant(pSollant);
        setPillageLucent(pLucent);
        const iSollant = parseFloat((pSollant / 7).toFixed(2));
        const iLucent = parseFloat((pLucent / 7).toFixed(2));
        setIntervalSollae(iSollant);
        setIntervalLucent(iLucent);
    }

    return (
        <>
        <div>
            <label>
                Stoneguard Sollant Tax Total:
                <input type="number" value={stoneguardSollant} onChange={(e) => setStoneguardSollant(Number(e.target.value))} />
            </label>
            <label>
                Stoneguard Lucent Tax Total:
                <input type="number" value={stoneguardLucent} onChange={(e) => setStoneguardLucent(Number(e.target.value))} />
            </label>
            <button onClick={() => {
                setTotalSollant(stoneguardSollant);
                setTotalLucent(stoneguardLucent);
                calculateRewards();
            }}>Calculate</button>
            <h3>Results</h3>
            <p>Total Available Sollant: {rewardSollant}</p>
            <p>Total Available Lucent: {rewardLucent}</p>
            <p>Vault Sollant: {vaultSollant}</p>
            <p>Vault Lucent: {vaultLucent}</p>
            <p>Pillage Sollant: {pillageSollant}</p>
            <p>Pillage Lucent: {pillageLucent}</p>
            <p>Interval Sollant: {intervalSollant}</p>
            <p>Interval Lucent: {intervalLucent}</p>
        </div>
        </>
    );
}