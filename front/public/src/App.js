import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Monthsheet from './components/Monthsheet';
import Acceuil from './components/Acceuil';
import Dashboard from './components/Dashboard/Dashboard';
import AcceuilAdmin from './components/AcceuilAdmin';
import ListProjets from './components/Dashboard/Lists/ListProjets';
import ListComptes from './components/Dashboard/Lists/ListComptes';
import ListEquipes from './components/Dashboard/Lists/ListEquipes';
import AddProjet from './components/Dashboard/Add/AddProjet';
import AddEquipe from './components/Dashboard/Add/AddEquipe';
import AddCompte from './components/Dashboard/Add/AddCompte';
import MonthsheetTest from './components/MonthsheetTest';
import StatisticsCollab from './components/StatisticsCollab';



function App() {
  
  
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={< Login />}></Route>
      <Route exact path='/collaborateur/acceuil' element={< Acceuil />} ></Route>
      <Route exact path='/monthsheet' element={< Monthsheet />}></Route>
      <Route exact path='/monthsheetTest' element={< MonthsheetTest />}></Route>
      <Route exact path='/statistiques' element={< StatisticsCollab />}></Route>


      
      <Route exact path='/admin/acceuil' element={< AcceuilAdmin />} ></Route>
      <Route exact path='/admin/dashboard' element={<Dashboard />}></Route>
      <Route exact path='/admin/dashboard/projets' element={<ListProjets />}></Route>
      <Route exact path='/admin/dashboard/comptes' element={<ListComptes />}></Route>
      <Route exact path='/admin/dashboard/equipes' element={<ListEquipes />}></Route>
      <Route exact path='/admin/dashboard/projets/add' element={<AddProjet />}></Route>
      <Route exact path='/admin/dashboard/equipes/add' element={<AddEquipe />}></Route>
      <Route exact path='/admin/dashboard/comptes/add' element={<AddCompte />}></Route>
      </Routes>
      <Footer/>
      
      
    </Router>
  );
}

export default App;
