export default interface IIngredient {
  name: string,
  amount: {
    value?: number,
    unit: string,
  },
  add?: string,
  attribute?: string,
}