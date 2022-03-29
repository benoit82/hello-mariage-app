## Workflow

### Avant de commit :

1. Avant de commit vers le dépôt distant, on format le code via la commande, pour uniformiser la synthaxe des fichiers : `npm run format`
   1.1. Vous pouvez vérifier le formatage actuel avec la commande : `npx prettier --check .`
2. Faire passer les tests en local

### Merger vers la branche `dev`:

1. Créer une `merge request`vers la branche `dev`
2. Faire une revue de code par le lead dev et/ou un autre développeur du moment
3. Vérifier le résultat de `action github` si aucune érreur n'est repérer

### Merger de `dev` vers `main` :

1. Le lead dev du moment merge la branche `dev` vers la branche `main`
2. Vérifier le résultat de `action github` si aucune érreur n'est repérer
3. Le projet est déployé automatiquement vers `Vercel`
