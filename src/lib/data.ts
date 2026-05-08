export type QuarterRow = {
  period: string;
  rentHt: number;
  chargesHt: number;
  regularization: number;
  totalHt: number;
};

export type TenantDashboard = {
  id: string;
  name: string;
  adjustmentRule: string;
  adjustmentQuarter: string;
  chargeRegularizationQuarter: string;
  quarters: QuarterRow[];
};

export const verizoDashboard: TenantDashboard = {
  id: "verizo",
  name: "Verizo",
  adjustmentRule: "ILC",
  adjustmentQuarter: "T3",
  chargeRegularizationQuarter: "T2",
  quarters: [
    { period: "2025 - T1", rentHt: 212929.3, chargesHt: 7000, regularization: 0, totalHt: 219929.3 },
    { period: "2025 - T2", rentHt: 212929.3, chargesHt: 7000, regularization: 14977.27, totalHt: 234906.57 },
    { period: "2025 - T3", rentHt: 219381.22, chargesHt: 7000, regularization: 0, totalHt: 226381.22 },
    { period: "2025 - T4", rentHt: 219381.22, chargesHt: 7000, regularization: 0, totalHt: 226381.22 },
    { period: "2026 - T1", rentHt: 219381.22, chargesHt: 7000, regularization: 0, totalHt: 226381.22 },
    { period: "2026 - T2", rentHt: 219381.22, chargesHt: 7000, regularization: 10148.54, totalHt: 236529.76 },
    { period: "2026 - T3", rentHt: 218393.51, chargesHt: 7000, regularization: 0, totalHt: 225393.51 }
  ]
};

export const tenants: TenantDashboard[] = [verizoDashboard];

export function formatEuro(value: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
}
