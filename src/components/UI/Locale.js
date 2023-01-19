import { Fragment, useContext } from "react";
import LocaleContext from "../../context/locale-context"

function Locale() {
    const localeCtx = useContext(LocaleContext);

    return <Fragment>
    <button className="btn" onClick={localeCtx.changeLocale}>
      {localeCtx.locale === "en" ? (
        <span>
          <b>EN</b>/RU
        </span>
      ) : (
        <span>
          EN/<b>RU</b>
        </span>
      )}
    </button>
  </Fragment>
}

export default Locale;