export type MenuActionType = {
    type: 'CHANGE-MENU-COLLAPSE'
}

export type MenuStateType = {
    collapsed: boolean
}

export const accordionReducer = (state: MenuStateType, action: MenuActionType): MenuStateType => {
    switch(action.type) {
        case "CHANGE-MENU-COLLAPSE": {
            /*const stateCopy = {...state};
            stateCopy.collapsed = !state.collapsed;
            return stateCopy;*/

            /*const stateCopy = {...state, collapsed: !state.collapsed};
            return stateCopy;*/

            return {...state, collapsed: !state.collapsed};
        }
        default:
            return state;
    }
}