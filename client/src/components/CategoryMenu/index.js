import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link }  from 'react-router-dom';
import Nike from "../../pages/Nike";


function CategoryMenu() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  return (
    <div className='categoryBtns'>
      <Route>
        <Link to="/nike" page={Nike}>
          <button variant="contained">Nike</button>
        </Link>
        <Link to="/jordan">
          <button variant="contained">Jordan</button>
        </Link>
        <Link to="/converse">
          <button variant="contained">Converse</button>
        </Link>
        <Link to="/vans">
          <button variant="contained">Vans</button>
        </Link>
        <Link to="/adidas">
          <button variant="contained">Adidas</button>
        </Link>
      </Route>
    </div>
  );
}

export default CategoryMenu;
