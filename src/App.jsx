import './App.css';

function App() {
  return (
    <main className="card">
      <img className="card__img" src="images/illustration-hero.svg" alt="enjoy your audio" />
      <div className="card__body">
        <h1 className="card__title">Order Summary</h1>
        <p className="card__description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className="card__plan">
          <img src="images/icon-music.svg" alt="music icon" />
          <div className="card__pricing">
            <h4>Annual Plan</h4>
            <h5>$59.99/year</h5>
          </div>
          <a className="card__link">Change</a>
        </div>
        <div className="card__actions">
          <button className="card__action card__action--cta" type="button">
            Proceed to Payment
          </button>
          <button className="card__action card__action--cancel" type="button">
            Cancel Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
