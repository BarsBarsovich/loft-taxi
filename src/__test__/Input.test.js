import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../components/input/Input";

describe('Input', ()=>{
    it('Render Input Component', ()=>{
        render(<Input value='empty' onChange={() => {}} title='text' type='text' placeholder='empty'/>);
        expect(screen.getAllByTestId('input')).toBeTruthy();
    })
})
