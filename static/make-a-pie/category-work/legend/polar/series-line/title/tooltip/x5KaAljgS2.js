let percentList=[1,3,1,4,4,6,10,5,6,9,15,10,8,13,2,3,1,3,1],namelist=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];const seriesData=[];for(let e=0;e<=namelist.length;e++){var jiaodu=360/namelist.length*e;seriesData.push([percentList[e],jiaodu])}console.log(seriesData),option={title:{text:"风向玫瑰图",subtext:"风向频率玫瑰图"},legend:{data:["line"]},polar:{},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},angleAxis:{type:"value",startAngle:90,min:0,max:360,interval:360/namelist.length,axisLabel:{formatter:function(e,t){return namelist[t]}}},radiusAxis:{},series:[{coordinateSystem:"polar",name:"line",type:"line",data:seriesData}]};
