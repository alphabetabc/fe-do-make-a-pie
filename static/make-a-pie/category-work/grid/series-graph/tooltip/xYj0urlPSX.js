img="path://M50,13 H150 L200,99.5 L150,186 H50 L0,99.5";var getData=function(){for(var t=[],o=1;o<=7;o++)for(var r=1;r<=10;r++){var e=o*100,a=r*100;t.push({name:o+"-"+r,symbol:img,symbolSize:[65,58],value:[e,a],x:e,y:a,fixed:!0}),e=e-50,a=a-50,t.push({name:o+"--"+r,symbol:img,symbolSize:[65,58],value:[e,a],x:e,y:a,fixed:!0})}return t};option={backgroundColor:"#000",xAxis:{show:!1,type:"value"},yAxis:{show:!1,type:"value"},tooltip:{},series:[{type:"graph",zlevel:6,draggable:!1,coordinateSystem:"cartesian2d",symbolOffset:[0,0],label:{normal:{show:!0}},data:getData(),itemStyle:{backgroundColor:"#ffffff"}}]};