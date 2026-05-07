# La Plaine Autonome — Cadrage initial

## Questions bloquantes (à valider avant tout développement)
1. **Mono-utilisateur ou multi-utilisateurs ?** (ex: un seul administrateur vs plusieurs comptes avec rôles)
2. **Quelle devise et quel format légal pour la quittance ?** (supposé: EUR, modèle de quittance FR)
3. **Règle d’indexation IRL exacte** : souhaitez-vous un calcul automatique légal (IRL INSEE avec formule configurable) ou juste un ajustement manuel tracé ?
4. **État de paiement** : un trimestre peut-il être payé partiellement, ou seulement binaire (`dû`/`payé`) ?

## Hypothèses proposées (si vous validez)
- Application **privée**, avec **1 rôle Admin** au démarrage.
- Hébergement simple sur **VPS/Platform-as-a-Service** avec base PostgreSQL managée.
- Devise en **EUR**, dates et trimestres au format français.
- Paiement trimestriel au statut simple: `A_VENIR`, `DU`, `PAYE`, `QUITTANCE_GENEREE`.
- Ajustements IRL/charges/taxe foncière **configurables par locataire** et appliqués à la génération de la quittance.
- Historisation immuable des quittances générées (versionnées).
- 4 locataires initiaux importés manuellement au départ.

## Stack technique recommandée
- **Frontend + Backend**: Next.js (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Auth**: Auth.js (NextAuth) avec credentials + hash Argon2 + sessions JWT signées
- **Base de données**: PostgreSQL
- **ORM**: Prisma
- **PDF**: génération côté serveur via `@react-pdf/renderer` (ou fallback `pdf-lib`)
- **Validation**: Zod
- **Audit & logs**: table d’audit + logs structurés
- **Déploiement**: Docker + Render/Fly.io/railway (simple), ou Vercel + Neon/Supabase

## Modèle de données (première version)

### `users`
- id (uuid)
- email (unique)
- password_hash
- role (`ADMIN`)
- created_at, updated_at

### `tenants`
- id (uuid)
- full_name
- rental_address
- lease_start_date
- reference_rent_amount_cents
- quarterly_charges_cents
- current_year
- current_quarter (1..4)
- rent_adjustment_quarter (1..4)
- irl_reference_year
- irl_reference_quarter (1..4)
- charges_regularization_quarter (1..4)
- property_tax_integration_quarter (1..4)
- security_deposit_cents
- security_deposit_adjustment_cents (nullable)
- active (bool)
- created_at, updated_at

### `quarters`
- id (uuid)
- year
- quarter (1..4)
- start_date
- end_date
- unique(year, quarter)

### `tenant_quarter_charges`
- id (uuid)
- tenant_id (fk)
- quarter_id (fk)
- base_rent_cents
- charges_cents
- irl_adjustment_cents
- property_tax_cents
- charges_regularization_cents
- total_due_cents
- status (`A_VENIR`, `DU`, `PAYE`, `QUITTANCE_GENEREE`)
- paid_at (nullable)
- unique(tenant_id, quarter_id)

### `receipts`
- id (uuid)
- tenant_id (fk)
- quarter_id (fk)
- issue_date
- period_start
- period_end
- rent_amount_cents
- charges_amount_cents
- total_amount_cents
- pdf_storage_key
- pdf_sha256
- version
- created_by (fk users)
- created_at

### `audit_logs`
- id (uuid)
- actor_user_id
- action
- entity_type
- entity_id
- before_json
- after_json
- created_at

## Premières étapes de développement
1. Initialiser le projet (Next.js + TypeScript + Tailwind + Prisma + PostgreSQL).
2. Mettre en place l’auth sécurisée (login, session, protection des routes).
3. Créer le schéma Prisma + migrations + seed (4 locataires exemples).
4. Implémenter dashboard trimestriel global.
5. Implémenter la page détail locataire.
6. Implémenter génération PDF de quittance + téléchargement.
7. Implémenter workflow de statut (`DU` -> `PAYE` -> `QUITTANCE_GENEREE`).
8. Ajouter audit log, validations serveur, tests de base, et documentation de déploiement.


## Validation utilisateur du 2026-05-07
- Multi-utilisateurs: **validé**.
- Cadre FR/EUR: **validé**.
- Ajustement IRL: **calcul automatique validé**.
- Statut de paiement: **binaire validé** (`DU` / `PAYE`).
