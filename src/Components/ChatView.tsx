import React, { useState } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import ListGroup from "./ListGroup";
import { chats } from "../Models/Chat.model";
import ChatPopup from "../popups/chatpopup";

const ChatView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [addContact, setAddContact] = useState(Boolean);
  const [selectedChat, setSelectedChat] = useState<chats | null>(null);
  const [Chats, setChats] = useState<Array<chats>>([
    {
      id: 1,
      name: "Mukesh",
      recentchat: "Hi there!",
      dp: "https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg",
      mobile: "7828013122",
    },
    {
      id: 2,

      name: "Jeevi",
      recentchat: "Hello!",
      dp: "https://wallpapers.com/images/hd/cartoon-pictures-ty2cqbq2er9iov7h.jpg",
      mobile: "9328033122",
    },
    {
      id: 3,

      name: "Kamalesh",
      recentchat: "Hi",
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn6ABvcqTfFPjcIbjc9hdx1H4PtQsAuVyTQ&s",
      mobile: "6538013142",
    },
    {
      id: 4,

      name: "Logesh",
      recentchat: "There!",
      dp: "https://images.template.net/wp-content/uploads/2015/04/Cartoon-Love-Drawing-Template.jpg",
      mobile: "852434232",
    },
  ]);

  const filteredItems = Chats.filter((v) => {
    let name = v.name
      .toLowerCase()
      .trim()
      .includes(searchTerm.toLowerCase().trim());
    let mobile = v.mobile
      .toLowerCase()
      .trim()
      .includes(searchTerm.toLowerCase().trim());
    return name || mobile;
  });
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const handleCloseModal = () => {
    setAddContact(false);
  };
  const handleAddContact = () => {
    setSelectedChat(null);
    setAddContact(true);
    console.log("Opening modal");
  };
  const handleAddContact1 = (newContact: chats) => {
    console.log({ newContact });
    if (newContact.id == 0) {
      newContact.id = Chats.length + 1;
      setChats((prevChats) => [...prevChats, newContact]);
    } else {
      let index = Chats.findIndex((v) => {
        return v.id == newContact.id;
      });
      if (index > -1) {
        setChats((prevChats) => {
          const updatedChats = [...prevChats];
          updatedChats[index] = newContact;
          return updatedChats;
        });
      }
    }
  };

  return (
    <>
      <ChatPopup
        show={addContact}
        chat={selectedChat}
        onClose={handleCloseModal}
        onAddContact={handleAddContact1}
      ></ChatPopup>
      <div className="d-flex flex-row align-items-center mb-2">
        <div className="h4 flex-grow-1">Chats</div>
        <BiSolidMessageSquareAdd
          className="me-3"
          onClick={handleAddContact}
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        />
        <HiDotsVertical style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="input-group mb-4">
        <span
          style={{ backgroundColor: "#202c33", color: "#e2eced" }}
          className="input-group-text border-0"
          id="basic-addon1"
        >
          <CiSearch />
        </span>
        <input
          type="text"
          style={{ backgroundColor: "#202c33", color: "#e2eced" }}
          className="form-control form-control-sm border-0"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ListGroup
        items={filteredItems}
        onEditContact={handleAddContact1}
      ></ListGroup>
    </>
  );
};

export default ChatView;
