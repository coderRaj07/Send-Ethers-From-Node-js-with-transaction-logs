//const Web3 = require('web3');
import express from 'express';
import res from 'express/lib/response';
import Web3 from 'web3';
const app = express();

app.post('/transaction', (req,res)=>{
    res.send("Message");
    console.log("Hello");
})

app.listen(3000,(req,res)=>{
    res.send("<h1>Server started</h1>");
    console.log("Server Started");
})
// const web3=new Web3("https://kovan.infura.io/v3/ac0a0e3049854328b505162678ed5543");
// const from_address="0xE6c5329453F4C650716B2dc04283A73e381c8750"
// const to_address ="0xDCAB519AD714639B6E911C179F3f25344ED93193"
// web3.eth.sendTransaction({from: from_address, to: to_address, value: web3.utils.toWei('0.1','ether')})