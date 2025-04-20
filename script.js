function myclock(){
    const eleOfClock =document.getElementById("clock");
    const now=new Date();//creating string for date
    //now time to format the date
    const timeFormat=now.toLocaleDateString('en-US',{
        hour:'2-digit',//hours in two digit like if 1 then 01
        minute:'2-digit',//same for minutes
        second:'2-digit',//same for seconds
        hour12:true //it helps us to ensure that am or pm is included
    });

    eleOfClock.textContent=timeFormat;

}

//now I will use setinterval to update cllock every second
setInterval(myclock,1000);
myclock();