const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// remove all stats lines
data = data.replace(/,\s*stats: \{ year: ".*", network: ".*", location: ".*" \}/g, '');

const statsMap = {
  1: { year: "2003", network: "Fox", location: "Altus, Arkansas" },
  2: { year: "2004", network: "Fox", location: "Various (US Tour)" },
  3: { year: "2005", network: "Fox", location: "Various (East Coast)" },
  4: { year: "2006", network: "E!", location: "Various (Families)" },
  5: { year: "2007", network: "E!", location: "Camp Shawnee" }
};

let i = 1;
data = data.replace(/photos: 6/g, (match) => {
  const stat = statsMap[i];
  i++;
  if (stat) {
    return `photos: 6, stats: { year: "${stat.year}", network: "${stat.network}", location: "${stat.location}" }`;
  }
  return match;
});

fs.writeFileSync('src/data.ts', data);
