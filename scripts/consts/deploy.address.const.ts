import { hardhatArguments } from 'hardhat';
import { deployNetwork } from './deploy.const';

type ContractDeployAddress = string | null;

interface ContractDeployAddressInterface {
  GameRoot?: ContractDeployAddress;
}
const ContractDeployAddress_Hardhat: ContractDeployAddressInterface = {};

export function getContractDeployAddress(
  network?: string
): ContractDeployAddressInterface {
  let _ContractDeployAddress: ContractDeployAddressInterface = null as any;

  switch (network) {
    case deployNetwork.hardhat:
      _ContractDeployAddress = ContractDeployAddress_Hardhat;
      break;

    default:
      _ContractDeployAddress = undefined as any;
      break;
  }
  return _ContractDeployAddress;
}

export const ContractDeployAddress: ContractDeployAddressInterface =
  getContractDeployAddress(hardhatArguments?.network) as any;
