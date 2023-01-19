import Table from "./components/Table/Table";
import Filter from "./components/Filter/Filter";
import { useState, useContext } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import NamingContext from "./context/naming-context"
import Toggles from "./components/UI/Toggles";

function App() {
  
  const namingCtx = useContext(NamingContext)
  const history = useNavigate();

  const headers = namingCtx.headers
  const filterListOptions = namingCtx.filterListOptions

  const [filteringOption, setFilteringOption] = useState(""); // saving request from the filtering field
  const [columnChoice, setColumnChoice] = useState(headers[1].key);
  const [signChoice, setSignChoice] = useState(filterListOptions[0].label);

  function handleFilteringFieldChange(event) {
    // saving filtering request
    setFilteringOption(event.target.value);
    // sending user to the first page
    history("/table/1");
  }

  // checking chosen filtering field
  function handleChoice(event) {
    const newValue = event.target.value;
    // if user changed headers menu
    if (headers.findIndex((header) => newValue === header.label) >= 0) {
      const keyValue = headers.find((header) => newValue === header.label);
      setColumnChoice(keyValue.key);
    } else {
      // if user changed sign menu
      setSignChoice(newValue);
    }
  }

  return (
    <Provider store={store}>
      <Toggles />
      <Filter
        handleChange={handleFilteringFieldChange}
        filteringOption={filteringOption}
        handleChoice={handleChoice}
        columnChoice={columnChoice}
        signChoice={signChoice}
      />
      <Routes>
        <Route path="/" element={<Navigate replace to="/table/1" />} />
        <Route path="/table" element={<Navigate replace to="/table/1" />} />
        <Route
          path="/table/:tablePage"
          element={
            <Table
              filteringOption={filteringOption}
              columnChoice={columnChoice}
              signChoice={signChoice}
            />
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
