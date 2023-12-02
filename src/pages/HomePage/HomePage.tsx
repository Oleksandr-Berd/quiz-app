import TopicsList from "../../components/TopicsList/TopicsList";
import * as SC from "./HomePageStyled"

type Props = {
  data: [] | null;
  handleTopic:(chosenTitle:string)=>void
};

const HomePage: React.FC<Props> = ({ data, handleTopic }) => {
  return (
    <SC.CommonCon>
      <div>
        <SC.Title>
          Welcome to the <span>Frontend Quiz!</span>
        </SC.Title>
        <SC.Text>Pick a subject to get started</SC.Text>
        <TopicsList topics={data ? data : null} handleTopic={handleTopic} />
      </div>
    </SC.CommonCon>
  );
};
 
export default HomePage;