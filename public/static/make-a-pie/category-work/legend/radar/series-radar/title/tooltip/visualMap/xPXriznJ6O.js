for(var part1=12.857142857142858,part2=60/5,colorList=[],tmp,i=1;i<=28;i++)tmp=i%5*part2+30,colorList.push("hsl("+parseInt(i*part1)+","+tmp+"%,"+tmp+"%)");option={title:{text:"浏览器占比变化",subtext:"纯属虚构",top:10,left:10},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,250,0.2)"},color:colorList,legend:{bottom:10,data:function(){for(var r=[],t=1;t<=28;t++)r.push(t+2e3+"");return r}()},visualMap:{top:"middle",right:10,color:["red","yellow"],calculable:!0},radar:{indicator:[{text:"IE8-",max:400},{text:"IE9+",max:400},{text:"Safari",max:400},{text:"Firefox",max:400},{text:"Chrome",max:400}]},series:function(){for(var r=[],t=1;t<=28;t++)r.push({name:"浏览器（数据纯属虚构）",type:"radar",symbol:"none",lineStyle:{width:1},emphasis:{areaStyle:{color:"rgba(0,250,0,0.3)"}},data:[{value:[(40-t)*10,(38-t)*4+60,t*5+10,t*9,t*t/2],name:t+2e3+""}]});return r}()};
