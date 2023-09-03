import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../components/action';
import store from './store';
import { Link } from 'react-router-dom';
import "./History.css"

function History() {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();


  return (
    <div className="history">
      <h2>Search History</h2>
      <ul>
        {history.map((word) => (
          <Link to={`/word/${word}`}><li key={word}>{word}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default History;