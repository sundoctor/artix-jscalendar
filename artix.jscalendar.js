////////////////////////////
// Artix JS Calendar, v1.00
// www.7masters.org
// sun-doctor@7masters.org
// You MUST to save this
// comment in this code!
////////////////////////////
var ArtixJSCalendar = {
    
    width: "100",
    color_table: "#B7DBDB",
    color_line1: "#EFECE4",
    color_line2: "#FAF9F8",
    color_active: "#FFFF33",
    
    months: new Array(
        "January", "February", "March", 
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ),
    
    days: new Array(
        "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"
    ),
    
    AsString: function() {
        var ndays = new Array(
            31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
        );
        var mns = this.months;
        var days = this.days;
        var width = this.width;
        var color_table = this.color_table;
        var color_line1 = this.color_line1;
        var color_line2 = this.color_line2;
        var color_active = this.color_active;
        
        var curdate = new Date();
        var year = curdate.getYear();
        if (year<1000) year+=1900;
        var month = curdate.getMonth();
        var today = curdate.getDate();
        if (year % 4 == 0) { ndays[1]=29; }
        curdate.setFullYear(year,month,1);
        var startday=(curdate.getDay()-1)<0?6:(curdate.getDay()-1);
        var d = 1;
        
        var out = "";
        out += "<TABLE background='' border='0'" +
               " cellspacing='0' cellpadding='2' bgcolor='" +
               color_table + "' width='" + width + "'>";
        out += "<TR><TD align=\"center\">";
        out += "<FONT size=1>";
        out += today + ", " + mns[month] + " " + year;
        out += "</FONT>";
        out += "</TD></TR>";
        out += "<TR><TD>";
        out += "<TABLE border='0' width='100%' cellspacing='0' cellpadding='1'>";

        for(var j=0;j<7;j++) {
            if (j==0) {
                out += "<TR align='center'>";
                for(var i=0;i<7;i++) {
                    if (i % 2 ==0) c=color_line1; else c=color_line2;
                    out += "<TD bgcolor='"+c+"'>";
                    out += "<FONT size=1>";
                    out += days[i];
                    out += "</FONT>";
                    out += "</TD>";
                }
                out += "</TR>";
            }
            out += "<TR align='center'>";
            for(var i=0;i<7;i++) {
                if (i % 2 ==0) c=color_line1; else c=color_line2;
                if (d==today && (j*7+i)>=startday) {
                    s=2; c=color_active;
                } else s=1;
                out += "<TD bgcolor='"+c+"'>";
                if (i<5) {
                    out += "<FONT size="+s+">";
                } else {
                    out += "<FONT size="+s+" color='#FF0000'>";
                }
                if ((j==0 && i<startday) || (d>ndays[month]))
                    out += "&nbsp;";
                else {
                    if (d==today) out += "<B>" + (d++) + "</B>";
                    else out += d++;
                }
                out += "</FONT>";
                out += "</TD>";
            }
            out += "</TR>";
            if (d>ndays[month]) break;
        }
        out += "</TABLE>";
        out += "</TD></TR></TABLE>";
        return out;
    } // AsString()
    
}; // class

