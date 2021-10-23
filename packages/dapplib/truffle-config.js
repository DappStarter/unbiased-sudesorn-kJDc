require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind huge good clog swift tortoise'; 
let testAccounts = [
"0x139a946bbd898e11239c212e8d691bb38cabdb6db2cd2f987392b2218c573ea6",
"0xca9a57894a90b4a524dd9483d220dc5d58328ada6022f913f683020d52b9311a",
"0xce1817d98081c9d49842f5ee66bf5c2b7c3f739ade084095fe43b5bda9212521",
"0x7f76385797428f3758d84bd6b25cfacdd33a003eb2dcabda0f8e05c38b2ed47e",
"0xc8a7725714e19123d8dd6c3fe44127e0e336ea3e581565555af1f93934574d4d",
"0x170961f2b3a9886e2a050ee62c3ee802665494a4d467a52ede9b0a670035cb39",
"0x9f40507ccbd32e6bf77bacd095704fbce422824fe0519a694bc4440ebd428ead",
"0xb7372bed65418ad5e301548077471d714440d5ba46bbddea3224a4b4d4b6d77b",
"0xe8a49ab0d19df1f7d51c7f14d24097183cae1bbb2a5a538def86fd2eab49c379",
"0xe0159b4c2b392da4f2ec8f55dd6578b6c24d70614967084a37a18c0ee6125778"
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
            version: '^0.8.0'
        }
    }
};

