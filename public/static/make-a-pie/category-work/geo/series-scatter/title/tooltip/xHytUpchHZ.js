myChart.showLoading();var cityEvents=[],setData=function(){var e={title:{text:"近期活动",left:"50%",textAlign:"center"},tooltip:{show:!0},geo:{map:"china",label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#093B47",borderColor:"#ffffff"},emphasis:{areaColor:"#093B47"}}},series:[{type:"scatter",coordinateSystem:"geo",data:[],hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"top",show:!0}},itemStyle:{normal:{color:"#36D2FD",shadowBlur:10,shadowColor:"black"}},tooltip:{formatter:function(o){console.warn(o);var t=o.data.value[2];return"<div>"+t.loc_name+" - "+t.title+"</div><div>"+t.address+"</div><div>"+t.begin_time+"</div><div>"+t.time_str+"</div><div>"+t.fee_str+"</div>"}},zlevel:1}]};return function(){var o=[];cityEvents.forEach(function(t){t.events.forEach(function(a){var r=a.geo.split(" ");o.push({value:[r[1],r[0],a]})})}),console.warn(o),e.series[0].data=o,myChart.hideLoading(),myChart.setOption(e)}}();$.ajax({type:"GET",url:"https://api.douban.com/v2/loc/list",dataType:"jsonp",success:function(e){e.locs.forEach(function(o,t){$.ajax({type:"GET",url:"https://api.douban.com/v2/event/list?loc="+o.id,dataType:"jsonp",success:function(a){cityEvents.push({city:o.name,events:a.events}),t===e.locs.length-1&&(console.warn(cityEvents),setData())},error:function(){setData()}})})},error:function(){setData()}});