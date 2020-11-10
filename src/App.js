import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown'
import ArticleList from './components/dropdown/ArticleList'
import articles from './components/dropdown/fixtures'

const list =[
  'Report',
  'FAQ',
  'About',
  'Contacts'
]

function App() {
  return (
    <div className="App">
      <h2>Only exclusive news</h2>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
