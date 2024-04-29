import { useEffect } from "react";
import BarChart from "../../components/chart_bar/chartBar";
import jsonData from './data.json';
import { SubTitle } from "./styles";

export default function Dashboard() {
   
    return (
        <div className="App">
            <SubTitle>Gráfico de Barras</SubTitle>
            <BarChart data={jsonData} />
        </div>
    );
}