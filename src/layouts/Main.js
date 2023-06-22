import React from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {

  const navigate = useNavigate();
  const mainPageClick = () => {
    navigate("/main");
  };
  const userPageClick = () => {
    navigate("/user");
  };
  return (
    <main>
        <div>
            <button onClick={mainPageClick}> Main Page </button>
            <button onClick={userPageClick}> User Page </button>
        </div>
    </main>
  );
};

export default Main;
