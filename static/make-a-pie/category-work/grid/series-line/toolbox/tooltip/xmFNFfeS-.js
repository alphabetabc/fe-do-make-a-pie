var xData=function(){for(var e=[],a=2010;a<2101;a++)e.push(a+"");return e}(),k3data=[389.8983333,391.6525,393.8533333,396.52,398.6475,400.8341667,404.2391667,406.5533333,408.5216667,411.4391667,413.755,414.927,417.193,419.467,421.75,424.04,426.339,428.646,430.961,433.284,435.615,437.955,440.302,442.657,445.02,447.392,449.771,452.158,454.553,456.956,459.367,461.785,464.211,466.646,469.087,471.537,473.994,476.459,478.932,481.412,483.9,486.395,488.898,491.408,493.926,496.451,498.983,501.523,504.07,506.625,509.186,511.755,514.331,516.914,519.504,522.101,524.705,527.316,529.934,532.559,535.191,537.83,540.475,543.127,545.785,548.451,551.122,553.801,556.485,559.177,561.874,564.578,567.288,570.004,572.727,575.456,578.19,580.931,583.678,586.43,589.189,591.953,594.723,597.499,600.28,603.067,605.859,608.657,611.461,614.269,617.083];option={tooltip:{trigger:"axis",position:function(e){return[e[0],"10%"]}},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},xAxis:{type:"category",max:95,boundaryGap:!1,name:"year",data:xData,nameLocation:"center",nameGap:"20",nameTextStyle:{fontSize:28},axisTick:{show:!1,inside:!0,length:10},axisLabel:{interval:9,show:!1},axisLine:{symbol:["none","arrow"],symbolSize:[9,15]}},yAxis:{type:"value",name:"CO2 (parts per million)",nameLocation:"center",nameGap:45,nameTextStyle:{fontSize:28},textStyle:{color:"red"},axisLine:{symbol:["none","arrow"],symbolOffset:10,symbolSize:[9,15]},axisTick:{show:!1},splitLine:{show:!1},fontStyle:{fontSize:50},axisLabel:{show:!1}},series:[{data:k3data,type:"line",smooth:!0,symbol:"none",areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 158, 68)"},{offset:1,color:"rgb(255, 70, 131)"}])}}]};
