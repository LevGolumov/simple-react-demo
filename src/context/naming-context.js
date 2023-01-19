import React from "react";

const NamingContext = React.createContext({
    headers: [],
    filterListOptions:[],
    about: {
        button: '',
        text: '',
        close: ''
    }
});

export default NamingContext