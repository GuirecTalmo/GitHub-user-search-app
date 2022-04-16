import './styles.scss';
import Picture from './my_avatar.jpg';

function Avatar() {
  return (
    <div className="column_avatar">
      <img src={Picture} alt="avatar" />
    </div>
  );
}

export default Avatar;
