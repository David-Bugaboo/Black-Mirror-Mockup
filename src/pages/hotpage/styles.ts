
import { styled } from "styled-components"



export const PageBackground = styled.div`
width: 100vw;
height:100vh;
background-color: black ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:32px;


header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}   

header > #netflixLogo{   
    width: 220px;
    object-fit: contain;
}  

header > p{
     
    font-size: 3rem;
    font-weight: 700;
    color: white;
    font-family: 'Roboto', sans-serif;
}

header > #releaseDate{
    
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    font-family: 'Roboto', sans-serif;
}
#cameraMockup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50%;
}
#cameraMockup > div > #termsWarning{
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 18px;
    text-align: center;
}

#cameraMockup > div > div> label{
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 18px;
    text-align: center;
}

`

