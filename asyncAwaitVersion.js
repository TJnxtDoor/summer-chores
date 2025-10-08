function mowYard(name) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve(`${name} finished mowing the yard`);
  }, 2000);
  });
}

// function weedEat(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${name} finished weed eating the yard`);
//     }, 2500);
//   });
// }

function trimHedges(name) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve(`${name} finished trimming the hedges`);
  }, 7000);
  });
}



function collectWood(name) {
  return new Promise((resolve, reject) => {
   setTimeout(() => { 
    resolve(`${name} finished collecting the wood`);
  }, 2000);
  });
}
function waterGarden(name) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve(`${name} finished watering the garden`);
  }, 500);
  });
}


async function doSummerChores() {

  try {
     const mowYardPromise = await mowYard();
  console.log(mowYard);

  const weedEat = await weedEat();
  console.log(weedEat);
  
const trimHedges = await trimHedges();
  console.log(trimHedges);

  const collectWood = await collectWood();
  console.log(collectWood);

  const waterGarden = await waterGarden();
  console.log(waterGarden);
  } catch (error) {
    
    console.log('Chore interrupted:', error);
  }
  console.log('All done with the summer chores!');
}

doSummerChores("Luna");