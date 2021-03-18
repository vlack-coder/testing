import React from "react";
// import Accordion from "../../Components/Accordion";
import PlayerListItem from "../VideoAnalysis/PlayerList/PlayerListItem";
import "./PlayerDetails.css";
import { useHistory } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import items from './items'

function Rankings() {
  let history = useHistory();
  let player = {
    name: "Lionel Messi",
    position: 7,
    playerNumber: 10,
  };
  function handleClick() {
    history.goBack();
  }
  return (
    <div className="rankings">
      <div className="headdies" onClick={handleClick}>
        <h4> Back to player library</h4>
      </div>
      <PlayerListItem stretch player />
      {/* <PlayerListItem  /> */}
      {/* <div className="accord"> */}
        {/* <Accordion /> */}
        <Accordion allowMultipleExpanded={false}>
          {items.map((item) => (
            <AccordionItem key={item.uuid}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      {/* </div> */}
    </div>
  );
}

export default Rankings;
