import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// import { useState } from "react";

const ingredientsSchema = z.object({
  id: z.number(),
  amount: z.number(),
  name: z.string(),
});

const soupSchema = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "Required" }),
  description: z.string().min(10, { message: "Too short" }),
  ingredients: z.array(ingredientsSchema),
});

const initialIngredients = { name: "", amount: 1, id: "" };

function FormComponent({ addRecipe, recipesAmount }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    control,
    watch,
  } = useForm({
    resolver: zodResolver(soupSchema),
    defaultValues: {
      id: recipesAmount + 1,
      title: "Pomidorowa",
      description: "Pyszna zupa",
      ingredients: [initialIngredients],
    },
  });

  const { fields, append } = useFieldArray({ name: "ingredients", control });

  console.log("errors", errors);
  console.log(watch());
  // const [title, setTitle] = useState("Pomidorowa");
  // const [description, setDescription] = useState("");
  // const titleRef = useRef(null);
  const onSubmit = (data) => {
    console.log("data", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        addRecipe(data);
      }, 2 * 1000);
    });
    // console.log("title", title);
    // console.log("description", description);
    // const formData = new FormData(event.target);
    // event.preventDefault();
    // console.log(formData.get('title'))
    // console.log(titleRef.current.value);
  };

  // const onTitleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // console.log("title", title);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="title">Tytuł</label>
          </div>
          <input
            {...register("title")}
            // value={title}
            // ref={titleRef}
            type="text"
            name="title"
            id="title"
            placeholder="Tytuł"
            // onChange={onTitleChangeHandler}
          />
          {errors?.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <div>
            <label htmlFor="description">Opis</label>
          </div>
          <textarea
            {...register("description")}
            id="description"
            name="description"
            // value={description}
            placeholder="Opis"
            rows={4}
            // onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
        {fields.map(({ id }, index) => {
            setValue(`ingredients.${index}.id`, id);
            return (
              <div key={id}>
                <div>
                  <label htmlFor="ingredient">Nazwa</label>
                </div>
                <input
                  {...register(`ingredients.${index}.name`)}
                  type="text"
                  id="ingredient"
                />
                <div>
                  <label htmlFor="amount">Ilość</label>
                </div>
                <input
                  {...register(`ingredients.${index}.amount`)}
                  type="text"
                  id="amount"
                />
              </div>
            );
          })}
        </div>
        <button disabled={!isValid || isSubmitting} type="submit">
          {isSubmitting ? "..." : "Wyślij"}
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
