const fs = require('fs')
const path = require('path')

const basePath = '/test'
const outDir = path.join(process.cwd(), 'out')

// Function to recursively find all HTML files
const findHtmlFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir)
  
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList)
    } else if (file.endsWith('.html')) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

// Fix image paths in HTML files
const fixImagePaths = () => {
  const htmlFiles = findHtmlFiles(outDir)
  
  htmlFiles.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // Fix image src attributes that start with / but not with /test
    // Match: src="/brand/logo.png" or src="/services/image.jpg"
    // Replace with: src="/test/brand/logo.png" or src="/test/services/image.jpg"
    content = content.replace(
      /src="\/(?!test\/)([^"]+)"/g,
      `src="${basePath}/$1"`
    )
    
    // Also fix background-image URLs in style attributes
    content = content.replace(
      /background-image:\s*url\(["']?\/(?!test\/)([^"')]+)["']?\)/g,
      `background-image: url(${basePath}/$1)`
    )
    
    fs.writeFileSync(filePath, content, 'utf8')
  })
  
  console.log(`Fixed image paths in ${htmlFiles.length} HTML files`)
}

fixImagePaths()


