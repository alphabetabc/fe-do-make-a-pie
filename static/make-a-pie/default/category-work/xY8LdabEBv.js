data=[];for(var seriesIndex=0;seriesIndex<5;seriesIndex++){for(var seriesData=[],i=0;i<4;i++){for(var cate=[],j=0;j<100;j++)cate.push(Math.random()*200);seriesData.push(cate)}data.push(echarts.dataTool.prepareBoxplotData(seriesData))}option={title:{text:"Multiple Categories",left:"center"},legend:{y:"10%",data:["全部组","对等组","方法学组"]},tooltip:{trigger:"item",axisPointer:{type:"shadow"}},grid:{left:"10%",top:"20%",right:"10%",bottom:"15%"},yAxis:{type:"category",data:data[0].axisData,boundaryGap:!0,nameGap:30,splitArea:{show:!0},axisLabel:{formatter:"批号 {value}"},splitLine:{show:!1}},xAxis:{type:"value",name:"Value",min:0,max:300,position:"top",splitArea:{show:!1}},series:[{name:"全部组",type:"boxplot",data:data[0].boxData,tooltip:{formatter}},{name:"对等组",type:"boxplot",data:data[1].boxData,tooltip:{formatter}},{name:"方法学组",type:"boxplot",data:data[2].boxData,tooltip:{formatter}}]};function formatter(t){return["Experiment "+t.name+": ","upper: "+t.data[0],"Q1: "+t.data[1],"median: "+t.data[2],"Q3: "+t.data[3],"lower: "+t.data[4]].join("<br/>")}
