const fs = require('fs');
let code = fs.readFileSync('src/views/Home.tsx', 'utf8');

code = code.replace(
  /paris: \{\s*desktop: "", \/\/ Size: 800x800\s*mobile: "",  \/\/ Size: 800x800\s*\}/g,
  `paris: {
    desktop: "https://is1-ssl.mzstatic.com/image/thumb/d1q7ZLWEagpu1__6r-L21Q/1000x1000ve.webp", // Size: 800x800
    mobile: "https://is1-ssl.mzstatic.com/image/thumb/d1q7ZLWEagpu1__6r-L21Q/1000x1000ve.webp",  // Size: 800x800
  }`
);

code = code.replace(
  /nicole: \{\s*desktop: "", \/\/ Size: 800x800\s*mobile: "",  \/\/ Size: 800x800\s*\}/g,
  `nicole: {
    desktop: "https://is1-ssl.mzstatic.com/image/thumb/aQqyFN7JFMFgBxjIn9uLiw/1000x1000ve.webp", // Size: 800x800
    mobile: "https://is1-ssl.mzstatic.com/image/thumb/aQqyFN7JFMFgBxjIn9uLiw/1000x1000ve.webp",  // Size: 800x800
  }`
);

fs.writeFileSync('src/views/Home.tsx', code);
