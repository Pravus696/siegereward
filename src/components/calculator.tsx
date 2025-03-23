import React, { useState } from "react";

export default function Calculator() {
  // Declare state variables
  // tax totals from each city
  // const [stoneguardSollant, setStoneguardSollant] = useState(0);
  // const [stoneguardLucent, setStoneguardLucent] = useState(0);
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
    const rSollant = Number((totalSollant * 0.4).toFixed(2));
    const rLucent = Number((totalLucent * 0.4).toFixed(2));
    setRewardSollant(rSollant);
    setRewardLucent(rLucent);
    const vSollant = Number((rSollant * 0.5).toFixed(2));
    const vLucent = Number((rLucent * 0.5).toFixed(2));
    setVaultSollant(vSollant);
    setVaultLucent(vLucent);
    const pSollant = Number((rSollant * 0.1).toFixed(2));
    const pLucent = Number((rLucent * 0.1).toFixed(2));
    setPillageSollant(pSollant);
    setPillageLucent(pLucent);
    const iSollant = Number((pSollant / 7).toFixed(2));
    const iLucent = Number((pLucent / 7).toFixed(2));
    setIntervalSollae(iSollant);
    setIntervalLucent(iLucent);
  };

  return (
    <>
      <main>
        <div id="input">
          <label id="sgSollant">Stoneguard Sollant Tax Total:</label>
          <label id="sgLucent">Stoneguard Lucent Tax Total:</label>
          <br></br>
          <br></br>
          <input
            type="number"
            value={totalSollant}
            onChange={(e) => setTotalSollant(Number(e.target.value))}
          />
          <input
            type="number"
            value={totalLucent}
            onChange={(e) => setTotalLucent(Number(e.target.value))}
          />

          <br></br>
          <br></br>
          <button
            onClick={() => {
              calculateRewards();
            }}
          >
            Calculate
          </button>
        </div>
        <br></br>
        <br></br>
        <div id="results">
          <h3>Results</h3>
          <div className="results-container">
            <div className="column">
              <p>Total Available Sollant: {rewardSollant}</p>
              <p>Vault Sollant: {vaultSollant}</p>
              <p>Pillage Sollant: {pillageSollant}</p>
              <p>Interval Sollant: {intervalSollant}</p>
            </div>
            <div className="column">
              <p>Total Available Lucent: {rewardLucent}</p>
              <p>Vault Lucent: {vaultLucent}</p>
              <p>Pillage Lucent: {pillageLucent}</p>
              <p>Interval Lucent: {intervalLucent}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
