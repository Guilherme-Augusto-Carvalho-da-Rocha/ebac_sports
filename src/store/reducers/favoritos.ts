import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.itens.findIndex((p) => p.id === produto.id)
      if (state.itens.find((p: Produto) => p.id === produto.id)) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export default favoritosSlice
export const { toggle } = favoritosSlice.actions
