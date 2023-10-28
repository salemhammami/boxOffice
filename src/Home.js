/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Navs from './components/Navs';

function Home() {
  const [searchStr, setSearchStr] = useState('');
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();
    const response = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${searchStr}`
    );
    const boys = await response.json();
    console.log(response);
  };

  return (
    <div>
      <Navs />
      <h1>Home Page</h1>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
