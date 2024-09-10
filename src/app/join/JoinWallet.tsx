const JoinWallet = () => {
  return (
    <div className="JoinWallet">
      <h4 className="title">Connect your wallet</h4>

      <p className="subTitle">A web3 savvy? connect solana wallet app here</p>

      <div className="wallets">
        <button title="Phantom wallet">
          <img
            alt=""
            src="/icon/phantom.png"
            width={50}
            height={50}
            className="icon"
          />
        </button>

        <button title="Solflare wallet">
          <img
            alt=""
            src="/icon/solflare.png"
            width={50}
            height={50}
            className="icon"
          />
        </button>
      </div>
    </div>
  );
};

export default JoinWallet;
