import React, { useEffect, useRef, useState } from 'react';
import CustomNav from '../components/CustomNav';
import Footer from '../components/Footer';

function Support() {
  const videoRef = useRef(null);
  const [cameraAccess, setCameraAccess] = useState(null);

  useEffect(() => {
    async function requestCameraAccess() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraAccess(true);
      } catch (error) {
        console.error('Camera access denied:', error);
        setCameraAccess(false);
      }
    }

    requestCameraAccess();
  }, []);

  return (
    <div className='support-page-wrapper'>
      <CustomNav />
      {cameraAccess === null || cameraAccess ? (
        <div className='camera-container' style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Camera Access Page</h2>
          {cameraAccess && <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '600px' }} />}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <button className='discover-btn' onClick={() => window.location.reload()}>Show the Camera</button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Support;
