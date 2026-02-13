import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import ragul1 from "./assets/ragul5.jpeg";
import ragul2 from "./assets/ragul8.jpeg";
import ragul3 from "./assets/ragul9.jpeg";
import ragul4 from "./assets/ragul10.jpeg";
import ragul5 from "./assets/ragul11.jpeg";
import overview from "./assets/ragul4.jpeg";

const AcceptedPage = () => {
  const [envelop, setEnvelop] = useState(false);
  const [memories, setMemories] = useState(false);
  const [suprice, setSuprice] = useState(false);
  const [clickbtn, setClickbtn] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null); 

  const images = [
    { image: ragul1, desc: "“Every love story is beautiful, but ours is my favorite.”" },
    { image: ragul2, desc: "“I love you more than pizza… and that’s saying a lot!” 🍕" },
    { image: ragul3, desc: "“You’re the only person I’d share my fries with.” 🍟" },
    { image: ragul4, desc: "“You are my home, my heart, my everything.”" },
    { image: ragul5, desc: "“Growing old with you is my favorite dream.”" },
  ];

  const suprices = [
    {
      head: "1.Funny 😜",
      para1: "Un kovam varumbodhu naan silent ah irupen… illa na next day naan RIP da 😭",
      para2: "Aana seri, un drama illa na en life romba boring 😂❤️",
    },
    {
      head: "2.Cute 🥺",
      para1: "Nee “saptiya?” nu kekra oru question la dhaan enaku full love irukku 💕",
      para2: "Un chinna chinna care dhaan enaku biggest happiness 😌",
    },
    {
      head: "3.Emotional 💔❤️",
      para1: "Ellarum irundhaalum, enakku thevai nee dhaan…",
      para2: "Nee illa na en smile kooda complete ah varadhu 😔", 
    },
    {
      head: "4.Love ❤️",
      para1: "Un kooda irukradhudhaan en favourite place…",
      para2: "Un peru dhaan en heart la permanent tattoo 😌💘",
    },
    {
      head: "5.Angry 😤 (cute angry)",
      para1: "Un mela kovam varum… aana adhu 5 mins dhaan sustain aagum 😒",
      para2: "Athu kapparam love double aagidum 😌❤️",
    },
    {
      head: "6.Support 🤝💖",
      para1: "Unakku edhu problem na, adhu en problem dhaan…",
      para2: "Win aana kooda, lose aana kooda, naan un side dhaan",
    },
  ];

  useEffect(() => {
    const duration = 10 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);

      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.6 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{ minHeight: "max-content" }}>
      <div className="cards">
        <h1 className="heading">Yay!!! 💖</h1>
        <img src={overview} alt="Celebration" className="image" />
        <p className="para">
          See you on the 14th! <br />
          (I knew you'd say yes 😉)
        </p>
      </div>

      <div className="suprice-div">
        <i className="fa-solid fa-gift sup-itag"></i>

        <button
          onClick={() => {
            setSuprice(true);
            let value=confirm("You want to see surprice Messages?")
            if(value){
            alert("🎉 Surprise! Have a beautiful day! 💖");
            setClickbtn(false);}
            else{
              setClickbtn(true);
              alert("See You later Our Messages!")
            }
          }}
          className={clickbtn ? "sup-btn" : "hidesup-btn"}
        >
          Click Me!
        </button>

        <p className={clickbtn ? "sup-btn" : "hidesup-btn"}>
          <i className="fa-solid fa-star"></i> Click Me for Surprise Messages!
        </p>

        <div className="suprice-buttons">
          {suprices.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={clickbtn ? "hidesup-btn" : "sup-btn"}
            >
              {item.head}
            </button>
          ))}
        </div>

        {currentIndex !== null && (
          <div className="suprice-content">
            <h1>{suprices[currentIndex].head}</h1>
            <p>{suprices[currentIndex].para1}</p>
            <p>{suprices[currentIndex].para2}</p>
          </div>
        )}
      </div>

      <div className="message-letter">
        <i className="fa-solid fa-envelope itag"></i>
        <button onClick={() =>{ setEnvelop(true);setSuprice(false)}}>Click Me!</button>
        <p>
          <i className="fa-solid fa-inbox"></i> Click the button to read your letter
        </p>
      </div>

      <div className={envelop ? "showenvelop" : "hideenvelop"}>
        <p>“Abi… En Kadhal”</p>
        <span style={{ fontStyle: "italic", fontFamily: "serif" }}>Abi,</span>
        <p className="p1">Unna paatha naal lendhu</p>
        <p className="p2">en life la oru pudhu artham vandhuduchu.</p>
        <p className="p3">Nee siricha podhu</p>
        <p className="p4">en kastam ellam marandhudum.</p>
        <p className="p5">Nee kovama irundhaalum</p>
        <p className="p6">adhula kooda enakku oru azhagu theriyum.</p>
        <p className="p7">Nee enakku happiness mattum illa,</p>
        <p className="p8">nee dhaan en strength…</p>
        <p className="p9">nee dhaan en peace…</p>
        <p className="p10">nee dhaan en life oda meaning.</p>
        <p className="p11">Un kooda pesura ovvoru nimishamum</p>
        <p className="p12">enakku oru pudhu ulagame.</p>
        <p className="p13">Indha Valentine’s Day la</p>
        <p className="p14">naan solla vendiya oru vaarthai dhaan…</p>
        <p className="p15">“I love you Abi…</p>
        <p className="p16">ippovum, eppovum,</p>
        <p className="p17">un Ragul.” ❤️</p>
        <button onClick={() => setEnvelop(false)}>Close</button>
      </div>

      <div className="memories-div">
        <i className="fa-solid fa-image linkitag"></i>
        <button onClick={() =>{ setMemories(true);setSuprice(false)}}>Click Me!</button>
        <p>
          <i className="fa-solid fa-inbox"></i> Click the button to your Unforgotable Memories!
        </p>
      </div>

      <div className={memories ? "our-memories" : "hideour-memories"}>
        {images.map((item, index) => (
          <div className="image-class" key={index}>
            <img src={item.image} alt="memory" className="memory-image" />
            <p className="heading">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptedPage;
