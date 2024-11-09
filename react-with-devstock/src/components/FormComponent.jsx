// import { useRef } from "react";

import { useState } from "react";

function FormComponent({ setSoup }) {
  const [title, setTitle] = useState("Pomidorowa");
  const [description, setDescription] = useState("");
  // const titleRef = useRef(null);
  const handleSubmit = (event) => {
    console.log("title", title);
    console.log("description", description);
    // const formData = new FormData(event.target);
    event.preventDefault();
    setSoup({
      title,
      description,
      ingredients: {
        one: "szczypta soli",
        two: "pół szklanki śmietany",
        three: "kawałek pomidora",
      },
    });
    // console.log(formData.get('title'))
    // console.log(titleRef.current.value);
  };

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  console.log("title", title);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="title">Tytuł</label>
          </div>
          <input
            value={title}
            // ref={titleRef}
            type="text"
            name="title"
            id="title"
            placeholder="Tytuł"
            onChange={onTitleChangeHandler}
          />
        </div>
        <div>
          <div>
            <label htmlFor="description">Opis</label>
          </div>
          <textarea
            name="description"
            id="description"
            value={description}
            placeholder="Opis"
            rows={4}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default FormComponent;
