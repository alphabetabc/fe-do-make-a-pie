var data=[{value:3,name:"国铁"},{value:22,name:"城轨"},{value:2,name:"检修"},{value:5,name:"海外"}],legendData=["国铁","城轨","检修","海外"],colorArr=["#FF9C98","#3082FF","#FEAF1B","#00C9D9"];function getRich(){let e={};return colorArr.forEach((r,t)=>{e[`normal${t}`]={fontSize:20,align:"left",padding:[10,4],color:"#4B525E"},e[`value${t}`]={color:"#4B525E",align:"left",fontSize:14,padding:[2,4]}}),e}option={color:colorArr,title:[{text:"15.96",left:"center",top:"48%",padding:[10,0],textStyle:{color:"#4B525E",fontSize:32,fontWeight:"normal",align:"center",fontFamily:"DIN"}},{text:"总得分",left:"center",top:"52%",padding:[10,0],textStyle:{color:"#4B525E",fontSize:18,fontWeight:"normal",align:"center",fontFamily:"PingFang"}}],legend:{icon:"circle",itemWidth:10,itemHeight:10,padding:[10,20],backgroundColor:"#F9F9F9",borderRadius:20,itemGap:8,x:"center",top:10,textStyle:{fontSize:12,color:"#4B525E",fontFamily:"PingFang"},data:legendData},series:[{name:"访问来源",type:"pie",radius:["55%","70%"],center:["50%","50%"],selectedMode:"single",selectedOffset:10,clockwise:!0,label:{normal:{formatter:function(e,r,t){aa=e.dataIndex;for(var a=0,l=0,n=0;n<data.length;n++)l+=data[n].value;a=(e.value/l*100).toFixed(0)+"%";const o=e.dataIndex;return[`{normal${o}|${a}}
{value${o}|${e.name}}`].join(`
`)},padding:[0,-80],rich:getRich()}},labelLine:{length:40,length2:80},itemStyle:{normal:{shadowColor:"rgba(0,0,0,0.4)",shadowBlur:15}},data}]};
