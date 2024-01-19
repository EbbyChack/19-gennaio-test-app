import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/style.css';
import SideBarVertical from './components/SideBarVertical';
import Main from './components/Main';
import NavbarFlexBottom from './components/NavbarFlexBottom';

function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <SideBarVertical/>
        <Main/>

      </div>
    </div>
    <NavbarFlexBottom/>
    </>
  );
}

export default App;
