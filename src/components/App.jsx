import React from "react";
import Hero from "./Hero";
import "./App.css";

const langEN = false;
const langDE = false;

function setLanguage() {
  if (langEN) {
    return "en";
  } else if (langDE) {
    return "de";
  }
  return "id";
}

export default function App() {
	return <Hero lang={setLanguage()}/>;
}
