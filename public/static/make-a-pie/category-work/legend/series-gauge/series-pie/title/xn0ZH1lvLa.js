function getValue(e,t,l="params",o="key"){return(t.find(n=>n[o]===e)||{})[l]}let dataArr=[{value:3e3,name:"电视",percent:"22%",color:"#4FACFE"},{value:1632,name:"冰箱",percent:"44%",color:"#0380FF"},{value:2435,name:"洗衣机",percent:"34%",color:"#FEDC45"}];option={title:[{text:"电器销售占比饼图",top:"5%",left:"50%",textAlign:"center",textStyle:{color:"#fff",fontWeight:500,fontSize:22}},{text:"总销售",top:"40%",textAlign:"center",left:"39.5%",textStyle:{color:"#F0F2F5",fontSize:18}},{text:"543212",top:"46%",textAlign:"center",left:"39.5%",textStyle:{fontWeight:"400",color:"#F0F2F5",fontSize:22}},{text:"35%",top:"52%",textAlign:"center",left:"39.5%",textStyle:{color:"rgba(240, 242, 245, 0.6)",fontSize:18}}],legend:{icon:"circle",right:90,top:"center",itemGap:20,itemWidth:8,itemHeight:8,orient:"vertical",textStyle:{fontSize:14,color:"#fff"},formatter:e=>"{name|"+e+"} {value|"+getValue(e,dataArr,"value","name")+"} {percent|"+getValue(e,dataArr,"percent","name")+"}",textStyle:{rich:{name:{fontSize:16,fontWeight:400,verticalAlign:"top",align:"center",lineHeight:14,color:"#fff"},value:{fontSize:16,fontWeight:400,align:"center",lineHeight:14,color:"#fff",width:50},percent:{fontSize:18,lineHeight:14,fontWeight:"bold",color:"#0FD7D5"}}}},backgroundColor:"#1E1F5F",color:["#4FACFE","#0380FF","#FEDC45"],grid:{left:10,right:10,top:40,bottom:20,containLabel:!0},series:[{name:"",type:"pie",radius:["45%","65%"],center:["40%","50%"],roseType:"area",zlevel:10,itemStyle:{borderRadius:0,normal:{borderWidth:5,borderColor:"#1A2361"}},label:{normal:{show:!1}},data:dataArr},{name:"",type:"gauge",splitNumber:80,radius:"40%",center:["40%","50%"],zlevel:10,startAngle:90,endAngle:-269.9999,axisLine:{show:!1,lineStyle:{width:0,shadowBlur:0,color:[[1,"#253D7B"]]}},axisTick:{show:!1,lineStyle:{color:"auto",width:2},length:20,splitNumber:5},splitLine:{show:!0,length:5,lineStyle:{color:"auto"}},axisLabel:{show:!1},pointer:{show:0},detail:{show:0}},{type:"pie",radius:["30%","45%"],center:["40%","50%"],hoverAnimation:!1,zlevel:1,labelLine:{normal:{show:!1,length:30,length2:55},emphasis:{show:!1}},name:"",data:[{name:"",value:0,itemStyle:{normal:{color:"#15296B"}}}]}]};
