# Construire un monorepo

## Introduction

Le monorepo va consister en :

- une configuration eslint partagée
- une bibliothèque partagée par le front et le back
- une application cliente
- une application server (fastify ou NestJS)

## Les prérequis pour la compréhension

Les workspaces facilitent :

- le **partage de code** entre différents packages

Des outils spécialisées permettent

- l’**exécution de plusieurs tâches en une seule commande** (test, lint, build, deploy ou publish de plusieurs packages, par exemple)

## Les outils utilisées

### pnpm

Pour limiter les téléchargements et gagner de l’espace disque, ainsi que pour une gestions plus facile des workspaces, nous utiliserons pnpm.

### turbo

Pour gérer les actions sur plusieurs packages, nous utiliserons turborepo.

### back

Pour le back, nous allons faire une API avec Fastify.

### front

Pour le front, nous utiliserons Vue et VueDsfr

## Les étapes

1. Créons d’abord un fichier [.gitignore](./docs/gitignore.md)
2. Créons ensuite un fichier [.editorconfig](./docs/editorconfig.md)
