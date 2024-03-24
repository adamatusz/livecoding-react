import { useState } from "react";

function FormComponent({ setSoup }) {
  const [title, setTitle] = useState('Pomidorowa')
  const [description, setDescription] = useState('')
  const handleSubmit = (event) => {
    console.log('title', title)
    console.log('description', description)
    event.preventDefault();
    setSoup({
      title,
      description,
      ingredients: {
        one: 'sczypta soli',
        two: 'szklanka mleka',
        three: 'kawałek pomidora'
      }
    })
  }

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value)
  }



  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="title">Tytuł</label>
        </div>
        <input value={title} id="title" name="title" type="text" placeholder="Tytuł" onChange={onTitleChangeHandler} />
      </div>
      <div>
        <div>
          <label htmlFor="description">Opis</label>
        </div>
        <textarea id="description" value={description} name="description" placeholder="Opis" rows={4} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <button type="submit">Wyślij</button>
    </form>
  </div>
}

export default FormComponent
