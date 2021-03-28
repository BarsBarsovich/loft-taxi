import React from "react";
import { render } from "@testing-library/react";
import Button from "../components/button/Button";
describe('Render Button', ()=>{
    it('Component Render', ()=>{
        const {queryAllByDisplayValue } = render(<Button title='test'/>)
        expect(queryAllByDisplayValue('test')).toBeTruthy();
    })
})
