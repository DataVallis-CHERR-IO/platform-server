# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat clean
npx hardhat compile

//publish SC
npx hardhat run src/web3/modules/deploy.ts --network mumbai

//verify SC
npx hardhat verify {sc_address} --network mumbai

Če ma konstruktor parametre dodaš na koncu za verify
npx hardhat verify {sc_address} --network mumbai "param1" "param2" "param3"
```
