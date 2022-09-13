let data1=[{value:1,bai:"20%"},0,0],data2=[{value:2,bai:"50%"},0,0],data3=[0,{value:2,bai:"50%"},0],data4=[0,{value:1,bai:"8%"},0],data5=[0,0,{value:3,bai:"100%"}];var line=["1","2","3"],colorList=[{0:"#b9ae4d",1:"#f5edab"},{0:"#45cbd4",1:"#6ee2ea"},{0:"#1f77c4",1:"#5aaaf1"}],colorObj=[{0:"#E2D880",1:"#7F7416"},{0:"#45cbd4",1:"#0a777e"},{0:"#459be6",1:"#18609f"}],opacityColor=["rgba(185,174,77,0.20)","rgba(69,203,212,0.20)","rgba(69,203,212,0.0)"];option={tooltip:{trigger:"axis",formatter:function(e){let t=[];for(let a=4;a<e.length;a++)e[a].value!==0&&t.push({name:e[a].name==="总应收"?e[a].name:e[a].seriesName,data:e[a].data,color:e[a].color.colorStops});let o=`<div style='border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>
                <div>`,l="";return t.forEach(a=>{l+=`
                    <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${a.color[0].color}"></span>
                    ${a.name}:
                    ${a.data.value}万元
                    <br />
                    占比： ${a.data.bai}
                </div>`}),o=o+l,o}},grid:{left:"15%",top:"20%",right:"15%",bottom:"10%"},legend:{show:!0,selectedMode:!1},xAxis:[{type:"value",name:"金额(单位：万元)",nameTextStyle:{color:"#fff",padding:[70,0,0,40]},axisLabel:{textStyle:{color:"#fff",fontSize:14},margin:30},axisLine:{show:!0,lineStyle:{type:"solid",color:"#2b4163"}},axisTick:{show:!1},boundaryGap:!0,splitLine:{show:!0,lineStyle:{type:"dashed",color:"#2b4163",width:.7}}}],yAxis:{type:"category",splitLine:{show:!1,lineStyle:{color:"#fff",type:"solid"}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:"solid",color:"#2b4163"}},data:["回款进度","对账进度","总应收"],axisLabel:{show:!0,margin:20,textStyle:{color:"#fff",fontSize:14}}},series:[{type:"pictorialBar",symbolSize:[20,60],symbolOffset:[10,0],symbolPosition:"end",z:12,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,255,255,0.2)"},{offset:1,color:"rgba(255,255,255,0.2)"}],!1)}},data:[3,3,3]},{type:"effectScatter",rippleEffect:{period:1,scale:5,brushType:"fill"},z:20,zlevel:2,symbolPosition:"end",symbolSize:[4,17],symbolOffset:["0",3],itemStyle:{normal:{shadowColor:"rgba(255,255,255,0.2)",shadowBlur:5,shadowOffsetY:3,shadowOffsetX:0,opacity:.2,color:e=>opacityColor[e.dataIndex]}},data:[3,3,3]},{type:"pictorialBar",symbolSize:[20,60],symbolOffset:[-10,0],z:12,itemStyle:{normal:{color:e=>colorList[e.dataIndex][0]}},data:[3,3,3]},{type:"pictorialBar",symbolSize:[20,60],symbolOffset:[10,0],z:12,symbolPosition:"end",itemStyle:{normal:{color:e=>colorList[e.dataIndex][1]}},data:line},{type:"bar",stack:"1",barWidth:60,barGap:"100%",itemStyle:{normal:{color:e=>new echarts.graphic.LinearGradient(1,0,0,1,[{offset:0,color:colorObj[e.dataIndex][0]},{offset:1,color:colorObj[e.dataIndex][1]}])}},data:data5},{name:"已对账金额",type:"bar",stack:"1",barWidth:60,barGap:"100%",itemStyle:{normal:{color:{x:1,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#45cbd4"},{offset:1,color:"#0a777e"}]}}},data:data3},{name:"对账中金额",type:"bar",stack:"1",barWidth:60,barGap:"100%",itemStyle:{normal:{color:{x:1,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(69,203,212,0.20)"},{offset:1,color:"rgba(69,203,212,0.20)"}]}}},data:data4},{name:"已回款金额",type:"bar",stack:"1",barWidth:60,barGap:"100%",itemStyle:{color:{x:1,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#E2D880"},{offset:1,color:"#7F7416"}]}},data:data1},{name:"未回款总额",type:"bar",stack:"1",barWidth:60,barGap:"100%",itemStyle:{normal:{color:{x:1,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(185,174,77,0.20)"},{offset:1,color:"rgba(185,174,77,0.20)"}]}}},data:data2}]};