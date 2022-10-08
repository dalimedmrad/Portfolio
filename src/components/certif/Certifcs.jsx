import React from "react";
import { certificats } from "../../data";
import "./certif.scss";
 
const Certifcs = () => {
  // const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   setFullscreen(true);
  //   setShow(true);
  // };
  return (
    <div className="portfolio1">
      <h1>My Certifications</h1>
      <div className="containera1">
        {certificats.map((el, index) => (
          <>
            <div key={index} className="item1">
              <img className="crt" alt="" src={process.env.PUBLIC_URL + el.path} />
            </div>
            {/* <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img className="crt1" src={process.env.PUBLIC_URL + el.path} />
              </Modal.Body>
            </Modal> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Certifcs;
