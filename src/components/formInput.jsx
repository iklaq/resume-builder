const FormInput = ({ heading, placeholder, name, changeData }) => {
  return (
    <div className="form-heading">
      
      <h1>{heading}</h1>

      <form method="post" className="form-elements">
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={changeData}
        />
      </form>
      
    </div>
  );
};
export default FormInput;
