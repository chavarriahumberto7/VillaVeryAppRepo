

/* import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
        state.items=[...state.items, action.payload]

    
    },
    removeFromBasket: (state,action) => {
      state.value -= 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems= (state) => state.items;

export default basketSlice.reducer */



import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: any
}

const initialState: any= {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items=[...state.items, action.payload]
     

  
  },
  removeFromBasket: (state,action) => {

    const index= state.items.findIndex((item)=> item.id===action.payload.id);
   

    let newBasket=[...state.items];
   

    if(index>=0){
      newBasket.splice(index,1);
    }
    else{
      console.warn(`Cant remove product ${action.payload.id} as its not in the basket`);
    }

    state.items=newBasket;


  },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems= (state) => state.basket.items;
export const selectBasketItemsWithId=(state, id)=> state.basket.items.filter((item)=> item.id===id)
export const selectBasketTotal = ( state) =>  {
   return state.basket.items.reduce((total, item) => total+=item.price,0)
}

export default basketSlice.reducer
