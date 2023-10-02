import Footer from './components/Footer';
import Nav from './components/Navbar';
import Card from './components/Card';
import services from './components/ServicesList';
import "./app.css"; 

function createCard(info) {
  return <Card title = {info.title} image = {info.image} description = {info.description} button = {info.button}/>
}
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="cards"> 
        {/* <Card title={services[0].title} />
        <Card title="Resources and Learning"/>
        <Card title="Discussion and Feedback"/> */}
        {services.map(createCard)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
