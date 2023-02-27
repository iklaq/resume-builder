import React from "react";
import "../styles/inputForm.css";
import Education from "./Education";
import Experiences from "./Experience";
import GeneralInfo from "./GeneralIfo";
import Languages from "./Languages";
import Resume from "./resume";
import Skills from "./Skills";

// In this component eventListners, states  are used
//  and imported all the input components

const InputForm = () => {
  const [userInfo, changeUserInfo] = React.useState({});

  const changeData = (event) =>
    changeUserInfo((prevInfo) => ({
      ...prevInfo,
      [event.target.name]: event.target.value,
    }));

  return (
    <>
      <div className="container">
        <GeneralInfo userInfo={userInfo} changeData={changeData} />

        <Skills userInfo={userInfo} changeData={changeData} />

        <Languages userInfo={userInfo} changeData={changeData} />

        <Experiences  userInfo={userInfo} changeData={changeData} />
        
        <Education userInfo={userInfo} changeData={changeData} />
      </div>

      <Resume {...userInfo} />
    </>
  );
};

export default InputForm;
