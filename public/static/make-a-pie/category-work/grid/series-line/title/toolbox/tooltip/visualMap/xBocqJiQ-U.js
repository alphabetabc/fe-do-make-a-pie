option={title:{text:"一天用电量分布",subtext:"纯属虚构"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},toolbox:{show:!0,feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["00:00","01:15","02:30","03:45","05:00","06:15","07:30","08:45","10:00","11:15","12:30","13:45","15:00","16:15","17:30","18:45","20:00","21:15","22:30","23:45"]},yAxis:{type:"value",axisLabel:{formatter:"{value} W"},axisPointer:{snap:!0}},visualMap:{show:!0,type:"piecewise",dimension:0,pieces:[{gte:5,lte:8,color:"red"}],outOfRange:{color:"blue"}},series:[{name:"用电量",type:"line",smooth:!0,data:[300,280,250,260,270,300,550,500,400,390,380,390,400,500,600,750,800,700,600,400],areaStyle:{}}]};