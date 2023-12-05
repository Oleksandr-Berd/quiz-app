import { NavLink } from "react-router-dom";

type Props = {
    score:number;
    title: string;
    total: number;
    icon: string;
}

const Result:React.FC<Props> = ({score, title, total, icon}) => {
    return (
      <div>
        <h2>
          Quiz completed <span>You scored...</span>
        </h2>
        <div>
          <div>
            <img src={icon} alt="icon" />
            <p>{title}</p>
          </div>
          <p>{score}</p>
          <p>out of {total}</p>
        </div>
        <NavLink to="/">Play Again</NavLink>
      </div>
    );
}
 
export default Result;