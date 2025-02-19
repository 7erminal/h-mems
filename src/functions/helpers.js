class AppFunctions{
     getNetwork(mobileNumber){
        var mtn = "MTN"
        var vodafone = "TELECEL"
        var airtelTigo = "AIRTELTIGO"

        console.log("Mobile number is "+mobileNumber)
        console.log("Number begins with "+String(mobileNumber).substring(0,3))
    
        if(String(mobileNumber).substring(0,3)=="024" || String(mobileNumber).substring(0,3)=="054" || String(mobileNumber).substring(0,3)=="055" || String(mobileNumber).substring(0,3)=="059" || String(mobileNumber).substring(0,3)=="025" || String(mobileNumber).substring(0,3)=="053"){
            return mtn
        }
    
        if(String(mobileNumber).substring(0,3)=="027" || String(mobileNumber).substring(0,3)=="057" || String(mobileNumber).substring(0,3)=="026" || String(mobileNumber).substring(0,3)=="056"){
            return airtelTigo;
        }
        return vodafone;
    }

    getSortCode(value, sortCodes){
        let returnValue = value
        sortCodes.map((sortCode)=>{
            if(sortCode.description==value){
                returnValue = sortCode.code
            }
        })

        console.log("Value to return is "+returnValue)

        return returnValue
    }

    getDurationOfTransaction(date_){
        var fdate = new Date(date_);
        const currentDate = new Date();

        console.log("fdate is "+String(fdate))
        console.log("Current date is "+String(currentDate))

        const diffTime = Math.abs(currentDate - fdate);
        // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffDays = Math.floor(diffTime / 86400000); // days
        const diffHrs = Math.ceil((diffTime % 86400000) / 3600000); // hours
        const diffMins = Math.round(((diffTime % 86400000) % 3600000) / 60000); // minutes

        console.log("Date difference in time is "+diffTime)
        console.log("Date difference in days is "+diffDays)
        console.log("Date difference in hours is "+diffHrs)
        console.log("Date difference in minutes is "+diffMins)

        if(diffDays < 1){
            if(diffHrs < 1){
                if(diffMins < 1){
                    return "Moments ago"
                }
                else if(diffMins==1){
                    return "1 Minute ago"
                } else if (diffMins > 1 && diffMins < 59){
                    return String(diffMins)+" Minutes ago"
                }
            }
            
            if(diffHrs==1){
                return "1 hour ago"
            } else if (diffHrs > 1 && diffHrs < 24){
                return String(diffHrs)+" Hours ago"
            }
        } else if (diffDays < 3){
            return String(diffDays)+" Days ago"
        } 

        let month = "Jan"

        if(fdate.getMonth==2){
            month = "Feb"
        } else if(fdate.getMonth==3){
            month = "Mar"
        } else if(fdate.getMonth==4){
            month = "Apr"
        } else if(fdate.getMonth==5){
            month = "May"
        } else if(fdate.getMonth==6){
            month = "Jun"
        } else if(fdate.getMonth==7){
            month = "Jul"
        } else if(fdate.getMonth==8){
            month = "Aug"
        } else if(fdate.getMonth==9){
            month = "Sep"
        } else if(fdate.getMonth==10){
            month = "Oct"
        } else if(fdate.getMonth==11){
            month = "Nov"
        } else if(fdate.getMonth==12){
            month = "Dec"
        } 

        let day = fdate.getDate()

        if(day < 10){
            day = '0'+String(day)
        }
        
        return month+'. '+String(day)+' '+String(fdate.getFullYear())
        
    }

    formatNumber=(msisdn)=>{
        console.log("MSISDN ENTERED IS "+msisdn);

        const msisdnLength = msisdn.length;

        const first3Chars = msisdn.substring(0,3);

        const firstChar = msisdn.substring(0,1);

        // Check msisdn
        console.log("Length of msisdn is "+msisdnLength);
        if(msisdnLength==10 && firstChar=='0'){
            return msisdn;
        } else if(msisdnLength==9){
            const finalMsisdn = "0".concat(msisdn)
            return finalMsisdn;
        } else if (first3Chars=='233' && msisdnLength==12) {
            const finalMsisdn = "0".concat(msisdn.slice(3))
            return finalMsisdn;
        } else {
            return "error";
        }
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
}

export default AppFunctions
