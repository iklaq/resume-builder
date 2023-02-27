const Skills = ({ userInfo, changeData }) => {
  return (
    <div className="skills-heading">
      <h1>Technical Skills</h1>
      <form method="post" className="form-elements">
        <input
          type="text"
          placeholder="1.Add Skill"
          name="skill1"
          onChange={changeData}
          value={userInfo.skill1}
        />
        <input
          type="text"
          placeholder=".Add Skill"
          name="skill2"
          onChange={changeData}
          value={userInfo.skill2}
        />
        <input
          type="text"
          placeholder="3.Add Skill"
          name="skill3"
          onChange={changeData}
          value={userInfo.skill3}
        />
        <input
          type="text"
          placeholder="4.Add Skill"
          name="skill4"
          onChange={changeData}
          value={userInfo.skill4}
        />
        <input
          type="text"
          placeholder="5.Add Skill"
          name="skill5"
          onChange={changeData}
          value={userInfo.skill5}
        />
      </form>
    </div>
  );
};

export default Skills;
