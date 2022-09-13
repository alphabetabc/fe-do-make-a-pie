function getVirtulData(t){t=t||"1910";for(var n=+echarts.number.parseDate(t+"-01-12"),l=+echarts.number.parseDate(t+"-04-19"),i=3600*24*1e3,a=[],o=[],e=0,d=[7,5,6,9,27,10,15,19,21,28,18,23,27,41,25,30,33,32,15,36,18,39,34,24,26,29,29,20,29,34,41,36,38,27,32,37,37,28,36,20,27,15,30,25,18,30,15,44,11,27,22,15,34,31,17,9,23,15,8,10,3,13,11,2,3,6,3,5,4,2,3,2,0,0,2,4,4,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1],c=[7,5,2,5,25,8,9,10,16,26,14,16,25,29,23,14,27,28,13,29,15,27,22,22,17,26,29,20,26,24,23,26,15,22,24,23,25,17,23,12,15,11,15,14,10,21,8,24,9,18,7,6,11,16,14,7,15,12,6,9,2,12,8,0,2,3,3,5,4,1,3,2,0,0,0,2,4,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1],r=n;r<=l;r+=i){for(;e<99;e++){a.push([echarts.format.formatTime("yyyy-MM-dd",r),d[e]]),o.push([echarts.format.formatTime("yyyy-MM-dd",r),c[e]]);break}e++}return{case_:a,death:o}}var data_case=getVirtulData(1910).case_,data_death=getVirtulData(1910).death;option={backgroundColor:"#363636",title:[{top:"center",left:"4%",text:`奉
天
省
城
每
日
疫
情`,textStyle:{fontSize:45,color:"rgba(255,255,255,0.9)"}},{top:"center",left:"11%",text:`数
据
来
源

︽
东
三
省
疫
事
报
告
书
︾
`,textStyle:{fontSize:15,fontWeight:"normal",color:"rgba(255,255,255,0.7)"}}],tooltip:{trigger:"item"},legend:{bottom:"12",left:"4%",orient:"vertical",data:["新增病例","新增死亡人数"],textStyle:{fontSize:16,color:"#fff"}},calendar:[{top:"5.5%",width:"68%",height:"43%",right:"5%",range:["1910-01-01","1910-04-30"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{formatter:"{start}  新增病例",margin:45,textStyle:{fontSize:22,color:"rgba(255,255,255,0.5)"}},itemStyle:{color:"#434e52",borderWidth:1,borderColor:"#111"}},{bottom:"3%",right:"5%",width:"68%",height:"43%",range:["1910-01-01","1910-04-30"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{formatter:"{start}  新增死亡人数",margin:45,textStyle:{fontSize:22,color:"rgba(255,255,255,0.5)"}},itemStyle:{color:"#204051",borderWidth:1,borderColor:"#111"}}],series:[{name:"新增病例",type:"effectScatter",coordinateSystem:"calendar",data:data_case,symbolSize:function(t){return t[1]},showEffectOn:"render",rippleEffect:{brushType:"stroke",scale:2},itemStyle:{color:"#f4e925"}},{name:"新增死亡人数",type:"effectScatter",coordinateSystem:"calendar",calendarIndex:1,data:data_death,symbolSize:function(t){return t[1]},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,itemStyle:{color:"#fa1616",shadowBlur:10,shadowColor:"#333"}}]};
