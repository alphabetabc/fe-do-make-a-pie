var colorList=["#f36c6c","#e6cf4e","#20d180","#0093ff"],datas=[{value:1236,name:"湖南省商务系统数字化办公平台1"},{value:1214,name:"湖南省商务系统数字化办公平台2"},{value:1129,name:"湖南省商务系统数字化办公平台3"},{value:925,name:"湖南省商务系统数字化办公平台4"},{value:855,name:"湖南省商务系统数字化办公平台5"},{value:769,name:"湖南省商务系统数字化办公平台6"},{value:675,name:"湖南省商务系统数字化办公平台7"},{value:585,name:"湖南省商务系统数字化办公平台8"}];option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},grid:{left:0,right:"5%",top:"5%",bottom:"2%",containLabel:!0},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:datas.map(a=>a.name),axisLabel:{margin:50,fontSize:14,align:"left",color:"#333",rich:{a1:{color:"#fff",backgroundColor:colorList[0],width:30,height:30,align:"center",borderRadius:2},a2:{color:"#fff",backgroundColor:colorList[1],width:30,height:30,align:"center",borderRadius:2},a3:{color:"#fff",backgroundColor:colorList[2],width:30,height:30,align:"center",borderRadius:2},b:{color:"#fff",backgroundColor:colorList[3],width:30,height:30,align:"center",borderRadius:2}},formatter:function(a){var e=datas.map(r=>r.name).indexOf(a);return e=e+1,e-1<3?["{a"+e+"|"+e+"}"].join(`
`):["{b|"+e+"}"].join(`
`)}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,data:datas.map(a=>a.value),axisLabel:{show:!0,fontSize:14,color:"#333",formatter:"{value}"}}],series:[{z:2,name:"value",type:"bar",barCategoryGap:"40%",barGap:"20%",barWidth:16,data:datas.map((a,e)=>{var r={color:e>3?colorList[3]:colorList[e],barBorderRadius:[10,10,10,10]};return{value:a.value,itemStyle:r}}),label:{normal:{color:"#666",show:!0,position:[0,"-18px"],textStyle:{fontSize:14},formatter:function(a,e){return a.name}}}}]};
