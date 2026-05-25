
import "./home.css";
import "../design-system/buttons/animations.css";
import "../design-system/buttons/buttons.css";
import "../design-system/layout/layout.css"
import { LinkButton } from "../components/common/buttons/linkButtons"

export default function Home() {
 

  return (
    <main className="home">
      <h1 className="home__title">
        À quel point <span className="home__nowrap">es&#8209;tu</span> un{" "}
        <span className="home__highlight">politicien</span> ?
      </h1>
      <LinkButton></LinkButton>
      
    </main>
  );
}
