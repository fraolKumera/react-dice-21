import React from "react";
import "./gameResult.css";
function GameResult (props){


    
    return (
        <div class="pyro">
              <h1>{props.player1} Wins</h1>
              <h1>{props.player2} Wins</h1>
    <div class="before"></div>
    <div class="after"></div>
</div>
          
      
      


       
        
    );
  
}
export default GameResult;