import ChartSettings from "./ChartSettings";
import {createBarChart} from "./index";
import './style/style.css';

var data = new ChartSettings();

data.data = {
    "Luke": 34,
    "Mary": 14,
    "Kally": 28,
    "Duran": 19,
    "Emily": 13,
    "Bob": 41,
};

createBarChart(data);


