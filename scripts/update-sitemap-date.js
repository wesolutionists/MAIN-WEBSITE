const fs = require('fs')
const path = require('path')

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
const today = new Date().toISOString().slice(0, 10)

let xml = fs.readFileSync(sitemapPath, 'utf8')
xml = xml.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`)
fs.writeFileSync(sitemapPath, xml)

console.log(`sitemap.xml lastmod stamped: ${today}`)
