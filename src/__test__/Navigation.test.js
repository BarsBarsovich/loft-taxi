import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/navigation/Navigation";

describe('Navigation', ()=>{
    it('Render navigation component', ()=>{
        render(<Navigation navigateTo={() => {}}/>);
        expect(screen.getAllByTestId('nav')).toBeTruthy();
    })
})
