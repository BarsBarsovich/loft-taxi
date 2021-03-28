import React from "react";
import { render, screen } from "@testing-library/react";
import Mapbox from "../components/mapbox/Mapbox";

describe('Mapbox', ()=>{
    it('Render mapbox Component', ()=>{
        render(<Mapbox />);
        expect(screen.getAllByTestId('map')).toBeTruthy();
    })
})
