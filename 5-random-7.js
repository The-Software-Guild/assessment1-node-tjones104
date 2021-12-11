// Part A: 5-random-7
// If you have a function that generates random number between 1 to 5 
// how could u generate a random number from 1 to 7 inclusively by using 
// the aforementioned function?
// ex) given fx:

const random5 = () => {
    return 1 + Math.random() * 4;
  }

function random7()
{
    let i;
    i = 5 * (random5() - 1) + (random5() - 1);
    if (i <= 21)
        return i%7 + 1;
    return random7();
}


for(let i = 0; i < 10; i++)
{
    console.log(random7())
}

