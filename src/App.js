import React, { useEffect, useState } from "react";
import KanjiCard from "./components/KanjiCard";

export default function App() {
  
  const [kanji, setKanji] = useState("");
  useEffect(() => { 
    async function fetchData() {
      const response = await fetch('https://kanjiapi.dev/v1/kanji/joyo');
      const data = await response.json();
      const cards = data.map(x => <KanjiCard key={x} kanji={x} />)
      setKanji(cards);
    }
    fetchData();
  }, [])

  return (
    <div id="kanji-cards">
      {kanji}
    </div>
  )
}