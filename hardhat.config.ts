import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';
import { HardhatUserConfig, task } from 'hardhat/config';

import '@nomiclabs/hardhat-solhint';
import '@openzeppelin/hardhat-defender';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-abi-exporter';

require('./tasks/eno.hardhat.task');

const {
  POLYGON_TESTNET_URL,
  POLYGON_TESTNET_DEPLOYER_PRIVATE_KEY,
  POLYGON_MAINNET_URL,
  POLYGON_MAINNET_DEPLOYER_PRIVATE_KEY,
  ETH_TESTNET_URL,
  ETH_TESTNET_DEPLOYER_PRIVATE_KEY,
  ETH_MAINNET_URL,
  ETH_MAINNET_DEPLOYER_PRIVATE_KEY,
  ARBITRUM_TESTNET_URL,
  ARBITRUM_TESTNET_DEPLOYER_PRIVATE_KEY,
  ARBITRUM_MAINNET_URL,
  ARBITRUM_MAINNET_DEPLOYER_PRIVATE_KEY,
  ZKSYNC_ERA_TESTNET_URL,
  ZKSYNC_ERA_TESTNET_DEPLOYER_PRIVATE_KEY,
  ZKSYNC_ERA_MAINNET_URL,
  ZKSYNC_ERA_MAINNET_DEPLOYER_PRIVATE_KEY,
  POLYGON_ZKEVM_TESTNET_URL,
  POLYGON_ZKEVM_TESTNET_DEPLOYER_PRIVATE_KEY,
  POLYGON_ZKEVM_MAINNET_URL,
  POLYGON_ZKEVM_MAINNET_DEPLOYER_PRIVATE_KEY,
} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: '0.8.4',
// };
const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_testnet: {
      url: POLYGON_TESTNET_URL,
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: [`0x${POLYGON_TESTNET_DEPLOYER_PRIVATE_KEY}`],
    },
    polygon_mainnet: {
      url: POLYGON_MAINNET_URL,
      accounts: [`0x${POLYGON_MAINNET_DEPLOYER_PRIVATE_KEY}`],
    },
    eth_testnet: {
      url: ETH_TESTNET_URL,
      chainId: 1,
      gasPrice: 20000000000,
      accounts: [`0x${ETH_TESTNET_DEPLOYER_PRIVATE_KEY}`],
    },
    eth_mainnet: {
      url: ETH_MAINNET_URL,
      accounts: [`0x${ETH_MAINNET_DEPLOYER_PRIVATE_KEY}`],
    },
    arbitrum_testnet: {
      url: ARBITRUM_TESTNET_URL,
      chainId: 421613,
      accounts: [`0x${ARBITRUM_TESTNET_DEPLOYER_PRIVATE_KEY}`],
    },
    arbitrum_mainnet: {
      url: ARBITRUM_MAINNET_URL,
      accounts: [`0x${ARBITRUM_MAINNET_DEPLOYER_PRIVATE_KEY}`],
    },
    zksync_era_testnet: {
      url: ZKSYNC_ERA_TESTNET_URL,
      chainId: 280,
      accounts: [`0x${ZKSYNC_ERA_TESTNET_DEPLOYER_PRIVATE_KEY}`],
    },
    zksync_era_mainnet: {
      url: ZKSYNC_ERA_MAINNET_URL,
      accounts: [`0x${ZKSYNC_ERA_MAINNET_DEPLOYER_PRIVATE_KEY}`],
    },
    polygon_zkevm_testnet: {
      url: POLYGON_ZKEVM_TESTNET_URL,
      chainId: 1442,
      accounts: [`0x${POLYGON_ZKEVM_TESTNET_DEPLOYER_PRIVATE_KEY}`],
    },
    polygon_zkevm_mainnet: {
      url: POLYGON_ZKEVM_MAINNET_URL,
      chainId: 1101,
      accounts: [`0x${POLYGON_ZKEVM_MAINNET_DEPLOYER_PRIVATE_KEY}`],
    },
  },
  mocha: {
    timeout: 10 * 60 * 1000,
  },
  defender: {
    apiKey: process.env.CONTRACT_DEPLOYER_DEFENDER_TEAM_API_KEY as string,
    apiSecret: process.env.CONTRACT_DEPLOYER_DEFENDER_API_SECRET_KEY as string,
  },
  abiExporter: {
    except: [
      'contracts/tests',
      'contracts/core',
      'contracts/providers',
      // 'contracts/example',
    ],
  },
};
export default config;
