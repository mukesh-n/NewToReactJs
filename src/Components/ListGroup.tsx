import React, { useState } from "react";
import { chats } from "../Models/Chat.model";

interface Props {
  items: chats[];
}

const ListGroup = ({ items }: Props) => {
  return (
    <>
      <div className="flex-grow-1 overflow-auto" style={{ height: "0px" }}>
        {items.map((item, index) => (
          <div className="row g-0 mb-3" key={index}>
            <div className="col-2">
              <img
                style={{ height: "50px", width: "50px" }}
                className="rounded-circle"
                src={item.dp}
              />
            </div>
            <div className="col-10 border-bottom border-dark pb-2">
              <div className="fw-bold">{item.name}</div>
              <div className="small" style={{ color: "#5a7185" }}>
                {item.recentchat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListGroup;
