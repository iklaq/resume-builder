const Languages = ({ userInfo, changeData }) => {
  return (
    <div className="languages-heading">
      <h1>Languages</h1>
      <form method="post" className="form-elements">
        <input
          type="text"
          placeholder="1.Add Language"
          name="language1"
          onChange={changeData}
          value={userInfo.language1}
        />
        <input
          type="text"
          placeholder="2.Add Language"
          name="language2"
          onChange={changeData}
          value={userInfo.language2}
        />
      </form>
    </div>
  );
};

export default Languages;
