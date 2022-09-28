import {accordionReducer, MenuStateType} from "./Accordion-reducer";

test('collapsed menu', ()=>{

    //data
    const startState: MenuStateType = {
        collapsed: false
    }

    //action
    const endState = accordionReducer(startState, {type: 'CHANGE-MENU-COLLAPSE'});

    //expect
    expect(endState.collapsed).toBe(true);
})