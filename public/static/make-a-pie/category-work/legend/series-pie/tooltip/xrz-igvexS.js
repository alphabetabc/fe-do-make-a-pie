var data1=[{value:9998,name:"长安区"},{value:10220,name:"碑林区"},{value:9897,name:"沣东新城"},{value:12054,name:"沣西新城"},{value:1230,name:"其他区县"}],colorList=["#02F2F3","#68B5FB","#D45A49","#F3E58D","#C0FE5D","#15DE57","#F9F936"];option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",bottom:"25%",right:"5%",textStyle:{fontSize:14,color:"black"},formatter:function(e){const t=data1.filter(a=>a.name===e)[0];return`${e}：${t.value}人`}},series:[{type:"pie",center:["30%","50%"],radius:["60%","80%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},emphasis:{label:{show:!0,position:"outside",fontSize:"20",formatter:function(e){for(var t=0,a=0,o=0;o<data1.length;o++)a+=data1[o].value;return t=(e.value/a*100).toFixed(0),e.name!==""?e.name+`
`+e.value+`人
占百分比：`+t+"%":""}}},labelLine:{show:!1},data:data1}]};