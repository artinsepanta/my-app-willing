const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 20,
        host: '35.222.193.131:3306',
        user: 'admin',
        password: 'Idean@2009',
        database: 'db_my_app_willing'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;