# Les workspaces pnpm

En définissant les packages dans le fichier `pnpm-workspace.yaml` (ce nom est important, avec cette extension précise), avec ce contenu :

```yml
packages:
  - "packages/**"
  - "apps/**"
```

si dans `packages/lib/package.json` il y a ce contenu :

```json
{
  "name": "@fabnum-dummy/shared",
  "comment": "et d’autres propriétés"
}
```

pour pouvoir utiliser le code de cette bibliothèque, il suffira de mettre dans le `package.json` ceci :

```json
{
  "name": "@fabnum-dummy/whatever",
  "comment": "et beaucoup d’autres propriétés",
  "dependencies": {
    "@fabnum-dummy/shared": "workspace:^",
    "comment": "et d’autres dépendances"
  }
}
```
