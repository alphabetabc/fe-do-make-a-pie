var data0=[1,1,1],data1=[40,50,30],data2=[45,35,60],data4=[3,5,3],data6=[12,0,6],data3=[],data5=[],data_zui=[];for(let o=0;o<data1.length;o++)data3.push(data1[o]+data2[o]+data4[o]);for(let o=0;o<data1.length;o++)data_zui.push(data1[o]+data2[o]+data4[o]+data6[o]);for(let o=0;o<data1.length;o++)data5.push(data1[o]+data2[o]);option={backgroundColor:"#1a2439",textStyle:{color:"#C9C9C9"},legend:{type:"scroll",orient:"vertical",selectedMode:!1,right:"40%",top:"15%",textStyle:{color:"#ffffff",fontSize:14}},grid:{containLabel:!0,left:"10%",top:"20%",bottom:"10%",right:"30%"},xAxis:{type:"category",data:["2021-01","2021-02","2021-03"],axisLine:{show:!1,lineStyle:{color:"#B5B5B5"}},axisTick:{show:!1},axisLabel:{margin:20,textStyle:{fontFamily:"Microsoft YaHei",color:"#FFF"},fontSize:14,fontStyle:"bold"}},yAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"#B5B5B5"}},splitLine:{show:!1},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei",color:"#FFF"},fontSize:14}},series:[{type:"bar",name:"春天",data:[60,20,10],barMaxWidth:"auto",barWidth:50,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#00a0fe"},{offset:1,color:"#0c42be"}]}}},{type:"bar",name:"化肥",data:data1,stack:"zs",barMaxWidth:"auto",barWidth:50,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#a393ff"},{offset:1,color:"#6148f1"}]}}},{name:"农药",type:"bar",data:data2,stack:"zs",barMaxWidth:"auto",barWidth:50,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#339bb9"},{offset:1,color:"#187a96"}]}}},{name:"农服",type:"bar",data:data4,stack:"zs",barMaxWidth:"auto",barWidth:50,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#d08f62"},{offset:1,color:"#b86c38"}]}}},{name:"夏天",type:"bar",data:data6,stack:"zs",barMaxWidth:"auto",barWidth:50,itemStyle:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#d1616f"},{offset:1,color:"#c43144"}]}}},{data:data0,type:"pictorialBar",barMaxWidth:"20",symbol:"diamond",color:"#0954cb",symbolOffset:["-65%","50%"],symbolSize:[50,20],zlevel:2},{data:[60,20,10],type:"pictorialBar",barMaxWidth:"20",symbol:"diamond",symbolPosition:"end",color:"#0672df",symbolOffset:["-65%","-45%"],symbolSize:[50,20],zlevel:2},{data:data0,type:"pictorialBar",barMaxWidth:"20",symbol:"diamond",color:"#4f32f2",symbolOffset:["65%","50%"],symbolSize:[50,20],zlevel:2},{data:data1,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",color:"#b1a6f4",symbol:"diamond",symbolOffset:["65%","-50%"],symbolSize:[50,20],zlevel:2},{data:data5,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",color:"#0c6882",symbolOffset:["65%","-50%"],symbolSize:[50,20],zlevel:2},{data:data3,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",color:"#b25d23",symbol:"diamond",symbolOffset:["65%","-50%"],symbolSize:[50,20],zlevel:2},{data:data_zui,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",color:"#c43144",symbolOffset:["65%","-50%"],symbolSize:[50,20],zlevel:2}]};
