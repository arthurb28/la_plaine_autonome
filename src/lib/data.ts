export type AdjustmentDetail = {
  label: string;
  formula: string;
  indices: string;
  result: string;
};

export type QuarterRow = {
  period: string;
  annualReferenceRentHt: number;
  rentHt: number;
  chargesHt: number;
  regularization: number;
  propertyTax: number;
  totalHt: number;
  adjustmentDetail?: AdjustmentDetail;
};

export type TenantDashboard = {
  id: string;
  name: string;
  adjustmentRule: string;
  adjustmentQuarter: string;
  chargeRegularizationQuarter: string;
  quarters: QuarterRow[];
};

const annualReferenceBeforeAdjustment = 851717.2;
const annualReferenceAfterT42025 = 868859.29;

export const verizoDashboard: TenantDashboard = {
  id: "verizo",
  name: "Verizo",
  adjustmentRule: "ILC",
  adjustmentQuarter: "T4",
  chargeRegularizationQuarter: "T2",
  quarters: [
    {
      period: "2025 - T1",
      annualReferenceRentHt: annualReferenceBeforeAdjustment,
      rentHt: 212929.3,
      chargesHt: 7000,
      regularization: 0,
      propertyTax: 0,
      totalHt: 219929.3
    },
    {
      period: "2025 - T2",
      annualReferenceRentHt: annualReferenceBeforeAdjustment,
      rentHt: 212929.3,
      chargesHt: 7000,
      regularization: 14977.27,
      propertyTax: 0,
      totalHt: 234906.57
    },
    {
      period: "2025 - T3",
      annualReferenceRentHt: annualReferenceBeforeAdjustment,
      rentHt: 212929.3,
      chargesHt: 7000,
      regularization: 0,
      propertyTax: 0,
      totalHt: 219929.3
    },
    {
      period: "2025 - T4",
      annualReferenceRentHt: annualReferenceAfterT42025,
      rentHt: 217214.83,
      chargesHt: 7000,
      regularization: 0,
      propertyTax: 117940.82,
      totalHt: 342155.65,
      adjustmentDetail: {
        label: "Ajustement annuel ILC appliqué en T4 2025",
        formula: "Nouveau loyer annuel = Ancien loyer annuel × (ILC T4 2024 / ILC T4 2023)",
        indices: "ILC T4 2024 = 135,30 ; ILC T4 2023 = 132,63",
        result: "851 717,20 × (135,30 / 132,63) = 868 859,29 €, soit 217 214,83 € par trimestre"
      }
    },
    {
      period: "2026 - T1",
      annualReferenceRentHt: annualReferenceAfterT42025,
      rentHt: 217214.83,
      chargesHt: 7000,
      regularization: 0,
      propertyTax: 0,
      totalHt: 224214.83
    },
    {
      period: "2026 - T2",
      annualReferenceRentHt: annualReferenceAfterT42025,
      rentHt: 217214.83,
      chargesHt: 7000,
      regularization: 10148.54,
      propertyTax: 0,
      totalHt: 234363.37
    },
    {
      period: "2026 - T3",
      annualReferenceRentHt: annualReferenceAfterT42025,
      rentHt: 217214.83,
      chargesHt: 7000,
      regularization: 0,
      propertyTax: 0,
      totalHt: 224214.83
    }
  ]
};

export const tenants: TenantDashboard[] = [verizoDashboard];

export function formatEuro(value: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
}
