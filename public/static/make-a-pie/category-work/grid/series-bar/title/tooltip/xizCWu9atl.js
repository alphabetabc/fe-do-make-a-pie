var charts={cityList:["首检"],cityData:[70,60]},top10CityList=charts.cityList,top10CityData=charts.cityData,color=["#01c997","#ff4747"];let lineY=[];for(var i=0;i<charts.cityList.length;i++){var x=i;x>color.length-1&&(x=color.length-1);var data={name:charts.cityList[i],color:color[x],value:top10CityData[i],itemStyle:{normal:{show:!0,color:"#fff",barBorderRadius:10},emphasis:{shadowBlur:15,shadowColor:"rgba(0, 0, 0, 0.1)"}}};lineY.push(data)}console.log(lineY),option={backgroundColor:"#fff",title:{show:!1},tooltip:{trigger:"item"},grid:{borderWidth:0,top:"10%",left:"5%",right:"5%",bottom:"3%"},color,yAxis:[{type:"category",inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,inside:!1},data:top10CityList},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,inside:!0,textStyle:{color:"#7e7e80",fontSize:"20",fontFamily:"PingFangSC-Regular"},margin:"60",formatter:"{value} kg"},splitArea:{show:!1},splitLine:{show:!1},data:top10CityData}],xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},series:[{name:"",type:"bar",zlevel:2,barWidth:"1px",data:lineY,label:{normal:{color:"#7e7e80",show:!0,position:[0,"-24px"],textStyle:{fontSize:16},formatter:function(a,e){return a.name}}}},{gridIndex:0,name:"合格",type:"bar",stack:"总量",barWidth:30,label:{normal:{show:!0,position:"insideRight",formatter:"{a} {c}"}},z:10,data:[320]},{gridIndex:0,name:"不合格",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},z:5,data:[120]}],animationEasing:"cubicOut"};