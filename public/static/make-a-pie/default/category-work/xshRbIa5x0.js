var uploadedDataURL="/asset/get/s/data-1632192354561-li9tlv_Z2.json";$.get(uploadedDataURL,function(e){echarts.registerMap("pingliang",e),option={visualMap:{show:!1,max:100,seriesIndex:[3],inRange:{color:["#A5DCF4","#006edd"]}},grid:{x:0,y:15,x2:0,y2:5},tooltip:{trigger:"item",showDelay:0,transitionDuration:.2,formatter:"{b}"},toolbox:{show:!1,left:"left",top:"top",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},series:[{name:"空间开通数",type:"map",roam:!1,zoom:1.2,map:"pingliang",itemStyle:{normal:{areaColor:"#2587e2",borderColor:"#00eaff",borderWidth:2,shadowColor:"#0063FF",label:{show:!0}},emphasis:{show:!1,areaColor:"#58a9e9"}},label:{normal:{textStyle:{fontSize:15,fontWeight:"bold",color:"#fff"}},emphasis:{color:"#00eaff"}},textFixed:{Alaska:[20,-20]}}]},myChart.setOption(option)});
