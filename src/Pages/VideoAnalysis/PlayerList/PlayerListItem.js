import React, { useState } from "react";
import "./PlayerListItem.css";
import Pimg from "../../../img/Player.png";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
// import { IoMdAnalytics } from "react-icons/io";
import Modal from "react-modal";
import { IoMdAnalytics } from "react-icons/io";
// import { IconContext } from "react-icons/lib";

function PlayerListItem({ stretch, player }) {
  const [Finished, setFinished] = useState(false);
  const [ModalState, setModalState] = useState(false);
  const [Loading, setLoading] = useState(false);
  const modalHandler = () => setModalState(true);
  // const {image} = player
  // let pimmg = image[1]
  let imj =
    player &&
    player.image &&
    typeof player.image == "object" &&
    player.image.length > 1
      ? player.image[1]
      : Pimg;
  //let imj = player.image[1]
  const closeModal = () => {
    setFinished((prev) => !prev);
    setLoading(false);

    setModalState(false);
    // console.log({ Finished });
  };
  return (
    <div className="yes">
      <div className="icn">
        <MdEdit onClick={modalHandler} />
      </div>
      <Link to="/PlayerDetails" className="linkdin">
        <div className={!stretch ? "pcard" : "pcard str"}>
          {/* <div className="yimg"> */}

           <img src={imj} alt="" className="pimg" />
          {/* </div> */}
          <div className="pdetails">
            <h3> {player.name} </h3>
            <p className="ppos">{player.positiom} </p>
            <p className="pno"> {player.playerNumber} </p>
            <div className="plrat">8.5</div>
          </div>
        </div>
      </Link>
      <Modal
        isOpen={ModalState}
        onRequestClose={closeModal}
        closeTimeoutMS={500}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 20000000,
            backgroundColor: "rgb(0, 0, 0, 0.4)",
          },
          content: {
            position: "fixed",
            background: " #FFFFFF",
            borderRadius: "19px",
            width: "500px",
            height: "200px",
            // height: Finished ? "160px" : "250px",
            /* color: #000; */
            top: "50%",
            left: "50%",
            marginTop: "0px",
            // padding: "80px 90px",
            position: "absolute",
            transform: "translate(-60%, -70%)",
            marginTop: "70px",
            padding: "30px",
            zIndex: 20000000,
          },
        }}
      >
        <div className="mdalcont">
          <h3 className="mheading">Edit Player Details</h3>
          <div className="mform">
            <div>
              <label className="label" style={{color: "black"}} >
                PlayerName
              </label>
              <input className='pdin' style={{height: '35px'}} />
            </div>
            <div className="mhbutton">
              {/* <IoMdAnalytics /> */}
              Edit Player Details
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PlayerListItem;
