/* TerroiRisk — sealed prediction loader.
 *
 * AFTER running petrus_meteo_vendemmia_2025.py locally, paste the three
 * printed values below. They are the only things you touch. The page reads
 * them into the DOM at load. Nothing else is dynamic — by design: a notarial
 * page must be inspectable as flat HTML.
 *
 * The SHA256 must be the hash of pomerol_2025_soil_moisture.csv, committed
 * to the public repo alongside this file. Anyone can re-run the script and
 * re-hash to verify the seal.
 */

const PREDICTION = {
  // ---- valori ERA5 Pomerol set-ott 2025, sigillati 24 giu 2026 ----
  soilMoisture: "0.2538",
  petrusPred:   "94.2",
  petrusLo:     "92.4",
  petrusHi:     "96.1",
  direction:    "below",
  sha256:       "a993d7ee7b8b567cd825b27b0159767d5e93685c2b26bb645d1616619a5c08d2",
  // ----------------------------------------------------------------
  issueDate: "24 June 2026",
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value && !value.startsWith("__")) el.textContent = value;
}

document.addEventListener("DOMContentLoaded", () => {
  setText("petrus-pred", PREDICTION.petrusPred);
  setText("petrus-lo",   PREDICTION.petrusLo);
  setText("petrus-hi",   PREDICTION.petrusHi);
  setText("direction",   PREDICTION.direction + " appellation mean");
  setText("soil-value",  PREDICTION.soilMoisture);
  setText("dataset-hash", PREDICTION.sha256);
  setText("issue-date",  PREDICTION.issueDate);

  // visual warning if placeholders are still present (local only, never deploy with these)
  const hash = document.getElementById("dataset-hash");
  if (hash && hash.textContent.startsWith("__")) {
    hash.textContent = "⚠ paste SHA256 before deploy";
    hash.style.color = "var(--neg)";
  }
});
