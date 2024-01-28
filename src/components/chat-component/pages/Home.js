import React from "react";
import Sidebar from "./atoms/Sidebar";
import Chat from "./atoms/Chat";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
