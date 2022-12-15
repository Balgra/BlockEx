//tbh what is hardhat waffle
//folosind walled addres ask for eth on goerly Faucet powered by alchemy
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    goerli:{
      //url vine de la url al proiectului de pe alchemy
      url: 'https://eth-goerli.g.alchemy.com/v2/q4oQyFsYGZWuDdgp3QmEmgkrvMtu8MZ0',
      //la metamask account ai un wallet si acel are un private key, acela e aici.
      accounts: ['fef9d2f5a254c6dd175d7b4aa25ae2fbc36f0fb9d656304a620fbdf2c1359143']
    }
  }
}