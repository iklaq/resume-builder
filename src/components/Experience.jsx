const Experiences = ({ userInfo, changeData }) => {
    return (
      <div className="Experiences-heading">
        <h1>Experiences</h1>
        <form method="post" className="form-elements">
          <input
            type="text"
            placeholder="1.Add company Name "
            name="companyName1"
            onChange={changeData}
            value={userInfo.companyName1}
          />
          <input
            type="text"
            placeholder="1.Add position"
            name="position1"
            onChange={changeData}
            value={userInfo.position1}
          />
          <input
            type="text"
            placeholder="1.Add description"
            name="description1"
            onChange={changeData}
            value={userInfo.description1}
          />
          <input
            type="text"
            placeholder="2.Add company Name"
            name="companyName2"
            onChange={changeData}
            value={userInfo.companyName2}
          />
          <input
            type="text"
            placeholder="2.Add position "
            name="position2"
            onChange={changeData}
            value={userInfo.position2}
          />
          <input
            type="text"
            placeholder="2.Add description"
            name="description2"
            onChange={changeData}
            value={userInfo.description2}
          />
        </form>
      </div>
    );
  };
  
  export default Experiences;
  