const fs = require('fs');
let content = fs.readFileSync('src/views/Season.tsx', 'utf8');

const targetStr = `  1: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "", mobile: "" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },`;

const replacementStr = `  1: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },`;

if(content.includes(targetStr)) {
  fs.writeFileSync('src/views/Season.tsx', content.replace(targetStr, replacementStr));
  console.log('Season.tsx updated successfully');
} else {
  console.log('Target string not found in Season.tsx');
}
