window.onload = function()
{
    countdown  = document.getElementsByClassName("privacy-out")[0];

    if(countdown)
    {
        countdown.style.display="none";
        
        var setStartTime = function()
        {
            //Get Start Date as milliseconds
            startDate   = new Date('2019/01/22 12:00:00').getTime(); 

            //Get todays date time based of UTC
            JSTfromUTC  = ((new Date().getTime()) + (new Date().getTimezoneOffset()*60*1000))+32400000;
            currentDate = new Date(JSTfromUTC).getTime();

            //Find the distance between Start Date and Current Date as global variable
            distance    = startDate - currentDate;
            return distance;
        };

        var setEndTime = function()
        {
            //Get End Date as milliseconds
            endDate     = new Date('2019/05/27 11:59:59').getTime();

            //Get todays date and time based of UTC
            JSTfromUTC  = ((new Date().getTime()) + (new Date().getTimezoneOffset()*60*1000))+32400000;
            currentDate = new Date(JSTfromUTC).getTime();

            //Find the distance between now an the count down date as global variable
            distance    = endDate - currentDate;
            return distance;
        };

        //Remove legal text element if current date is over 2018/06/23 00:00:00
        if(setStartTime() > 0)
        {
            countdown.parentNode.removeChild(countdown);
        }

        //That element removes if current date is over end date.
        else if(setEndTime() < 0)
        {
            countdown.parentNode.removeChild(countdown);
        }

        else
        {
            //Displays timer after 5seconds
            window.setTimeout(function()
            {
                var timer = setInterval(function()
                {
                    //Update background color and font color
                    countdown.style.display        = "block"; 
                    countdown.style.width          = "12em"; //125px
                    countdown.style.height         = "1.5em";
                    countdown.style.fontSize       = "9px";
                    countdown.style.background     = "#FEEC6B";
                    countdown.style.color          = "black";
                    countdown.style.fontFamily     = "Verdana";
                    countdown.style.fontWeight     = "bold";
                    countdown.style.opacity        = "1.0";
                    countdown.style.textAlign      = "center";
                    countdown.style.verticalAlign  = "middle";
                    countdown.style.position       = "relative";

                    var days    = Math.floor(setEndTime() / (1000 * 60 * 60 * 24));
                    var hours   = Math.floor((setEndTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((setEndTime() % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((setEndTime() % (1000 * 60)) / 1000);
                    
                    elementText = decodeURIComponent("%E7%B5%82%E4%BA%86%E3%81%BE%E3%81%A7") + days + decodeURIComponent("%E6%97%A5%E3%81%A8");
                
                    if(hours < 10){
                        elementText += "0" + hours + ":"
                    }
                    
                    else{
                        elementText += hours + ":"
                    }
                    
                    if(minutes < 10){
                        elementText += "0" + minutes + ":"
                    }
                    
                    else{
                        elementText += minutes + ":"
                    }

                    if(seconds < 10){
                        elementText += "0" + seconds + " "
                    }

                    else{
                        elementText += seconds + " "
                    }

                    countdown.innerHTML = elementText;
                }, 1000);

                var stopTimer = setTimeout(function()
                {
                    clearInterval(timer);
                    countdown.parentNode.removeChild(countdown);
                }, 10000);
            }, 5000);
        }
    }
}();