export const initialState = {
    basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount,0);


const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item]  //item is jo waha push hua hai
            };

        case 'REMOVE_FROM_BASKET':
            // return{
            //     ...state, 
            //     basket : state.basket.filter(item=> item.id !== action.id)   //action matlab jo waha se aa rha hai
            // };  // this deleted all the ids present
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index,1);    // index automated tha toh last pe aa gya and then 1 se slice kr diya toh last wala haat gya
            }else{
                console.warn(`Cant remove product (id : ${action.id}) as it is not in the cart`)
            }
            return {
                ...state,
                basket: newBasket
            }


        default:
            return state;

    }

}

export default reducer;