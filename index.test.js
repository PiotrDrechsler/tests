const sum = require("./index.js");

describe("Testujemy funkcje sumowania", () => {
  it("Powinna zwrocic istniejacy wynik", () => {
    expect(sum(5, 5)).toBeDefined();
  });
  it("powinno zwrocic false gdy podajemy tablice", () => {
    expect(sum([4, 5, 4, 45], 45435)).toBeFalsy();
  });

  it("Powinno zwrócic false gdy podajemy typ inny niz number", () => {
    expect(sum("aaaaa", 5)).toBeFalsy();
  });

  it("Powinno zwrocic false gdy nie podamy jednego z wymaganych argumentów", () => {
    expect(() => sum(5)).toThrowError();
  });

  it("powinno zwrocic sume sume wieksza niz 10 dla pary liczb wieksza niz 10", () => {
    expect(sum(8, 6)).toBeGreaterThan(10);
  });

  it("powinna wynik wiekszy niz 10 pomnozyc razy 2", () => {
    expect(sum(7, 7)).toEqual(28);
  });
  it("Powinna pomniejszyc wynik o 5, jezeli suma jest mniejsza niz 10", () => {
    expect(sum(4, 4)).toEqual(3);
  });
});
