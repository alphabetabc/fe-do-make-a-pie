app.title="堆叠条形图",option={backgroundColor:"#fff",color:["#2A9AD4","#37A2DA","#3BACE7","#3DBFF8","#54CAFD"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["访问","邮件","广告","视频","搜索"]},grid:{containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]},series:[{name:"访问",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[220,132,121,134,190,98,127]},{name:"邮件",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[120,132,101,134,190,101,137]},{name:"广告",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[220,182,191,234,190,330,310]},{name:"视频",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[150,212,201,154,190,201,187]},{name:"搜索",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},data:[120,132,151,134,190,180,174]}]};