import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { useEffect } from 'react';
import { RecipeTypeList, RecipeTypeObj } from '@/models/Recipes';
const Context = React.createContext<ContextProps>({} as ContextProps);

type ContextProps = {
  state: RecipeTypeList;
  dispatch: any;
};

type actionProps1 = {
  type: 'defaultValue';
  payload: RecipeTypeObj;
};
type actionProps2 = {
  type: 'addRecipe';
  payload: RecipeTypeObj;
};

type actionProps3 = {
  type: 'removeRecipe';
  payload: number;
};

type actionProps = actionProps1 | actionProps2 | actionProps3;

type InitialStateProps = RecipeTypeObj[];
//// InitialState

const initialState: InitialStateProps = [];
/// Reducer
const reducer = (state: any, action: actionProps) => {
  switch (action.type) {
    case 'defaultValue':
      return action.payload;
    case 'addRecipe':
      localStorage.setItem(
        'favorite',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case 'removeRecipe':
      const filter = state.filter(
        ({ _id }: { _id: any }) => _id !== action.payload
      );
      localStorage.setItem('favorite', JSON.stringify([...filter]));
      return filter;
    default:
      return state;
  }
};
const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /// Load Data From LocalStorage
  useEffect(() => {
    const storeData: any = JSON.parse(localStorage.getItem('favorite') as any);
    if (storeData && storeData.length >= 1) {
      /// Dispacth InitialState
      dispatch({ type: 'defaultValue', payload: storeData });
    }
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const FavoriteContext = () => useContext(Context);

export { FavoriteProvider, FavoriteContext };
