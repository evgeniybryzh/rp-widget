import React, { FC } from "react";

// Import all SVG icons
import ApeIcon from "./ape-logo.svg";
import ArbIcon from "./arb-logo.svg";
import AvaxIcon from "./avax-logo.svg";
import BaseIcon from "./base-logo.svg";
import BnbIcon from "./bnb-logo.svg";
import BscIcon from "./bsc-logo.svg";
import BTCIcon from "./btc-logo.svg";
import CeloIcon from "./celo-logo.svg";
import CleoIcon from "./cleo-logo.svg";
import DaiIcon from "./dai-logo.svg";
import EosIcon from "./eos-logo.svg";
import LinkIcon from "./link-logo.svg";
import MantaIcon from "./manta-logo.svg";
import MaticIcon from "./matic-logo.svg";
import NearIcon from "./near-logo.svg";
import OpIcon from "./op-logo.svg";
import RoninIcon from "./ronin-logo.svg";
import ShibIcon from "./shib-logo.svg";
import SolIcon from "./sol-logo.svg";
import StarknetIcon from "./starknet-logo.svg";
import StellarXlmIcon from "./stellar-xlm-logo.svg";
import TrxIcon from "./trx-logo.svg";
import TusdIcon from "./tusd-logo.svg";
import UniIcon from "./uni-logo.svg";
import UsdcIcon from "./usdc-logo.svg";
import WbtcIcon from "./wbtc-logo.svg";
import XrpIcon from "./xrp-logo.svg";
import XtzIcon from "./xtz-logo.svg";
import ZksyncIcon from "./zksync-logo.svg";
import UsdtIcon from "./usdt-logo.svg";
import EthLogo from "./eth-logo.svg";

interface CryptoCoinProps {
  name?: string | null;
  className?: string;
}

const CryptoCoin: FC<CryptoCoinProps> = ({ name, className }) => {
  switch (name) {
    case "APE":
      return <ApeIcon className={className} />;
    case "ARB":
      return <ArbIcon className={className} />;
    case "AVAX":
      return <AvaxIcon className={className} />;
    case "BASE":
      return <BaseIcon className={className} />;
    case "BNB":
      return <BnbIcon className={className} />;
    case "BSC":
      return <BscIcon className={className} />;
    case "BTC":
      return <BTCIcon className={className} />;
    case "CELO":
      return <CeloIcon className={className} />;
    case "CLEO":
      return <CleoIcon className={className} />;
    case "DAI":
      return <DaiIcon className={className} />;
    case "EOS":
      return <EosIcon className={className} />;
    case "LINK":
      return <LinkIcon className={className} />;
    case "MANTA":
      return <MantaIcon className={className} />;
    case "MATIC":
      return <MaticIcon className={className} />;
    case "NEAR":
      return <NearIcon className={className} />;
    case "OP":
      return <OpIcon className={className} />;
    case "RONIN":
      return <RoninIcon className={className} />;
    case "SHIB":
      return <ShibIcon className={className} />;
    case "SOL":
      return <SolIcon className={className} />;
    case "STARKNET":
      return <StarknetIcon className={className} />;
    case "STELLAR":
      return <StellarXlmIcon className={className} />;
    case "XLM":
      return <StellarXlmIcon className={className} />;
    case "TRX":
      return <TrxIcon className={className} />;
    case "TUSD":
      return <TusdIcon className={className} />;
    case "UNI":
      return <UniIcon className={className} />;
    case "USDC":
      return <UsdcIcon className={className} />;
    case "WBTC":
      return <WbtcIcon className={className} />;
    case "XRP":
      return <XrpIcon className={className} />;
    case "XTZ":
      return <XtzIcon className={className} />;
    case "ZKSYNC":
      return <ZksyncIcon className={className} />;
    case "USDT":
      return <UsdtIcon className={className} />;
    case "ETH":
      return <EthLogo className={className} />;
    default:
      return <BTCIcon className={className} />; // Fallback icon
  }
};

export default CryptoCoin;
