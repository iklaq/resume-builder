import "../styles/resume.css";

// // this is the main components where
// all the input data will be used for resume

const Resume = ({
  firstName,
  lastName,
  title,
  phone,
  email,
  description,
  address,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  language1,
  language2,
  companyName1,
  position1,
  description1,
  companyName2,
  position2,
  description2,
  instituteName1,
  courseName1,
  locationName1,
  instituteName2,
  courseName2,
  locationName2,
}) => {
  return (
    <div className="main">
      <div className="top-section">
        <p className="p1">
          {firstName} <span>{lastName}</span>
        </p>
        <p className="p2">{title}</p>
      </div>
      <div className="clearfix"></div>

      <div className="col-div-4">
        <div className="content-box">
          <p className="head">Contact</p>
          <p className="p3"> {phone}</p>
          <p className="p3"> {email}</p>
          <p className="p3"> {address}</p>

          <br />
          <p className="head">my skills</p>
          <ul className="skills">
            <li>
              <span>{skill1}</span>
            </li>
            <li>
              <span>{skill2}</span>
            </li>
            <li>
              <span>{skill3}</span>
            </li>
            <li>
              <span>{skill4}</span>
            </li>
            <li>
              <span>{skill5}</span>
            </li>
          </ul>

          <br />
          <p className="head">Languages</p>
          <p className="p3">{language1}</p>
          <p className="p3">{language2}</p>
        </div>
      </div>

      <div className="line"></div>
      <div className="col-div-8">
        <div className="content-box">
          <p className="head">profile</p>
          <p className="p3">{description}.</p>
          <br />
          <p className="head">EXPERIENCE</p>

          <p>
            {position1} @ {companyName1}
          </p>
          <p className="p-4">{description1}</p>

          <p>
            {position2} @ {companyName2}
          </p>
          <p className="p-4">{description2}</p>

          <br />

          <p className="head">Education</p>
          <p className="p-4">
            {courseName1} From {instituteName1}, {locationName1}
          </p>
          <p className="p-4">
            {courseName2} From {instituteName2}, {locationName2}
          </p>
        </div>
      </div>

      <div className="clearfix"></div>
    </div>
  );
};

export default Resume;
