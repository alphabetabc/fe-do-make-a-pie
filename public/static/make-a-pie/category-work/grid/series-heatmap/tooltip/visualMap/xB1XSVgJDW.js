app.title="热力图";var hours=["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],data=[[1,1,1],[1,2,1]];data=data.map(function(a){return[a[1],a[0],a[2]||"-"]}),option={tooltip:{position:"top"},animation:!1,grid:{height:"50%",y:"10%"},xAxis:{type:"category",data:month,splitArea:{show:!0}},yAxis:{type:"category",data:days,splitArea:{show:!0}},visualMap:{min:0,max:10,calculable:!0,orient:"horizontal",left:"center",bottom:"15%"},series:[{name:"Punch Card",type:"heatmap",data,label:{normal:{show:!0}},itemStyle:{emphasis:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
