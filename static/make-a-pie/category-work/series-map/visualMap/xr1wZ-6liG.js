var uploadedDataURL="/asset/get/s/data-1522745440620-rktPlpgjz.json";function showProvince1(){var a="cityName";$.get(uploadedDataURL,function(e){echarts.registerMap(a,e),myChart.setOption(option={visualMap:{min:0,max:.5,dimension:0,left:"left",top:"bottom",text:["HIGH","LOW"],calculable:!0},series:[{type:"map",mapType:a,data:[{name:"A区",value:.279793634},{name:"B区",value:.191205703},{name:"C区",value:.27882565},{name:"D区",value:.197609541}]}]})})}var currentIdx=0;showProvince1();
