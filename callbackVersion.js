function doSummerChores(name) {
  mowLawn(name, () => {
    weedEatLawn(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`All done with ${name}'s summer chores! They didn't fall asleep once!`);
          });
        });
      });
    });
  });
}

function mowLawn(name, callback) {
  console.log(`${name} is mowing the lawn`);
  const asleep = fellAsleep(); 

  setTimeout(() => {
    if (asleep) {
      console.log(`${name} fell asleep while mowing the lawn `); 
    } else {
      console.log(`${name} successfully mowed the lawn `);
      callback(); 
    }
  }, 2000);
}

function weedEat(name, callback) {
  console.log(`${name} is weed eating the lawn`);
  const asleep = fellAsleep();

  setTimeout(() => {
    if (asleep) {
      console.log(`${name} fell asleep while weed eating the lawn `);
    } else {
      console.log(`${name} successfully weed ate the lawn `);
      callback(); 
    }
  }, 2500);
}

function trimHedges(name, callback) {
  console.log(`${name} is trimming the hedges`);
  const asleep = fellAsleep();

  setTimeout(() => {
    if (asleep) {
      console.log(`${name} fell asleep while trimming hedges `);
    } else {
      console.log(`${name} successfully trimmed the hedges `);
      callback(); 
    }
  }, 7000);
}

function collectWood(name, callback) {
  console.log(`${name} is collecting the wood`);
  const asleep = fellAsleep();

  setTimeout(() => {
    if (asleep) {
      console.log(`${name} fell asleep while collecting wood `); 
    } else {
      console.log(`${name} successfully collected wood `);
      callback(); 
    }
  }, 2500);
}

function waterGarden(name, callback) {
  console.log(`${name} is watering the garden`);
  const asleep = fellAsleep();

  setTimeout(() => {
    if (asleep) {
      console.log(`${name} fell asleep while watering garden `);
    } else {
      console.log(`${name} successfully watered garden `);
      callback(); 
    }
  }, 500);
}
// call the function
doSummerChores("Luna");
