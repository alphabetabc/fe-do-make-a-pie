var name=["邮件营销","联盟广告","视频广告","直接访问"],series=[];name.forEach((a,e)=>{series.push({name:a,type:"line",stack:"总量",symbol:"none",areaStyle:{},lineStyle:{normal:{color:e<name.length-1?"#fff":"#333"}},data:[120,132,101,134,90,230,210]})}),option={xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",position:"right"}],series};
