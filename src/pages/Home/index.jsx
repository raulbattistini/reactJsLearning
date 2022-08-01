import { Link } from "react-router-dom";
import { Header } from "./styles";
import {Button } from './styles'
import { Paragraph } from "./styles";
import {L} from './styles'

export function Home() {
  return (
    <div>
      <Header>
        <h1>Look at what can be done with React</h1>
      </Header>
      <Paragraph> Everything is on the next page</Paragraph>

      <L className="container---seePost">
      <Link to="/Create" className="nounderline">
        <Button> See created posts </Button>
      </Link>
      </L>
    </div>
  );
}
//  </Paragraph.p>
