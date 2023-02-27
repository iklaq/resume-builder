const GeneralInfo = ({ userInfo, changeData }) => {
  return (
    <div className="general-info-heading">
      <h1>General Information</h1>
      <form method="post" className="form-elements">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeData}
          value={userInfo.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeData}
          value={userInfo.lastName}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={changeData}
          value={userInfo.title}
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          onChange={changeData}
          value={userInfo.phone}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={changeData}
          value={userInfo.email}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={changeData}
          value={userInfo.description}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={changeData}
          value={userInfo.address}
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
