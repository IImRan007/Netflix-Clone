import "./App.css";
import Row from "./components/Row";
import Requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOrigins}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
