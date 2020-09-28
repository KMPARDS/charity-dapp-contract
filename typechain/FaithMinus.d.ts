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

interface FaithMinusInterface extends ethers.utils.Interface {
  functions: {
    "checkProposal(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkProposal",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkProposal",
    data: BytesLike
  ): Result;

  events: {};
}

export class FaithMinus extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FaithMinusInterface;

  functions: {
    checkProposal(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkProposal(address)"(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  checkProposal(
    _proposalAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkProposal(address)"(
    _proposalAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    checkProposal(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "checkProposal(address)"(
      _proposalAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    checkProposal(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkProposal(address)"(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkProposal(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkProposal(address)"(
      _proposalAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}