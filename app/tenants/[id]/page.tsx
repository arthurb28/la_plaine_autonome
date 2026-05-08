import Link from "next/link";

type TenantPageProps = { params: Promise<{ id: string }> };

export default async function TenantPage({ params }: TenantPageProps) {
  const { id } = await params;

  return (
    <main>
      <Link href="/">← Retour dashboard</Link>
      <h1>Détail locataire #{id}</h1>
      <p>Prototype testable: historique trimestriel et génération PDF seront branchés ensuite.</p>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Trimestre</th>
            <th>Statut</th>
            <th>Total dû</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026 - T1</td>
            <td>PAYE</td>
            <td>1 200.00 €</td>
          </tr>
          <tr>
            <td>2026 - T2</td>
            <td>DU</td>
            <td>1 250.00 €</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
