module.exports = {
    compilers: {
        solc: {
            version: "0.4.20"
        }
    },
    
    
    // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      from : "0xE96CA32A236fB15E639CAa3DAdaF28E3C63B1172",

    }
  }
};
