import * as SC from "./TopicListStyled"

type Props = {
  topics: [] | null;
};

const TopicsList: React.FC<Props> = ({ topics }) => {

  return (
    <ul>
      {topics
        ? topics.map(({ title, icon }) => (
            <SC.ListItem key={title}>
              <img src={icon} alt="icon" />
              <h3>{title}</h3>
            </SC.ListItem>
          ))
        : null}
    </ul>
  );
};

export default TopicsList;
