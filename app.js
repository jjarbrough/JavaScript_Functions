console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    if (count < 0)
    {
        for(let i = count; i <= 0; i++)
        {
            if (i % 2 !== 0)
            {
                console.log(i);
            }
        }
    }
    else
    {
        for(let i = 0; i <= count; i++)
        {
            if (i % 2 !== 0)
            {
                console.log(i);
            }
        }
    }
}

printOdds(50);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(username, age)
{
    let aboveSixteen = `congrats ${username}, you can drive!`;
    let belowSixteen = `Sorry ${username}, but you need to wait until you're 16`;
    if (username == null && age == null)
    {
        console.log("you didn't input any data")
    }
    else
    {
        if (age < 16)
        {
            console.log(belowSixteen);
        }
        else 
        {
            console.log(aboveSixteen);
        }
    }
}
checkAge('James', 30);
checkAge();
checkAge('Jack', 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkPlane (x,y)
{
    if (x === 0 && y=== 0)
    {
        console.log('You are at the origin');
    }
    else if (x === 0)
    {
        console.log('You are on the x axis');
    }
    else if (y=== 0)
    {
        console.log('You are on the y axis');
    }
    else
    {
        if (x > 0 && y > 0)
        {
            console.log(`(${x},${y}) is in quadrant 1`)
        }
        else if (x < 0 && y > 0)
        {
            console.log(`(${x},${y}) is in quadrant 2`)
        }
        else if (x < 0 && y < 0)
        {
            console.log(`(${x},${y}) is in quadrant 3`)
        }
        else
        {
            console.log(`(${x},${y}) is in quadrant 4`)
        }
    }
}
checkPlane(0,0);
checkPlane(0,1);
checkPlane(1,0);
checkPlane(1,1);
checkPlane(-1,1);
checkPlane(-1,-1);
checkPlane(1,-1);
