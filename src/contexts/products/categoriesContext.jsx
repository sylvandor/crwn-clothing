import {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {}
});

export const CategoriesProvider = ({children}) => {
  const [categories, setCategories] = useState({});

  const getProduct = (category, id) =>
    categories[category].find(product => product.id === parseInt(id))

  const value = {categories, setCategories, getProduct};

  useEffect(() => {
    getCategoriesAndDocuments()
      .then(results => {
        setCategories(results);
      });
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}