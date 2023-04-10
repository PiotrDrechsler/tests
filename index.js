const sum = (a, b) => {
  if (!b || !a) {
    throw "Nie podano jednego z wymaganych arguemtnow";
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    console.error("Podano tablice jako argument");
    return false;
  }
  if (typeof a === "string" || typeof b === "string") {
    console.error("String nie moze byc uzywany do operacji matematycznych");
    return false;
  }

  if (a + b > 10) {
    return 2 * (a + b);
  } else {
    return a + b - 5;
  }
};

module.exports = sum;
