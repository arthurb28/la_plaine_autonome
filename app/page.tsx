import Link from "next/link";

const tenants = [
  { id: "1", name: "Locataire A", rent: 120000 },
  { id: "2", name: "Locataire B", rent: 98000 },
  { id: "3", name: "Locataire C", rent: 135000 },
  { id: "4", name: "Locataire D", rent: 110000 }
];

export default function DashboardPage() {
  return (
    <main>
      <h1>La Plaine Autonome — Dashboard</h1>
      <p>Prototype testable: dashboard trimestriel (données démo).</p>
      <h2>Locataires ({tenants.length})</h2>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>
            <Link href={`/tenants/${tenant.id}`}>{tenant.name}</Link> — Loyer trimestriel: {(tenant.rent / 100).toFixed(2)} €
          </li>
        ))}
      </ul>
    </main>
  );
}
