for(var jsondata=[{date:"2020",youya:18.77,jixian:5.52},{date:"2021",youya:18.06,jixian:5.84},{date:"2022",youya:17.35,jixian:6.11},{date:"2023",youya:16.35,jixian:6.34},{date:"2024",youya:15.93,jixian:6.54},{date:"2025",youya:15.22,jixian:6.71},{date:"2026",youya:14.51,jixian:6.87},{date:"2027",youya:13.8,jixian:7},{date:"2028",youya:13.09,jixian:7.11},{date:"2029",youya:12.38,jixian:7.21},{date:"2030",youya:11.67,jixian:7.29}],xAxis=[],yAxis=[],dataSeries=[],series=[],seriesItem,i=0;i<jsondata.length;i++){var data_yz=jsondata[i].youya,data_jb=jsondata[i].jixian,yingli=(892.7+.01123*data_yz-262*data_jb+2888e-7*Math.pow(data_yz,2)-.001799*data_yz*data_jb+27.1*Math.pow(data_jb,2)).toFixed(3),anquan=(-9.237+.4223*data_yz+2.378*data_jb-.002391*Math.pow(data_yz,2)-.04946*data_yz*data_jb-.141*Math.pow(data_jb,2)).toFixed(3),date=jsondata[i].date;if(xAxis.push(date),dataSeries.push([date,anquan]),anquan>1.25){var color="green",name1="安全区";seriesItem={name:name1,type:"line",smooth:!0,symbolSize:7,data:dataSeries,areaStyle:{normal:{color,opacity:1}},lineStyle:{normal:{color:"green"}},itemStyle:{normal:{color,borderWidth:2,borderType:"solid"}}},series.push(seriesItem),dataSeries=[[date,anquan]]}else if(anquan>1&&anquan<=1.25){var color="orange",name1="警戒区";seriesItem={name:name1,type:"line",smooth:!0,symbolSize:7,data:dataSeries,areaStyle:{normal:{color,opacity:1}},lineStyle:{normal:{color:"orange"}},itemStyle:{normal:{color,borderWidth:2,borderType:"solid"}}},series.push(seriesItem),dataSeries=[[date,anquan]]}else{var color="red",name1="危险区";seriesItem={name:name1,type:"line",smooth:!0,symbolSize:7,data:dataSeries,areaStyle:{normal:{color,opacity:1}},lineStyle:{normal:{color:"red"}},itemStyle:{normal:{color,borderWidth:2,borderType:"solid"}}},series.push(seriesItem),dataSeries=[[date,anquan]]}}option={grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},title:{text:"安全系数",x:"center",textStyle:{fontSize:"30"}},legend:{x:"center",y:"bottom",data:[{name:"安全区",icon:"circle",textStyle:{color:"#333",fontSize:"14"}},{name:"警戒区",icon:"circle",textStyle:{color:"#333",fontSize:"14"}},{name:"危险区",icon:"circle",textStyle:{color:"#333",fontSize:"14"}}]},toolbox:{show:!0,left:"right",feature:{magicType:{type:["line","bar"]},saveAsImage:{}}},dataZoom:[{type:"inside",xAxisIndex:[0]}],tooltip:{trigger:"axis"},xAxis:{axisTick:{show:!0},type:"category",boundaryGap:!1,data:xAxis,axisLine:{lineStyle:{color:"#ddd"}},axisLabel:{textStyle:{color:"#333"}}},yAxis:{axisTick:{show:!1},type:"value",axisLine:{show:!1},splitLine:{lineStyle:{color:"#ddd"}}},series};
