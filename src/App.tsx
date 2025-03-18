import React, { useState } from 'react';
import title from './components/title';
import calculator from './components/calculator';
import guild from './components/guild';
import "./App.css";


const App = () => {
    return (
    <><header>
        <h1>Siege Pillage Stone Reward Breakdown</h1>
        <p>
            This site is intended to allow you to enter the collected taxes on your
            server and breakdown the ammount each pillage point will hold/reward at
            each interval.
        </p>
    </header><main>
            <form>
                <label for="sollantTax">Sollant Tax Total:</label>
                <input type="number" id="sollantTax" name="sollantTax" required />
                <br /><br />
                <label for="lucantTax">Lucant Tax Total:</label>
                <input type="number" id="lucantTax" name="lucantTax" required />
                <br /><br />
                <input type="submit" value="Submit" />

                <input type="reset" value="Reset" />
            </form>
            <p>Each pillage point will hold: ${pillageHold}</p>

            <p>Each 5 minute interval with reward: ${intervalReward}</p>
            <form>
                <label for="guildsPresent">How many Guilds are in your alliance?</label>
                <input type="number" id="guildsPresent" name="guildsPresent" required />
                <br /><br />
                <label for="guildOne">Guild 1 Members Present:</label>
                <input type="number" id="guildOne" name="guildOne" required />
                <br /><br />
                <label for="guildTwo">Guild 2 Members Present:</label>
                <input type="number" id="guildTwo" name="guildTwo" required />
                <br /><br />
                <label for="guildThree">Guild 3 Members Present:</label>
                <input type="number" id="guildThree" name="guildThree" required />
                <br /><br />
                <label for="guildFour">Guild 4 Members Present:</label>
                <input type="number" id="guildFour" name="guildFour" required />
                <br /><br />
                <input type="submit" value="Submit" />

                <input type="reset" value="Reset" />
            </form>
            <br /><br />
            <button>By Guild</button> <button>By Member</button>
            <p>Each Guild member should receive: ${rewardSollant}</p>
            <p>Each Guild member should receive: ${rewardLucant}</p>
        </main><footer>
            <p>
                This page was created by Pravus. It is not affiliated with the official
                game in any way.
            </p>
        </footer></>
    );    
}

export default App;