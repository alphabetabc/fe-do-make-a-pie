var data1={pkjtrjsr:[{name:"一等库",value:21},{name:"二等库",value:37},{name:"三等库",value:21},{name:"四等库",value:22},{name:"五等库",value:22}],echartsdata:[{value:20},{value:25},{value:15},{value:20},{value:10}]},center=["50%","50%"],scaledata=data1.pkjtrjsr,placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"transparent",borderColor:"transparent",borderWidth:0}},v=1,colors=["#22ff5b","#00d6fe","#fff45c","#fc8a4b","#ff5469"],data=[];$.each(scaledata,function(a,e){data.push({value:e.value,name:e.name,label:{normal:{formatter:"{b}{c}",color:"#c4feff",fontSize:18}},itemStyle:{normal:{color:colors[a]}}},{value:v,name:"",itemStyle:placeHolderStyle})});var dataArray=[],colorArray=[{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#ff5469"},{offset:1,color:"#ff8582"}])},{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#fc8a4b"},{offset:1,color:"#fc8a4b"}])},{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#fff45c"},{offset:1,color:"#fff45c"}])},{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#00d6fe"},{offset:1,color:"#00f0fe"}])},{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#22ff5b"},{offset:1,color:"#60ffb5"}])}];$.each(data1.echartsdata,function(a,e){dataArray.push({value:e.value,itemStyle:{normal:{color:colorArray[a].color}}})});var option={grid:{},tooltip:{show:!0},legend:{show:!1},toolbox:{show:!1},angleAxis:{interval:1,type:"category",data:[],z:10,axisLine:{show:!0,lineStyle:{color:"#595e71",width:1,type:"solid"}},axisLabel:{show:!1}},radiusAxis:{min:0,max:100,interval:20,axisLine:{show:!0,lineStyle:{color:"#595e71",width:1,type:"solid"}},axisLabel:{show:!1},splitLine:{lineStyle:{color:"#595e71",width:1,type:"solid"}}},polar:{center,radius:"40%"},series:[{type:"pie",clockWise:!0,center,radius:["68%","70%"],hoverAnimation:!1,startAngle:162,itemStyle:{shadowBlur:12,shadowColor:"rgba(224,255,163,0.4)"},labelLine:{show:!1,length:3,length2:3},data},{type:"pie",radius:["9%","35%"],center,roseType:"area",clockwise:!1,selectedMode:"single",label:{normal:{formatter:"{d}%",color:"#c4feff",fontSize:16}},labelLine:{show:!1,length:3,length2:3},emphasis:{itemStyle:{shadowColor:"#65d6fb",shadowBlur:50}},data:dataArray}]};