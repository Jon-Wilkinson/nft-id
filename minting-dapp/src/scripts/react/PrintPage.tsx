import '../../styles/main.scss';
import {Link} from 'react-router-dom';
import React from 'react';
import { ethers, BigNumber } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider';
import NftContractType from '../lib/NftContractType';
import CollectionConfig from '../../../../smart-contract/config/CollectionConfig';
import NetworkConfigInterface from '../../../../smart-contract/lib/NetworkConfigInterface';
import CollectionStatus from './CollectionStatus';
import MintWidget from './MintWidget';
import Whitelist from '../lib/Whitelist';

const ContractAbi = require('../../../../smart-contract/artifacts/contracts/' + "Print" + '.sol/' + "Print" + '.json').abi;

export default function PrintPage() {
  const browserProvider = detectEthereumProvider() as ExternalProvider;
  // const provider = new ethers.providers.Web3Provider(browserProvider);
  return (
    <div>
      <h1>This is an example page</h1>
      <Link to='/'>Go to Main Page</Link>
    </div>
  );
}