var data=[{value:335,name:"非常紧急"},{value:310,name:"比较危险"},{value:234,name:"比较安全"},{value:135,name:"非常安全"}],option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["非常紧急","比较危险","比较安全","非常安全"],icon:"rect ",itemWidth:6,itemHeight:6,y:106,x:396,formatter:function(a){let t;for(let e=0;e<data.length;e++)data[e].name===a&&(t=data[e].value);return["{b|"+a+"}","{a|("+t+")个}"].join("")},textStyle:{rich:{a:{fontSize:16,color:"#3e4956",padding:10},b:{fontSize:14,color:"#3e4956"}}}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"}},labelLine:{normal:{show:!1}},data:[{value:335,name:"非常紧急"},{value:310,name:"比较危险"},{value:234,name:"比较安全"},{value:135,name:"非常安全"}]}]};