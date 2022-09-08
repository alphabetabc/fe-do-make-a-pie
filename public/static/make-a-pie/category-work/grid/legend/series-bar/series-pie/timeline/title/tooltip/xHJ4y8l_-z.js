var dataMap={};function dataFormatter(t){for(var s=["煤","原油","天然气","清洁能源"],u,e=1998;e<=2016;e++){var m=0,d=0;u=t[e];for(var a=0,l=u.length;a<l;a++)m=Math.max(m,u[a]),d+=u[a],t[e][a]={name:s[a],value:u[a]};t[e+"max"]=Math.floor(m/100)*100,t[e+"sum"]=d}return t}dataMap.data=dataFormatter({1998:[95168,22981,2856,8829],1999:[97500,22825,3298,8312],2e3:[101017,23280,3603,10670],2001:[107031,23441,3980,12973],2002:[114238,23910,4376,13752],2003:[134972,24249,4636,14442],2004:[158085,25145,5565,17313],2005:[177274,25881,6642,19239],2006:[189691,26434,7832,20805],2007:[205526,26681,9246,22719],2008:[213058,27187,10819,26355],2009:[219719,26893,11444,28037],2010:[237839,29028,12797,32461],2011:[264658,28915,13947,32657],2012:[267493,29838,14393,39317],2013:[270523,30138,15786,42336],2014:[266333,30397,17008,48128],2015:[260986,30725,17351,52414],2016:[240816,28372,18338,58474]}),dataMap.dataM=dataFormatter({1998:[95168],1999:[97500],2e3:[101017],2001:[107031],2002:[114238],2003:[134972],2004:[158085],2005:[177274],2006:[189691],2007:[205526],2008:[213058],2009:[219719],2010:[237839],2011:[264658],2012:[267493],2013:[270523],2014:[266333],2015:[260986],2016:[240816]}),dataMap.dataYY=dataFormatter({1998:[22981],1999:[22825],2e3:[23280],2001:[23441],2002:[23910],2003:[24249],2004:[25145],2005:[25881],2006:[26434],2007:[26681],2008:[27187],2009:[26893],2010:[29028],2011:[28915],2012:[29838],2013:[30138],2014:[30397],2015:[30725],2016:[28372]}),dataMap.dataTRQ=dataFormatter({1998:[2856],1999:[3298],2e3:[3603],2001:[3980],2002:[4376],2003:[4636],2004:[5565],2005:[6642],2006:[7832],2007:[9246],2008:[10819],2009:[11444],2010:[12797],2011:[13947],2012:[14393],2013:[15786],2014:[17008],2015:[17351],2016:[18338]}),dataMap.dataQJNY=dataFormatter({1998:[8829],1999:[8312],2e3:[10670],2001:[12973],2002:[13752],2003:[14442],2004:[17313],2005:[19239],2006:[20805],2007:[22719],2008:[26355],2009:[28037],2010:[32461],2011:[32657],2012:[39317],2013:[42336],2014:[48128],2015:[52414],2016:[58474]}),option={baseOption:{timeline:{axisType:"category",autoPlay:!0,playInterval:1e3,data:["19982-01-01","1999-01-01","2000-01-01","2001-01-01","2002-01-01","2003-01-01","2004-01-01","2005-01-01","2006-01-01","2007-01-01","2008-01-01","2009-01-01","2010-01-01","2011-01-01","2012-01-01","2013-01-01","2014-01-01","2015-01-01","2016-01-01"]},title:{subtext:"数据来自国家统计局"},tooltip:{},legend:{x:"right",data:["煤","原油","天然气","清洁能源"],selected:{}},calculable:!0,grid:{top:80,bottom:100},xAxis:[{type:"category",data:["煤","原油","天然气","清洁能源"],splitLine:{show:!1}}],yAxis:[{type:"value",name:"生产量(万吨标准煤)",max:3e5}],series:[{name:"生产量",type:"bar"},{name:"生产量占比",type:"pie",center:["75%","35%"],radius:"28%"}]},options:[{title:{text:"1998年能源生产量与结构"},series:[{data:dataMap.data[1998]},{data:[{name:"煤",value:dataMap.dataM["1998sum"]},{name:"原油",value:dataMap.dataYY["1998sum"]},{name:"天然气",value:dataMap.dataTRQ["1998sum"]},{name:"清洁能源",value:dataMap.dataQJNY["1998sum"]}]}]},{title:{text:"1999年能源生产量与结构"},series:[{data:dataMap.data[1999]},{data:[{name:"煤",value:dataMap.dataM["1999sum"]},{name:"原油",value:dataMap.dataYY["1999sum"]},{name:"天然气",value:dataMap.dataTRQ["1999sum"]},{name:"清洁能源",value:dataMap.dataQJNY["1999sum"]}]}]},{title:{text:"2000年能源生产量与结构"},series:[{data:dataMap.data[2e3]},{data:[{name:"煤",value:dataMap.dataM["2000sum"]},{name:"原油",value:dataMap.dataYY["2000sum"]},{name:"天然气",value:dataMap.dataTRQ["2000sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2000sum"]}]}]},{title:{text:"2001年能源生产量与结构"},series:[{data:dataMap.data[2e3]},{data:[{name:"煤",value:dataMap.dataM["2001sum"]},{name:"原油",value:dataMap.dataYY["2001sum"]},{name:"天然气",value:dataMap.dataTRQ["2001sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2001sum"]}]}]},{title:{text:"2002年能源生产量与结构"},series:[{data:dataMap.data[2002]},{data:[{name:"煤",value:dataMap.dataM["2002sum"]},{name:"原油",value:dataMap.dataYY["2002sum"]},{name:"天然气",value:dataMap.dataTRQ["2002sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2002sum"]}]}]},{title:{text:"2003年能源生产量与结构"},series:[{data:dataMap.data[2003]},{data:[{name:"煤",value:dataMap.dataM["2003sum"]},{name:"原油",value:dataMap.dataYY["2003sum"]},{name:"天然气",value:dataMap.dataTRQ["2003sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2003sum"]}]}]},{title:{text:"2004年能源生产量与结构"},series:[{data:dataMap.data[2004]},{data:[{name:"煤",value:dataMap.dataM["2004sum"]},{name:"原油",value:dataMap.dataYY["2004sum"]},{name:"天然气",value:dataMap.dataTRQ["2004sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2000sum"]}]}]},{title:{text:"2005年能源生产量与结构"},series:[{data:dataMap.data[2005]},{data:[{name:"煤",value:dataMap.dataM["2005sum"]},{name:"原油",value:dataMap.dataYY["2005sum"]},{name:"天然气",value:dataMap.dataTRQ["2005sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2005sum"]}]}]},{title:{text:"2006年能源生产量与结构"},series:[{data:dataMap.data[2006]},{data:[{name:"煤",value:dataMap.dataM["2006sum"]},{name:"原油",value:dataMap.dataYY["2006sum"]},{name:"天然气",value:dataMap.dataTRQ["2006sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2006sum"]}]}]},{title:{text:"2007年能源生产量与结构"},series:[{data:dataMap.data[2007]},{data:[{name:"煤",value:dataMap.dataM["2007sum"]},{name:"原油",value:dataMap.dataYY["2007sum"]},{name:"天然气",value:dataMap.dataTRQ["2007sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2007sum"]}]}]},{title:{text:"2008年能源生产量与结构"},series:[{data:dataMap.data[2008]},{data:[{name:"煤",value:dataMap.dataM["2008sum"]},{name:"原油",value:dataMap.dataYY["2008sum"]},{name:"天然气",value:dataMap.dataTRQ["2008sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2008sum"]}]}]},{title:{text:"2009年能源生产量与结构"},series:[{data:dataMap.data[2009]},{data:[{name:"煤",value:dataMap.dataM["2009sum"]},{name:"原油",value:dataMap.dataYY["2009sum"]},{name:"天然气",value:dataMap.dataTRQ["2009sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2009sum"]}]}]},{title:{text:"2010年能源生产量与结构"},series:[{data:dataMap.data[2010]},{data:[{name:"煤",value:dataMap.dataM["2010sum"]},{name:"原油",value:dataMap.dataYY["2010sum"]},{name:"天然气",value:dataMap.dataTRQ["2010sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2010sum"]}]}]},{title:{text:"2011年能源生产量与结构"},series:[{data:dataMap.data[2011]},{data:[{name:"煤",value:dataMap.dataM["2011sum"]},{name:"原油",value:dataMap.dataYY["2011sum"]},{name:"天然气",value:dataMap.dataTRQ["2011sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2011sum"]}]}]},{title:{text:"2012年能源生产量与结构"},series:[{data:dataMap.data[2012]},{data:[{name:"煤",value:dataMap.dataM["2012sum"]},{name:"原油",value:dataMap.dataYY["2012sum"]},{name:"天然气",value:dataMap.dataTRQ["2012sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2012sum"]}]}]},{title:{text:"2013年能源生产量与结构"},series:[{data:dataMap.data[2013]},{data:[{name:"煤",value:dataMap.dataM["2013sum"]},{name:"原油",value:dataMap.dataYY["2013sum"]},{name:"天然气",value:dataMap.dataTRQ["2013sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2013sum"]}]}]},{title:{text:"2014年能源生产量与结构"},series:[{data:dataMap.data[2014]},{data:[{name:"煤",value:dataMap.dataM["2014sum"]},{name:"原油",value:dataMap.dataYY["2014sum"]},{name:"天然气",value:dataMap.dataTRQ["2014sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2014sum"]}]}]},{title:{text:"2015年能源生产量与结构"},series:[{data:dataMap.data[2015]},{data:[{name:"煤",value:dataMap.dataM["2015sum"]},{name:"原油",value:dataMap.dataYY["2015sum"]},{name:"天然气",value:dataMap.dataTRQ["2015sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2015sum"]}]}]},{title:{text:"2016年能源生产量与结构"},series:[{data:dataMap.data[2016]},{data:[{name:"煤",value:dataMap.dataM["2016sum"]},{name:"原油",value:dataMap.dataYY["2016sum"]},{name:"天然气",value:dataMap.dataTRQ["2016sum"]},{name:"清洁能源",value:dataMap.dataQJNY["2016sum"]}]}]}]};