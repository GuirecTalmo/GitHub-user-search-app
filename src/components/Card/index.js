import './styles.scss';
import PropTypes from 'prop-types';
import location from 'src/components/Card/icon-location.svg';
import twitter from 'src/components/Card/icon-twitter.svg';
import personnal from 'src/components/Card/icon-website.svg';
import organisation from 'src/components/Card/icon-company.svg';

function Card({ ListOfDatas, }) {

  const date = new Date(ListOfDatas.created_at)
const formattedDate = date.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
})

  return (
    <div className="card">
      <div>
        <div className="profile-header">
          <div className="container-avatar">
            <img
              id="avatar"
              src={ListOfDatas.avatar_url}
              alt=""
            />
          </div>
          <div className="profile-info-wrapper">
            <div className="profile-name">
              <h2 id="name">{ListOfDatas.name}</h2>
              <p id="user" className="username">
                @{ListOfDatas.login}
              </p>
            </div>
            <p id="date">Joined {formattedDate}</p>
          </div>
        </div>
        <div className="first-container">
          <p id="bio" className="bio">
            {ListOfDatas.bio}
          </p>
          <div className="second-container">
            <div className="little-column">
              <p>Repos</p>
              <p className="number">{ListOfDatas.public_repos}</p>
            </div>
            <div className="little-column">
              <p>Followers</p>
              <p className="number">{ListOfDatas.followers}</p>
            </div>
            <div className="little-column">
              <p>Following</p>
              <p className="number">{ListOfDatas.following}</p>
            </div>
          </div>
          <div className="third-container">
            <div className="little-xs-column">
              <img className="icons-card" src={location} alt="location" />
              <p>{ListOfDatas.location}</p>
            </div>
            <div className="little-xs-column">
              <img className="icons-card" src={twitter} alt="twitter" />
              <p>@{ListOfDatas.twitter_username}</p>
            </div>
            <div className="little-xs-column">
              <img className="icons-card" src={personnal} alt="personnal" />
              <p><a href={ListOfDatas.html_url}>Personnal website</a></p>
            </div>
            <div className="little-xs-column">
              <img className="icons-card" src={organisation} alt="orga" />
              <p>{ListOfDatas.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
