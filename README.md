# lavachain

## Set Up

### Install Ganache

Ganache creates a local Ethereum network you can use for development. It provides you with test accounts and test ether and shortens transaction times. Using a public Test Net like Rinkeby or Ropsten provides us a better way to validate our DApp, but is ultimately slower and should be used after Ganache.

Ganache GUI:
https://www.trufflesuite.com/ganache

ganache-cli:
`npm install -g ganache-cli`

Then run `ganache-cli` in your terminal and save the mnemonic to a .secret file

to run ganache-cli with this mnemonic in the future

`ganache-cli -m "want over orient scorpion post oil convince shrug because wrestle uncover clap"`

### Install Truffle

Truffle is used to interact with the blockchain network. We'll use it to test and deploy contracts.

`npm install -g truffle`

run `truffle init` in your working directory

This creates
1. `contracts/`: contains the code for our smart contracts. `Migrations.sol` is automatically created to handle migrations to the blockchain.
2. `migrations/`: contains the deployment instructions to our contracts. An initial migration file should have been automatically created to deploy the `Migrations.sol` contract.
3. `test/`: contains the tests for the contracts
4. `truffle-config.js`: main configuration file, points to the Ethereum networks that we can deploy to

Aside, also check out https://www.trufflesuite.com/boxes for boilerplate code from Truffle

### Install Metamask

Metamask proveds users with an interface to interact with your DApp.

https://metamask.io/download.html

Then import the ganache wallet into Metamask. Copy the private keys from ganache to import individual accounts.

## Development

In `truffle-config.js`, uncomment the development network section

Configure compiler in the `truffle-config.js` with `optimizer` enabled and `runs: 200`

Easy way to create a `contract`/`migration`/`test` is running:

```bash
truffle create <artifact_type> <ArtifactName>
```

`<artifact_type>`: `contract`, `migration`, `test`, or `all`. 

`<ArtifactName>`: Name of new artifact (typically in PascalCase)

Example to create all three: 

```bash
truffle create all ArtifactName
``` 

### Truffle Console
```bash
truffle console
```

Then as javascript/web3
 
```js
let accounts = await web3.eth.getAccounts() // list accounts

let hm = await HospitalManager.deployed() // create HospitalManager contract instance

hm.address // get address of instance on the chain

await hm.admitPatient("Alice"); // admit a patient

(await hm.patientCount()).toString() // get count of patients

await hm.getPatient(0) // get patient info 

await hm.admitPatient("Bob", {from: accounts[1]}); // different sender
```