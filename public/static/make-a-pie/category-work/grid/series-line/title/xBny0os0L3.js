var dataPie=[{value:934,name:"机柜"},{value:436,name:"路由器"},{value:620,name:"交换机"},{value:252,name:"服务器"},{value:312,name:"PDU"}];let total=0;dataPie.forEach(function(e,t,a){total+=e.value}),option={backgroundColor:"#02102b",color:["#e062ae","#67e0e3","#37a2da","#ffdb5c","#ff9f7f"],title:{text:"总资产",subtext:"2685",textStyle:{color:"#4effff",fontSize:14,align:"center"},subtextStyle:{fontSize:16,color:["#85c7e3"]},x:"center",y:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},grid:{left:"5px",right:"5px",top:"5px",bottom:"5px"},legend:{orient:"vertical",icon:"vertical",right:"1%",top:"center",data:["机柜","路由器","交换机","服务器","PDU"],itemGap:20,itemWidth:15,itemHeight:8,formatter:function(e){let t,a;for(let r=0;r<dataPie.length;r++)dataPie[r].name===e&&(t=dataPie[r].value,a=(t/total*100).toFixed(1));return[a+"%  {yellow|"+t+"}"," {blue|"+e+"}"].join(`
`)},textStyle:{lineHeight:20,color:"#f0f4f6",align:"right",rich:{yellow:{color:"#00b5f3",fontWeight:"bold"},blue:{color:"#97c8ea",align:"right"}}}},series:[{name:"资产设备统计",type:"pie",radius:["40%","50%"],center:["50%","50%"],data:dataPie,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{normal:{formatter:"{d}%",color:"#c3e5f0"}}}]};