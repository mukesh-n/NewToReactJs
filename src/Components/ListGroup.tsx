import React, { useState } from "react";
import { chats } from "../Models/Chat.model";
import { CiEdit } from "react-icons/ci";
import { IoIosTrash } from "react-icons/io";
import ChatPopup from "../popups/chatpopup";

interface Props {
  items: chats[];
  onEditContact: (contact: chats) => void;
}

const ListGroup = ({ items, onEditContact }: Props) => {
  const [editContact, setEditContact] = useState(Boolean);
  const [selectedChat, setSelectedChat] = useState<chats | null>(null);
  const handleCloseModal = () => {
    setEditContact(false);
  };

  const handleEditContact = (chat: chats) => {
    setSelectedChat(chat);
    setEditContact(true);
    onEditContact(chat);
  };
  return (
    <>
      <ChatPopup
        show={editContact}
        chat={selectedChat}
        onClose={handleCloseModal}
        onAddContact={handleEditContact}
      ></ChatPopup>
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
              <div className="d-flex flex-row">
                <div className="flex-grow-1">
                  <div className="fw-bold">{item.name}</div>
                  <div className="small" style={{ color: "#5a7185" }}>
                    {item.recentchat}
                  </div>
                </div>
                <div>
                  <CiEdit
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEditContact(item)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListGroup;
