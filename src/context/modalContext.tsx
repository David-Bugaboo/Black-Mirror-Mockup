import { useContext } from "react";

import { createContext, useState } from "react";

interface iModalContextProps{
    children: React.ReactNode;
}

interface iModalContextValues{
    modalOn: boolean
    switchModal: ()=>void
}

export const ModalContext = createContext({} as iModalContextValues) 


export function ModalProvider({children}:iModalContextProps){
    const [modalOn, setModal] = useState(false)

    const switchModal = () => {
        setModal(!modalOn)
    }

    return(
        <ModalContext.Provider value={{modalOn, switchModal}}>
            {children}
        </ModalContext.Provider>
    )



}
