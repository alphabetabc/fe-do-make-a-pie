option={title:{text:"CPU 监控"},tooltip:{trigger:"axis",itemStyle:{normal:{label:{show:!0}}}},toolbox:{show:!0,feature:{magicType:{type:["line","bar"]}}},xAxis:{type:"category",data:["13:27","13:28","13:29","13:30","13:31","13:32","13:33","13:34","13:35","13:36","13:37"]},yAxis:{min:0,max:100,type:"value",axisLabel:{formatter:" {value} %"}},series:[{name:"CPU 使用率",type:"line",data:["15.10","17.52","30.77","37.87","29.66","41.30","24.55","26.08","22.30","23.90","41.77"],markLine:{symbol:"none",label:{position:"end",formatter:"警戒线"},data:[{silent:!1,lineStyle:{type:"solid",color:"rgba(238, 99, 99)"},name:"警戒线",yAxis:20}]}},{type:"scatter",data:[,,"30.77","37.87","29.66","41.30","24.55","26.08","22.30","23.90","41.77"],itemStyle:{normal:{label:{position:"top",show:!0,color:"white",backgroundColor:"black"}}}}]};