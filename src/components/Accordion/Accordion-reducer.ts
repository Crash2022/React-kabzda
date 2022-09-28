export type MenuActionTypes = {
    type: string
}

export type MenuStateType = {
    //type: 'CHANGE-MENU-COLLAPSE'
    collapsed: boolean
}

export const accordionReducer = (state: MenuStateType, action: MenuActionTypes): MenuStateType => {
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

/*
export const CollapseMenuAC = (collapsedValue: boolean): MenuStateType => {
    return {
        type: 'CHANGE-MENU-COLLAPSE',
        collapsed: collapsedValue
    }
}*/