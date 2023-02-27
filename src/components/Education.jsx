const Education = ({ userInfo, changeData }) => {
    return (
      <div className="Education-heading">
        <h1>Education</h1>
        <form method="post" className="form-elements">
          <input
            type="text"
            placeholder="1.Add Institute Name "
            name="instituteName1"
            onChange={changeData}
            value={userInfo.instituteName1}
          />
          <input
            type="text"
            placeholder="1.Add Course Name "
            name="courseName1"
            onChange={changeData}
            value={userInfo.courseName1}
          />
          <input
            type="text"
            placeholder="1.Add Location "
            name="locationName1"
            onChange={changeData}
            value={userInfo.locationName1}
          />

        <input
            type="text"
            placeholder="2.Add Institute Name "
            name="instituteName2"
            onChange={changeData}
            value={userInfo.instituteName2}
          />
          <input
            type="text"
            placeholder="2.Add Course Name "
            name="courseName2"
            onChange={changeData}
            value={userInfo.courseName2}
          />
          <input
            type="text"
            placeholder="2.Add Location "
            name="locationName2"
            onChange={changeData}
            value={userInfo.locationName2}
          />
          
          
        </form>
      </div>
    );
 };
 export default Education;