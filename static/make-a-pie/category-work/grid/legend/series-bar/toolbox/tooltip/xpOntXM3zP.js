var posList=["left","right","top","bottom","inside","insideTop","insideLeft","insideRight","insideBottom","insideTopLeft","insideTopRight","insideBottomLeft","insideBottomRight"];app.configParameters={rotate:{min:-90,max:90},align:{options:{left:"left",center:"center",right:"right"}},verticalAlign:{options:{top:"top",middle:"middle",bottom:"bottom"}},position:{options:echarts.util.reduce(posList,function(t,e){return t[e]=e,t},{})},distance:{min:0,max:100}},app.config={rotate:90,align:"left",verticalAlign:"middle",position:"insideBottom",distance:15,onChange:function(){var t={normal:{rotate:app.config.rotate,align:app.config.align,verticalAlign:app.config.verticalAlign,position:app.config.position,distance:app.config.distance}};myChart.setOption({series:[{label:t},{label:t},{label:t},{label:t}]})}};var labelOption={show:!0,position:app.config.position,distance:app.config.distance,align:app.config.align,verticalAlign:app.config.verticalAlign,rotate:app.config.rotate,formatter:"{c}  {name|{a}}",fontSize:16,rich:{name:{textBorderColor:"#fff"}}};option={color:["#003366","#006699","#4cabce","#e5323e"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["Forest","Steppe","Desert","Wetland"]},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:[{type:"category",axisTick:{show:!1},data:["2014","2015","2016","2017","2018","2019"]}],yAxis:[{type:"value"}],series:[{name:"",type:"bar",barGap:0,label:labelOption,data:[10590.7,12533,13910.3,15517.3,16399.1,17428.5]},{name:"",type:"bar",label:labelOption,data:[13042.9,15890.7,19096.7,21206.8,25810.8,29278]},{name:"",type:"bar",label:labelOption,data:[11745.3,12164,13337.9,14874.8,16912.5,18482.5]}]};
