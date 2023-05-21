import { RecipeDetailTypeResponseServer } from '@/models/Recipes';
import { baseAxios } from '../Base';

const getAsyncRecipeDetail = async (id: any) => {
  try {
    const response = await baseAxios.get<RecipeDetailTypeResponseServer>(
      `/recipes/${id}`
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getAsyncRecipeDetail };
