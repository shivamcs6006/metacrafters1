let arr = [];

function mintNFT(name, price, owner) {
      let nft = {
            name: name,
            price: price,
            owner: owner
      }
      arr.push(nft);
}

function listNFTs() {
      for (i in arr) {
            console.log(arr[i]);
      }
}

function getTotalSupply() {
      return arr.length;
}

mintNFT("NFT1", 1000, "Virat");
mintNFT("NFT2", 1200, "Rohit");

listNFTs();

console.log("Total NFTs: " + getTotalSupply());