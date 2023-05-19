export type RecipeTypeObj = {
  _id: number;
  name: string;
  requirements: {
    itemName: string;
    itemNumber: number;
    itemUnit: string;
    _id: string;
  }[];
  categories: string[];
  images: string[];
  rate: number;
  rateNumber: number;
  body: string;
  steps: {
    stepName: string;
    stepBody: string;
    _id: string;
  }[];
};

export type RecipeTypeResponseServer = {
  status: boolean;
  data: RecipeTypeList;
  resultStatus: string;
};

export type RecipeDetailTypeResponseServer = {
  status: boolean;
  data: RecipeTypeObj;
  resultStatus: string;
};

export type RecipeTypeList = RecipeTypeObj[];
