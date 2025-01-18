import logo from './logo.svg';
import './App.css';
import CommentsList from './components/commentsList';

function App() {
  return (
    <>
    <h1 className='heading'>Комментарии: </h1>
      <CommentsList />
    </>
  );
}

export default App;
