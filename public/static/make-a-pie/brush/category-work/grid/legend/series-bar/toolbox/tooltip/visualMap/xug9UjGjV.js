var xAxisData=[],data1=[],data2=[],data3=[],data4=[];xAxisData=["2.6 1:00 / 0:00","2.6 2:00 / 1:00","2.6 3:00 / 2:00","2.6 4:00 / 3:00","2.6 5:00 / 4:00","2.6 6:00 / 5:00","2.6 7:00 / 6:00","2.6 8:00 / 7:00","2.6 9:00 / 8:00","2.6 10:00 / 9:00","2.6 11:00 / 10:00","2.6 12:00 / 11:00","2.6 13:00 / 12:00","2.6 14:00 / 13:00","2.6 15:00 / 14:00","2.6 16:00 / 15:00","2.6 17:00 / 16:00","2.6 18:00 / 17:00","2.6 19:00 / 18:00","2.6 20:00 / 19:00","2.6 21:00 / 20:00","2.6 22:00 / 21:00","2.6 23:00 / 22:00","2.7 1:00 / 0:00","2.7 2:00 / 1:00","2.7 3:00 / 2:00","2.7 4:00 / 3:00","2.7 5:00 / 4:00","2.7 6:00 / 5:00","2.7 7:00 / 6:00","2.7 8:00 / 7:00","2.7 9:00 / 8:00","2.7 10:00 / 9:00","2.7 11:00 / 10:00","2.7 12:00 / 11:00","2.7 13:00 / 12:00","2.7 14:00 / 13:00","2.7 15:00 / 14:00","2.7 16:00 / 15:00","2.7 17:00 / 16:00","2.7 18:00 / 17:00","2.7 19:00 / 18:00","2.7 20:00 / 19:00","2.7 21:00 / 20:00","2.7 22:00 / 21:00","2.7 23:00 / 22:00","2.8 1:00 / 0:00","2.8 2:00 / 1:00","2.8 3:00 / 2:00","2.8 4:00 / 3:00","2.8 5:00 / 4:00","2.8 6:00 / 5:00","2.8 7:00 / 6:00","2.8 8:00 / 7:00","2.8 9:00 / 8:00","2.8 10:00 / 9:00","2.8 11:00 / 10:00","2.8 12:00 / 11:00","2.8 13:00 / 12:00","2.8 14:00 / 13:00","2.8 15:00 / 14:00","2.8 16:00 / 15:00","2.8 17:00 / 16:00","2.8 18:00 / 17:00","2.8 19:00 / 18:00","2.8 20:00 / 19:00","2.8 21:00 / 20:00","2.8 22:00 / 21:00","2.8 23:00 / 22:00","2.9 1:00 / 0:00","2.9 2:00 / 1:00","2.9 3:00 / 2:00","2.9 4:00 / 3:00","2.9 5:00 / 4:00","2.9 6:00 / 5:00","2.9 7:00 / 6:00","2.9 8:00 / 7:00","2.9 9:00 / 8:00","2.9 10:00 / 9:00","2.9 11:00 / 10:00","2.9 12:00 / 11:00","2.9 13:00 / 12:00","2.9 14:00 / 13:00","2.9 15:00 / 14:00","2.9 16:00 / 15:00","2.9 17:00 / 16:00","2.9 18:00 / 17:00","2.9 19:00 / 18:00","2.9 20:00 / 19:00","2.9 21:00 / 20:00","2.9 22:00 / 21:00","2.9 23:00 / 22:00","2.10 1:00 / 0:00","2.10 2:00 / 1:00","2.10 3:00 / 2:00","2.10 4:00 / 3:00","2.10 5:00 / 4:00","2.10 6:00 / 5:00","2.10 7:00 / 6:00","2.10 8:00 / 7:00","2.10 9:00 / 8:00","2.10 10:00 / 9:00","2.10 11:00 / 10:00","2.10 12:00 / 11:00","2.10 13:00 / 12:00","2.10 14:00 / 13:00","2.10 15:00 / 14:00","2.10 16:00 / 15:00","2.10 17:00 / 16:00","2.10 18:00 / 17:00","2.10 19:00 / 18:00","2.10 20:00 / 19:00","2.10 21:00 / 20:00","2.10 22:00 / 21:00","2.10 23:00 / 22:00","2.11 1:00 / 0:00","2.11 2:00 / 1:00","2.11 3:00 / 2:00","2.11 4:00 / 3:00","2.11 5:00 / 4:00","2.11 6:00 / 5:00","2.11 7:00 / 6:00","2.11 8:00 / 7:00","2.11 9:00 / 8:00","2.11 10:00 / 9:00","2.11 11:00 / 10:00","2.11 12:00 / 11:00","2.11 13:00 / 12:00","2.11 14:00 / 13:00","2.11 15:00 / 14:00","2.11 16:00 / 15:00","2.11 17:00 / 16:00","2.11 18:00 / 17:00","2.11 19:00 / 18:00","2.11 20:00 / 19:00","2.11 21:00 / 20:00","2.11 22:00 / 21:00","2.11 23:00 / 22:00"],data1=[.38,.42,.34,.6486486486486487,.4473684210526316,.24,.8666666666666667,.38,.42,.5,.4,.52,.52,.44,.44,.52,.34,.28,.36,.6,.54,.22,.58,.46,.66,.68,.66,.82,.82,.76,.82,.76,.78,.86,.8,.62,.82,.88,.86,.86,.92,.94,.8,.78,.88,.82,.92,.92,.96,.9,.94,.88,.86,.94,.94,.92,.88,.8,.78,.88,.8,.82,.7,.86,.82,.82,.7,.54,.82,.74,.86,.86,.82,.8,.78,.76,.68,.82,.76,.84,.78,.72,.82,.76,.7,.68,.78,.78,.74,.66,.68,.66,.84,.74,.74,.76,.72,.76,.72,.72,.86,.74,.64,.68,.76,.78,.72,.76,.6,.64,.7,.72,.76,.78,.76,.8,.76,.68,.74,.62,.66,.72,.8,.66,.68,.84,.82,.62,.68,.7,.8,.78,.78,.66,.72,.76,.5,.72];var emphasisStyle={itemStyle:{barBorderWidth:1,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0,0,0,0.5)"}};option={backgroundColor:"#eee",legend:{data:["bar","bar2","bar3","bar4"],left:10},brush:{toolbox:["rect","polygon","lineX","lineY","keep","clear"],xAxisIndex:0},toolbox:{feature:{magicType:{type:["stack","tiled"]},dataView:{}}},tooltip:{},xAxis:{data:xAxisData,name:"X Axis",axisLine:{onZero:!0},splitLine:{show:!0},splitArea:{show:!1}},yAxis:{inverse:!1,splitArea:{show:!0}},grid:{left:100},visualMap:{type:"continuous",dimension:1,text:["High","Low"],inverse:!1,itemHeight:200,calculable:!0,min:0,max:1,top:60,left:10,inRange:{colorLightness:[.4,.8]},outOfRange:{color:"#bbb"},controller:{inRange:{color:"#2f4554"}}},series:[{name:"bar",type:"bar",stack:"one",emphasis:emphasisStyle,data:data1},{name:"bar2",type:"bar",stack:"one",emphasis:emphasisStyle,data:data2},{name:"bar3",type:"bar",stack:"two",emphasis:emphasisStyle,data:data3},{name:"bar4",type:"bar",stack:"two",emphasis:emphasisStyle,data:data4}]},myChart.on("brushSelected",renderBrushed);function renderBrushed(r){for(var a=[],t=r.batch[0],e=0;e<t.selected.length;e++){var o=t.selected[e].dataIndex;a.push("[Series "+e+"] "+o.join(", "))}myChart.setOption({title:{backgroundColor:"#333",text:`SELECTED DATA INDICES: 
`+a.join(`
`),bottom:0,right:0,width:100,textStyle:{fontSize:12,color:"#fff"}}})}