
function mowLawn (callback) {
  console.log('Mowing the lawn');
  setTimeout(() => { 2000 });
  callback();
}

function weedEater (callback) {
  console.log('Weed eating the lawn');
  setTimeout(() => { 20000 });
  callback();
}

function trimHedges (callback) {
  console.log('Trimming the hedges');
  setTimeout(() => { 1000 });
  callback();
}

function collectWodd (callback) {
  console.log('Collecting the wood');
  setTimeout(() => { 2500 });
  callback();
}
function waterGradern (callback) {
  console.log('Watering the garden');
  setTimeout(() => { 500 });
  callback();
}

function doSummerChores () {
  mowLawn(() => {
    weedEater(() => {
      trimHedges(() => {
        collectWodd(() => {
          waterGradern(() => {
            console.log('All done with the summer chores!');
          });
        });
      });
    });
  });
}

doSummerChores("Luna");