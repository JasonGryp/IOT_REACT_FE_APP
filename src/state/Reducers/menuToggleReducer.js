const menuToggleReducer =(state=false,action)=>{
    switch(action.type){
        case "toggleMenu":
        return !state;
        default:
        return state;
    }
}
export default menuToggleReducer;