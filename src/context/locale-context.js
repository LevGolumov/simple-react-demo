import React from "react";

const LocaleContext = React.createContext({
    locale: 'en',
    changeLocale: () => {}
});

export default LocaleContext