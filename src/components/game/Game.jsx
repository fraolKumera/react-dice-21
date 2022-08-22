import React, {useState} from "react";
import GameResult from "./../gameResult/GameResult.jsx";

import "./game.css";

function Game({data}) {
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    const addItem = () => {

        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 6) + 1
            }
        ]);


    }

    const addItem2 = () => {

        setItems2([
            ...items2, {
                id2: items2.length,
                value2: Math.floor(Math.random() * 6) + 1
            }
        ]);


    }
    const total = items.map(item => (item.value));
    const sum = total.reduce((a, b) => a + b, 0);

    const total2 = items2.map(item => (item.value2));
    const sum2 = total2.reduce((a, b) => a + b, 0);

    if (sum >= 21) {
        return <GameResult player1={
            data?.player1
        }/>;
    }
    if (sum2 >= 21) {
        return <GameResult player2={
            data?.player2
        }/>;
    }

    return (

        <div className="game-container">


            <img src='./logo1.png' alt='BitApps' className="game-logo "/> {/* <img src='./dices-removebg-preview.png' alt='BitApps' class="game-logo "/> */}
            <br/>
            <div className="tbl-header">
                <table>
                    <thead>
                        <tr>
                            <th>{
                                data?.player1
                            }</th>
                            <th>{
                                data?.player2
                            }</th>

                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <ul className="player1-style"> 
{
    items.map(item => (
        <li key={
            item.id
        }>
             {
                item.value
            } 
            
        </li>
    ))
}</ul>

<ul className="player2-style"> 
{
    items2.map(item => (
        <li key={
            item.id2
        }>
             {
                item.value2
            } 
            
        </li>
    ))
}</ul>
                <table cellpadding="1" cellspacing="1" border="1">
                    <tbody> 

                        <tr>
                            <td>Total:{sum}</td>
                            <td>Total:{sum2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/><br/>
            <div> 

                <button className="game-button"
                    onClick={addItem}>
                    <img src='./dice-removebg-preview.png' alt='BitApps'/>
                </button>

                <button className="game-button2"
                    onClick={addItem2}>
                    <img src='./dice-removebg-preview.png' alt='BitApps'/>
                </button>
            </div>
        </div>


    // <div className="winner">
    //     <GameResult/>

    // </div>

    );
};

export default Game;
