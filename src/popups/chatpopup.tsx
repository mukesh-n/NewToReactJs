import React, { useEffect, useState } from "react";
import { chats } from "../Models/Chat.model";

interface Prop {
  chat: chats | null;
  show: boolean;
  onClose: () => void;
  onAddContact: (contact: chats) => void;
}

const ChatPopup = ({ chat, show, onClose, onAddContact }: Prop) => {
  const [Contact, setContact] = useState<chats>({
    id: 0,
    name: "",
    dp: "",
    mobile: "",
    recentchat: "",
  });
  useEffect(() => {
    if (chat) {
      setContact(chat);
    } else {
      setContact({ id: 0, name: "", dp: "", mobile: "", recentchat: "" });
    }
  }, [chat]);
  const handleAddContact = () => {
    onAddContact(Contact);
    setContact(new chats());
    onClose();
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };
  return (
    <div>
      {show && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">Add Contact</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={Contact.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Picture
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={Contact.dp}
                    onChange={handleInputChange}
                    name="dp"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Mobile
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={Contact.mobile}
                    onChange={handleInputChange}
                    name="mobile"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  onClick={handleAddContact}
                  type="button"
                  className="btn btn-primary"
                >
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
