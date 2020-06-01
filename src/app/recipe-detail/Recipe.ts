export class Recipe {
  ytUrl: string;
  name: string;
  photo: string;
  preparationTime: string;
  serves: string;
  complexity: string;
  firstName: string;
  lastName: string;
  inCookingList: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  metaTags: MetaTag[];
}
export class Ingredient {
  id: number;
  ingredient: string;
}
class Instruction {
  id: number;
  instruction: string;
}
class MetaTag {
  id: number;
  tag: string;
}
