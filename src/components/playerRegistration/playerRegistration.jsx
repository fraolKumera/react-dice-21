import React, {useState } from 'react';

import Game from "../game/Game.jsx";

import "./playerRegistration.css";


// import gameResult from "../gameResult/gameResult";

const PlayerRegistration = () => {

     const [formValues, setFormValues] = useState({
      player1: "",
      player2: "",
     
    });

    // const [player1, setPlayer1] = useState('');
    // const [player2, setPlayer2] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(true);

    //question
    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(formValues);
        setIsFormVisible(false);
    }


    return (
        <>
      {isFormVisible ? (
        <div className="container">
             
                
            <img src='./logo1.png' alt='BitApps' className="logo "/>
            <img src='./dices-removebg-preview.png' alt='BitApps' className="logo "/>
            <br/><br/><br/> {/* <h1>Player Registration</h1> */}
            <div className="form-class">
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                    required
                    name="player1"
                    value={formValues?.player1}
                    onChange={handleChange}/>
                    <label>
                        <span><img src='./dice-removebg-preview.png' alt='BitApps' className="column"/> Player 1 :</span>
                    </label>
                    <input type="text" 
                    required
                    name="player2"
                    value={formValues?.player2}
                    onChange={handleChange}/>
                    <label>
                        <span><img src='./dice-removebg-preview.png' alt='BitApps' className="column"/> Player 2 :</span>
                    </label>
                    <button className="button-form">Submit</button>

                </form>
               
            </div>
        </div>
         ) : (
            <div className="game">
            
            <Game data={formValues} />
            </div>
          )}
        </>
    );
}
// }
export default PlayerRegistration;
