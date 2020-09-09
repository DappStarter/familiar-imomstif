require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember color hunt high tackle spoil'; 
let testAccounts = [
"0x09c7f7bbb44b94b0a2ef8c6765bbc629406f55fbe832e52424032d8711e435b1",
"0xb5d70bab26160056b0cb2691905890fa958ee0b226716a5c1403afdef69f9143",
"0x77875980eaa2734aafc6f975c8e456cdd9e74b91d0b5bea6245f311892dac379",
"0x54896d3a6fe9c7600d9817f6fe636ccb99e028c6e5a14babcad1dd22dc311746",
"0x942388044077e746f25d74f0a952d59247ae3cd114ef00e8081381e0afb9864a",
"0x3495899765fbd9c2bc2260772325bee7ac941437874be248a77103bcd36f3d68",
"0x15afa71e2733d8db774fe128f90745c513cfaf62d29f92f3db414be0eac7ecfd",
"0xaecdf93593386d7d78accd1fc124566436537767b1a2f479b2d22ea609d06c5b",
"0xa09b3709e5a29fc0a793a2c3ae2f5deedf86c7a11feab2540c944a336a60912b",
"0xb935877a0e85902419486e9bdd8be627574c8931dd678675e5c4f8c59fd0773a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
