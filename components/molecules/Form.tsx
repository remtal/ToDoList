import React, { useState } from "react";

import { FormStyle } from "./styles";

export function Form() {
  const [input, setInput] = useState("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a To-Do"
        value={input}
        name="text"
        className="input"
        onChange={handleChange}
      />
      <button>Add To-Do</button>
    </FormStyle>
  );
}

export default Form;
