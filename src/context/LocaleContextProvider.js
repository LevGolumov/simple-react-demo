import React, {useState} from "react";
import LocaleContext from "./locale-context";


function LocaleContextProvider(props) {
    const [localeState, setLocaleState] = useState({locale: 'en'})

    function changeLocaleHandler(){
        if (localeState.locale === "en"){
            setLocaleState({locale: 'ru'})
        } else {
            setLocaleState({locale: 'en'})
        }
    }

    const localeContext = {
        locale: localeState.locale,
        changeLocale: changeLocaleHandler
    }

    return <LocaleContext.Provider value={localeContext}>{props.children}</LocaleContext.Provider>
}

export default LocaleContextProvider;