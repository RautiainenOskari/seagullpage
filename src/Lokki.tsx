import "./App.css";

function Lokki() {
  return (
    <div>
      <div className="intro-text">
        <h2>Welcome to the seagull fanpage!</h2>
        <p>
          Here you will get see tons of cool gulls, see local seagull sightings
          and enjoy cool seagull facts!
        </p>
      </div>
      <div className="lokki-container">
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull1.jpg" alt="Image 1" />
          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull2.jpg" alt="Image 2" />
            <p>Some seagull species have a mutualistic relationship with other animals;
              they lead them to food sources while benefiting from the partnership themselves
          </p>
          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull3.jpg" alt="Image 3" />
          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull4.jpg" alt="Image 4" />
          </div>
          <div className="lokki-text">
          <p>Seagulls sometimes cooperate with each other, like warn each others of danger or attack a threat as a group.
          </p>

          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull5.jpg" alt="Image 1" />
          </div>
          <div className="lokki-text">
          <p>A lot of places look down on feeding seagulls, since they are often looked at as annoying
            pests, but you should feed them anyway because they are a bunch of cool little guys!
          </p>

          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull6.jpg" alt="Image 2" />
          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull7.jpg" alt="Image 3" />
            <div className="lokki-text">
              <p>Some seagulls have been observed mimicking human behavior, such as using crosswalks to cross streets safely</p>
            </div>
          </div>
        </div>
        <div className="lokki-item">
          <div className="lokki-image">
            <img src="/images/gull8.jpg" alt="Image 4" />
            <div className="lokki-text">
              <p>Seagulls can live up to 25 years!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lokki;
