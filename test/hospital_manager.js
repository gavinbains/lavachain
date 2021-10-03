const HospitalManager = artifacts.require("HospitalManager");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HospitalManager", function (accounts) {
  const patientName = "Alice";
  let contract;

  before(async function() {
    contract = await HospitalManager.deployed();
  })

  it("Should admit patient to hospital", async function () {
    await contract.admitPatient(patientName, { from: accounts[0] });
    
    const patient = await contract.getPatient(0)
    console.log(patient);
    assert.equal(patient[1], accounts[0]);
    assert.equal(patient[2], patientName);
    assert.isFalse(patient[3]);
  });

  it("Should discharge patient from hospital", async function () {
    await contract.dischargePatient(0)

    const patient = await contract.getPatient(0)
    console.log(patient);
    assert.equal(patient[1], accounts[0]);
    assert.equal(patient[2], patientName);
    assert.isTrue(patient[3]);
  });
});
