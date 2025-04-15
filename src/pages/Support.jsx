import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";

const Support = () => {
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setShowCamera(true);
    } catch (err) {
      alert("Camera access denied or not supported.");
      console.error(err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setShowCamera(false);
  };

  return (
    <>
<NewNav/>
    <div className="support-scanner-wrapper">
      <div className="scanner-card">
        <h2>Scan Product QR CODE</h2>
        <button className="start-camera-btn" onClick={startCamera}>
          Start Camera
        </button>
      </div>

      <Modal
        show={showCamera}
        onHide={stopCamera}
        centered
        size="lg"
        className="camera-modal"
      >
        <Modal.Body>
          <div className="camera-container">
            <video ref={videoRef} autoPlay playsInline className="video-view" />
            <Button className="close-camera-btn" onClick={stopCamera}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    <Footer/>
    </>
  );
};

export default Support;
