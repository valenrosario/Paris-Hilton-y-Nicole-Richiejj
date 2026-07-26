async function getSize(url) {
  if (!url) return null;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const size = response.headers.get('content-length');
    return size ? (size / 1024 / 1024).toFixed(2) + ' MB' : 'Unknown size';
  } catch(e) { return 'Unknown size'; }
}
getSize('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png').then(console.log);
