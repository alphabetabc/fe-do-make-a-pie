var downloadJson={女工:46,男工:54},themeJson={临工:37,常工:63};option={backgroundColor:"#fff",color:["#F78ED8","#36E0E5","#62A8FF","#FFE641"],tooltip:{formatter:function(e){return e.data.name+"："+e.value+"%"}},grid:[{top:50,width:"50%",bottom:0,left:10,containLabel:!0},{top:50,width:"50%",bottom:0,left:10,containLabel:!0}],series:[{type:"pie",radius:[0,"60%"],center:["27%","45%"],data:Object.keys(downloadJson).map(function(e){return{name:e.replace(".js",""),value:downloadJson[e]}}),label:{normal:{show:!1}}},{type:"pie",radius:[0,"60%"],center:["73%","45%"],data:Object.keys(themeJson).map(function(e){return{name:e.replace(".js",""),value:themeJson[e]}}),label:{normal:{show:!1}}}]};