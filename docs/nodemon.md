# Nodemon

[nodemon](https://nodemon.io/) permet de relancer une commande à chaque changement parmi un ou plusieurs répertoires

Par défaut, les fichiers surveillés sont seulement les extensions `js,mjs,cjs,json`. Ceci et d’autres choses sont configurables soit en ligne de commande, soit dans un fichier nommé `nodemon.json` comme par exemple celui-ci :

```json
{
  "verbose": true,
  "ignore": ["*.spec.js"],
  "watch": ["src"],
  "ext": "ts,json"
}
```
