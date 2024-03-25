import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ingredientSchema = z.object({
  id: z.string(),
  amount: z.string(),
  name: z.string(),
});

const soupSchema = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "Required" }),
  description: z.string().min(10, { message: "Too short" }),
  ingredients: z.array(ingredientSchema),
});

const initialIngredient = { name: "", amount: "1", id: "" };

function FormComponent({ addRecipe, recipesAmount }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    control,
    watch,
  } = useForm({
    resolver: zodResolver(soupSchema),
    defaultValues: {
      id: recipesAmount + 1,
      title: "Pomidorowa",
      description: "pyszna zupa",
      ingredients: [initialIngredient],
    },
  });

  const { fields, append } = useFieldArray({ name: "ingredients", control });

  console.log("errors", errors);
  console.log(watch("title"));
  const onSubmit = (data) => {
    console.log("data", data);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        addRecipe(data);
      }, 2 * 1000);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="title">Tytuł</label>
          </div>
          <input
            {...register("title")}
            id="title"
            name="title"
            type="text"
            placeholder="Tytuł"
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
            placeholder="Opis"
            rows={4}
          />
        </div>
        <div>
          <button type="button" onClick={() => append(initialIngredient)}>
            Dodaj składnik
          </button>
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
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "..." : "Wyślij"}
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
