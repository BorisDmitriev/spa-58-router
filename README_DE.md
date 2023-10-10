# SPA-react-router

Erstellen Sie eine React-Anwendung mit react-router-dom, die aus drei Seiten besteht: Home, About und Contact. Jede Seite sollte eine einfache Überschrift und einen Text enthalten, der die Seite beschreibt. Erstellen Sie außerdem eine Navigation, die es dem Benutzer ermöglicht, zwischen den Seiten zu navigieren.

**Hinweise:**

-   Beginnen Sie damit, react-router-dom in Ihre Anwendung einzubinden, indem Sie die `<BrowserRouter>`-Komponente um Ihre App-Komponente wickeln.
-   Erstellen Sie dann eine Navigation mit Links zu den verschiedenen Seiten.
-   Definieren Sie die Routen für jede Seite mithilfe der `<Route>`-Komponente von react-router-dom.
-   Verwenden Sie die `element`-Prop, um die jeweilige Komponente für jede Route anzugeben.
-   Erstellen Sie schließlich die Komponenten für jede Seite und geben Sie sie als `element`-Prop für jede Route an.

**CodeBuddy-Tipp:**

Der CodeBuddy wird "schimpfen" wenn ihr in euren Pages die selben Wörter verwendet wie den Komponenten-Namen. Am besten wäre es wenn ihr in den Pages statt Home, einfach in der Komponente z. B. Startseite usw. schreibt:

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
