import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/sidebar/Sidebar";

describe('Sidebar', ()=>{
    it('Render Sidebar component', ()=>{
        render(<Sidebar />);
        expect(screen.getAllByTestId('sidebar')).toBeTruthy();
    })
})
