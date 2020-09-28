/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { CharityDapp } from "./CharityDapp";

export class CharityDappFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CharityDapp> {
    return super.deploy(overrides || {}) as Promise<CharityDapp>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CharityDapp {
    return super.attach(address) as CharityDapp;
  }
  connect(signer: Signer): CharityDappFactory {
    return super.connect(signer) as CharityDappFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CharityDapp {
    return new Contract(address, _abi, signerOrProvider) as CharityDapp;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "proposalAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "donorAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Donated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "ProposalAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "ProposalAproved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "ProposalEnded",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "Daogoverners",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "Donors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "Faithminers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "KYC",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "campaignStats",
    outputs: [
      {
        internalType: "uint256",
        name: "fundingGoal",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "raisedFunds",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "claimedFunds",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "openForFunding",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "proposalApproved",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "string",
        name: "aboutProposal",
        type: "string"
      },
      {
        internalType: "bool",
        name: "fullExtraction",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "fundRaisingDeadline",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "campaignStakes",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "charityPoolDonations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "claimFunds",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_proposalAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_donateAmount",
        type: "uint256"
      }
    ],
    name: "donate",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proposalAddress",
        type: "address"
      }
    ],
    name: "getCampaign",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proposalAddress",
        type: "address"
      }
    ],
    name: "getCampaignStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proposalAddress",
        type: "address"
      }
    ],
    name: "getOrganisation",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_aboutProposal",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_fundingGoal",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_fullExtraction",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_fundRaisingDeadline",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256"
      }
    ],
    name: "newCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "newOrganisation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "organisations",
    outputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fundingGoal",
        type: "uint256"
      }
    ],
    name: "setCampaignStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "setDaoGoverners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "setDonor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "setFaithMiners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "setKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proposalAddress",
        type: "address"
      }
    ],
    name: "votingPanel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

