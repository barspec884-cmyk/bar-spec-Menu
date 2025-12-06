// main.js

// 全てのデータを安全に結合する
const allMenuData = [
  // ウイスキー
  ...(typeof whiskyData !== 'undefined' ? whiskyData : []),
  
  // ブランデー・スピリッツ
  ...(typeof brandyData !== 'undefined' ? brandyData : []),
  ...(typeof spiritData !== 'undefined' ? spiritData : []),
  
  // カクテル・ビール・ワイン
  ...(typeof cocktailData !== 'undefined' ? cocktailData : []),
  ...(typeof beerData     !== 'undefined' ? beerData     : []),
  ...(typeof wineData     !== 'undefined' ? wineData     : []),
  
  // ソフトドリンク・フード
  ...(typeof softdrinkData !== 'undefined' ? softdrinkData : []),
  ...(typeof foodData      !== 'undefined' ? foodData      : [])
];

console.log("読み込み完了アイテム数:", allMenuData.length);
console.log(allMenuData);

// ▼ ここから表示処理などを書く