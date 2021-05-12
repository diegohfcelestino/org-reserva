import BarChart from "./components/BarChart";
import DataTable from "./components/DataTable";
import DonutChart from "./components/DonutChart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div class="container">
        <h1 class="text-primary py-3">Dashboard de Agendamentos</h1>

        <div class="row px-3">
          <div class="col-sm-6">
            <h5 class="text-center test-secondary">Uso dos veiculos (%)</h5>
            <BarChart />
          </div>
          <div class="col-sm-6">
            <h5 class="text-center test-secondary">Uso das Salas (%)</h5>
            <DonutChart />
          </div>
        </div>

        <div class="py-3">
          <h2 class="text-primary">Todos Agendamentos</h2>
        </div>

        <DataTable />
      </div>

      <Footer />
    </>
  );
}

export default App;
