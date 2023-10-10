import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";

describe("React Router usage", () => {
    it("renders Home page on first load", () => {
        render(<App />);
        const homeLink = screen.getByText(/home/i);
        userEvent.click(homeLink);
    });

    it("renders About page when clicking on About link", () => {
        render(<App />);
        const aboutLink = screen.getByText(/about/i);
        userEvent.click(aboutLink);
    });

    it("renders Contact page when clicking on Contact link", () => {
        render(<App />);
        const contactLink = screen.getByText(/contact/i);
        userEvent.click(contactLink);
    });
});
