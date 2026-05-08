# Dashboard locataire — Verizo (version calculée)

## Paramètres fournis
- Locataire: **Verizo**
- Révision loyer: **annuelle au T3** via **indice ILC**
- Loyer trimestriel de référence au **T3 2026**: **218 393,51 €**
- Charges provisionnelles HT: **7 000,00 € / trimestre**
- Régularisation charges:
  - **T2 2025: +14 977,27 €**
  - **T2 2026: +10 148,54 €**
- Arrondi: **au centime supérieur**

## Méthode de calcul appliquée
Hypothèse utilisée (standard bail commercial): à chaque révision T3,
`loyer_nouveau = loyer_précédent × (ILC T3 année N-1 / ILC T3 année N-2)`
avec arrondi au centime supérieur.

ILC utilisés:
- T3 2023 = **133,66**
- T3 2024 = **137,71**
- T3 2025 = **137,09**

Conséquences:
1. Cycle **T3 2025 → T2 2026** (déduit depuis T3 2026):
   - `218 393,51 × 137,71 / 137,09 = 219 381,22 €`
2. Cycle **T3 2024 → T2 2025** (déduit depuis cycle 2025):
   - `219 381,22 × 133,66 / 137,71 = 212 929,30 €`

## Suivi trimestriel (T1 2025 → T3 2026)

| Période | Loyer HT (€) | Charges HT (€) | Régul charges (€) | Total HT (€) |
|---|---:|---:|---:|---:|
| 2025 - T1 | 212 929,30 | 7 000,00 | 0,00 | 219 929,30 |
| 2025 - T2 | 212 929,30 | 7 000,00 | 14 977,27 | 234 906,57 |
| 2025 - T3 | 219 381,22 | 7 000,00 | 0,00 | 226 381,22 |
| 2025 - T4 | 219 381,22 | 7 000,00 | 0,00 | 226 381,22 |
| 2026 - T1 | 219 381,22 | 7 000,00 | 0,00 | 226 381,22 |
| 2026 - T2 | 219 381,22 | 7 000,00 | 10 148,54 | 236 529,76 |
| 2026 - T3 | 218 393,51 | 7 000,00 | 0,00 | 225 393,51 |

## Vérification
- Le total T3 2026 fourni est respecté: `218 393,51 + 7 000,00 = 225 393,51` ✅

## Info éventuellement à confirmer
- Voulez-vous bien confirmer cette règle ILC exacte: `ILC T3(N-1) / ILC T3(N-2)` appliquée à la date anniversaire T3 ?
