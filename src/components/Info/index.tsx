import HeroImage from "../../assets/Info/HeroImage.png";
import "./styles.css";

const LINKS = [
  {
    label: "Launch",
    link: "/launch",
  },
  {
    label: "Select Cluster",
    link: "/clusters",
  },
  {
    label: "More Info",
    link: "/info",
  },
];

function Info() {
  return (
    <main className="info">
      <img src={HeroImage} alt="hero Image" />
      <h1>RUBICON</h1>
      <p>
        Welcome to Project Rubicon - your personal motorcycle instrument cluster
        for the new age. This project is currently in a POC state, with newer
        improvements being added over time. For more information, check out our
        link.
        <br />
        <br />
        Made by Joshua Thomas Paul
      </p>
      <div>
        {LINKS.map((link) => (
          <a href={link.link} key={link.label}>
            <button>{link.label}</button>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Info;
