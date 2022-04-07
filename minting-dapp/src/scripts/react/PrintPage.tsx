import '../../styles/main.scss';
import {Link} from 'react-router-dom';

const ContractAbi = require('../../../../smart-contract/artifacts/contracts/' + "Print" + '.sol/' + "Print" + '.json').abi;

export default function ExPage() {
  const Eth = require('web3-eth');
  return (
    <div>
      <h1>This is an example page</h1>
      <Link to='/'>Go to Main Page</Link>
    </div>
  );
}