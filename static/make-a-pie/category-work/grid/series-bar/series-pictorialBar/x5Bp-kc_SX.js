option={backgroundColor:"rgba(2, 2, 2, 0.8)",xAxis:{type:"value",axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},yAxis:[{type:"category",data:[60,80,30],splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter:e=>`{p|${(Number(e)/100).toFixed(2)*100}%}
{t|已使用}`,rich:{t:{color:"#28E9F6",fontSize:14},p:{color:"#fff",fontSize:14}}},axisTick:{show:!1}},{type:"category",data:[60,80,30],splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter:e=>`{p|${((100-Number(e))/100).toFixed(2)*100}%}
{t|未占用}`,rich:{t:{color:"#28E9F6",fontSize:14},p:{color:"#fff",fontSize:14}}},axisTick:{show:!1}}],series:[{name:"背景",type:"bar",data:[100,100,100],itemStyle:{borderWidth:1,borderColor:"#006075",color:"#00607522"},barWidth:50,z:1},{type:"pictorialBar",itemStyle:{normal:{color:"#05E5FF"}},barWidth:48,symbol:"rect",symbolSize:[13,20],symbolRepeat:"fixed",symbolMargin:"20%",symbolClip:!0,data:[60,80,30],z:2}]};
