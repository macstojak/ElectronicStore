import React from "react";
import ReactDOM from "react-dom";

const Modal = props =>{
    const {children} = props;
    const portalRoot = document.getElementById('portal');
    return ReactDOM.createPortal(  <div style={{  position: "fixed", top: 0, bottom: 0, width: "100%" }}>
    <div
      style={{
        
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
      }}
    />
    <div
      style={{
        
        background: "white",
        width: "50%",
        zIndex: 99,
        position: "absolute",
        borderRadius: "10px",
        padding: "20px",
        left: "50%",
        top: "30%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </div>
  </div>, portalRoot); 

}
export default Modal;