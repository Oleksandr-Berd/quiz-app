import TopicsList from "../../components/TopicsList/TopicsList";
import * as SC from "./HomePageStyled"

type Props = {
  data: [] | null;
};

const HomePage: React.FC<Props> = ({ data }) => {
 
// const topics = data

  return (
    <SC.CommonCon>
      <div>
        <SC.Title>
          Welcome to the <span>Frontend Quiz!</span>
        </SC.Title>
        <SC.Text>Pick a subject to get started</SC.Text>
        <TopicsList topics={data ? data : null} />
      </div>
    </SC.CommonCon>
  );
};
 
export default HomePage;