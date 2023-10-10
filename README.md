# SPA-react-router

Create a React application with react-router-dom that consists of three pages: Home, About, and Contact. Each page should contain a simple heading and text that describes the page. Also, create a navigation that allows the user to navigate between the pages.

Hints:

-   Start by including react-router-dom in your app by wrapping the `<BrowserRouter>` component around your app component.
-   Then create a navigation with links to the different pages.
-   Define the routes for each page using the `<route>` component of react-router-dom.
-   Use the `element` prop to specify the particular component for each route.
-   Finally, create the components for each page and specify them as `element` prop for each route.

CodeBuddy Tip:

CodeBuddy will "grumble" if you use the same words in your Pages as the component name. It would be best if you just write in the Pages instead of Home, just write in the component e.g. Home etc:

```jsx
export default function Home() {
    return (
        <div>
            <h2>Startseite</h2>
            <p>Dies ist die Startseite.</p>
        </div>
    );
}
```
