for(var chartName=["2015","2016","2017"],chartData=[53.83,50.42,32.37],chartColor=["#000","#422222","blue"],data=[],i=0;i<chartData.length;i++){var tmp={value:chartData[i],name:chartName[i],itemStyle:{normal:{color:chartColor[i]}}};data.push(tmp)}for(var i=0;i<9;i++){var tmp={value:0,name:"",label:{show:!1},labelLine:{show:!1}};data.push(tmp)}option={backgroundColor:"rgb(43, 51, 59)",toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,tooltip:{trigger:"item",formatter:"{a}<br/>{b}:{c}千万元"},calculable:!0,series:[{name:"XX线索",type:"pie",radius:[30,155],avoidLabelOverlap:!1,startAngle:0,center:["50.1%","34%"],roseType:"area",selectedMode:"single",label:{normal:{show:!0,formatter:`{b}
{c}千万元`},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}},data}]};
