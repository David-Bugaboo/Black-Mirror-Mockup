
import { PageBackground } from './styles';
import netflixLogo from "../../assets/logos/netflix-logo-1-1.png"
import Webcam from 'react-webcam';
import { useState } from 'react';

function Hotpage() {    
    const [webcam, setWebcam] = useState(false)
    const turnwebcam = () =>{
        setWebcam(!webcam)
    }
    return (
       <PageBackground>    
        <header>
            <img id='netflixLogo' src={netflixLogo} alt="" />
            <p>BLACK MIRROR</p>
            <p id="releaseDate">SEASON 6</p>
        </header>
        {/*<Webcam/>*/}
        <div id='cameraMockup'>
           {webcam?<Webcam/>: <div>
                <p id='termsWarning'>To continue, please accept the Terms and Conditions below.</p>
                <div>
                    <input onChange={turnwebcam} type="checkbox" name="termsok" id="termsAccepted" />
                    <label htmlFor='termsAccepted'>I accept the <a href="#">Terms and Conditions</a></label>
                    {/*<Webcam/>*/}
                </div>
            </div>}
        </div>
       </PageBackground>    
    )
}


export default Hotpage