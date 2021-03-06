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
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CharityInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "Daogoverners(address)": FunctionFragment;
    "Donors(address)": FunctionFragment;
    "Faithminers(address)": FunctionFragment;
    "KYC(address)": FunctionFragment;
    "setDaoGoverners(address)": FunctionFragment;
    "setDonor(address)": FunctionFragment;
    "setFaithMiners(address)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "Daogoverners",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "Donors", values: [string]): string;
  encodeFunctionData(functionFragment: "Faithminers", values: [string]): string;
  encodeFunctionData(functionFragment: "KYC", values: [string]): string;
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
    functionFragment: "setDaoGoverners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDonor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFaithMiners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;

  events: {};
}

export class CharityInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CharityInterfaceInterface;

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
  };

  filters: {};

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
  };
}
