const man=[100,90,80,66,9],woman=[20,30,40,56,1],total=[];man.forEach((e,t)=>{let o=e>man[t]?t:man[t];o=o>0?o*1.5:10,total.push(o)});const indicator=[{name:"养老保险",max:total[0]},{name:"住房公积金",max:total[1]},{name:"生育保险",max:total[2]},{name:"工伤保险",max:total[3]},{name:"医疗保险",max:total[4]},{name:"失业保险",max:total[5]}];option={backgroundColor:"#0B0D13",tooltip:{trigger:"item"},color:["#068AC3","#B2782C"],legend:{icon:"roundRect",top:"90%",show:!0,padding:[3,5],y:"1",center:0,itemWidth:20,itemHeight:10,itemGap:26,z:3,data:["男","女"],textStyle:{fontSize:12,color:"#F1F7FF"}},radar:{center:["50%","50%"],radius:"55%",name:{textStyle:{color:"#fff",fontSize:15,fontWeight:400,fontFamily:"PingFangSC-Regular,PingFang SC",fontStyle:"italic"}},indicator,splitArea:{show:!0,areaStyle:{color:["#00224A","#00224A","#00224A","#00224A","#00224A"]}},axisLine:{lineStyle:{color:"rgba(255,255,255,0.2)"}},splitLine:{lineStyle:{type:"solid",color:["#1781BA","#1781BA"],width:1}}},series:[{type:"radar",symbolSize:5,data:[{value:man,name:"男",areaStyle:{normal:{color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"rgba(46,203,255, 0.14)"},{offset:.15,color:"rgba(46,203,255, 0.14)"},{offset:.75,color:"#057FB3"},{offset:1,color:"#078DC6"}],global:!1}}},itemStyle:{normal:{lineStyle:{width:1},opacity:.3},emphasis:{lineStyle:{width:5},opacity:0}}},{value:woman,name:"女",areaStyle:{normal:{color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"rgba(255, 127,0, 0.14)"},{offset:.15,color:"rgba(255, 127,0, 0.14)"},{offset:.75,color:"rgba(2255, 127,0, 0.4)"},{offset:1,color:"rgba(255, 127,0, 0.5)"}],global:!1}}},itemStyle:{normal:{lineStyle:{width:1},opacity:.3},emphasis:{lineStyle:{width:5},opacity:0}}}]}]};
