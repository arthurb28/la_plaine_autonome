# Spécification validée — La Plaine Autonome

## Décisions validées
1. **Multi-utilisateurs** : l'application supporte plusieurs comptes autorisés.
2. **Cadre légal** : France (**FR**) et devise **EUR**.
3. **Ajustement loyer** : calcul **automatique** selon l'indice de référence (IRL).
4. **Paiement trimestriel** : statut **binaire** (`DU` / `PAYE`).

## Règles métier retenues (v1)
- Une quittance est rattachée à un locataire et un trimestre (année + T1..T4).
- Les périodes sont trimestrielles et calculées automatiquement.
- Le détail financier trimestriel est constitué de:
  - loyer de base,
  - charges trimestrielles,
  - ajustement IRL automatique,
  - régularisation de charges (si trimestre cible),
  - taxe foncière (si trimestre cible).
- Une quittance PDF est historisée et téléchargeable.
- Le statut d'un trimestre est binaire: `DU` ou `PAYE`.

## Écrans à implémenter (ordre conseillé)
1. Login sécurisé.
2. Dashboard global trimestriel.
3. Fiche locataire (historique + prochains trimestres).
4. Génération/téléchargement de quittance PDF.
5. Action "marquer comme payé".
