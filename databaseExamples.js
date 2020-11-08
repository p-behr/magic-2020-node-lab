const odbc = require('odbc');

const cn = "DRIVER=IBM i Access ODBC Driver;SYSTEM=systemname;UID=userid;PWD=secretpassword";
const dsn = 'DSN=MAGIC';

const getData = () => {
    const connection = odbc.connect(dsn, (error, connection) => {
        connection.query('SELECT * FROM QIWS.QCUSTCDT', (error, result) => {
            if (error) { console.error(error) }
            console.log(result);
        });
    });
}


const callProcedure = () => {
    odbc.connect(dsn, (error, connection) => {
        // connection.callProcedure(null, 'AC2020', 'ADD_DBFAUTH', ['PBEHR3', 'Patrick Test 3', 'INTRN'], (error, result) => {
        // connection.callProcedure(null, 'AC2020', 'UPDATE_DBFAUTH', ['PBEHR3', 'pATRICK tEST III', 'HERO'], (error, result) => {
        connection.callProcedure(null, 'AC2020', 'DELETE_DBFAUTH', ['PBEHR3'], (error, result) => {
            if (error) { console.error(error) }
            console.log(result);
        });
    });
}

getData();
callProcedure();
