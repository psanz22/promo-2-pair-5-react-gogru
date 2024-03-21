function Form({ changeName, nameValue }) {
  const handleName = (ev) => {
    changeName(ev.target.value);
  };
  return (
    <form className="form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nombre tu ? es cual"
        onChange={handleName}
        value={nameValue}
      />
    </form>
  );
}

export default Form;
