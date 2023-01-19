import NamingContext from "./naming-context";
import LocaleContext from "./locale-context";
import { useContext } from "react";
import translation from "../locales/translation";

function NamingContextProvider(props) {
  const localeCtx = useContext(LocaleContext);
  const table = translation[localeCtx.locale].table;
  const about = translation[localeCtx.locale].about;

  const namingContext = {
    headers: [
        { key: "date", label: table.date, sortable: false },
        { key: "name", label: table.title, sortable: true },
        { key: "amount", label: table.amount, sortable: true },
        { key: "distance", label: table.distance, sortable: true },
      ],
      filterListOptions:[
        { key: "equals", label: "=", sortable: true },
        { key: "contains", label: table.contains, sortable: true },
        { key: "more", label: ">", sortable: true },
        { key: "less", label: "<", sortable: true },
      ],
      about: {
        button: about.button,
        text: about.text,
        close: about.close
      }
  }
  return (
      <NamingContext.Provider value={namingContext} >{props.children}</NamingContext.Provider>
    
  );
}

export default NamingContextProvider;
