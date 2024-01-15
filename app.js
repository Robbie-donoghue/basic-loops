// for( let i = 0; i< 5; i ++)
// {
//     console.log( "This is the " +i , "iteration")
// }

let videoGames = [ 'baldurs gate 3' , 'fox hole' , 'elden ring' , 'league of legends' , 'snake']

for(let i=0; i <videoGames.length; i++)
{
    console.log(videoGames[i])
}

let counter = 1;
while(counter <= 5)
{
    console.log( "This is the " , counter ,"th iteration");
    counter++
}

let keepLooping = true;
let i = 0;
while (keepLooping === true)
{
    console.log ("Iteration" , i)
    // set keepLooping to false with 10% chance math.random() returns a value between 0 and 1 
    keepLooping = Math.random() < 0.1
    i++
}
