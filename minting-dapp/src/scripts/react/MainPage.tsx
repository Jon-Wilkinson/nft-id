import React from 'react';
import '../../styles/main.scss';
import Dapp from '.././react/Dapp';

interface Props {

}
interface State {
  loggedIn: boolean;
}

export default class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount = async () => {
    localStorage.getItem('username') == '' ?
      this.setState({loggedIn: false}) : this.setState({loggedIn: true});
  }

  render() {
    return (
      this.state.loggedIn ?
      <div>
        <section id="left">
        <h1>SENIOR DESIGN NFT PROJECT</h1>
        <p>EECS 4020 </p>
        <p>SPRING 2022</p>
        <img id="logo" src="/build/images/logo.png" alt="Logo" />
        </section>
        <main>
        
        
        {/* <hr/> */}

        <section id="right">
        <div id="minting-dapp">
          <Dapp/>
        </div>
        </section>
        
        </main>
        
        <footer>
          <hr/>
          <p> By Raymond Eleko, Josh  Spurgeon, Sydney Evans, Jon Wilkinson, Daniel Wellons </p>
        </footer>
    </div>
    :
    <h1>
      Error! You need to log in first
    </h1>
    );
  }
}