# Déployer La Plaine Autonome (hors local)

Oui, vous pouvez tester hors local. Le plus simple est de déployer une preview sur Vercel.

## Option A — Vercel (recommandé pour publier et tester vite)
1. Pousser le dépôt sur GitHub.
2. Importer le repo dans Vercel.
3. Configurer les variables d'environnement:
   - `DATABASE_URL`
4. Déployer.

Chaque push produira une URL de preview accessible hors local.

## Option B — Docker sur un VPS
1. Construire l'image:
   ```bash
   docker build -t la-plaine-autonome .
   ```
2. Lancer le conteneur:
   ```bash
   docker run -p 3000:3000 -e DATABASE_URL='postgres://...' la-plaine-autonome
   ```
3. Exposer le port 3000 via reverse proxy (Nginx/Caddy) + HTTPS.

## Notes importantes
- L'application actuelle est un prototype UI: auth, base de données et PDF ne sont pas encore branchés dans les pages.
- Pour un test métier complet, la prochaine étape est d'ajouter Auth.js + Prisma Client + CRUD locataires/quittances.


## Publication Vercel (checklist rapide)
1. Vérifier que `vercel.json` et `.env.example` sont présents dans le repo.
2. Créer un projet Vercel depuis le repo GitHub.
3. Renseigner les variables d'environnement (`DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL`).
4. Cliquer sur **Deploy**.
5. Utiliser l'URL Vercel générée pour tester hors local.


## Sécurité Next.js (Vercel)
- Si Vercel affiche *"Vulnerable version of Next.js detected"*, mettez à jour `next` vers une version corrigée (ici `16.0.7`).
- Re-déployez ensuite le projet depuis Vercel (ou poussez un nouveau commit).
