import React from "react";
import useBlockChain from "../hooks/useBlockChain";
import { providers, Contract, ethers, utils } from "ethers";
import { Typography, Grid, Link, Button } from "@material-ui/core";
import Onboard from "@web3-onboard/core";
import argentModule from "@web3-onboard/argent";

const WalletConnected = () => {
  const { connectedWallet } = useBlockChain();
  console.log(connectedWallet);
  const argent = argentModule();

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    argent,
    // ... other wallets
  ],
  chains: [
    {
      id: "0x118",  // = 280
      token: "ETH",
      label: "zkSync Goerli",
      rpcUrl: "https://zksync2-testnet.zksync.dev",
    },
    // ... other chains
  ],
  appMetadata: {
    name: "zk sync safe",
    icon: "https://user-images.githubusercontent.com/101476931/224553007-1d6a9a43-8834-47a5-a578-9b763d91259e.jpeg",
    description: "A multi sig wallet on the zk sync era testnet",
    ]
  }
});

const Connect = async () => {
const connectedWallets = await onboard.connectWallet();
console.log(connectedWallets);
};

  return (
    <div>
      {" "}
      <Grid>
        {connectedWallet ? (
          <>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              component="div"
            >
              {`Metamask connected account: ${connectedWallet.substring(
                0,
                5
              )}...${connectedWallet.slice(-4)}`}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              component="div"
            >
              {" "}
              <Link
                href="https://goerli.explorer.zksync.io/address/0x44746F3f7D503f840CbB2e6Ef82FB0d75EFa9A53"
                variant="body1"
                align="center"
                underline="hover"
                target="_blank"
              >
                Verified Contract on zk-sync ✅
              </Link>
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              component="div"
            >Wanted to use Argent Wallet <br></br>
            <Button component="div" align="center" variant="contained" color="primary" onClick={Connect}>
            Connect Argent Wallet
            </Button>
            </Typography>
          </>
        ) : (
          <>
          <Typography
              variant="body1"
              align="center"
              gutterBottom
              component="div"
            >Wanted to use Argent Wallet<br></br>
            <Button  align="center" variant="contained" color="primary" onClick={Connect}>
              Connect Argent Wallet
            </Button>
            </Typography>
            </>
        )}
      </Grid>
    </div>
  );
};

export default WalletConnected;
