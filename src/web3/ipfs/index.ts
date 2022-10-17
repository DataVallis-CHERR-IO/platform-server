
// let media = [
//   "shutterstock_145316866.jpg",
//   "shutterstock_727875712.jpg",
//   "shutterstock_1336148951.jpg",
//   "shutterstock_2137081073.jpg"
// ];
// let ipfsArray = [];
// let promises = [];
//
// for (let i = 0; i < media.length; i++) {
//   promises.push(
//     new Promise((res, rej) => {
//       fs.readFile(`${__dirname}/images/${media[i]}`, (err, data) => {
//         if (err) rej();
//         ipfsArray.push({
//           path: `media/${i}`,
//           content: data.toString("base64"),
//         });
//         res();
//       });
//     })
//   );
// }
//
// Promise.all(promises).then(() => {
//   axios
//     .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
//       headers: {
//         "X-API-KEY": process.env["API_KEY"],
//         "Content-Type": "application/json",
//         accept: "application/json",
//       },
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
