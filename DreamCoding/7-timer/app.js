let num = 1;
const interval = setInterval(()=>{
    console.log(num++);

    if(num>5)
        clearInterval(interval);
}, 1000);

