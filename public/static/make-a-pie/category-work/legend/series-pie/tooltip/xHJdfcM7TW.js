app.title="环形图";var $legendData=["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"],$legendSelected={直接访问:!1},$seriesData=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}],option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:$legendData,selected:$legendSelected},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:$seriesData}]};myChart.on("legendselectchanged",function(a){if(!(!$seriesData||$seriesData.length<=0)){var t=[],o=[],s=a.selected,u=!1;for(var l in a.selected)a.selected[l]&&l!="其他"&&l!="全部"&&(u=!0);console.log("params"),console.log(a);for(var n=null,l=0;l<$seriesData.length;l++){var e=$seriesData[l];console.log(a.selected[e.name]),a.selected[e.name]||(n===null?n=e.value:n+=e.value),!(e.name=="其他"||e.name=="全部")&&(t.push(e.name),o.push({value:e.value,name:e.name}))}n!==null&&(u?(t.push("其他"),s.其他=!0,o.push({value:n,name:"其他"})):(t.push("全部"),s.全部=!0,o.push({value:n,name:"全部"}))),console.log(t),console.log(o);var r=option;r.legend.data=t,r.legend.selected=s,r.series[0].data=o,myChart.clear(),console.log(option),myChart.setOption(option)}});