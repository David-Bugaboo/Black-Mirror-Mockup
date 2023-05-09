import { PageBackground } from "./styles";
import netflixLogo from "../../assets/logos/netflix-logo-1-1.png";
import deepFaked from "../../assets/videos/IMG_6945-1.mp4"
import Webcam from "react-webcam";

import { useContext, useRef, useState } from "react";
import TermsModal from "../components/terms-modal/termsModal";
import { ModalContext } from "../../context/modalContext";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";

function Hotpage() {
  const [webcam, setWebcam] = useState(false);
  const [deepFake, setDeepFake] = useState(false);
  const webCamRef = useRef(null);
  const { switchModal, modalOn } = useContext(ModalContext);
  const videoConstraints = {
    width: 480,
    height: 480,
    facingMode: "user",
  };
  const turnwebcam = () => {
    toast.info(
      "To finish your registration, take a picture of youself by clicking your image on the screen!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
    setWebcam(!webcam);
  };

  const proccessDeepFake = () => {
    setWebcam(!webcam)
    setDeepFake(!deepFake)
  };

  return (
    <PageBackground>
      <header>
        <img id="netflixLogo" src={netflixLogo} alt="" />
        <p>BLACK MIRROR</p>
        <p id="releaseDate">SEASON 6</p>
      </header>
      {/*<Webcam/>*/}
      <div id="cameraMockup">
        {modalOn && <TermsModal />}
        {webcam ? (
          <Webcam
            ref={webCamRef}
            width={320}
            height={320}
            videoConstraints={videoConstraints}
            onClick={proccessDeepFake}
          />
        ) : !deepFake&&(
          <div>
            <p id="termsWarning">
              To continue, please accept the Terms and Conditions below.
            </p>
            <div>
              <input
                onChange={turnwebcam}
                type="checkbox"
                name="termsok"
                id="termsAccepted"
              />
              <label htmlFor="termsAccepted">
                I accept the{" "}
                <a href="#" onClick={switchModal}>
                  Terms and Conditions
                </a>
              </label>
              {/*<Webcam/>*/}
            </div>
          </div>
        )}
        {deepFake && <ReactPlayer playing url='videos/test.mp4'
                height='320px'
                width='320px'
                loop={true}
                controls={true}/>}
      </div>
    </PageBackground>
  );
}

export default Hotpage;
