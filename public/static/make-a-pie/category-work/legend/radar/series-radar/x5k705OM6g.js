var stages=[{name:"萧塘",max:100},{name:"环城东路",max:100},{name:"望园路",max:100},{name:"奉贤新城",max:100},{name:"奉浦大道",max:100},{name:"金海湖",max:100}],scores=[{name:"进站",value:[43,90,80,53,78,89,77,50]},{name:"出站",value:[50,44,56,69,43,77,90,20]}];function contains(e,a){for(var r=e.length;r--;)if(e[r].name===a)return r;return!1}option={backgroundColor:"#000928",color:["#41E1FF","rgb(255,292,203)"],legend:{top:25,right:40,icon:"rect",itemWidth:17,itemHeight:12,itemGap:9,textStyle:{fontSize:16,color:"#fff"},data:["进站","出站"]},radar:{radius:"60%",triggerEvent:!0,name:{rich:{a:{fontSize:16,color:"#fff",lineHeight:"40",padding:[0,15,0,15]},b:{color:"#41E1FF",fontSize:16,padding:[0,0,0,15]},c:{color:"#fff",fontSize:16},d:{color:"rgb(255,292,203)",fontSize:16,padding:[0,15,0,0]},triggerEvent:!0},formatter:e=>{let a=contains(stages,e);return`{a| ${e}}
{b| ${scores[0].value[a]}}{c|  / }{d| ${scores[1].value[a]}}`}},nameGap:"2",indicator:stages,splitArea:{areaStyle:{color:["rgba(39,67,143, 0.1)","rgba(39,67,143, 0.2)","rgba(39,67,143, 0.4)","rgba(39,67,143, 0.6)","rgba(39,67,143, 0.8)","rgba(39,67,143, 1)"].reverse()}},axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},splitLine:{lineStyle:{width:2,color:["rgba(45,65,110, 0.6)"].reverse()}}},series:[{name:"进站",type:"radar",areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#37c5f4",opacity:1},{offset:1,color:"#19469a",opacity:1}],!1)}},symbolSize:0,lineStyle:{normal:{color:"#32a9ea",width:1}},data:[scores[0]]},{name:"出站",type:"radar",areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#ffc40b"},{offset:1,color:"#e3c424"}],!1),opacity:.6}},symbolSize:0,lineStyle:{normal:{color:"rgba(255,292,203, 0.6)",width:1}},data:[scores[1]]}]};