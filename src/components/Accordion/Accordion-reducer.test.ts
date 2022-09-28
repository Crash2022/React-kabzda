import {accordionReducer, MenuStateType} from "./Accordion-reducer";

test('collapsed menu', ()=>{

    //data
    const startState: MenuStateType = {
        collapsed: false
    }

    //action
    const endState = accordionReducer(startState, {type: 'CHANGE-MENU-COLLAPSE'});
    //const endState = accordionReducer(startState, CollapseMenuAC(true));

    //expect
    expect(endState.collapsed).toBe(true);
})