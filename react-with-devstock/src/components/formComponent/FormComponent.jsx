import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../index'
import style from './FormComponent.module.css'

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
      <div className={style.formElements}>
        <div>
          <label htmlFor='title'>Tytuł</label>
          <div className={style.formElement}>
            <input
              {...register('title')}
              type='text'
              id='title'
              placeholder='Tytuł'
            />
            {errors?.title && <p>{errors.title.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor='description'>Opis</label>
          <div className={style.formElement}>
            <textarea
              {...register('description')}
              id='description'
              placeholder='Opis'
              rows={4}
            />
            {errors?.description && <p>{errors.description.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <Button type='button' onClick={() => append(initialIgredient)}>
          Dodaj składnik
        </Button>
        <div className={style.formElements}>
          {fields.map(({ id }, index) => {
            setValue(`ingredients.${index}.id`, id) //Dodajemy id do listy składników za pomocą setValue
            return (
              <div key={id} className={style.formElement}>
                <label htmlFor='igredient'>Nazwa</label>
                <input
                  {...register(`ingredients.${index}.ingredientName`)}
                  type='text'
                  id='igredient'
                />
                <label htmlFor='amount'>Ilość</label>
                <input
                  {...register(`ingredients.${index}.ingredientsAmount`)}
                  type='number'
                  id='amount'
                />
              </div>
            )
          })}
        </div>
      </div>
      <Button type='submit' disabled={isSubmitting}>
        Wyślij
      </Button>
    </form>
  )
}

export default FormComponent
