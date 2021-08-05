const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassword = (password, pathFile) => {
  
  if (pathFile != true) {
    pathFile = path.join(pathFile, 'passwords.txt')
  } else {
    pathFile = path.join(__dirname, '../', 'passwords.txt')
  }

  fs.open(pathFile, 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green(`Password saved to ${pathFile}`))
      })
    })
  })
}

module.exports = savePassword
