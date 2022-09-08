var option={color:["#4f81bd"],xAxis:[{type:"category",axisLabel:{rotate:30},data:["项目申请总数","通过立项数","未通过立项数","在研项目数","结束项目数","立项率"]}],yAxis:[{type:"value"}],series:[{type:"bar",data:[145,159,6,145,149,50],barWidth:"50%",itemStyle:{normal:{color:function(e){var t=["#4f81bd","#4f81bd","#4f81bd","#4f81bd","#4f81bd","#FE8463"];return t[e.dataIndex]},label:{show:!0,position:"top",formatter:function(e){return e.name=="立项率"?e.name+`
`+e.value+"%":e.name+`
`+e.value}}}}}]};
