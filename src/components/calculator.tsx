import { useState } from 'react';

const Calculator = () => {
    // Declare state variables
    // tax totals from each city
    const [stoneguardSollant, setStoneguardSollant] = useState<number>(0);
    const [stoneguardLucant, setStoneguardLucant] = useState<number>(0);
    const [vientaSollant, setVientaSollant] = useState<number>(0);
    const [vientaLucant, setVientaLucant] = useState<number>(0);
    // combined tax totals
    const [totalSollant, setTotalSollant] = useState<number>(0);
    const [totalLucant, setTotalLucant] = useState<number>(0);
    // amounts that will be used for the siege
    const [pillageSollant, setPillageSollant] = useState<number>(0);
    const [pillageLucant, setPillageLucant] = useState<number>(0);
    const [intervalSollant, setIntervalSollae] = useState<number>(0);
    const [intervalLucant, setIntervalLucant] = useState<number>(0);
    // amount that will be rewarded at the end of the siege
    const [rewardSollant, setRewardSollant] = useState<number>(0);
    const [rewardLucant, setRewardLucant] = useState<number>(0);


}