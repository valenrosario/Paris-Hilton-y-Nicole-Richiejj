const fs = require('fs');
let content = fs.readFileSync('src/views/Season.tsx', 'utf8');

const targetStr = `  1: {
    banner: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },`;

const replacementStr = `  1: {
    banner: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png" },
    gallery: [
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc87DuXzgcG_NJbHoR8SGd-iYjGRf1L1-PRTwgtLL8YhLa0nD9j9w4P3WAMwtde8ZcQRl0al_mEpOkE9L8F_5L5kYiV22f1LrqBbBtWsnnabYZltAnGBiob3Ms8Sls_qESTOlpy7G71UjdfLiAnjtxCjgpSXOSCAbRE5fI6Yd3I-j8L0X595xKKBruPcw/s5760/NP%20S1.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc87DuXzgcG_NJbHoR8SGd-iYjGRf1L1-PRTwgtLL8YhLa0nD9j9w4P3WAMwtde8ZcQRl0al_mEpOkE9L8F_5L5kYiV22f1LrqBbBtWsnnabYZltAnGBiob3Ms8Sls_qESTOlpy7G71UjdfLiAnjtxCjgpSXOSCAbRE5fI6Yd3I-j8L0X595xKKBruPcw/s5760/NP%20S1.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgp60hN7AiqxORd71WajLHyNq8_En-rTHw1x6Oid3dgfiyz4yEKP0W1VcIYEj0giJg6ws4LRjqn2wOMIE9-u43xL0U-PeU2ThS_ziWc3EciT7-BFboAE6QGESAN7_eI-IkoC5GQcFrK1zElHkkEYxjDuwdg86EUSHZuFjJF74EtMvnlslfL3pE1noqgTfU/s3136/NP%20SPQ.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgp60hN7AiqxORd71WajLHyNq8_En-rTHw1x6Oid3dgfiyz4yEKP0W1VcIYEj0giJg6ws4LRjqn2wOMIE9-u43xL0U-PeU2ThS_ziWc3EciT7-BFboAE6QGESAN7_eI-IkoC5GQcFrK1zElHkkEYxjDuwdg86EUSHZuFjJF74EtMvnlslfL3pE1noqgTfU/s3136/NP%20SPQ.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYPeOxAHSJLhYb6qY_e7pImeO4XrdKkKjWfmwPedkWjJF4UnI0OtY4uQfd5UBl9yr0VF0Dl0t65rTBy0WjsQA4nmI9oPXv2GqdvvC0A7wbZ54TH86fnu1OsUYP3uHvSrlB8cLaBJUWX5SvYRWx3Phqh-GUXumGJFXPBC2HQxovhPNJCI22-UzbHMR92dY/s6144/NP%20SPQK.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYPeOxAHSJLhYb6qY_e7pImeO4XrdKkKjWfmwPedkWjJF4UnI0OtY4uQfd5UBl9yr0VF0Dl0t65rTBy0WjsQA4nmI9oPXv2GqdvvC0A7wbZ54TH86fnu1OsUYP3uHvSrlB8cLaBJUWX5SvYRWx3Phqh-GUXumGJFXPBC2HQxovhPNJCI22-UzbHMR92dY/s6144/NP%20SPQK.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIHNc_2dO4Kp9mBSwmzXQ5CZ-bxWu8iBDRVENbME3QufG5_zQGKgJyRpGgAfslFQCLxPj87rgaJoAAyqlCzaaati0PphyxXoSKLMPD4CIEQu-uYvZqTHx52MfyvXQIzGu-Q4yi2vXhDxiSp6HYS8hC1GI4_hUPrT98XaL7iVm-isKOuQqbt3HixTUiWSA/s6144/NP%20SPQKT.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIHNc_2dO4Kp9mBSwmzXQ5CZ-bxWu8iBDRVENbME3QufG5_zQGKgJyRpGgAfslFQCLxPj87rgaJoAAyqlCzaaati0PphyxXoSKLMPD4CIEQu-uYvZqTHx52MfyvXQIzGu-Q4yi2vXhDxiSp6HYS8hC1GI4_hUPrT98XaL7iVm-isKOuQqbt3HixTUiWSA/s6144/NP%20SPQKT.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVDJE1ZWtwuqDhfAvOfjXnApgS8-Hc6IoweTaMNEZ8GUaO5neCZrH42WBmJtRjznoKarJMZZ7TFYWeEjKa9D-_QlMGyY33UtOzrkLuVsmEIW9ezcXHANFLB7Jn7lE45iMRcdpHWBJZsfv7RXlhMP8qIpz-1jRU5Z7g0UKAHXBRR-TkmG9iAT1qRWwjArM/s6144/NP%20SPQKR.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVDJE1ZWtwuqDhfAvOfjXnApgS8-Hc6IoweTaMNEZ8GUaO5neCZrH42WBmJtRjznoKarJMZZ7TFYWeEjKa9D-_QlMGyY33UtOzrkLuVsmEIW9ezcXHANFLB7Jn7lE45iMRcdpHWBJZsfv7RXlhMP8qIpz-1jRU5Z7g0UKAHXBRR-TkmG9iAT1qRWwjArM/s6144/NP%20SPQKR.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje-vR1S4EWdfN-ZdTxiGj0Z9zWRnXg1zpo75Yp11lAFlGq6N95r06vWg_dLpS8qP0R6kofuMFdYP5Jo9i7BcpWxQSMdXpvc7VtkyC04rx400hId25ZncK0NxVXQENbq2YWKbvfhF1J15_aq01MnTOe2NCtPbrS3y0aAO8Cm73VR3e6nUckcEnnn6lb4k0/s768/DVD4.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje-vR1S4EWdfN-ZdTxiGj0Z9zWRnXg1zpo75Yp11lAFlGq6N95r06vWg_dLpS8qP0R6kofuMFdYP5Jo9i7BcpWxQSMdXpvc7VtkyC04rx400hId25ZncK0NxVXQENbq2YWKbvfhF1J15_aq01MnTOe2NCtPbrS3y0aAO8Cm73VR3e6nUckcEnnn6lb4k0/s768/DVD4.png" }
    ]
  },`;

if(content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  console.log('Images updated');
} else {
  console.log('Images block not found');
}

const titleTarget = `<h3 className="text-xl font-black uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-100 pb-4">
        <T en="Gallery" es="Galería" />
      </h3>`;

const titleReplacement = `<h3 className="text-xl font-black uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-100 pb-4">
        <T en="Photoshoot" es="Sesión de Fotos" />
      </h3>`;

if (content.includes(titleTarget)) {
  content = content.replace(titleTarget, titleReplacement);
  console.log('Title updated');
} else {
  console.log('Title block not found');
}

fs.writeFileSync('src/views/Season.tsx', content);

