import React, { useState } from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import ListGroup from "./ListGroup";
import { chats } from "../Models/Chat.model";

const ChatView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  let Chats: chats[] = [
    {
      name: "Mukesh",
      recentchat: "Hi there!",
      dp: "https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg",
      mobile: "7828013122",
    },
    {
      name: "Jeevi",
      recentchat: "Hi there!",
      dp: "https://wallpapers.com/images/hd/cartoon-pictures-ty2cqbq2er9iov7h.jpg",
      mobile: "9328033122",
    },
    {
      name: "Kamalesh",
      recentchat: "Hi there!",
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn6ABvcqTfFPjcIbjc9hdx1H4PtQsAuVyTQ&s",
      mobile: "6538013142",
    },
    {
      name: "Logesh",
      recentchat: "Hi there!",
      dp: "https://images.template.net/wp-content/uploads/2015/04/Cartoon-Love-Drawing-Template.jpg",
      mobile: "852434232",
    },
    {
      name: "Vicky",
      recentchat: "Hi there!",
      dp: "https://img.pastemagazine.com/wp-content/uploads/2022/07/18045024/johnny-bravo-sq.jpg",
      mobile: "852434232",
    },
    {
      name: "Kavya",
      recentchat: "Hi there!",
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD5u2TfRztF1zQaMPqadPRldYBq5AY3AqqQ&s",
      mobile: "852434232",
    },
    {
      name: "Ramya",
      recentchat: "Hi there!",
      dp: "https://images.template.net/wp-content/uploads/2015/04/Cartoon-Love-Drawing-Template.jpg",
      mobile: "852434232",
    },
    {
      name: "Vijay",
      recentchat: "Hi there!",
      dp: "https://img.freepik.com/premium-photo/captivating-cartoon-characters-cute-kids-playful-boys-lovely-girls-digital-world_1142283-15995.jpg",
      mobile: "852434232",
    },
    {
      name: "Deena",
      recentchat: "Hi there!",
      dp: "https://static.vecteezy.com/system/resources/previews/023/826/012/original/boy-cartoon-character-cute-funny-illustration-eps-10-free-vector.jpg",
      mobile: "852434232",
    },
  ];

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

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-2">
        <div className="h4 flex-grow-1">Chats</div>
        <BiSolidMessageSquareAdd
          className="me-3"
          style={{ fontSize: "1.5rem" }}
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

      <ListGroup items={filteredItems}></ListGroup>
    </>
  );
};

export default ChatView;
