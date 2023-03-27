import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            //check if item already exists
            const existsItem = state.itemsList.find(
                (item) => item.id === newItem.id
            );
            if (existsItem) {
                existsItem.quantity++;
                existsItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.cover,
                });
                state.totalQuantity++;
            }
        },
        
    },
});

export default cartSlice;
export const cartActions = cartSlice.actions;