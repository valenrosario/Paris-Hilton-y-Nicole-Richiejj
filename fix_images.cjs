const fs = require('fs');
let content = fs.readFileSync('src/views/Season.tsx', 'utf8');

const targetStr = `  1: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },
  2: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "", mobile: "" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },`;

const replacementStr = `  1: {
    banner: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },
  2: {
    banner: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii1Op95Yqmn_U0js_D4WquG5Xtw_vvsa1LA83-EOVfnUnx9donShSnVtK4ourlMeuOuSCiH4sarjZhiF0BVhv7GGNqt7gJLmwyeb26Rlj3ocj6YO3U-nO7MSYKdyrIjLgjGd0-zvFtbWBE2WrCH63p1I4h0dQJpgcoK2ND629TGMLj2AAqSGmkpjyhKqw/s3548/SL%20Background%201.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii1Op95Yqmn_U0js_D4WquG5Xtw_vvsa1LA83-EOVfnUnx9donShSnVtK4ourlMeuOuSCiH4sarjZhiF0BVhv7GGNqt7gJLmwyeb26Rlj3ocj6YO3U-nO7MSYKdyrIjLgjGd0-zvFtbWBE2WrCH63p1I4h0dQJpgcoK2ND629TGMLj2AAqSGmkpjyhKqw/s3548/SL%20Background%201.png" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjB7fofJ4USv1BcVYvoLcOS_RWn4ShizYTgbuarhPVj_6fM-1tGBzIY_StxFQ7KUe6KRKLwdojB83hVRHwiT_X-RWVzvxU_dx9jyLLFoOtAj64E9sVWRc1tG-2lkA2JALrmjVrgKSY0xIh3TLvsyU_bICx0Ryks-NMb0_4Gmb053YRXC1mTLBMj4fXeUk/s2100/9RZDVWFkCn4c4YMQ0azHlKrBIRj.webp", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjB7fofJ4USv1BcVYvoLcOS_RWn4ShizYTgbuarhPVj_6fM-1tGBzIY_StxFQ7KUe6KRKLwdojB83hVRHwiT_X-RWVzvxU_dx9jyLLFoOtAj64E9sVWRc1tG-2lkA2JALrmjVrgKSY0xIh3TLvsyU_bICx0Ryks-NMb0_4Gmb053YRXC1mTLBMj4fXeUk/s2100/9RZDVWFkCn4c4YMQ0azHlKrBIRj.webp" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },`;

if(content.includes(targetStr)) {
  fs.writeFileSync('src/views/Season.tsx', content.replace(targetStr, replacementStr));
  console.log('Images updated');
} else {
  console.log('Images block not found');
}
