import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWordToHistory } from "../components/action";
import store from "./store";
import "./Home.css"

function Home() {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const [wordDetail, setWordDetail] = useState("");

  const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => res.json())
      .then(data => setWordDetail(data));

    dispatch(addWordToHistory(word));

    setWord("");
  };

  return (
    <div className="search">
      <div className="centerAlign" >
        <input type="text" value={word} onChange={e => setWord(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {wordDetail &&
        wordDetail.map((word,index) => (
          <div key={index} className="leftPadding">
            <h1>{word.word}</h1>
            <p>{word.phonetic}</p>
            {word.phonetics.map((phonetic,index) => (
              <div key={index}>
                <audio src={phonetic.audio} controls></audio>
                <p>{phonetic.text}</p>
              </div>
            ))}
            {word.meanings.map((meaning,index) => (
              <div key={index} className="leftPadding">
                <h3>{meaning.partOfSpeech}</h3>
                {meaning.definitions.map((def,index) => (
                    <p key={index}>{def.definition}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Home;
