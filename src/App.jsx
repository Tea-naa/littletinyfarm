import './App.css';
import AnimalCard from './AnimalCard';

function App() {
  return (
    <div>
      {/* 🌐 NAVBAR */}
      <nav className="navbar">
        <h2>Little Tiny Farm</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#animals">Meet the Animals</a>
          <a href="#chill">Chill Zone</a>
          <a href="#donate">Donate</a>
        </div>
      </nav>

      
    {/* 🌄 HERO SECTION */}
<section id="home" className="hero">
  <div className="hero-text">
    <h1>Welcome to Little Tiny Farm 🐐</h1>
    <p>
      A cozy space where goats snack on crackers, pigs snooze in hay,
      and visitors find peace with animals who feel like family.
    </p>
  </div>
</section>


      {/* 🐾 MEET THE ANIMALS */}
      <section id="animals" className="section">
  <h2>Meet the Animals</h2>
  <div className="animal-grid">
    <AnimalCard name="Tina the Goat" image="https://images.unsplash.com/photo-1590080876811-c0c5ee9648b8" />
    <AnimalCard name="xxxx the Pig" image="https://images.unsplash.com/photo-1599669454699-6ba71f7af743" />
    <AnimalCard name="xxx the Duck" image="https://images.unsplash.com/photo-1599276232551-0c8421f934a7" />
    <AnimalCard name="Princess the Dog" image="https://images.unsplash.com/photo-1601758174621-00100b8d630e" />
    <AnimalCard name="Pink Tea the Cat" image="https://images.unsplash.com/photo-1559239115-ce3eb7cb87ea" />
  </div>
</section>


      {/* 🌻 CHILL ZONE */}
      <section id="chill" className="chill-zone">
  <div className="chill-overlay">
    <h2>Chill Zone</h2>
    <p>"Sometimes the best therapy has fur and four legs."</p>
    <p>DM us on <a href="https://instagram.com/jedismama" target="_blank" rel="noopener noreferrer">@jedismama</a> to come visit the farm and unwind with our furry friends.</p>
  </div>
</section>


      {/* 💖 DONATE */}
      <section id="donate" className="section">
  <h2>Support the Farm</h2>
  <p>Your donation helps feed the animals, maintain the land, and spread love!</p>

  <form action="https://www.paypal.com/donate" method="post" target="_blank">
    <input type="hidden" name="hosted_button_id" value="REPLACE_WITH_YOUR_BUTTON_ID" />
    <input type="image" 
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
      border="0" name="submit" title="Donate with PayPal" 
      alt="Donate with PayPal button" />
    <img alt="" border="0" 
      src="https://www.paypal.com/en_US/i/scr/pixel.gif" 
      width="1" height="1" />
  </form>
</section>


      {/* 📩 FOOTER */}
      <footer>
        <p>© 2025 Little Tiny Farm </p>
      </footer>
    </div>
  );
}

export default App;
