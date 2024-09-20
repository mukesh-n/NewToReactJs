import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListGroup from "./Components/ListGroup";
import ChatView from "./Components/ChatView";
import image1 from "./assets/image1.png";

function App() {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <div className="row g-0 flex-grow-1">
        <div
          className="d-flex flex-column col-3 h-100 border-end border-dark p-3"
          style={{ backgroundColor: "#111b21", color: "#e2eced" }}
        >
          <ChatView></ChatView>
        </div>
        <div
          style={{ backgroundColor: "#222e35" }}
          className="col-9 d-flex align-items-center justify-content-center"
        >
          <div>
            <img
              style={{ width: "30rem" }}
              className="mx-auto d-block mb-3"
              src={image1}
            ></img>
            <h4 style={{ color: "#e2eced" }} className="text-center">
              WhatsApp Web
            </h4>
            <div style={{ color: "#5a7185" }} className="text-center">
              Send and receive messages without keeping phone online.
            </div>
            <div style={{ color: "#5a7185" }} className="text-center">
              Use WhatsApp on up to 4 linked devices and 1 phone at the same
              time
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
