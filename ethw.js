const fetch = require("node-fetch");
const ethers = require('ethers');
require('dotenv').config()
const ABI = require('./abi/oof.json')
const {Contract} = require("ethers");
const { formatUnits } = require("ethers/lib/utils");
 
// config go to file later
const rpc = process.env.RPC
const pk= process.env.PK
const oofAddress= process.env.OOFAddress
 
const provider = new ethers.providers.JsonRpcProvider(rpc);
const walletWithProvider = new ethers.Wallet(pk, provider);
 
const oofContract =  !!ABI && !!walletWithProvider
    ? new Contract(oofAddress, ABI, walletWithProvider)
    : undefined;
 
async function getData() {
    let length = await oofContract.getFeedLength()
 console.log("Contract address")
 console.log(oofAddress)
    console.log("Found Feeds:" + (formatUnits(length) * 10 ** 18))
    console.log("########################################")

    for (var i = 0; i < length.toNumber(); i++) {
        let feedData = await oofContract.getFeedList([i])
        let feedInfo = await oofContract.getFeed(i)
 
        var d = new Date(0);
        d.setUTCSeconds(feedInfo[1]);
 console.log("Feed ID "+ i)
        console.log("Feed Name: " + feedData[0])
       console.log("Feed Price Value: " + feedInfo[0] / (10 ** feedData[1]))
        console.log("Feed Price Value RAW: " + feedInfo[0])
        console.log("Feed Last Update: " + d)
        console.log("Feed Decimals: " + feedData[1])
        console.log("Feed Update Interval (s): " + feedData[2])
        console.log("Feed Revenue Mode: " + feedData[3])
        console.log("Feed Cost: " + feedData[4])
        console.log("########################################")
    }
 
 
 
}
 
getData()