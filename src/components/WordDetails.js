import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Home.css"

function WordDetails() {
  const { word } = useParams();
  const [wordDetail, setWordDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        setWordDetail(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWordDetails();
  }, [word]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!word) {
    return <div>No details found for {word}</div>;
  }

  return (
   <div>
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

  export default WordDetails;