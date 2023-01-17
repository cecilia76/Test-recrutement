import React from 'react';
import IIngredient from '@/interfaces/ingredient.interface';

interface IProps {
  ingredients: IIngredient[],
}

const Ingredient:React.FC <IProps> = ({ ingredients }) => {
  return (
    <div className='ingredient'>
      {
        ingredients.map((m:IIngredient, index:number) => {
          return <div key={index}><span className='ingredient-label'>{ m.name }: </span>{ m.amount.value } { m.amount.unit } </div>
        })
      }
    </div>
  );
}

export default Ingredient;