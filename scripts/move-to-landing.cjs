const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const landing = path.join(dist, "landing");

if (!fs.existsSync(dist)) {
  console.error("Pasta dist não encontrada. Rode o build antes.");
  process.exit(1);
}

if (!fs.existsSync(landing)) {
  fs.mkdirSync(landing, { recursive: true });
}

const entries = fs.readdirSync(dist, { withFileTypes: true });
for (const ent of entries) {
  if (ent.name === "landing") continue;
  const src = path.join(dist, ent.name);
  const dest = path.join(landing, ent.name);
  fs.renameSync(src, dest);
}

console.log("Build movido para dist/landing/ (para uso em mobcontent.com.br/landing)");
