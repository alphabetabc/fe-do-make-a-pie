var symbolSize=10,data=[[10,20],[50,40],[100,200],[200,400],[300,500],[320,510],[629,1400],[590,1500],[550,1580],[440,1460],[410,1320],[380,1221],[350,1420],[490,1420]],years=[1988,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2009,2010,2011,2012,2013,2014,2015],points=[];option={title:{text:"专利生命周期图"},tooltip:{formatter:function(t){return years[t.dataIndex]}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",axisLine:{onZero:!1}},yAxis:{type:"value",axisLine:{onZero:!1}},series:[{id:"a",type:"line",smooth:!0,symbolSize,label:{normal:{show:!0,formatter:function(t){return years[t.dataIndex]}}},data}]};