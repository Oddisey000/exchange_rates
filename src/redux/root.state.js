import { apiURL, dataArr } from "../shared/data";

const INITIAL_STATE = {
  exchangeServices: `${apiURL}/service/`,
  exchangeRatesAverage: `${apiURL}/average/`,
  citiesArrayData: dataArr,
  currencyRate: [],
  lastSelectedCity: ""
};

export default INITIAL_STATE;