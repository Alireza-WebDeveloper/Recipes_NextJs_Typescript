import { CategoriesResponseServerType } from '@/models/Catgories';
import { baseAxios } from '../Base';

const getAsyncCategoriesByAll = async () => {
  try {
    const response = await baseAxios.get<CategoriesResponseServerType>(
      '/categories'
    );
    return { data: response.data.data, error: '' };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};

export { getAsyncCategoriesByAll };
