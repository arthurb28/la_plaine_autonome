import Link from "next/link";
import { formatEuro, tenants } from "@/src/lib/data";

type TenantPageProps = { params: Promise<{ id: string }> };

export default async function TenantPage({ params }: TenantPageProps) {
  const { id } = await params;
  const tenant = tenants.find((item) => item.id === id);

  if (!tenant) {
    return (
      <main>
        <Link href="/">← Retour dashboard</Link>
        <h1>Locataire introuvable</h1>
      </main>
    );
  }

  return (
    <main>
      <Link href="/">← Retour dashboard</Link>
      <h1>{tenant.name} — Détail trimestriel</h1>
      <p>Révision loyer: {tenant.adjustmentRule} au {tenant.adjustmentQuarter}. Régularisation charges: {tenant.chargeRegularizationQuarter}.</p>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Trimestre</th>
            <th>Loyer HT</th>
            <th>Charges HT</th>
            <th>Régularisation</th>
            <th>Total HT</th>
          </tr>
        </thead>
        <tbody>
          {tenant.quarters.map((row) => (
            <tr key={row.period}>
              <td>{row.period}</td>
              <td>{formatEuro(row.rentHt)}</td>
              <td>{formatEuro(row.chargesHt)}</td>
              <td>{row.regularization ? formatEuro(row.regularization) : "-"}</td>
              <td><strong>{formatEuro(row.totalHt)}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
