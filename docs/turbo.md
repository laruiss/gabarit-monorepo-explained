# Turbo (turborepo)

Turborepo permet de gérer facilement les workspaces, et notamment de facilement lancer en parallèle et dans le bon ordre les différents packages de l’application.

Par exemple, on peut s’assurer que les bibliothèques partagés sont compilées avant de lancer l’application cliente ou l’application serveur. Ceci est fait grâce au [pipelines du fichier `turbo.json`](https://turbo.build/repo/docs/core-concepts/monorepos/task-dependencies).
