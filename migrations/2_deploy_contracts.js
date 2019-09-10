const BUSD = artifacts.require('BUSDImplementation');
const Proxy = artifacts.require('AdminUpgradeabilityProxy');

module.exports = async function(deployer) {
  await deployer;

  await deployer.deploy(BUSD);
  const proxy = await deployer.deploy(Proxy, BUSD.address);
  const proxiedBUSD = await BUSD.at(proxy.address);
  await proxy.changeAdmin("0xf0b1eef88956b0a307fa87b5f5671aad6a5d330f");
  await proxiedBUSD.initialize();
};
