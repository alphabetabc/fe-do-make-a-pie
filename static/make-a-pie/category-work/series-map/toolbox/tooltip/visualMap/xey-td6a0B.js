var uploadedDataURL="/asset/get/s/data-1619083078195-CJlZQhLD4.json";$.get(uploadedDataURL,function(e){console.log(111,e),echarts.registerMap("SHANXI",e)});let mapData=[{name:"西安市",value:22},{name:"咸阳市",value:1.9},{name:"安康市",value:13.9},{name:"榆林市",value:231.9},{name:"咸阳市",value:1.9}];option={tooltip:{trigger:"item",formatter:function(e){let{name:t,value:a}=e.data,o=`<style>
                .tooltip_box{
                  padding:6px 20px 6px 10px;
                  margin:-10px;
                  border-radius:2px;
                  min-width:200px;
                }
                .tooltip_name{
                  color:'#fff';
                  padding-left:5px;
                  padding-top:6px;
                  padding-bottom:6px;
                  background:rgba('4,12,26,1')
                }
                .tooltip_value{
                  background:rgba(20,61,100,0.9);
                  color:'#fff';"
                  height:50px;
                  padding:15px 20px 20px 10px;
                  margin:0px -15px 0px -4px;
                }
                .font-size-18{
                  font-size:18px;
                }
                .bold{
                  font-weight:bold;
                }
                </style>`,l="<div class='tooltip_name font-size-18'>"+t+"</div>",i='<div class="tooltip_value"">总量：<span class="font-size-18 bold">'+a+"</span> 亿 m³</div>";return o+"<div class='tooltip_box'>"+l+i+"</div>"}},toolbox:{show:!1,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},visualMap:{min:0,max:100,itemWidth:10,align:"left",bottom:35,right:120,formatter:function(e){return e+" 亿 m³"},textGap:30,realtime:!0,calculable:!1,inRange:{color:["#001a54","#35cee5"]},textStyle:{color:"#FFF"}},series:[{name:"",type:"map",mapType:"SHANXI",layoutCenter:["40%","55%"],layoutSize:710,label:{show:!0,color:"#ecf6ff",fontSize:"12",align:"right",position:"right",verticalAlign:"middle",offset:[90,80]},itemStyle:{borderWidth:"2",borderColor:"#35a2d3"},select:{itemStyle:{areaColor:"rgba(249,206,57,1)",borderWidth:"3",borderColor:"#35a2d3"}},emphasis:{itemStyle:{areaColor:"rgba(249,206,57,1)"}},data:mapData}]};
