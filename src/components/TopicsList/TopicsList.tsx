import { NavLink } from "react-router-dom";
import * as SC from "./TopicListStyled"

type Props = {
  topics: [] | null;
  handleTopic:(chosenTitle:string)=>void
};

const TopicsList: React.FC<Props> = ({ topics, handleTopic }) => {
  const chooseTopic = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    const selectedTitle = evt.currentTarget.getAttribute("data-title");
    handleTopic(selectedTitle!);
  };

  return (
    <SC.TopicList>
      {topics
        ? topics.map(({ title, icon }) => (
            <SC.ListItem key={title}>
              <img src={icon} alt="icon" />
              <NavLink to="/quiz" onClick={chooseTopic} data-title={title}>
                {title}
              </NavLink>
            </SC.ListItem>
          ))
        : null}
    </SC.TopicList>
  );
};

export default TopicsList;
