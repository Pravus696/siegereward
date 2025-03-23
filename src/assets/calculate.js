// This file is where the calculation happens for the pillage points and the rewards for each guild member.
// It is a simple JavaScript file that takes the input from the user and calculates the rewards based on the input.

// Declares necessary variables for the calculation of the pillage points and rewards.
// These variables are used to store the input values from the user and the calculated results.
let sollantTax;
let lucentTax;
let sollantReward;
let lucentReward;
let pillageSollant;
let pillageLucent;
let sollantVault;
let lucentVault;
let intervalRewardSollant;
let intervalRewardLucent;
let afterTaxSollant;
let afterTaxLucent;

// Provide values for the above variables to be used in the calculation.

// Input tax values for Sollant and Lucent.
// Add the total 
sollantTax = 31173758123085; // Sollant tax total
lucentTax = 706897; // Lucent tax total

// Calculate the total reward available for siege.
sollantReward = sollantTax * 0.4; // Sollant reward value
lucentReward = lucentTax * 0.4; // Lucent reward value

// Calculate the total value stored in Siege Vault for Sollant and Lucent.
sollantVault = sollantReward * 0.5; // Sollant vault value
lucentVault = lucentReward * 0.5; // Lucent vault value

// Calculate the total pillage value for Sollant and Lucent.
pillageSollant = (sollantReward * 0.1); // Sollant pillage value
pillageLucent = (lucentReward * 0.1); // Lucent pillage value

// Calculate the total reward for each 5 minute interval.

intervalRewardSollant = (pillageSollant / 7); // Sollant reward per interval
intervalRewardLucent = (pillageLucent / 7); // Lucent reward per interval

console.log("Sollant Tax: " + sollantTax);
console.log("Lucent Tax: " + lucentTax);
console.log("Sollant Vault: " + sollantVault);
console.log("Lucent Vault: " + lucentVault);
console.log("Pillage Sollant: " + pillageSollant);
console.log("Pillage Lucent: " + pillageLucent);
console.log("Sollant Interval Reward: " + intervalRewardSollant);
console.log("Lucent Interval Reward: " + intervalRewardLucent);

// loot payout will be taxed by 20% before distribution to guild members
// Calculate the reward after tax for each guild member.