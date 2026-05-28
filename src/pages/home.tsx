
import "../design-system/misc/buttons/animations.css";
import "../design-system/common/buttons/buttons.css";
import "../design-system/common/layout/layout.css";
import "../design-system/common/texts/texts.css";
import { LinkButton } from "../components/common/buttons/linkButtons";

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
