import "./styles.scss";
import Avatar from './Avatar';
import Informations from './Informations'

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Informations />
    </div>
  );
}

export default Card;
