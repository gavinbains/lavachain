# LavaChain
Basic Smart Contract development example made for USC LavaLab's LavaLearn intiative. 

Tutorial: https://lavalearn.webflow.io/development/development-entrepreneurship-content/building-your-product
# Set Up
## Install Ganache

Ganache creates a local Ethereum network you can use for development. It provides you with test accounts and test ether and shortens transaction times. Using a public Test Net like Rinkeby or Ropsten provides us a better way to validate our DApp but is ultimately slower and should be used after Ganache.

Ganache GUI:
https://www.trufflesuite.com/ganache

Install ganache-cli:
```bash
npm install -g ganache-cli
```

To start the CLI run:
```bash
ganache-cli
``` 

The outpul will contain a mnemonic, save it to a `.secret` file in case you want to use it in your DApp.

To run ganache-cli with this mnemonic in the future

```bash
ganache-cli -m "want over orient scorpion post oil convince shrug because wrestle uncover clap"
```

## Install Truffle

Truffle is used to interact with the blockchain network. We'll use it to test and deploy contracts.

Install with:
```bash
npm install -g truffle
```

In your working directory run:
```bash
truffle init
```

This command creates
1. `contracts/`: contains the code for our smart contracts. `Migrations.sol` is automatically created to handle migrations to the blockchain.
2. `migrations/`: contains the deployment instructions to our contracts. An initial migration file should have been automatically created to deploy the `Migrations.sol` contract.
3. `test/`: contains the tests for the contracts
4. `truffle-config.js`: main configuration file, points to the Ethereum networks that we can deploy to

Check out https://www.trufflesuite.com/boxes for boilerplate code from Truffle and awesome projects to build off of. Once you find one you like, you can start using it with:
```bash
truffle unbox <box>
```

## Install Metamask

Metamask provides users with an interface to interact with your DApp.

https://metamask.io/download.html

To import the ganache wallet into Metamask on account creation, copy the mnemonic from Ganache into the seed phrase field. 
If you've already made an account, copy the private keys from Ganache to import the individual addresses.

# Development

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

## Truffle Console
```bash
truffle console # start Truffle console
```

Migrate contracts with
```bash
migrate 
# == or if you are not in the truffle console ==
truffle migrate
```

If you make changes to your smart contracts locally and need to redeploy to your local blockchain instance, in the Truffle console run
```bash
compile --all
migrate --reset
```

While in the Truffle console you can use JavaScript/web3 to interact with your Smart Contracts and the Ganache blockchain
```js
let accounts = await web3.eth.getAccounts() // list accounts

let hm = await HospitalManager.deployed() // create HospitalManager contract instance

hm.address // get address of instance on the chain

await hm.admitPatient("Alice"); // admit a patient

(await hm.patientCount()).toString() // get count of patients

await hm.getPatient(0) // get patient info 

await hm.admitPatient("Bob", {from: accounts[1]}); // different sender
```