const _bytecode =
  "0x6080604052600060065534801561001557600080fd5b50612d86806100256000396000f3fe60806040526004361061012e5760003560e01c8063731301cf116100ab578063bd3b10461161006f578063bd3b104614610457578063ccc11d2714610494578063cd62c2ad146104bd578063e69d849d146104e6578063e82f72ab14610523578063f9a117cc1461056057610145565b8063731301cf1461033957806397a08aca1461037a5780639d31e1a7146103b7578063ac307773146103f8578063b18a729c1461041657610145565b8063360d8ebf116100f2578063360d8ebf146102435780633c5a1d6714610281578063483a83df146102aa5780634ba01df9146102d35780636fd094f4146102fc57610145565b806305c5bf4c1461014a57806314b2086c146101735780631601d0b51461019c5780631a49e4d6146101dd5780631e95c9ee1461021a57610145565b366101455734600560008282540192505081905550005b600080fd5b34801561015657600080fd5b50610171600480360381019061016c9190611f7d565b61058b565b005b34801561017f57600080fd5b5061019a6004803603810190610195919061204d565b61062e565b005b3480156101a857600080fd5b506101c360048036038101906101be9190611eef565b6106d5565b6040516101d49594939291906128df565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff9190611eef565b6107b0565b60405161021191906128a2565b60405180910390f35b34801561022657600080fd5b50610241600480360381019061023c9190611fbe565b6107d0565b005b34801561024f57600080fd5b5061026a60048036038101906102659190611eef565b610a02565b604051610278929190612781565b60405180910390f35b34801561028d57600080fd5b506102a860048036038101906102a39190611eef565b610ade565b005b3480156102b657600080fd5b506102d160048036038101906102cc9190611eef565b610b39565b005b3480156102df57600080fd5b506102fa60048036038101906102f59190611eef565b610b93565b005b34801561030857600080fd5b50610323600480360381019061031e9190611eef565b610ffa565b60405161033091906128a2565b60405180910390f35b34801561034557600080fd5b50610360600480360381019061035b9190611eef565b61101a565b6040516103719594939291906128df565b60405180910390f35b34801561038657600080fd5b506103a1600480360381019061039c9190611eef565b61117e565b6040516103ae91906128bd565b60405180910390f35b3480156103c357600080fd5b506103de60048036038101906103d99190611eef565b6112d9565b6040516103ef959493929190612b34565b60405180910390f35b6104006113b6565b60405161040d91906128a2565b60405180910390f35b34801561042257600080fd5b5061043d60048036038101906104389190611eef565b611705565b60405161044e959493929190612b34565b60405180910390f35b34801561046357600080fd5b5061047e60048036038101906104799190611eef565b611755565b60405161048b91906128a2565b60405180910390f35b3480156104a057600080fd5b506104bb60048036038101906104b69190611eef565b611775565b005b3480156104c957600080fd5b506104e460048036038101906104df9190611eef565b6117d0565b005b3480156104f257600080fd5b5061050d60048036038101906105089190611f18565b61182b565b60405161051a91906128a2565b60405180910390f35b34801561052f57600080fd5b5061054a60048036038101906105459190611eef565b611b57565b60405161055791906128a2565b60405180910390f35b34801561056c57600080fd5b50610575611b77565b6040516105829190612b19565b60405180910390f35b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081816001019080519060200190610629929190611cec565b505050565b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050818160000181905550600081600101819055506000816002018190555060018160030160006101000a81548160ff02191690831515021790555060008160030160016101000a81548160ff0219169083151502179055506106d133611b7d565b5050565b6008602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107815780601f1061075657610100808354040283529160200191610781565b820191906000526020600020905b81548152906001019060200180831161076457829003601f168201915b5050505050908060010160009054906101000a900460ff16908060020154908060030154908060040154905085565b60036020528060005260406000206000915054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff1663c6521e40336040518263ffffffff1660e01b815260040161080b919061272f565b60206040518083038186803b15801561082357600080fd5b505afa158015610837573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085b9190611f54565b61089a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610891906129b9565b60405180910390fd5b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050868160000190805190602001906108f5929190611cec565b506108ff8661062e565b848160010160006101000a81548160ff0219169083151502179055508381600201819055508281600301819055508173ffffffffffffffffffffffffffffffffffffffff1663d7cc31a1846040518263ffffffff1660e01b81526004016109669190612b19565b60206040518083038186803b15801561097e57600080fd5b505afa158015610992573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b69190612076565b81600401819055507fc07acef038b6eb78641fd29d4d916bc1178a913d8950f162fb46f38a4f3aa4b83387896040516109f1939291906127b1565b60405180910390a150505050505050565b60076020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ad45780601f10610aa957610100808354040283529160200191610ad4565b820191906000526020600020905b815481529060010190602001808311610ab757829003601f168201915b5050505050905082565b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1690612a59565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610cab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca290612a59565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c482c7a3336040518263ffffffff1660e01b8152600401610d04919061272f565b60206040518083038186803b158015610d1c57600080fd5b505afa158015610d30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d549190611f54565b610d93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8a90612af9565b60405180910390fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600115158260010160009054906101000a900460ff16151514610e71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e68906129d9565b60405180910390fd5b806001015481600001540360055411610ebf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb690612a19565b60405180910390fd5b8060030160019054906101000a900460ff16610f10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0790612959565b60405180910390fd5b8060030160009054906101000a900460ff1615610f62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5990612999565b60405180910390fd5b8060000154816001018190555080600101548160000154036005600082825403925050819055506000816000018190555060008160030160006101000a81548160ff0219169083151502179055507f4dfff917e1fbb261a082e98cc7d43029621f6a6eb05ff3fef1510d5f1eb4857c83338360010154846000015403604051610fed9392919061282d565b60405180910390a1505050565b60026020528060005260406000206000915054906101000a900460ff1681565b606060008060008061102a611d6c565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a0016040529081600082018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561110d5780601f106110e25761010080835404028352916020019161110d565b820191906000526020600020905b8154815290600101906020018083116110f057829003601f168201915b505050505081526020016001820160009054906101000a900460ff161515151581526020016002820154815260200160038201548152602001600482015481525050905080600001518160200151826040015183606001518460800151955095509550955095505091939590929450565b6060611188611d9d565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112c15780601f10611296576101008083540402835291602001916112c1565b820191906000526020600020905b8154815290600101906020018083116112a457829003601f168201915b50505050508152505090508060200151915050919050565b60008060008060006112e9611dcd565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060a00160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff161515151581526020016003820160019054906101000a900460ff161515151581525050905080600001518160200151826040015183606001518460800151955095509550955095505091939590929450565b600080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150990612939565b60405180910390fd5b8060030160019054906101000a900460ff16611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a90612a39565b60405180910390fd5b8060030160009054906101000a900460ff16156115b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ac90612a79565b60405180910390fd5b80600001548160020154106115ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f690612ad9565b60405180910390fd5b8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc83600401549081150290604051600060405180830381858888f1935050505015801561166d573d6000803e3d6000fd5b50816004015481600201600082825401925050819055508060010154816002015414156116fb577f35a5d67533c9882437e1eaf2aef8b90385eecaab6760d4397f5e22d42c16b4f08360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260020154846000016040516116f2939291906127ef565b60405180910390a15b6001935050505090565b60096020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16908060030160019054906101000a900460ff16905085565b60016020528060005260406000206000915054906101000a900460ff1681565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166118b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b090612979565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166360f140d8336040518263ffffffff1660e01b8152600401611912919061272f565b60206040518083038186803b15801561192a57600080fd5b505afa15801561193e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119629190611f54565b6119a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199890612a99565b60405180910390fd5b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060030160009054906101000a900460ff16611a35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2c906129f9565b60405180910390fd5b8060010154816000015403831115611a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a7990612ab9565b60405180910390fd5b828160010160008282540192505081905550806000015481600101541480611aee5750600654600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015411155b15611b115760008160030160006101000a81548160ff0219169083151502179055505b7f4dfff917e1fbb261a082e98cc7d43029621f6a6eb05ff3fef1510d5f1eb4857c843385604051611b449392919061274a565b60405180910390a1600191505092915050565b60046020528060005260406000206000915054906101000a900460ff1681565b60055481565b600080600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508173ffffffffffffffffffffffffffffffffffffffff16632c9f55ed846040518263ffffffff1660e01b8152600401611bfa9190612714565b602060405180830381600087803b158015611c1457600080fd5b505af1158015611c28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c4c9190611f54565b8160030160016101000a81548160ff0219169083151502179055507feb6740e418c745d1af5dd9282a586250d0ad74b48b5154024a542877e9c60d57838260000154600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001604051611cdf93929190612864565b60405180910390a1505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611d2d57805160ff1916838001178555611d5b565b82800160010185558215611d5b579182015b82811115611d5a578251825591602001919060010190611d3f565b5b509050611d689190611e00565b5090565b6040518060a00160405280606081526020016000151581526020016000815260200160008152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b6040518060a001604052806000815260200160008152602001600081526020016000151581526020016000151581525090565b5b80821115611e19576000816000905550600101611e01565b5090565b600081359050611e2c81612cf4565b92915050565b600081359050611e4181612d0b565b92915050565b600081359050611e5681612d22565b92915050565b600081519050611e6b81612d22565b92915050565b600082601f830112611e8257600080fd5b8135611e95611e9082612bb4565b612b87565b91508082526020830160208301858383011115611eb157600080fd5b611ebc838284612ca1565b50505092915050565b600081359050611ed481612d39565b92915050565b600081519050611ee981612d39565b92915050565b600060208284031215611f0157600080fd5b6000611f0f84828501611e1d565b91505092915050565b60008060408385031215611f2b57600080fd5b6000611f3985828601611e32565b9250506020611f4a85828601611ec5565b9150509250929050565b600060208284031215611f6657600080fd5b6000611f7484828501611e5c565b91505092915050565b600060208284031215611f8f57600080fd5b600082013567ffffffffffffffff811115611fa957600080fd5b611fb584828501611e71565b91505092915050565b600080600080600060a08688031215611fd657600080fd5b600086013567ffffffffffffffff811115611ff057600080fd5b611ffc88828901611e71565b955050602061200d88828901611ec5565b945050604061201e88828901611e47565b935050606061202f88828901611ec5565b925050608061204088828901611ec5565b9150509295509295909350565b60006020828403121561205f57600080fd5b600061206d84828501611ec5565b91505092915050565b60006020828403121561208857600080fd5b600061209684828501611eda565b91505092915050565b6120a881612c6b565b82525050565b6120b781612c23565b82525050565b6120c681612c11565b82525050565b6120d581612c35565b82525050565b60006120e682612bf5565b6120f08185612c00565b9350612100818560208601612cb0565b61210981612ce3565b840191505092915050565b60008154600181166000811461213157600181146121575761219b565b607f60028304166121428187612c00565b955060ff19831686526020860193505061219b565b600282046121658187612c00565b955061217085612be0565b60005b8281101561219257815481890152600182019150602081019050612173565b80880195505050505b505092915050565b60006121b0603583612c00565b91507f4f6e6c792074686520726563697069656e7420697320617574686f726973656460008301527f20746f20636c61696d6564207468652066756e647300000000000000000000006020830152604082019050919050565b6000612216602883612c00565b91507f5468652070726f706f73616c2069732079657420746f2067657420746865206160008301527f7070726f76616c730000000000000000000000000000000000000000000000006020830152604082019050919050565b600061227c600f83612c00565b91507f53686f756c6420626520446f6e6f7200000000000000000000000000000000006000830152602082019050919050565b60006122bc602c83612c00565b91507f5468652070726f706f73616c2066756e64696e6720706572696f642073686f7560008301527f6c6420626520636c6f73656400000000000000000000000000000000000000006020830152604082019050919050565b6000612322603683612c00565b91507f5468652062656e65666963696572792073686f756c642068617665207374616b60008301527f65696e672074696d65416c6c7920636f6e7472616374000000000000000000006020830152604082019050919050565b6000612388605083612c00565b91507f546869732077696c6c206f6e6c79206170706c696361626c6520666f7220746860008301527f6f73652070726f706f73616c2077686f207769736820746f207261697365206660208301527f756c6c2066756e64696e6720676f616c000000000000000000000000000000006040830152606082019050919050565b6000612414602b83612c00565b91507f5468652070726f706f73616c2066756e64696e6720706572696f64206861732060008301527f6265656e20636c6f7365640000000000000000000000000000000000000000006020830152604082019050919050565b600061247a603383612c00565b91507f54686520706f6f6c2073686f756c64206861766520656e6f75676820746f6b6560008301527f6e7320666f72207468652070726f706f73616c000000000000000000000000006020830152604082019050919050565b60006124e0601f83612c00565b91507f5468652070726f706f73616c2073686f756c6420626520617070726f766564006000830152602082019050919050565b6000612520601483612c00565b91507f53686f756c642062652046616974684d696e65720000000000000000000000006000830152602082019050919050565b6000612560602883612c00565b91507f5468652070726f706f73616c206973207374696c6c20757020616e642069732060008301527f676f696e67206f6e0000000000000000000000000000000000000000000000006020830152604082019050919050565b60006125c6601b83612c00565b91507f4b5943204c6576656c2031206973206e6f7420617070726f76656400000000006000830152602082019050919050565b6000612606603083612c00565b91507f5468652070726f706f73616c20646f65736e2774206e6565642074686174206d60008301527f756368206f6620646f6e6174696f6e73000000000000000000000000000000006020830152604082019050919050565b600061266c602383612c00565b91507f5468652066756e64732068617665206265656e20616c726561647920636c616960008301527f6d656400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006126d2601b83612c00565b91507f4b5943204c6576656c2032206973206e6f7420617070726f76656400000000006000830152602082019050919050565b61270e81612c61565b82525050565b600060208201905061272960008301846120bd565b92915050565b6000602082019050612744600083018461209f565b92915050565b600060608201905061275f600083018661209f565b61276c602083018561209f565b6127796040830184612705565b949350505050565b600060408201905061279660008301856120ae565b81810360208301526127a881846120db565b90509392505050565b60006060820190506127c6600083018661209f565b6127d36020830185612705565b81810360408301526127e581846120db565b9050949350505050565b6000606082019050612804600083018661209f565b6128116020830185612705565b81810360408301526128238184612114565b9050949350505050565b600060608201905061284260008301866120bd565b61284f602083018561209f565b61285c6040830184612705565b949350505050565b600060608201905061287960008301866120bd565b6128866020830185612705565b81810360408301526128988184612114565b9050949350505050565b60006020820190506128b760008301846120cc565b92915050565b600060208201905081810360008301526128d781846120db565b905092915050565b600060a08201905081810360008301526128f981886120db565b905061290860208301876120cc565b6129156040830186612705565b6129226060830185612705565b61292f6080830184612705565b9695505050505050565b60006020820190508181036000830152612952816121a3565b9050919050565b6000602082019050818103600083015261297281612209565b9050919050565b600060208201905081810360008301526129928161226f565b9050919050565b600060208201905081810360008301526129b2816122af565b9050919050565b600060208201905081810360008301526129d281612315565b9050919050565b600060208201905081810360008301526129f28161237b565b9050919050565b60006020820190508181036000830152612a1281612407565b9050919050565b60006020820190508181036000830152612a328161246d565b9050919050565b60006020820190508181036000830152612a52816124d3565b9050919050565b60006020820190508181036000830152612a7281612513565b9050919050565b60006020820190508181036000830152612a9281612553565b9050919050565b60006020820190508181036000830152612ab2816125b9565b9050919050565b60006020820190508181036000830152612ad2816125f9565b9050919050565b60006020820190508181036000830152612af28161265f565b9050919050565b60006020820190508181036000830152612b12816126c5565b9050919050565b6000602082019050612b2e6000830184612705565b92915050565b600060a082019050612b496000830188612705565b612b566020830187612705565b612b636040830186612705565b612b7060608301856120cc565b612b7d60808301846120cc565b9695505050505050565b6000604051905081810181811067ffffffffffffffff82111715612baa57600080fd5b8060405250919050565b600067ffffffffffffffff821115612bcb57600080fd5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b6000612c1c82612c41565b9050919050565b6000612c2e82612c41565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612c7682612c7d565b9050919050565b6000612c8882612c8f565b9050919050565b6000612c9a82612c41565b9050919050565b82818337600083830152505050565b60005b83811015612cce578082015181840152602081019050612cb3565b83811115612cdd576000848401525b50505050565b6000601f19601f8301169050919050565b612cfd81612c11565b8114612d0857600080fd5b50565b612d1481612c23565b8114612d1f57600080fd5b50565b612d2b81612c35565b8114612d3657600080fd5b50565b612d4281612c61565b8114612d4d57600080fd5b5056fea26469706673582212206829c69c91d8a4f44978df2831cedb7fcfee0d378a7aa7eac335148775514ed864736f6c63430007000033";
