let total=66,data1=[{value:23,name:"test1"},{value:33,name:"test2"}];option={backgroundColor:"#1e3756",tooltip:{trigger:"item"},title:{zlevel:0,text:total,subtext:"总数",top:"40%",left:"40%",textAlign:"center",textStyle:{color:"#FFA042",fontSize:80},subtextStyle:{fontSize:60,color:"#fff"}},legend:{orient:"vertical",right:10,top:20,bottom:20,itemWidth:15,itemHeight:10,itemGap:30,textStyle:{color:"#fff",fontSize:14,marginTop:60}},series:[{color:["#163d59"],type:"gauge",center:["40%","50%"],startAngle:150,endAngle:-209.999,splitNumber:12,radius:"70%",pointer:{show:!1},progress:{show:!1,roundCap:!0,width:1},axisLine:{show:!1,lineStyle:{width:10,color:[[0,"#163d59"],[.5,"#163d59"],[1,"#163d59"]]}},axisTick:{distance:-25,length:10,splitNumber:10,lineStyle:{width:1,color:"#099fe4"}},splitLine:{distance:-35,length:10,lineStyle:{width:2,color:"#099fe4"}},axisLabel:{show:!1},anchor:{show:!1},title:{show:!1},detail:{show:!1},data:[]},{color:["#15e1fc","#12b795","#1d8ac4","#1cadfe"],name:"",type:"pie",radius:["50%","65%"],center:["40%","50%"],startAngle:150,avoidLabelOverlap:!1,itemStyle:{borderColor:"transparent",borderWidth:3},labelLine:{length:30},label:{bleedMargin:5,alignTo:"labelLine",position:"outer",formatter:`{a|{c}({d}%)}
 {per|{b}} `,backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:1,borderRadius:4,rich:{a:{color:"#fff",lineHeight:26,align:"center",fontSize:12},hr:{borderColor:"auto",width:"100%",borderWidth:1,height:0},per:{color:"#1ef0ed",backgroundColor:"rgba(0, 0, 0, 0)",padding:[5,5],borderRadius:4,fontSize:12}}},data:[]}]},option.series[1].data=data1;
