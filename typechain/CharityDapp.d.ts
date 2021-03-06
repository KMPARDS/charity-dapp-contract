/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CharityDappInterface extends ethers.utils.Interface {
  functions: {
    "Daogoverners(address)": FunctionFragment;
    "Donors(address)": FunctionFragment;
    "Faithminers(address)": FunctionFragment;
    "KYC(address)": FunctionFragment;
    "campaignStats(address)": FunctionFragment;
    "campaigns(address)": FunctionFragment;
    "charityPoolDonations()": FunctionFragment;
    "claimFunds()": FunctionFragment;
    "donate(address,uint256)": FunctionFragment;
    "getCampaign(address)": FunctionFragment;
    "getCampaignStatus(address)": FunctionFragment;
    "getOrganisation(address)": FunctionFragment;
    "newCampaign(string,uint256,bool,uint256,uint256)": FunctionFragment;
    "newOrganisation(string)": FunctionFragment;
    "organisations(address)": FunctionFragment;
    "setCampaignStatus(uint256)": FunctionFragment;
    "setDaoGoverners(address)": FunctionFragment;
    "setDonor(address)": FunctionFragment;
    "setFaithMiners(address)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
    "votingPanel(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "Daogoverners",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "Donors", values: [string]): string;
  encodeFunctionData(functionFragment: "Faithminers", values: [string]): string;
  encodeFunctionData(functionFragment: "KYC", values: [string]): string;
  encodeFunctionData(
    functionFragment: "campaignStats",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "campaigns", values: [string]): string;
  encodeFunctionData(
    functionFragment: "charityPoolDonations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimFunds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "donate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getCampaign", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getCampaignStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrganisation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "newCampaign",
    values: [string, BigNumberish, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "newOrganisation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "organisations",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCampaignStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDaoGoverners",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setDonor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setFaithMiners",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKYC", values: [string]): string;
  encodeFunctionData(functionFragment: "votingPanel", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "Daogoverners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Donors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "Faithminers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "KYC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "campaignStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "campaigns", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "charityPoolDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimFunds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrganisation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newOrganisation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "organisations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCampaignStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDaoGoverners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDonor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFaithMiners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingPanel",
    data: BytesLike
  ): Result;

  events: {
    "Donated(address,address,uint256)": EventFragment;
    "ProposalAdded(address,uint256,string)": EventFragment;
    "ProposalAproved(address,uint256,string)": EventFragment;
    "ProposalEnded(address,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Donated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalAproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalEnded"): EventFragment;
}

export class CharityDapp extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CharityDappInterface;

  functions: {
    Daogoverners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "Daogoverners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    Donors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "Donors(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    Faithminers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "Faithminers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    KYC(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "KYC(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    campaignStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      fundingGoal: BigNumber;
      raisedFunds: BigNumber;
      claimedFunds: BigNumber;
      openForFunding: boolean;
      proposalApproved: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    "campaignStats(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      fundingGoal: BigNumber;
      raisedFunds: BigNumber;
      claimedFunds: BigNumber;
      openForFunding: boolean;
      proposalApproved: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    campaigns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      aboutProposal: string;
      fullExtraction: boolean;
      fundRaisingDeadline: BigNumber;
      endTime: BigNumber;
      campaignStakes: BigNumber;
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    "campaigns(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      aboutProposal: string;
      fullExtraction: boolean;
      fundRaisingDeadline: BigNumber;
      endTime: BigNumber;
      campaignStakes: BigNumber;
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    charityPoolDonations(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "charityPoolDonations()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    claimFunds(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "claimFunds()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    donate(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "donate(address,uint256)"(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getCampaign(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    "getCampaign(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    getCampaignStatus(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    "getCampaignStatus(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    getOrganisation(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getOrganisation(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    newCampaign(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newCampaign(string,uint256,bool,uint256,uint256)"(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    newOrganisation(
      _description: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newOrganisation(string)"(
      _description: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    organisations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      recipient: string;
      description: string;
      0: string;
      1: string;
    }>;

    "organisations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      recipient: string;
      description: string;
      0: string;
      1: string;
    }>;

    setCampaignStatus(
      _fundingGoal: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCampaignStatus(uint256)"(
      _fundingGoal: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDaoGoverners(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDaoGoverners(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDonor(user: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setDonor(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFaithMiners(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFaithMiners(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setKYC(user: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setKYC(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    votingPanel(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "votingPanel(address)"(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  Daogoverners(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "Daogoverners(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  Donors(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "Donors(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  Faithminers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "Faithminers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  KYC(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "KYC(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  campaignStats(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    fundingGoal: BigNumber;
    raisedFunds: BigNumber;
    claimedFunds: BigNumber;
    openForFunding: boolean;
    proposalApproved: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
    4: boolean;
  }>;

  "campaignStats(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    fundingGoal: BigNumber;
    raisedFunds: BigNumber;
    claimedFunds: BigNumber;
    openForFunding: boolean;
    proposalApproved: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
    4: boolean;
  }>;

  campaigns(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    aboutProposal: string;
    fullExtraction: boolean;
    fundRaisingDeadline: BigNumber;
    endTime: BigNumber;
    campaignStakes: BigNumber;
    0: string;
    1: boolean;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  "campaigns(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    aboutProposal: string;
    fullExtraction: boolean;
    fundRaisingDeadline: BigNumber;
    endTime: BigNumber;
    campaignStakes: BigNumber;
    0: string;
    1: boolean;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  charityPoolDonations(overrides?: CallOverrides): Promise<BigNumber>;

  "charityPoolDonations()"(overrides?: CallOverrides): Promise<BigNumber>;

  claimFunds(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "claimFunds()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  donate(
    _proposalAddress: string,
    _donateAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "donate(address,uint256)"(
    _proposalAddress: string,
    _donateAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getCampaign(
    _proposalAddress: string,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: boolean;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  "getCampaign(address)"(
    _proposalAddress: string,
    overrides?: CallOverrides
  ): Promise<{
    0: string;
    1: boolean;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  getCampaignStatus(
    _proposalAddress: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
    4: boolean;
  }>;

  "getCampaignStatus(address)"(
    _proposalAddress: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: boolean;
    4: boolean;
  }>;

  getOrganisation(
    _proposalAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getOrganisation(address)"(
    _proposalAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  newCampaign(
    _aboutProposal: string,
    _fundingGoal: BigNumberish,
    _fullExtraction: boolean,
    _fundRaisingDeadline: BigNumberish,
    _endTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newCampaign(string,uint256,bool,uint256,uint256)"(
    _aboutProposal: string,
    _fundingGoal: BigNumberish,
    _fullExtraction: boolean,
    _fundRaisingDeadline: BigNumberish,
    _endTime: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  newOrganisation(
    _description: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newOrganisation(string)"(
    _description: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  organisations(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    recipient: string;
    description: string;
    0: string;
    1: string;
  }>;

  "organisations(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    recipient: string;
    description: string;
    0: string;
    1: string;
  }>;

  setCampaignStatus(
    _fundingGoal: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCampaignStatus(uint256)"(
    _fundingGoal: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDaoGoverners(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDaoGoverners(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDonor(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setDonor(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFaithMiners(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFaithMiners(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setKYC(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setKYC(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  votingPanel(
    _proposalAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "votingPanel(address)"(
    _proposalAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    Daogoverners(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "Daogoverners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    Donors(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "Donors(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    Faithminers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "Faithminers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    KYC(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "KYC(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    campaignStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      fundingGoal: BigNumber;
      raisedFunds: BigNumber;
      claimedFunds: BigNumber;
      openForFunding: boolean;
      proposalApproved: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    "campaignStats(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      fundingGoal: BigNumber;
      raisedFunds: BigNumber;
      claimedFunds: BigNumber;
      openForFunding: boolean;
      proposalApproved: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    campaigns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      aboutProposal: string;
      fullExtraction: boolean;
      fundRaisingDeadline: BigNumber;
      endTime: BigNumber;
      campaignStakes: BigNumber;
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    "campaigns(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      aboutProposal: string;
      fullExtraction: boolean;
      fundRaisingDeadline: BigNumber;
      endTime: BigNumber;
      campaignStakes: BigNumber;
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    charityPoolDonations(overrides?: CallOverrides): Promise<BigNumber>;

    "charityPoolDonations()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimFunds(overrides?: CallOverrides): Promise<boolean>;

    "claimFunds()"(overrides?: CallOverrides): Promise<boolean>;

    donate(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "donate(address,uint256)"(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getCampaign(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    "getCampaign(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: boolean;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    getCampaignStatus(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    "getCampaignStatus(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: boolean;
      4: boolean;
    }>;

    getOrganisation(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getOrganisation(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    newCampaign(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "newCampaign(string,uint256,bool,uint256,uint256)"(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    newOrganisation(
      _description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "newOrganisation(string)"(
      _description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    organisations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      recipient: string;
      description: string;
      0: string;
      1: string;
    }>;

    "organisations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      recipient: string;
      description: string;
      0: string;
      1: string;
    }>;

    setCampaignStatus(
      _fundingGoal: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCampaignStatus(uint256)"(
      _fundingGoal: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDaoGoverners(user: string, overrides?: CallOverrides): Promise<void>;

    "setDaoGoverners(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDonor(user: string, overrides?: CallOverrides): Promise<void>;

    "setDonor(address)"(user: string, overrides?: CallOverrides): Promise<void>;

    setFaithMiners(user: string, overrides?: CallOverrides): Promise<void>;

    "setFaithMiners(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKYC(user: string, overrides?: CallOverrides): Promise<void>;

    "setKYC(address)"(user: string, overrides?: CallOverrides): Promise<void>;

    votingPanel(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "votingPanel(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Donated(
      proposalAddress: null,
      donorAddress: null,
      amount: null
    ): EventFilter;

    ProposalAdded(
      recipient: null,
      amount: null,
      description: null
    ): EventFilter;

    ProposalAproved(
      recipient: null,
      amount: null,
      description: null
    ): EventFilter;

    ProposalEnded(
      recipient: null,
      amount: null,
      description: null
    ): EventFilter;
  };

  estimateGas: {
    Daogoverners(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "Daogoverners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Donors(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "Donors(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Faithminers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "Faithminers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    KYC(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "KYC(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    campaignStats(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "campaignStats(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    campaigns(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "campaigns(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    charityPoolDonations(overrides?: CallOverrides): Promise<BigNumber>;

    "charityPoolDonations()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimFunds(overrides?: PayableOverrides): Promise<BigNumber>;

    "claimFunds()"(overrides?: PayableOverrides): Promise<BigNumber>;

    donate(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "donate(address,uint256)"(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getCampaign(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCampaign(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignStatus(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCampaignStatus(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrganisation(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOrganisation(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newCampaign(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "newCampaign(string,uint256,bool,uint256,uint256)"(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    newOrganisation(
      _description: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "newOrganisation(string)"(
      _description: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    organisations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "organisations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setCampaignStatus(
      _fundingGoal: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCampaignStatus(uint256)"(
      _fundingGoal: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDaoGoverners(user: string, overrides?: Overrides): Promise<BigNumber>;

    "setDaoGoverners(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDonor(user: string, overrides?: Overrides): Promise<BigNumber>;

    "setDonor(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFaithMiners(user: string, overrides?: Overrides): Promise<BigNumber>;

    "setFaithMiners(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setKYC(user: string, overrides?: Overrides): Promise<BigNumber>;

    "setKYC(address)"(user: string, overrides?: Overrides): Promise<BigNumber>;

    votingPanel(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "votingPanel(address)"(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Daogoverners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "Daogoverners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Donors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "Donors(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Faithminers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "Faithminers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    KYC(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "KYC(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    campaignStats(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "campaignStats(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    campaigns(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "campaigns(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    charityPoolDonations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "charityPoolDonations()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFunds(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "claimFunds()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    donate(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "donate(address,uint256)"(
      _proposalAddress: string,
      _donateAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getCampaign(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCampaign(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignStatus(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCampaignStatus(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrganisation(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOrganisation(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newCampaign(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newCampaign(string,uint256,bool,uint256,uint256)"(
      _aboutProposal: string,
      _fundingGoal: BigNumberish,
      _fullExtraction: boolean,
      _fundRaisingDeadline: BigNumberish,
      _endTime: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    newOrganisation(
      _description: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newOrganisation(string)"(
      _description: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    organisations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "organisations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setCampaignStatus(
      _fundingGoal: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCampaignStatus(uint256)"(
      _fundingGoal: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDaoGoverners(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDaoGoverners(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDonor(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDonor(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFaithMiners(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFaithMiners(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setKYC(user: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setKYC(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    votingPanel(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "votingPanel(address)"(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
