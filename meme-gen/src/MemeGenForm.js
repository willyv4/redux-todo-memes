import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MemeGenForm = () => {
  const FORM_STATE = {
    url: "",
    top: "",
    bttm: "",
  };

  const [formData, setFormData] = useState(FORM_STATE);

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
    setFormData(FORM_STATE);
    console.log("MEME DATA", formData);
  };

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 justify-center align-items"
      >
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
