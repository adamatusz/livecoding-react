import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const soupSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  description: z.string().min(10, { message: "Too short" }),
});

function FormComponent({ setSoup }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(soupSchema),
    defaultValues: {
      title: "Pomidorowa",
      description: "pyszna zupa",
    },
  });

  console.log("errors", errors);
  console.log(watch("title"));
  const onSubmit = (data) => {
    console.log("data", data);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 10 * 1000);
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
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "..." : "Wyślij"}
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
