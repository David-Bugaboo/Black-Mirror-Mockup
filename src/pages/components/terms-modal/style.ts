import { styled } from "styled-components";

export const ModalWrapper = styled.div`
width: 50%;
height: 50%;
position: fixed;
top: 50%;
left:50%;
transform: translate(-50%, -50%);

`


export const Modal = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
z-index: 5;
position: fixed;
width: 320px;
height:320px;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
background-color: white;
border-radius: 12px;
padding: 8px;

div{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

div > p {
    font-family: Roboto, 'sans-serif';
    font-weight: 300;
    font-size: 16px;
}

button{
    background-color: red;
    color: white;
    border-radius: 8px;
    border: none;
    font-family: Roboto, 'sans-serif';
    font-size: 20px;
    cursor: pointer;

}



&:hover button {
    background-color: lightcoral;
    font-weight: 600;
  }


`
