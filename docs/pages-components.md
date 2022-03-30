## Pages

Chaque page intégre la `Navbar` et le footer.

## Components

### Navbar

Composant d'affichage du menu de navigation comportant les liens vers les différentes pages de l'application.

### NavbarButton

Appellé par la `Navbar` pour l'affichage du menu en version mobile (écran en dessous du 500px).
Elle prend en proprieté la fonction de gestion du click :

```typescript
type NavbarButtonProps = {
  handleClick: () => void;
};
```

### InfoPage

Petit component qui sert de décorateur pour les pages informatives légales :

- CGU
- Politique de confidentialité
