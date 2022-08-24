import React from "react";
import "./gameResult.css";
// import { useNavigate } from "react-router-dom";
function GameResult(props) {
//   const navigate = useNavigate();

  return (
    <>
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
        <h1>{props.player1} </h1>
        <h1>{props.player2} </h1>
        <h1>Wins</h1>
        {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
        {/* <button className="button-form">Play Again</button> */}
      </div>
    </>
  );
}
export default GameResult;
