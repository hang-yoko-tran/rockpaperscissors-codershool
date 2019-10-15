import React,{useState} from 'react';
import './App.css';

const choices = {
  rock: {
    name: "rock",
    url: "http://pngimg.com/uploads/stone/stone_PNG13590.png",
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  }
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><i className="fas fa-gamepad"></i></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Features</a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </nav>
  )
}

function ChoiceCard(props) {
  console.log(props.classColor)
  return (
    <div className={`choice-card ${props.classColor}`}>
      <h3>{props.title}</h3>
      <img src={props.img} />
    </div>
  )
}


function App() {
  const [result,setResult] = useState('Start')
  const [player,setPlayer] = useState(null)
  const [computer,setComputer] = useState(null)
  const [history,setHistory] = useState([])

  const decideOutCome = (pChoice, cChoice) => {
    if (pChoice === cChoice) return 'TIE'
    else if (pChoice === 'rock') return cChoice === 'paper' ? 'LOSE' : 'WIN'
    else if (pChoice === 'paper') return cChoice === 'scissors' ? 'LOSE' : 'WIN'
    else if (pChoice === 'scissors') return cChoice === 'rock' ? 'LOSE' : 'WIN'
  }



const randomComputerChoice = (choices) => {
  const listOfChoices = Object.keys(choices)
  const computerChoices = Math.floor(Math.random(listOfChoices.length) * listOfChoices.length)
  return listOfChoices[computerChoices]
  // console.log(choices[listOfChoices[computerChoices]])
};


const handlePlayerChoice = (playerChoice) => {
  const computerChoices = randomComputerChoice(choices)
  console.log(computerChoices)
  const result = decideOutCome(playerChoice, computerChoices)
  console.log(playerChoice, computerChoices, result)
  setResult(result)
  setPlayer(choices[playerChoice])
  setComputer(choices[computerChoices])
  setHistory([...history, result])
};

const classColor = (target,result) => {
  if (result === 'TIE') return 'black'
  else if (result === 'WIN') return target === 'player' ? 'winner' : 'loser'
  else if (result === 'LOSE') return target === 'player' ? 'loser' : 'winner'
  return 'd'

}

return (
  <div className="container-fluid-width">
    <Navbar />
    <div className="App content">
      <ChoiceCard
        title={'Player'}
        color={"red"}
        img={player && player.url}
        classColor={classColor('player', result)}
      />
      <h2>{result}</h2>
      <ChoiceCard
        title={'Computer'}
        color={"blue"}
        img={computer && computer.url}
        classColor={classColor('computer', result)}
      />
      <div class="right-side">
        <button className="btn-choices" onClick={() => handlePlayerChoice('paper')}>📜 Paper</button>
        <button className="btn-choices" onClick={() => handlePlayerChoice('rock')}>🥌 Rock</button>
        <button className="btn-choices" onClick={() => handlePlayerChoice('scissors')}>✂️ Scissors</button>
        <h4>HISTORY</h4>
        {history.map(d => <li>{d}</li>)}
      </div>
    </div>
    <div>
    </div>
    <Footer />
  </div >
);
}


function Footer() {
  return (
    <footer className="page-footer font-small cyan darken-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 footer-size">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> 🌭byhang.com</a>
      </div>
    </footer>
  )
}

export default App;
