import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x75811bb9A179586BA7077c210f4ae6Cb7C8555C7"
);

export default instance;
