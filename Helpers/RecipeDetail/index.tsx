import { RecipeDetailTypeResponseServer } from '@/models/Recipes';
import { baseAxios } from '../Base';

const getAsyncRecipeDetail = async (id: any) => {
  try {
    const response = await baseAxios.get<RecipeDetailTypeResponseServer>(
      `/recipes/${id}`
    );
    return { data: response.data.data, error: '' };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

export { getAsyncRecipeDetail };
