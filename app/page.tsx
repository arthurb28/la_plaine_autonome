import Link from "next/link";
import { formatEuro, tenants, verizoDashboard } from "@/src/lib/data";

const totalPeriod = verizoDashboard.quarters.reduce((acc, row) => acc + row.totalHt, 0);

export default function DashboardPage() {
  return (
    <main>
      <h1>La Plaine Autonome — Dashboard réel</h1>
      <p>Suivi trimestriel construit avec les données du locataire Verizo (T1 2025 à T3 2026).</p>

      <h2>Locataires</h2>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>
            <Link href={`/tenants/${tenant.id}`}>{tenant.name}</Link> — Révision {tenant.adjustmentRule} ({tenant.adjustmentQuarter})
          </li>
        ))}
      </ul>

      <h2>Vue rapide Verizo</h2>
      <p>Total HT cumulé sur la période: <strong>{formatEuro(totalPeriod)}</strong></p>
      <p>Charges provisionnelles: <strong>{formatEuro(7000)}</strong> / trimestre</p>
      <p>Régularisations: T2 2025 = {formatEuro(14977.27)}, T2 2026 = {formatEuro(10148.54)}</p>
    </main>
  );
}
