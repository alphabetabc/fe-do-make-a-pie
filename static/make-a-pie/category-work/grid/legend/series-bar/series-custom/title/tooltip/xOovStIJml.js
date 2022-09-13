var baseDate=`${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`,option={color:"#0A8BFF",backgroundColor:"#fff",title:{text:"工时统计甘特图",subtext:"不同日期的当日工时统计"},tooltip:{enterable:!0,hideDelay:100,backgroundColor:"rgba(255,255,255,1)",borderRadius:5,padding:[5,0,5,0],textStyle:{color:"#000"},position:function(e,t,i,l,o){$(i).html('<div style="font-size:14px;color:rgba(0,0,0,0.65)" class="tip"><h1 style="font-size:14px;color:rgba(0,0,0,0.85);height:25px;display:flex;align-items: center;padding:0 0 5px 8px;margin:0;border-bottom:1px solid rgba(0,0,0,0.06);font-weight:bold">'+t.name.split(",")[0]+'</h1> <p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">时段:'+t.value[1].split(" ")[1]+"~"+t.value[2].split(" ")[1]+' </p><p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">总工时:'+t.name.split(",")[1]+" </p></div>")}},legend:{data:["工时"],left:"90px",top:"6%",itemWidth:16,itemHeight:16,selectedMode:!1,textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:14}},grid:{left:"0%",right:"3%",top:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"time",position:"bottom",interval:3600*1e3,max:`${baseDate} 24:00`,min:`${baseDate} 00:00`,axisLabel:{formatter:function(e,t){var i=new Date(e),l=i.getHours();return l},textStyle:{color:"rgba(0,0,0,0.65)",fontSize:14}},axisLine:{lineStyle:{color:"rgba(0,0,0,0.1)"}}},yAxis:{axisLine:{lineStyle:{color:"rgba(0,0,0,0.1)"}},data:[["2020-12-05","10小时40分钟"],["2020-12-06","7小时40分钟"],["2020-12-07","11小时40分钟"],["2020-12-08","11小时40分钟"],["2020-12-09","11小时40分钟"],["2020-12-10","11小时40分钟"],["2020-12-11","11小时40分钟"],["2020-12-12","11小时40分钟"],["2020-12-13","11小时40分钟"],["2020-12-14","11小时40分钟"]],axisLabel:{textStyle:{color:"rgba(0, 0, 0, 0.65)",fontSize:14},formatter:function(e){let t=e.split(",")[0],i=e.split(",")[1];return t+`{a|
`+i+"}{b|}"},rich:{a:{color:"rgba(24, 144, 255, 0.7)",fontSize:12},b:{color:"red",fontSize:14}}}},series:[{name:"工时",type:"bar",data:[],barMaxWidth:10},{type:"custom",renderItem:function(e,t){var i=t.value(0),l=t.coord([t.value(1),i]),o=t.coord([t.value(2),i]),a=20;return{type:"rect",shape:echarts.graphic.clipRectByRect({x:l[0],y:l[1]-a/2,width:o[0]-l[0],height:a},{x:e.coordSys.x,y:e.coordSys.y,width:e.coordSys.width,height:e.coordSys.height}),style:t.style()}},encode:{x:[1,2],y:0},itemStyle:{normal:{color:function(e){return console.log(e),e.data!==null&&e.data.value&&e.data.value[3]=="in"?"#0A8BFF":"red"}}},data:[{value:[0,`${baseDate} 1:28`,`${baseDate} 5:28`,"out"]},{value:[0,`${baseDate} 7:28`,`${baseDate} 15:28`,"in"]},{value:[1,`${baseDate} 2:18`,`${baseDate} 4:28`,"in"]},{value:[1,`${baseDate} 6:15`,`${baseDate} 17:58`,"in"]},{value:[1,`${baseDate} 19:18`,`${baseDate} 20:28`,"in"]},{value:[1,`${baseDate} 21:15`,`${baseDate} 23:38`,"out"]},{value:[2,`${baseDate} 19:18`,`${baseDate} 20:28`,"in"]},{value:[2,`${baseDate} 21:15`,`${baseDate} 23:38`,"in"]},{value:[3,`${baseDate} 1:28`,`${baseDate} 5:28`,"in"]},{value:[3,`${baseDate} 7:28`,`${baseDate} 15:28`,"in"]},{value:[4,`${baseDate} 8:28`,`${baseDate} 9:28`,"in"]},{value:[5,`${baseDate} 9:28`,`${baseDate} 10:28`,"in"]},{value:[6,`${baseDate} 10:28`,`${baseDate} 11:28`,"in"]},{value:[7,`${baseDate} 11:28`,`${baseDate} 12:28`,"in"]},{value:[8,`${baseDate} 12:28`,`${baseDate} 13:28`,"in"]},{value:[9,`${baseDate} 13:28`,`${baseDate} 14:28`,"in"]}]}]};
