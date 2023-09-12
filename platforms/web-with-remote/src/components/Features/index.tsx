import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormattedMessage, useLanguageProvider } from "@web/core";
import { useThemeActions } from "@web/providers/Theme/slice";
import { useDetectTheme } from "@web/providers/Theme/useDetectTheme";

import { FeaturesEnum } from "./types";

import "./style.scss";
import { selectPersisted } from "@web/slices/persisted/selectors";
import { actions } from "@web/slices/persisted";

export default function Features(): JSX.Element {
  const { locale, changeLocale } = useLanguageProvider();
  const localeInverted = locale === "en" ? "de" : "en";
  const [active, setActive] = useState<FeaturesEnum>(FeaturesEnum.PredictableState);
  const dispatch = useDispatch();
  const { opositeTheme } = useDetectTheme();
  const { changeTheme } = useThemeActions();
  const persisted = useSelector(selectPersisted);
  return (
    <div className="features-block">
      <section id="features" className="features">
        <div className="box foo">
          {/* <h3 className="features-title">Features</h3> */}
          <div className="features-content">
            <div data-features-tabs className="features-content-col">
              <div id="feature-1" className={`features-textblock animated fadeIn ${active === FeaturesEnum.PredictableState ? "__active" : ""}`}>
                <h2>Predictable State</h2>
                <p>Need Global state management? Redux Toolkit is already setup and ready to use!</p>
                <button className="feature" onClick={() => dispatch(actions.updatePersisted())}>
                  Update persisted value: {persisted}
                </button>
              </div>
              <div id="feature-2" className={`features-textblock animated fadeIn ${active === FeaturesEnum.I18N ? "__active" : ""}`}>
                <h2>
                  <FormattedMessage id="features.title" />
                </h2>
                <p>
                  <FormattedMessage id="features.description" />
                </p>
                <div>
                  <button className="feature" onClick={() => changeLocale(localeInverted)}>
                    <FormattedMessage id={`features.${localeInverted}`} />
                  </button>
                </div>
              </div>
              <div id="feature-3" className={`features-textblock animated fadeIn ${active === FeaturesEnum.Routing ? "__active" : ""}`}>
                <h2>Standard Routing</h2>
                <p>Routing made easy with already installed and configured router. You can choose between different layouts for routes you will have in your app.</p>
              </div>
              <div id="feature-4" className={`features-textblock animated fadeIn ${active === FeaturesEnum.Monorepo ? "__active" : ""}`}>
                <h2>Monorepo Structure</h2>
                <p>Let{"'"}s decouple! Split your code into logical parts, into packages, have many website distributions, use shared UI components between them!</p>
              </div>
              <div id="feature-5" className={`features-textblock animated fadeIn ${active === FeaturesEnum.InstantFeedback ? "__active" : ""}`}>
                <h2>Instant Feedback</h2>
                <p>Live reload on every change you make in your project!</p>
              </div>
              <div id="feature-6" className={`features-textblock animated fadeIn ${active === FeaturesEnum.NextGenerationCode ? "__active" : ""}`}>
                <h2>Next Generation Code</h2>
                <p>Use modern JavaScript and stop worrying about browser support!</p>
                <div>
                  <button className="feature" onClick={() => dispatch(changeTheme(opositeTheme))}>
                    {opositeTheme}
                  </button>
                </div>
              </div>
            </div>
            <div className="features-content-col">
              <div data-features-nav className="features-graph">
                <div className="button-holder">
                  <button
                    onClick={(): void => setActive(FeaturesEnum.PredictableState)}
                    className={`icon-features-1 btn-with-icon ${active === FeaturesEnum.PredictableState ? "__active" : ""}`}
                  >
                    <span className="sq-bt-label label-top-left">Predictable State</span>
                  </button>
                  <button onClick={(): void => setActive(FeaturesEnum.I18N)} className={`icon-features-2 btn-with-icon ${active === FeaturesEnum.I18N ? "__active" : ""}`}>
                    <span className="sq-bt-label label-top">Multilingual Support</span>
                  </button>
                  <button onClick={(): void => setActive(FeaturesEnum.Routing)} className={`icon-features-3 btn-with-icon ${active === FeaturesEnum.Routing ? "__active" : ""}`}>
                    <span className="sq-bt-label label-top-right">Standard routing</span>
                  </button>
                </div>
                <div className="animation-holder">
                  <span className="flash-oval">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/598117/flash.png" alt="pulse" />
                    <div className="wave hidden wave-anim"></div>
                    <div className="wave2 hidden wave-anim"></div>
                    <div className="wave3 hidden wave-anim"></div>
                    <div className="wave4 hidden wave-anim"></div>
                  </span>
                </div>
                <div className="button-holder">
                  <button onClick={(): void => setActive(FeaturesEnum.Monorepo)} className={`icon-features-4 btn-with-icon ${active === FeaturesEnum.Monorepo ? "__active" : ""}`}>
                    <span className="sq-bt-label label-bottom-left">Monorepo Structure</span>
                  </button>
                  <button
                    onClick={(): void => setActive(FeaturesEnum.InstantFeedback)}
                    className={`icon-features-5 btn-with-icon ${active === FeaturesEnum.InstantFeedback ? "__active" : ""}`}
                  >
                    <span className="sq-bt-label label-bottom">Instant Feedback</span>
                  </button>
                  <button
                    onClick={(): void => setActive(FeaturesEnum.NextGenerationCode)}
                    className={`icon-features-6 btn-with-icon ${active === FeaturesEnum.NextGenerationCode ? "__active" : ""}`}
                  >
                    <span className="sq-bt-label label-bottom-right">Next Gen Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
