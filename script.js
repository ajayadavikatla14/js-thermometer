


const tempLoad=()=>{
    let tempVal=document.getElementById('temp');
    tempVal.innerHTML='&#xf2cb';
    tempVal.style.color='white';

    setTimeout(()=>{
        tempVal.innerHTML='&#xf2ca';
    },1000)

    setTimeout(()=>{
        tempVal.innerHTML='&#xf2c9';
    },2000)

    setTimeout(()=>{
        tempVal.innerHTML='&#xf2c8';
    },3000)

    setTimeout(()=>{
        tempVal.innerHTML='&#xf2c7';
        tempVal.style.color='rgb(197, 48, 48)';
    },4000)
}


tempLoad();

setInterval(tempLoad,5000);