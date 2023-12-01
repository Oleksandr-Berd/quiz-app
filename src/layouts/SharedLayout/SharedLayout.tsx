import * as SC from "./SharedLayoutStyled"

import Header from "../Header/Header";


type Props ={
    children: React.ReactNode
}

const SharedLayout:React.FC<Props> = ({children}) => {
     

    return (
      <SC.SharedLayoutStyled >
        <Header />
        {children}
      </SC.SharedLayoutStyled>
    );
}
 
export default SharedLayout;