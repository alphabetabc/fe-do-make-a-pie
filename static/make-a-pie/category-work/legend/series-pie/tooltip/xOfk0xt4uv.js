var option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,labelLine:{normal:{show:!1}},data:[{value:335,label:{normal:{show:!0,position:"center",textStyle:{fontSize:"30",fontWeight:"bold"}}},name:"直接访问"},{value:310,label:{normal:{show:!1,position:"center",textStyle:{fontSize:"30",fontWeight:"bold"}}},name:"邮件营销"},{value:234,label:{normal:{show:!1,position:"center",textStyle:{fontSize:"30",fontWeight:"bold"}}},name:"联盟广告"},{value:135,label:{normal:{show:!1,position:"center",textStyle:{fontSize:"30",fontWeight:"bold"}}},name:"视频广告"},{value:1548,label:{normal:{show:!1,position:"center",textStyle:{fontSize:"30",fontWeight:"bold"}}},name:"搜索引擎"}]}]};myChart.setOption(option),myChart.on("mouseover","series",function(t){for(var e=0;e<option.series[0].data.length;e++)option.series[0].data[e].label.normal.show=!1;option.series[0].data[t.dataIndex].label.normal.show=!0,console.log(option),this.setOption(option)});