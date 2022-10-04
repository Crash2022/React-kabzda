export type ActionTypes = MenuActionType

export type MenuActionType = {
    type: 'CHANGE-MENU-COLLAPSE'
    // collapsed: boolean
}

export type MenuStateType = {
    collapsed: boolean
}

export const accordionReducer = (state: MenuStateType, action: ActionTypes): MenuStateType => {
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

export const collapseMenuAC = (): MenuActionType => {
    return {
        type: 'CHANGE-MENU-COLLAPSE',
        // collapsed: collapsedValue
    }
}