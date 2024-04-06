import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Hompage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFound from './pages/NotFound/NotFound';


// 홈페이지     /
// 영화 전체보여주는 페이지(검색가능)     /movies
// 영화 디테일 페이지         /movies/:id

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Homepage />} />    {/* 부모 밑에 그냥 붙이겠단 표시로 index(path = '/' 과 같은 효과) */}
          <Route path='movies'>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MovieDetailPage />} />
          </Route>
          {/* <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />} /> */}
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
