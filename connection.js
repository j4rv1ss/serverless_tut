var connection = mysql.createConnection({
    host: "tqe-poc1-db-eus.cluster-csfhiikrxq5c.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "TqE_2o23$9B",
    database: "poc_test",
    multipleStatements: true,
  });

  module.exports = connection