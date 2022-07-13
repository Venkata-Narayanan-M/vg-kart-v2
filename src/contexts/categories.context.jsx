import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

//Just one time
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  //Just one time because we dont want to load data to db everytime we load
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
