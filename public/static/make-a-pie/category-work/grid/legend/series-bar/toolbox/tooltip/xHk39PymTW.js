var posList=["left","right","top","bottom","inside","insideTop","insideLeft","insideRight","insideBottom","insideTopLeft","insideTopRight","insideBottomLeft","insideBottomRight"];app.configParameters={rotate:{min:-90,max:90},align:{options:{left:"left",center:"center",right:"right"}},verticalAlign:{options:{top:"top",middle:"middle",bottom:"bottom"}},position:{options:echarts.util.reduce(posList,function(t,e){return t[e]=e,t},{})},distance:{min:0,max:100}},app.config={rotate:90,align:"left",verticalAlign:"middle",position:"insideBottom",distance:15,onChange:function(){var t={normal:{rotate:app.config.rotate,align:app.config.align,verticalAlign:app.config.verticalAlign,position:app.config.position,distance:app.config.distance}};myChart.setOption({series:[{label:t},{label:t},{label:t},{label:t}]})}};var labelOption={normal:{show:!0,position:app.config.position,distance:app.config.distance,align:app.config.align,verticalAlign:app.config.verticalAlign,rotate:app.config.rotate,formatter:"{c}  {name|{a}}",fontSize:16,rich:{name:{textBorderColor:"#fff"}}}};option={color:["#003366","#006699","#4cabce","#e5323e"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["注册用户","Steppe","活跃用户","Wetland"]},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",axisTick:{show:!1},data:["2017年05月","2017年06月","2017年07月","2017年08月","2017年09月"]}],yAxis:[{type:"value"}],series:[{name:"注册用户",type:"bar",barGap:0,label:labelOption,data:[320,332,301,334,390]},{name:"活跃用户",type:"bar",label:labelOption,data:[150,232,201,154,190]}]};
