let dataPieAccesInfo=[{value:934,name:"机柜"},{value:436,name:"路由器"},{value:620,name:"交换机"},{value:252,name:"服务器"},{value:312,name:"PDU"}],total=0;dataPieAccesInfo.forEach(function(e,t,o){total+=e.value}),option={color:["#e062ae","#67e0e3","#37a2da","#ffdb5c","#ff9f7f"],title:{text:"总资产",subtext:"2685",textStyle:{color:"#4effff",fontSize:12,align:"center"},subtextStyle:{fontSize:12,color:["#85c7e3"]},x:"center",y:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},grid:{left:"5px",right:"5px",top:"5px",bottom:"5px"},legend:{icon:"vertical",bottom:"1%",data:["机柜","路由器","交换机","服务器","PDU"],itemGap:20,itemWidth:15,itemHeight:8,formatter:function(e){let t,o;for(let l=0;l<dataPieAccesInfo.length;l++)dataPieAccesInfo[l].name===e&&(t=dataPieAccesInfo[l].value,o=(t/total*100).toFixed(1));return[o+"%  {yellow|"+t+"}"," {blue|"+e+"}"].join(`
`)},textStyle:{lineHeight:20,color:"#f0f4f6",align:"right",rich:{yellow:{color:"#00b5f3",fontWeight:"bold"},blue:{color:"#97c8ea",align:"right"}}}},series:[{name:"资产设备统计",type:"pie",radius:["60%","70%"],center:["50%","50%"],data:dataPieAccesInfo,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{show:!0,length:5,length2:5,lineStyle:{color:"#40b3f1",width:2}},label:{normal:{formatter:"{d}%",color:"#c3e5f0"}}}]};