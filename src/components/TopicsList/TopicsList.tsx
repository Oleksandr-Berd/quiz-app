import * as SC from "./TopicListStyled"

type Props = {
  topics: [] | null;
};

const TopicsList: React.FC<Props> = ({ topics }) => {
  console.log(topics);

  return (
    <ul>
      {topics
        ? topics.map(({ title, icon }) => (
            <SC.ListItem>
              <img src={icon} alt="icon" />
              <h3>{title}</h3>
            </SC.ListItem>
          ))
        : null}
    </ul>
  );
};

export default TopicsList;
