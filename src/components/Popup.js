import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import paypal from "../images/paypal.png";
import Sewa from "../images/Sewa.png";

import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

function Popup(props) {
  const [show, setShow] = useState(true);
  const [toggled, toggle] = useState(false);
  const [toggled2, toggle2] = useState(false);
  const [donationPop, setDonationPop] = useState("");

  var count = 1;

  const handleClose = () => {
    setShow(false);
    toggle2(false);
    toggle(false);
    count = 1;
  };

  function toggleHandler() {
    toggle(!toggled);
  }

  function toggleHandler2() {
    toggle2(!toggled2);
  }

  function myTimer() {
    var intervalObject = setInterval(function() {
      if (count === 1) {
        count--;
        toggleHandler();
      } else if (count === 0) {
        toggleHandler2();
        clearInterval(intervalObject);
      } else {
        count--;
        console.log(count);
      }
    }, 1000);
  }

  const donateAction = result => {
    props.sendData(result);
  };

  const handleChange = e => {
    setDonationPop(e.target.value);
  };

  const handleShow = () => setShow(true);

  return (
    // This manages the style of the button and the dimensions of the div containing text.
    <>
      <style type="text/css">
        {`

        .test{
            width:70%;
            height:10%;
        margin:auto auto;            
        }

        .modal-90w {
        max-width: 40% !important; 
    }

    .hr-sect {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        color: rgba(0, 0, 0, 0.35);
        margin: auto auto;
        width:82%;
        padding-bottom:17px;

    }
    .hr-sect::before,
    .hr-sect::after {
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: auto auto;
        width:82%;


    `}
      </style>

      {/* <img
        style={{ width: "45px", cursor: "pointer" }}
        onClick={handleShow}
        src={Donate}
      ></img> */}

      <Modal
        dialogClassName="modal-90w"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <>
          {toggled && toggled2 ? (
            <>
              <div style={{ textAlign: "center", display: "block" }}>
                {" "}
                <img
                  style={{
                    width: "140px",
                    height: "20%",
                    paddingBottom: "18px"
                  }}
                  alt="image02"
                  src={paypal}
                />
                <div style={{ textAlign: "center", display: "block" }}>
                  <img style={{ width: "80px" }} src={Sewa} alt="image03"></img>
                </div>
                <br />
              </div>

              <ButtonGroup className="test" aria-label="First group">
                <Button>$25</Button>
                <Button>$50</Button>
                <Button>$75</Button>
                <Button>$100</Button>
              </ButtonGroup>
              <p></p>

              <div
                style={{
                  textAlign: "center",
                  width: "86%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingBottom: "16px",
                  paddingTop: "11px"
                }}
              >
                <Form.Control
                  type="email"
                  placeholder="Other (USD)"
                  value={donationPop}
                  onChange={handleChange}
                />
              </div>

              <Form.Group
                style={{ paddingLeft: "40px", paddingBottom: "15px" }}
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Share my name and email with this charity"
                />
              </Form.Group>

              <div
                onClick={handleClose}
                style={{
                  height: "47px",
                  cursor: "pointer",
                  lineHeight: "47px",
                  borderRadius: "23px",
                  width: "22%",
                  paddingBottom: "50px",
                  textAlign: "center",
                  background: "#007bff",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily:
                    "HelveticaNeue-Medium,Helvetica Neue Medium,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif"
                }}
              >
                {" "}
                <p
                  style={{ color: "white" }}
                  onClick={() => donateAction(donationPop)}
                >
                  Donate NOW
                </p>
              </div>
              <br></br>
            </>
          ) : toggled && !toggled2 ? (
            <>
              <div style={{ textAlign: "center", display: "block" }}>
                {" "}
                <img
                  alt="image03"
                  style={{
                    width: "140px",
                    height: "20%",
                    paddingBottom: "30px"
                  }}
                  src={paypal}
                />
                <br />
              </div>

              <div
                style={{
                  textAlign: "center",
                  paddingTop: "16%",
                  paddingBottom: "10%"
                }}
              >
                {/* <Spinner onClick={toggleHandler2} style={{width:"50px", height:"50px", }} animation="border" variant="primary" /> */}
                <Spinner
                  onClick={toggleHandler2}
                  style={{ width: "50px", height: "50px" }}
                  animation="border"
                  variant="primary"
                />

                <p style={{ paddingTop: "17%" }} />
              </div>
            </>
          ) : (
            <div>
              <div style={{ textAlign: "center" }}>
                {" "}
                <img
                  alt="image04"
                  style={{
                    width: "140px",
                    height: "20%",
                    paddingBottom: "30px"
                  }}
                  src={paypal}
                />
              </div>

              <Modal.Body>
                <div
                  style={{
                    textAlign: "center",
                    width: "86%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <Form.Control
                    type="email"
                    placeholder="Email or mobile number"
                    value="gustavozapata@hotmail.com"
                  />
                </div>
                <p></p>
                <div
                  style={{
                    textAlign: "center",
                    width: "86%",
                    paddingBottom: "4px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <Form.Control type="password" placeholder="Password" />
                </div>
              </Modal.Body>

              {/* <div onClick= {toggleHandler} style={{height:'47px', cursor:"pointer", lineHeight:"47px",borderRadius:"4px",width:'82%',paddingBottom:"19px", textAlign:'center', background:'#0070ba', marginLeft:"auto", marginRight:'auto', fontFamily:"HelveticaNeue-Medium,Helvetica Neue Medium,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif"}}> <p style={{color:"white"}}>Log In</p>  */}

              <div
                onClick={myTimer}
                style={{
                  height: "47px",
                  cursor: "pointer",
                  lineHeight: "47px",
                  borderRadius: "4px",
                  width: "82%",
                  paddingBottom: "19px",
                  textAlign: "center",
                  background: "#0070ba",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily:
                    "HelveticaNeue-Medium,Helvetica Neue Medium,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif"
                }}
              >
                {" "}
                <p style={{ color: "white" }}>Log In</p>
              </div>

              <div
                style={{
                  height: "47px",
                  cursor: "pointer",
                  lineHeight: "47px",
                  borderRadius: "4px",
                  width: "82%",
                  paddingBottom: "19px",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "6px",
                  fontFamily:
                    'HelveticaNeue,"Helvetica Neue",Helvetica,Arial,sans-serif'
                }}
              >
                {" "}
                <p style={{ color: "#0070ba" }}>Having trouble logging in ?</p>
              </div>

              <div class="hr-sect">or</div>
              <div
                style={{
                  height: "47px",
                  cursor: "pointer",
                  lineHeight: "47px",
                  borderRadius: "4px",
                  width: "82%",
                  textAlign: "center",
                  background: "#E1E7Eb",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontFamily:
                    "HelveticaNeue-Medium,Helvetica Neue Medium,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif"
                }}
              >
                {" "}
                <p style={{ color: "black" }}>Sign Up</p>
              </div>
              <br style={{ paddingTop: "10px" }}></br>
            </div>
          )}
        </>
      </Modal>
    </>
  );
}

export default Popup;
