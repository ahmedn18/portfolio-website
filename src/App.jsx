/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ahmed Nader",
  title: "Web Developer & Passionate Learner",
  email: "es-ahmed.nader2027@alexu.edu.eg",
  gitHub: "https://github.com/ahmedn18",
  instagram: "https://www.instagram.com/ahmednader_18/",
  linkedIn: "https://www.linkedin.com/in/ahmed-nader-9a11262b5",
  medium: "https://medium.com/@ahmednooda123",
  twitter: "https://x.com/Noodax161",
  youTube: "https://www.youtube.com/@ahmednaderb3324",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
