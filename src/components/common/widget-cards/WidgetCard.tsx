import React, { FC, useMemo } from "react";
import styles from "./WidgetCard.module.scss";
import { CategoryType } from "../../../types/types";
import WidgetCardDidYouKnow from "./components/WidgetCardDidYouKnow";
import WidgetCardReview from "./components/WidgetCardReview";
import IconExit from "../Icons/IconExit";
import IconGiftCard from "../Icons/IconGiftCard";
import IconRelayPay from "../Icons/IconRelayPay";
import { getCoinLogoLink } from "../../../utils/getCoinLogo";
import { getCTALinks } from "../../../utils/functions";
import {
  BTC_ICON_LINK,
  DID_YOU_KNOW_CATEGORIES,
  REVIEW_CATEGORIES,
} from "../../../constants/constants";

interface WidgetCardProps {
  category?: CategoryType | null;
  hideWidget: () => void;
  isWebflow: boolean;
  CTALink: string | null;

  cityName?: string | null;
  cryptoCurrency?: string | null;
  period?: string | null;
  bankName?: string | null;
  countryName?: string | null;
  coinSymbol?: string | null;
  title?: string | null;
  text?: string | null;
  iconUrl?: string | null;
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
  iconUrl,
}) => {
  const logoLink = useMemo(() => {
    if (iconUrl && iconUrl?.length > 0) {
      return iconUrl;
    }

    if (
      DID_YOU_KNOW_CATEGORIES.includes(category as CategoryType) ||
      REVIEW_CATEGORIES.includes(category as CategoryType)
    ) {
      return null;
    }

    return getCoinLogoLink(cryptoCurrency, coinSymbol);
  }, [category, coinSymbol, cryptoCurrency, iconUrl]);

  const cardCTALink = useMemo(() => {
    if (CTALink && CTALink?.length > 0) {
      return CTALink;
    }

    return getCTALinks(category, isWebflow);
  }, [CTALink, category, isWebflow]);

  switch (category) {
    case "SELL_BPAY_BILL":
      return (
        <div className={styles.card}>
          <div>
            <img
              className={styles.icon}
              src={logoLink || BTC_ICON_LINK}
              alt="Crypto logo"
            />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName}</span> paid a bill <br /> via{" "}
                <span>BPAY</span> using <span>{cryptoCurrency}</span>. ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              BPAY your bills with crypto {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "SELL_BPAY_CREDIT_CARD":
      return (
        <div className={styles.card}>
          <div>
            <img
              className={styles.icon}
              src={logoLink || BTC_ICON_LINK}
              alt="Crypto logo"
            />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName}</span> paid their <br />
                <span>{bankName} credit card</span> using{" "}
                <span>{cryptoCurrency}</span>. ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Pay your credit card with crypto {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "SELL_THIRD_PARTY_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <img
              className={styles.icon}
              src={logoLink || BTC_ICON_LINK}
              alt="Crypto logo"
            />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName}</span> paid dollars <br /> to a{" "}
                <span>{bankName}</span> account using{" "}
                <span>{cryptoCurrency}</span>. ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Pay crypto to anyone's Aussie bank {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "SELL_SELF_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <img
              className={styles.icon}
              src={logoLink || BTC_ICON_LINK}
              alt="Crypto logo"
            />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName}</span> sent dollars <br /> to{" "}
                <span>{bankName}</span> by selling <span>{cryptoCurrency}</span>
                . ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Transfer your crypto to AUD {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "SELL_INTERNATIONAL_TRANSFER":
      return (
        <div className={styles.card}>
          <div>
            <img
              className={styles.icon}
              src={logoLink || BTC_ICON_LINK}
              alt="Crypto logo"
            />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName}</span> transferred <br /> to their{" "}
                <span>bank in {countryName}</span> using{" "}
                <span>{cryptoCurrency}</span>. ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Sell crypto & transfer internationally {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "SELL_GIFT_CARD":
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconGiftCard />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName}</span> purchased <br /> a{" "}
                <span>RelayPay Gift Card</span> using{" "}
                <span>{cryptoCurrency}</span>. ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Buy with crypto, shop at top brands {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "SIGN_UP":
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconRelayPay />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone in <span>{cityName} signed up</span> to RelayPay.
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Make a RelayPay transaction {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "BUY":
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconRelayPay />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone used RelayPay to <br />
                <span>buy {cryptoCurrency}</span>, sent to their wallet. ✓
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Make a RelayPay transaction {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "MERCHANT":
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconRelayPay />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>Someone used RelayPay</div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Buy crypto with PayID or Bank Transfer {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "REFERRAL_SIGNUP":
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconRelayPay />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone's <span>referral</span> signed up to RelayPay.
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Refer & Earn: Login and share your link {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "REFERRAL_REDEMPTION":
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconRelayPay />
          </div>
          <div className={styles.content}>
            {text && text.length > 0 && (
              <div
                className={styles.contentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            {(!text || text.length === 0) && (
              <div className={styles.contentText}>
                Someone <span>earned reward dollars</span> <br /> when their
                referral made a transaction.
              </div>
            )}
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Refer & Earn: Login and share your link {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );

    case "REVIEW_TEMPLATE1":
    case "REVIEW_TEMPLATE2":
      return (
        <WidgetCardReview
          CTALink={cardCTALink}
          onClick={hideWidget}
          text={text}
          period={period || ""}
          logoLink={logoLink}
          title={title}
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
    case "DID_YOU_KNOW_MERCHANT":
      return (
        <WidgetCardDidYouKnow
          category={category}
          CTALink={cardCTALink}
          onClick={hideWidget}
          text={text}
          title={title}
          period={period || ""}
          logoLink={logoLink}
        />
      );

    default:
      return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <IconRelayPay />
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
                  using <span>{cryptoCurrency}</span>. ✓
                </>
              )}
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a
              className={styles.contentLink}
              href={cardCTALink}
              target={"_blank"}
              rel="noreferrer"
            >
              Make a RelayPay transaction {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <IconExit />
          </div>
        </div>
      );
  }
};

export default WidgetCard;
