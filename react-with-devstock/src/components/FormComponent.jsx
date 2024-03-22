import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ingredientSchema = z.object({
  ingredientName: z.string(),
  ingredientsAmount: z.string(),
  id: z.string(),
})

const schema = z.object({
  title: z.string().min(1, { message: 'Tytuł jest wymagany' }),
  description: z.string().min(1, { message: 'Opis jest wymagany' }),
  ingredients: z.array(ingredientSchema),
  id: z.number(),
})

const initialIgredient = {
  id: '',
  ingredientName: '',
  ingredientsAmount: '1',
}

function FormComponent({ setRecipe, recipesAmount }) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      id: recipesAmount + 1,
      title: 'Pomidorowa',
      description: 'Pyszna zupka',
      ingredients: [initialIgredient],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'ingredients',
  })

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        setRecipe((prev) => [...prev, data])
      }, 2000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor='title'>Tytuł</label>
        </div>
        <input
          {...register('title')}
          type='text'
          id='title'
          placeholder='Tytuł'
        />
        {errors?.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <div>
          <label htmlFor='description'>Opis</label>
        </div>
        <textarea
          {...register('description')}
          id='description'
          placeholder='Opis'
          rows={4}
        />
        {errors?.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <button type='button' onClick={() => append(initialIgredient)}>
          Dodaj składnk
        </button>
        {fields.map(({ id }, index) => {
          setValue(`ingredients.${index}.id`, id) //Dodajemy id do listy składników za pomocą setValue
          return (
            <div key={id}>
              <div>
                <label htmlFor='igredient'>Nazwa</label>
              </div>
              <input
                {...register(`ingredients.${index}.ingredientName`)}
                type='text'
                id='igredient'
              />
              <div>
                <label htmlFor='amount'>Ilość</label>
              </div>
              <input
                {...register(`ingredients.${index}.ingredientsAmount`)}
                type='number'
                id='amount'
              />
            </div>
          )
        })}
      </div>
      <button type='submit' disabled={isSubmitting}>
        Wyślij
      </button>
    </form>
  )
}

export default FormComponent
