import { FC } from "react";
import styles from "./WidgetCard.module.scss";
import Icon, { IconPaths } from "../Icon/Icon";
import { CategoryType } from "../../../types/types";

interface WidgetCardProps {
  category?: CategoryType | null;
  hideWidget: () => void;
  isWebflow: boolean;
  iconName: keyof typeof IconPaths;
  CTALink: string;

  cityName?: string | null;
  cryptoCurrency?: string | null;
  period?: string | null;
  bankName?: string | null;
  countryName?: string | null;
}
const WidgetCard: FC<WidgetCardProps> = ({
  category,
  hideWidget,
  isWebflow,
  iconName,
  CTALink,

  cityName,
  cryptoCurrency,
  period,
  bankName,
  countryName,
}) => {
  switch (category) {
    case "BILL":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="ethereum" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> paid a bill <br /> via{" "}
              <span>BPAY</span> using <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              BPAY your bills with crypto {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "CREDIT_CARD":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="ethereum" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> paid their <br />
              <span>{bankName} credit card</span> using{" "}
              <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Pay your credit card with crypto {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "THIRD_PARTY_LOCAL":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="solana" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> paid dollars <br /> to a{" "}
              <span>{bankName}</span> account using{" "}
              <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Pay crypto to anyone's Aussie bank {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "SELF_TRANSFER_LOCAL":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="bitcoin" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> sent dollars <br /> to{" "}
              <span>{bankName}</span> by selling <span>{cryptoCurrency}</span>.
              ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Transfer your crypto to AUD {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "INTERNATIONAL_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="ethereum" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> transferred <br /> to their{" "}
              <span>bank in {countryName}</span> using{" "}
              <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Sell crypto & transfer internationally {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "SIGN_UP":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="relaypay" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName} signed up</span> to RelayPay.
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Make a RelayPay transaction {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "GIFT_CARD":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="giftcard" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> purchased <br /> a{" "}
              <span>RelayPay Gift Card</span> using{" "}
              <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Buy with crypto, shop at top brands {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "REFERRAL_INFO":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="relaypay" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone's <span>referral</span> signed up to RelayPay
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Refer & Earn: Login and share your link {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "BUY":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="relaypay" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone used RelayPay to <br />
              <span>buy {cryptoCurrency}</span>, sent to their wallet. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Buy crypto with PayID or Bank Transfer {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "SCAM_INFO":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="dogecoin" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>💡 Did you know?</div>
            <div className={styles.contentText}>
              <span>Crypto Scams in Australia:</span> <br />
              Tips to Spot, Stay Safe. with RelayPay.
            </div>

            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Read our guide {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "THIRD_PARTY_INFO":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="cart" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>💡 Did you know?</div>
            <div className={styles.contentText}>
              <span>Accept crypto payments</span> for your business and simply{" "}
              <span>be paid in dollars.</span>
            </div>

            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Discover the business benefits {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "GIFT_CARD_INFO":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="giftcard" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>💡 Did you know?</div>
            <div className={styles.contentText}>
              <span>RelayPay Gift Cards</span> can be redeemed at <br />
              <span>JB Hi-Fi, Bunnings, Uber Eats</span> & more.
            </div>

            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Buy with crypto, shop at top brands {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "METAMASK_INFO":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="metamask" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>💡 Did you know?</div>
            <div className={styles.contentText}>
              <span>BPAY Bills with MetaMask</span> in Australia using RelayPay.
            </div>

            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Read our guide {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.card}>
          <div>
            <Icon name={"relaypay"} className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone{" "}
              {cityName && (
                <span>
                  in <span>{cityName}</span>
                </span>
              )}{" "}
              made a transaction <br /> using <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Make a RelayPay transaction {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );
  }
};

export default WidgetCard;
