var dataset={dimensions:["日期","访问用户","第三方"],source:[{日期:"1月1日",访问用户:1523,第三方:1200},{日期:"1月2日",访问用户:1223,第三方:2200},{日期:"1月3日",访问用户:2123,第三方:3200},{日期:"1月4日",访问用户:4123,第三方:4200},{日期:"1月5日",访问用户:3123,第三方:2800},{日期:"1月6日",访问用户:7123,第三方:6200}]},series=[{type:"bar"},{type:"bar"},{type:"pie",radius:"30%",center:["35%","25%"],emphasis:{focus:"data"},label:{formatter:function(e){return e.data[e.seriesName]+"："+e.data[e.dimensionNames[e.seriesIndex]]+"（"+e.percent+"）"}},tooltip:{trigger:"item",formatter:function(e){return e.data[e.seriesName]+`<br />${e.marker}`+e.dimensionNames[e.seriesIndex]+" "+e.data[e.dimensionNames[e.seriesIndex]]}}}];option={title:{text:"Awesome Chart"},tooltip:{trigger:"axis"},dataset,xAxis:{type:"category"},yAxis:{},grid:{top:"55%"},series};
