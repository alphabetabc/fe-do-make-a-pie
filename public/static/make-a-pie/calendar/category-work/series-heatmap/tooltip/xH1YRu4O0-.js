var colors=["#ededed","#f5dfa1","#f1d37c","#edc757","#eaba32","#dca917"];function getVirtulData(a){a=a||"2017";for(var o=+echarts.number.parseDate(a+"-01-01"),l=+echarts.number.parseDate(+a+1+"-05-01"),f=3600*24*1e3,t=[],n=o;n<l;n+=f){var d=echarts.format.formatTime("yyyy-MM-dd",n),e=Math.floor(Math.random()*1e3),r=colors[0];0<e&&e<=200?r=colors[1]:200<e&&e<=400?r=colors[2]:400<e&&e<=600?r=colors[3]:600<e&&e<=800?r=colors[4]:800<e&&e<=1e3&&(r=colors[5]),t.push({name:d,value:[d,e],itemStyle:{normal:{color:r}}})}return console.log(t),t}var option={tooltip:{position:"top",formatter:function(a){return a.name+": "+a.value[1]}},calendar:[{range:"2017",cellSize:18,splitLine:{show:!1},itemStyle:{normal:{color:"#ededed",borderColor:"#fff",borderWidth:"4"}},monthLabel:{formatter:"{M}月"},dayLabel:{nameMap:"cn"}}],series:[{type:"heatmap",coordinateSystem:"calendar",calendarIndex:0,data:getVirtulData(2017)}]};