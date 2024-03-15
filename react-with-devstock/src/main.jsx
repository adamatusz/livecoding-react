import ReactDOM from "react-dom/client";
import TextBold from "./components/TextBold";
import Link from "./components/Link";
import Wrapper from "./components/Wrapper";

const element = (
  <Wrapper component={<Link href="https://devstock.pl">Link do Devstock</Link>}>
    <TextBold>
      <Link href="https://devstock.pl">Link do Devstock</Link>
    </TextBold>
    <Link href="https://devstock.pl">Link do Devstock</Link>
    <TextBold>To jest napis</TextBold>
    <p>Na deser</p>
  </Wrapper>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
