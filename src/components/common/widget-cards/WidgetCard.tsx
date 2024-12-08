import { FC, useMemo } from "react";
import styles from "./WidgetCard.module.scss";
import Icon, { IconPaths } from "../Icon/Icon";
import { CategoryType } from "../../../types/types";
import { getCryptoIcon } from "../../../utils/functions";
import WidgetCardDidYouKnow from "./components/WidgetCardDidYouKnow";
import WidgetCardReview from "./components/WidgetCardReview";

interface WidgetCardProps {
  category?: CategoryType | null;
  hideWidget: () => void;
  isWebflow: boolean;
  CTALink: string;

  cityName?: string | null;
  cryptoCurrency?: string | null;
  period?: string | null;
  bankName?: string | null;
  countryName?: string | null;
  coinSymbol?: string | null;
  title?: string | null;
  text?: string | null;
}
const WidgetCard: FC<WidgetCardProps> = ({
  category,
  hideWidget,
  isWebflow,
  CTALink,
  cityName,
  cryptoCurrency,
  period,
  bankName,
  countryName,
  coinSymbol,
  text,
  title,
}) => {
  const IconComponent = useMemo(() => {
    return getCryptoIcon(coinSymbol || "");
  }, [coinSymbol]);

  switch (category) {
    case "SELL_BPAY_BILL":
      return (
        <div className={styles.card}>
          <div>
            <IconComponent className={styles.icon} />
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

    case "SELL_BPAY_CREDIT_CARD":
      return (
        <div className={styles.card}>
          <div>
            <IconComponent className={styles.icon} />
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

    case "SELL_THIRD_PARTY_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <IconComponent className={styles.icon} />
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

    case "SELL_SELF_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <IconComponent className={styles.icon} />
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

    case "SELL_INTERNATIONAL_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <IconComponent className={styles.icon} />
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

    case "SELL_GIFT_CARD":
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

    case "REFERRAL_SIGNUP":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="relaypay" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone's <span>referral</span> signed up to RelayPay.
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

    case "REFERRAL_REDEMPTION":
      return (
        <div className={styles.card}>
          <div>
            <Icon name="relaypay" className={styles.icon} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone <span>earned reward dollars</span> <br /> when their
              referral made a transaction.
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

    case "REVIEW_TEMPLATE1":
    case "REVIEW_TEMPLATE2":
      return (
        <WidgetCardReview
          CTALink={CTALink}
          onClick={hideWidget}
          text={text}
          period={period || ""}
        />
      );

    case "DID_YOU_KNOW_SELL_BPAY":
    case "DID_YOU_KNOW_SELL_THIRD_PARTY":
    case "DID_YOU_KNOW_SELL_SELF_TRANSFER":
    case "DID_YOU_KNOW_SELL_INTERNATIONAL_TRANSFER":
    case "DID_YOU_KNOW_SELL_GIFT_CARD":
    case "DID_YOU_KNOW_BUY":
    case "DID_YOU_KNOW_SIGN_UP":
    case "DID_YOU_KNOW_REFERRAL_SIGNUP":
    case "DID_YOU_KNOW_REFERRAL_REDEMPTION":
      return (
        <WidgetCardDidYouKnow
          CTALink={CTALink}
          CTAText="Read our guide >"
          onClick={hideWidget}
          iconName="metamask"
          text={text}
          title={title}
        />
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
              made a transaction{" "}
              {cryptoCurrency && (
                <>
                  <br />
                  using
                  <span>{cryptoCurrency}</span>. ✓
                </>
              )}
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
