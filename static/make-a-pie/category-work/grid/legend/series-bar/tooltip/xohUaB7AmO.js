option={color:["#2e73ff","#4b9ef0"],legend:{data:[{name:"在岗人数",icon:"circle"},{name:"进场人数",icon:"circle"}],top:26,right:10,textStyle:{color:"#555",fontSize:14},itemGap:34,itemWidth:10,itemHeight:10},tooltip:{trigger:"axis",backgroundColor:"#fff",padding:[0,0,0,0],textStyle:{color:"#333"},axisPointer:{type:"line",animation:!0,lineStyle:{color:"transparent"}},extraCssText:"box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)",formatter:(e,l,o)=>{let t="",a="";if(e.length>0){a=e[0].axisValue,t+='<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">'+a+"</div><div>";for(let i=0;i<e.length;i++)t+='<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">'+e[i].seriesName+" : "+e[i].data+"%</p>";return t+="</div>",t}}},xAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{color:"#C0C0C5"}},axisTick:{show:!1},axisLabel:{fontSize:13,color:"#5F5F6B"},data:["1月","2月","3月","4月","5月","6月"]},yAxis:{name:"近6个月",type:"value",nameRotate:1,splitLine:{show:!1},axisLine:{lineStyle:{color:"#C0C0C5"}},axisTick:{show:!0},axisLabel:{fontSize:13,color:"#5F5F6B"}},series:[{name:"在岗人数",type:"bar",barWidth:30,barGap:0,data:["200","300","300","200","200","300"]},{name:"进场人数",type:"bar",barWidth:30,barGap:0,data:["300","400","300","500","300","300"]}]};
