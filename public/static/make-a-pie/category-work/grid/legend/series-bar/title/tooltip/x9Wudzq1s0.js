var spNum=5,_max=1600,legendData=["雨天","阴天","晴天"],y_data=["下海","入地","上天"],_datamax=[100,100,100,100,100,100],_data1=[300,300,1e3],_data2=[200,200,300],_data3=[1e3,1e3,300],fomatter_fn=function(e){return console.log(e),`${e.value}`},_label={normal:{show:!0,position:"inside",formatter:fomatter_fn,textStyle:{color:"#333",fontSize:16}}};option={title:[{subtext:"1600(m)",right:"10%",top:"20%",textAlign:"left",subtextStyle:{color:"#333",fontSize:14}},{subtext:"1500(m)",right:"10%",top:"50%",textAlign:"left",subtextStyle:{color:"#333",fontSize:14}},{subtext:"1500(m)",right:"10%",top:"80%",textAlign:"left",subtextStyle:{color:"#333",fontSize:14}}],legend:{left:"23%",data:legendData,textStyle:{color:"#333"}},grid:{containLabel:!0,left:0,right:150,bottom:30},tooltip:{show:!0,backgroundColor:"#fff",borderColor:"#ddd",borderWidth:1,textStyle:{color:"#3c3c3c",fontSize:16},formatter:function(e){console.log(e);var t=e.seriesName.split("/"),a=e.seriesIndex;return"名称："+e.seriesName+"<br>长度："+e.value},extraCssText:"box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)"},xAxis:{splitNumber:spNum,interval:_max/spNum,max:_max,axisLabel:{show:!1,formatter:function(e){var t=(e/_max*100).toFixed(0);return t=="0"?t:t+"%"}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:[{data:y_data,axisLabel:{fontSize:16,color:"#333"},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},{show:!1,data:y_data,axisLine:{show:!1}}],series:[{type:"bar",name:"雨天",stack:"2",label:_label,legendHoverLink:!1,barWidth:25,itemStyle:{normal:{color:"rgb(100, 224, 234)"},emphasis:{color:"rgb(100, 244, 244)"}},data:_data1},{type:"bar",name:"阴天",stack:"2",legendHoverLink:!1,barWidth:25,label:_label,itemStyle:{normal:{color:"rgb(144, 144, 144)"},emphasis:{color:"rgb(144, 164, 154)"}},data:_data2},{type:"bar",stack:"2",name:"晴天",legendHoverLink:!1,barWidth:25,label:_label,itemStyle:{normal:{color:"rgb(254,221,89)"},emphasis:{color:"rgb(254,241,99)"}},data:_data3}]};