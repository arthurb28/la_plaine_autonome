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
            <th>Loyer de référence annuel HT</th>
            <th>Loyer trimestriel HT</th>
            <th>Charges HT</th>
            <th>Régularisation</th>
            <th>Taxe foncière</th>
            <th>Total HT</th>
          </tr>
        </thead>
        <tbody>
          {tenant.quarters.map((row) => (
            <tr key={row.period}>
              <td>{row.period}</td>
              <td>{formatEuro(row.annualReferenceRentHt)}</td>
              <td>{formatEuro(row.rentHt)}</td>
              <td>{formatEuro(row.chargesHt)}</td>
              <td>{row.regularization ? formatEuro(row.regularization) : "-"}</td>
              <td>{row.propertyTax ? formatEuro(row.propertyTax) : "-"}</td>
              <td><strong>{formatEuro(row.totalHt)}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Détail des ajustements ILC</h2>
      {tenant.quarters.filter((row) => row.adjustmentDetail).map((row) => (
        <section key={`${row.period}-detail`}>
          <h3>{row.period}</h3>
          <p><strong>{row.adjustmentDetail?.label}</strong></p>
          <p>{row.adjustmentDetail?.formula}</p>
          <p>{row.adjustmentDetail?.indices}</p>
          <p><strong>{row.adjustmentDetail?.result}</strong></p>
        </section>
      ))}
    </main>
  );
}
