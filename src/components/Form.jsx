import React from "react";
import userData from "../componentData/formData";
import "../styles/inputForm.css";
import FormInput from "./formInput";
import Resume from "./resume";

// In this component eventListners, states  are used
//  and imported all the input components

const Form = () => {
  const [userInfo, changeUserInfo] = React.useState({});

  const changeData = (event) =>
    changeUserInfo((prevInfo) => ({
      ...prevInfo,
      [event.target.name]: event.target.value,
    }));

  const formDetails = userData.map((formArray) =>
    formArray.map((formData) => (
      <FormInput key={formData.id} {...formData} changeData={changeData} />
    ))
  );

  return (
    <>
      <div className="container">{formDetails}</div>

      <Resume {...userInfo} />
    </>
  );
};

export default Form;
