import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const MemeGenForm = () => {
  const FORM_STATE = {
    id: uuidv4(),
    url: "",
    top: "",
    bttm: "",
  };

  const [formData, setFormData] = useState(FORM_STATE);
  const dispatch = useDispatch();
  const add = () => dispatch({ type: "ADD", payload: formData });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormData(formData);
    add();
    setFormData(FORM_STATE);
    console.log("MEME DATA", formData);
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 justify-center align-items"
      >
        <input type="hidden" name="id" value={formData.id} />
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered m-1"
        />
        <input
          type="text"
          name="top"
          value={formData.top}
          onChange={handleChange}
          placeholder="Top Text"
          className="input input-bordered m-1"
        />
        <input
          type="text"
          name="bttm"
          value={formData.bttm}
          onChange={handleChange}
          placeholder="Bottom Text"
          className="input input-bordered m-1"
        />
        <button type="submit" className="btn btn-outline m-1">
          Give me memez
        </button>
      </form>
    </div>
  );
};

export default MemeGenForm;
