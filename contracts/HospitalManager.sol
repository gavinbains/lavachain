// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HospitalManager {
  uint public patientCount = 0;

  struct Patient {
    uint id;
    address hospital;
    string name;
    bool discharged;
  }

  mapping(uint => Patient) public patients;

  constructor() public {}

  event PatientAdmitted(uint id, string name, address hospital);
  event PatientDischarged(uint id, string name, address hospital);

  function admitPatient(string memory name) public {
    Patient memory newPatient = Patient(patientCount, msg.sender, name, false);
    patients[patientCount] = newPatient;
    emit PatientAdmitted(patientCount, name, msg.sender);
    ++patientCount;
  }

  function dischargePatient(uint id) public {
    Patient memory patientToDischarge = patients[id];
    patientToDischarge.discharged = true;
    patients[id] = patientToDischarge;
    emit PatientDischarged(id, patientToDischarge.name, patientToDischarge.hospital);
  }

  function getPatient(uint id) public view returns(uint, address, string memory, bool) {
    return (patients[id].id, patients[id].hospital, patients[id].name, patients[id].discharged);
  }
}
