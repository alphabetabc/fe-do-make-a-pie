var data=[{value:3,name:"国铁"},{value:22,name:"城轨"},{value:2,name:"检修"},{value:5,name:"海外"}],legendData=["国铁","城轨","检修","海外"],colorArr=["#FF9C98","#3082FF","#FEAF1B","#00C9D9"];function getRich(){let e={};return colorArr.forEach((r,a)=>{e[`normal${a}`]={fontSize:20,align:"left",padding:[10,4],color:"#4B525E"},e[`value${a}`]={color:"#4B525E",align:"left",fontSize:14,padding:[2,4]}}),e}option={color:colorArr,legend:{icon:"circle",itemWidth:10,itemHeight:10,padding:[10,20],backgroundColor:"#F9F9F9",borderRadius:20,itemGap:8,x:"center",top:10,textStyle:{fontSize:12,color:"#4B525E",fontFamily:"PingFang"},data:legendData},series:[{name:"访问来源",type:"pie",radius:"70%",center:["43%","50%"],selectedMode:"single",selectedOffset:10,clockwise:!0,label:{normal:{formatter:function(e,r,a){aa=e.dataIndex;for(var n=0,l=0,t=0;t<data.length;t++)l+=data[t].value;n=(e.value/l*100).toFixed(0)+"%";const o=e.dataIndex;return[`{normal${o}|${n}}
{value${o}|${e.name}}`].join(`
`)},padding:[0,-80],rich:getRich()}},labelLine:{length:40,length2:80},itemStyle:{normal:{shadowColor:"rgba(0,0,0,0.4)",shadowBlur:15}},data}]};