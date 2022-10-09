// import logo from './logo.svg';
import './App.css';
import GetImages from './GetImages';

function App() {
  return (
    <div>
 
      <div className="container-fluid p-5 bg-warning text-white text-center border-none">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        <input type="search" placeholder="Search all pictures here" className="form-control" />
      </div>

      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
              <div className='img-box'>jbj</div>
            </div>
            <div className='col-md-4'>dfd</div>
            <div className='col-md-4'>dff</div>
        </div>
      </div>

      <GetImages />

    </div>
  );
}

export default App;
