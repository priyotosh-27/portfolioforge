export function generateHTML(sections) {
    return `
<!DOCTYPE html>
<html>
<head>
<title>My Portfolio</title>
<style>
body{font-family:Arial;background:#0f172a;color:white;padding:40px}
section{margin-bottom:40px}
h1{color:#60a5fa}
</style>
</head>
<body>
${sections.map(s => `
<section>
<h1>${s.title}</h1>
<p>${s.content.replace(/\n/g, "<br>")}</p>
</section>
`).join("")}
</body>
</html>
`;
}
