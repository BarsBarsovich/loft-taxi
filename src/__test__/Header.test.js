import React from "react";
import {render} from "@testing-library/react";
import Header from "../components/header/Header";
import {screen} from '@testing-library/dom'

describe('Header', () => {
    it('Render Header Component', () => {
        render(<Header navigateTo={() => {
        }}/>);
        expect(screen.getAllByTestId('header')).toBeTruthy();
    })
})
