# Architecture d'example

```

styles/
    index.css
    abstracts/          ->  Pour tout ce qui sert de base au design system.
       variables.css
    base/               ->  Pour les styles généraux du site.
        reset.css
        base.css
    layout/             ->  Pour les grandes structures réutilisables.
        container.css
        grid.css
    components/         ->  Pour les styles des blocs réutilisables, sans les mettre dans les composants JSX.
        buttons.css
        cards.css
        navigation.css
    pages/              ->  Pour les styles spécifiques à chaque page.
        home.css
        about.css
        faq.css
        community.css
    utilities/          ->  Pour les classes utilitaires légères.
        helpers.css

````
