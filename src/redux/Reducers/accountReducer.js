const reducer=(state=0,action)=>{
    //reducers returns a state
switch (action.type) {
    case "deposit":
        return state+action.payload
        case "withdraw":
            return state-action.payload

    default:
        //if an action is dispatched and is not spectified
        return state;
}
}
export default reducer