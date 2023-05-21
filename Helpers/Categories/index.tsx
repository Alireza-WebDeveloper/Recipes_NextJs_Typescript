import { CategoriesResponseServerType } from '@/models/Catgories';
import { baseAxios } from '../Base';

const getAsyncCategoriesByAll = async () => {
  try {
    const response = await baseAxios.get<CategoriesResponseServerType>(
      '/categories'
    );
    return response.data.data;
  } catch (error: any) {
     throw new Error(error.message)
  }
};

export { getAsyncCategoriesByAll };
