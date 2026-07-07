import { describe, it, expect } from "vitest";

// Smoke test mínimo: verifica que el entorno de tests (vitest) funciona.
describe("smoke", () => {
  it("el entorno de tests funciona", () => {
    expect(true).toBe(true);
  });
});
