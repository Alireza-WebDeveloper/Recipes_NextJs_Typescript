import { baseAxios } from '../Base';
import { RecipeTypeResponseServer } from '@/models/Recipes';
// By Limit
const getAsyncRecipesByLimit = async (limit = 10) => {
  try {
    const response = await baseAxios.get<RecipeTypeResponseServer>(
      `/recipes?limit=${limit}`
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
// By All
const getAsyncRecipesByAll = async () => {
  try {
    const response = await baseAxios.get<RecipeTypeResponseServer>('/recipes');
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
// By Query = String('')
const getAsyncRecipesByQuery = async (q: string) => {
  try {
    const response = await baseAxios.get<RecipeTypeResponseServer>(
      `/recipes?q=${q}`
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
// By Categories = String('')
const getAsyncRecipesByCategories = async (categories: string) => {
  try {
    const response = await baseAxios.get<RecipeTypeResponseServer>(
      `/recipes?categories=${categories}`
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
// By Query = String('') And Categories = String('')
const getAsyncRecipesByQueryAndCategories = async ({
  q,
  categories,
}: {
  q: string;
  categories: string;
}) => {
  try {
    const response = await baseAxios.get<RecipeTypeResponseServer>(
      `/recipes?q=${q}&categories=${categories}`
    );
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export {
  getAsyncRecipesByLimit,
  getAsyncRecipesByAll,
  getAsyncRecipesByQuery,
  getAsyncRecipesByCategories,
  getAsyncRecipesByQueryAndCategories,
};
