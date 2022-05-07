export enum CATEGORIES_ACTIONS {
  fetchCategoriesStart = 'category/FETCH_CATEGORIES_START',
  fetchCategoriesSuccess = 'category/FETCH_CATEGORIES_SUCCESS',
  fetchCategoriesFailed = 'category/FETCH_CATEGORIES_FAILED'
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export type CategoryItemMap = {
  [key: string]: CategoryItem
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItemMap;
}

export type CategoryMap = {
  [key: string]: Category
}
