import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Items from "./Items";
import Popup from "./Popup";
const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=9721a774";

function Index() {
  const [state, setState] = useState({
    s: "",
    result: [],
    selected: {},
    loading: true,
  });

  const inputHandler = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      setState((prevState) => {
        return { ...prevState, result: [], };
      });
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let dataResult = data.Search;
        console.log(data.Search);

        setState((prevState) => {
          return { ...prevState, result: dataResult, loading: false };
        });
      });
    }
  };

  const openPop = async (id) => {
    const url = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=9721a774`)
    const result = await url.json()
    console.log(result);
    setState((prevState) => {
      return { ...prevState, selected: result, loading: false };
    });
    console.log(state.selected);
  };

  const closePop = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  }

  return (
    <main>
      <Header />
      <Search handler={inputHandler} search={search} />
      <Items result={state} openPop={openPop}/>
      {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePop={closePop} /> : false}
    </main>
  );
}

export default Index;
