import React, {useState} from "react";
import { Accordion } from "react-bootstrap";

export default function About() {

    const [myStyle, setMyStyle] = useState({
      color: "black",
      backgroundColor: "white",
    });

    const [btnText, setBtnText] = useState('Enable Dark Mode')

     const  toggleStyle = ()=>{
        if (myStyle.color === "black") {
            setMyStyle({
              color: "white",
              backgroundColor: "black",
              border: "1px solid white"
            });
            setBtnText("Enable Light Mode");
        }

        else{
            setMyStyle({
              color: "black",
              backgroundColor: "white",
            });
            setBtnText("Enable Dark Mode");
        }
     }

    
     return (
       <div className="container my-3" style={myStyle}>
         <h1 className="my-2">About Us</h1>
         <Accordion>
           <Accordion.Item eventKey="0">
             <Accordion.Header>Accordion Item #1</Accordion.Header>
             <Accordion.Body>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
             </Accordion.Body>
           </Accordion.Item>
         </Accordion>
       </div>
     );
}
