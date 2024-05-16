import "./App.css";
function Info() {
    return (
        <div>
            <h2>About </h2>
            <img className="icon" src="/seagullpage/images/icon.png" alt="icon" />
            <p>
                The seagull sighting data is gotten from <a href="https://documenter.getpostman.com/view/664302/S1ENwy59#intro">
                    eBird API 2.0
                </a>
                , which is based on <a href="https://ebird.org/home">
                    eBird.org.
                </a>
                <br />
                Some of the seagull facts are gotten from <a href="https://www.surfertoday.com/">surfertoday.com</a>
                <br />
                The images are from royalty free sites like Pixabay.com.
                <br />
                <br />
                <b>
                    To access the secret seagull video, use the email
                    "seagullfan@seamail.com" and the password "seagullsarecool"
                </b>
            </p>
        </div>
    );
}

export default Info;
