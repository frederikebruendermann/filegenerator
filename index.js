const fs = require('fs')
const functionName = process.argv[2]

fs.writeFileSync(
  `./${functionName}.js`,
  `function ${functionName} () {
}`
)
