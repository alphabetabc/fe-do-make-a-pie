$("#chart-panel div").append('<canvas id="canvas" width="1000" height="600"></canvas>');var ocanvas=document.getElementById("canvas"),mycanvas=ocanvas.getContext("2d"),arr=[60,90,150,130,170,190,125,175,155,165,155,145];function line(a,t,e,n){mycanvas.beginPath(),mycanvas.moveTo(a,t),mycanvas.lineTo(e,n),mycanvas.stroke()}line(300,80,300,480),line(900,80,900,480);for(var i=0;i<11;i++)line(300,80+i*40,900,80+i*40),write(200-i*20,280,80+i*40);function rect(a,t,e,n){mycanvas.beginPath(),mycanvas.fillStyle="#abcdef",mycanvas.rect(a,t,e,n),mycanvas.fill(),mycanvas.closePath()}function wenrect(){for(var a=0;a<12;a++){var t=30,e=arr[a]*2,n=310+a*40+a*10,l=480-e;rect(n,l,t,e),write(a+1+"月",320+a*40+a*10,500),label(arr[a],320+a*40+a*10,l+10)}}wenrect();function write(a,t,e){mycanvas.beginPath(),mycanvas.fillStyle="black",mycanvas.fillText(a,t,e),mycanvas.closePath()}function label(a,t,e){mycanvas.beginPath(),mycanvas.fillStyle="black",mycanvas.fillText(a,t,e),mycanvas.closePath()}
