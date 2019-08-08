import {Product} from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  products: ProductState
}

export interface ProductState{
  showProductCode: boolean;
  currentProductId: number;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: []
};

const getProductFeatureSelector = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(getProductFeatureSelector, state => state.showProductCode);
export const getCurrentProductId = createSelector(getProductFeatureSelector, state => state.currentProductId);
export const getCurrentProduct = createSelector(getProductFeatureSelector, 
                                                getCurrentProductId,
                                                (state, currentProductId) => state.products.find(p=>p.id == currentProductId));
export const getProducts = createSelector(getProductFeatureSelector, state => state.products);

export function reducer(state = initialState, action) :ProductState {
  switch (action.type) {

    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };

    default:
      return state;
  }
}
