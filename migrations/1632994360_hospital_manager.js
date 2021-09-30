const HospitalManager = artifacts.require("HospitalManager");

module.exports = function(_deployer) {
  _deployer.deploy(HospitalManager)
};
