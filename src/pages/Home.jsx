import React, { useEffect, useState } from "react";
const Home = () => {
  const [myUsers, setMyUsers] = useState([]);
  useEffect(() => {
    var userData = JSON.parse(localStorage.getItem("users"));
    setMyUsers(userData);
    //console.log(userData);
  }, []);

  const handleClear = () => {
    localStorage.clear();
    setMyUsers([]);
  };
  return (
    <>
      {myUsers &&
        myUsers.map((ele, index) => (
          <h4 key={index}>
            welcome {ele.fname} {ele.lname}
          </h4>
        ))}
      <button onClick={handleClear}>CLEAR</button>
    </>
  );
};
export default Home;
