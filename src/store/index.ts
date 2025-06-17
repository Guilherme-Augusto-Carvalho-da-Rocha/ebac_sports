import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './reducers/carrinho'
import { api } from '../services/api'
import favoritosSlice from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice.reducer,
    favoritos: favoritosSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
