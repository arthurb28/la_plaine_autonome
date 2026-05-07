export function computeIrlAdjustedRent(baseRentCents: number, irlNew: number, irlReference: number): number {
  if (irlReference <= 0 || irlNew <= 0) {
    throw new Error("IRL values must be positive numbers");
  }

  const adjusted = Math.round((baseRentCents * irlNew) / irlReference);
  return adjusted;
}
