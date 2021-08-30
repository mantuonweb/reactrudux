import './App.scss';
import HomeComppnent from './features/home/home.component';

function App() {
  return (
    <>
    <div className="main-container">
        <HomeComppnent></HomeComppnent>
      </div>

      <div className="dev-sign text-center">
        <b>Developed By :</b>
        <br className=".d-none .d-xl-block line-break" />
        <span>Mantu Nigam</span>
      </div>
    </>
  );
}

export default App;
