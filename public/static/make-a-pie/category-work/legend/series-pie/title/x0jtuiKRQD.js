let data=[{name:"机车车列",value:25091.07,rate:58.92},{name:"轨道",value:8020.48,rate:18.83},{name:"线路",value:8171.75,rate:16.13},{name:"拉拉",value:8171.75,rate:16.13}],color=["#C7A975","#BF3232","#5B6376","#CBCDD2"],title=["产品","占比","营收（亿元）"],total=41500;option={color,title:[{text:"{header1| 产品}{header2| 占比}{header3| 营收（亿元）}",left:"49%",top:"30%",textStyle:{color:"#929292",rich:{header1:{align:"left",width:130,fontSize:12},header2:{align:"left",width:100,fontSize:12},header3:{align:"right",fontSize:12}}}},{text:"{name|"+total+`}
{val|总量}`,top:"center",left:"22%",textStyle:{rich:{name:{fontSize:16,color:"#383838",padding:[10,0]},val:{fontSize:10,color:"#929292",align:"center"}}}}],legend:{type:"plain",icon:"circle",orient:"vertical",left:"50%",top:"35%",align:"left",itemGap:15,itemWidth:10,itemHeight:10,symbolKeepAspect:!1,textStyle:{color:"#000",rich:{name:{align:"left",width:110,fontSize:12},rate:{align:"left",width:80,fontSize:12},value:{align:"right",width:80,fontSize:12}}},data:data.map(e=>e.name),formatter:function(e){if(data&&data.length){for(var t=0;t<=data.length;t++)if(console.log(e),e===data[t].name)return"{name|"+e+"}{rate|"+data[t].rate+"%}{value|"+data[t].value+"} "}}},series:[{name:"数量",type:"pie",radius:["40%","55%"],center:["25%","50%"],data,hoverAnimation:!1,label:{show:!1},labelLine:{show:!1}}]};