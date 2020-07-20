export const ACTION_TYPES = {
    MODAL_SHOW: "MODAL_SHOW",
    MODAL_HIDE: "MODAL_HIDE",

}
export const showModal=(cart)=>({type:ACTION_TYPES.MODAL_SHOW, cart});
export const hideModal=()=>({type: ACTION_TYPES.MODAL_HIDE})