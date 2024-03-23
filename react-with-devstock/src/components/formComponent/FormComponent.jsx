import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../index'
import {
  StyledForm,
  StyledFormElement,
  StyledFormElements,
} from './FormStyledComponents'

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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormElements>
        <div>
          <label htmlFor='title'>Tytuł</label>
          <StyledFormElement>
            <input
              {...register('title')}
              type='text'
              id='title'
              placeholder='Tytuł'
            />
            {errors?.title && <p>{errors.title.message}</p>}
          </StyledFormElement>
        </div>
        <div>
          <label htmlFor='description'>Opis</label>
          <StyledFormElement>
            <textarea
              {...register('description')}
              id='description'
              placeholder='Opis'
              rows={4}
            />
            {errors?.description && <p>{errors.description.message}</p>}
          </StyledFormElement>
        </div>
      </StyledFormElements>
      <div>
        <Button type='button' onClick={() => append(initialIgredient)} $primary>
          Dodaj składnik
        </Button>
        <StyledFormElements>
          {fields.map(({ id }, index) => {
            setValue(`ingredients.${index}.id`, id) //Dodajemy id do listy składników za pomocą setValue
            return (
              <StyledFormElement key={id}>
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
              </StyledFormElement>
            )
          })}
        </StyledFormElements>
      </div>
      <Button type='submit' disabled={isSubmitting} $primary>
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default FormComponent
