import * as actionTypes from './action-types';

export const increasevalue=()=>
{
    return{
        type:actionTypes.INCREMENT
    }
}
export const decreasevalue=()=>
{
    return{
        type:actionTypes.DECREMENT
    }
}