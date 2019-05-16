const ethers = require('ethers');

const contractAddress = '0x2bD9aAa2953F988153c8629926D22A6a5F69b14E';

const abi = [
  'event ValueChanged(address indexed author, string oldValue, string newValue)',
  'constructor(string value)',
  'function getValue() view returns (string value)',
  'function setValue(string value)',
];

const provider = ethers.getDefaultProvider();

const contract = new ethers.Contract(contractAddress, abi, provider);

const callConstant = () => {

};

const callActive = () => {

};

const simulateCall = () => {

};

const subscribe = (event, callback) => {
  contract.on(event, callback);
};

module.exports = {
  contract,
  callConstant,
  callActive,
  simulateCall,
  subscribe,
};
