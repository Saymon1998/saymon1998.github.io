
      function zegar()
      {
        now=new Date();
        h=now.getHours();
        m=now.getMinutes();
        s=now.getSeconds();
        if(h<10) h="0"+h;
        if(m<10) m="0"+m;
        if(s<10) s="0"+s;
        document.getElementById("zegar").innerHTML=+h+":"+m+":"+s;
        setTimeout("zegar(),1000");
      }