import React, {useState} from 'react';
import {Input} from "../UI/Input";
import {Button} from "../UI/Button";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export const Accordion = () => {

    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    );
}