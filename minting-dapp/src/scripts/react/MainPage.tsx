import '../../styles/main.scss';
import Dapp from '.././react/Dapp';
import {Link} from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <h1>SENIOR DESIGN NFT PROJECT</h1>
      <p>EECS 4020 </p>
      <p>SPRING 2022</p>
      <main>
      <img id="logo" src="/build/images/logo.png" alt="Logo" />
      
      <hr/>

      <div id="minting-dapp">
        <Dapp/>
      </div>
      
      </main>
      <hr/>
      <Link to='printPage'>Go to Print Page</Link>
  </div>
  );
}