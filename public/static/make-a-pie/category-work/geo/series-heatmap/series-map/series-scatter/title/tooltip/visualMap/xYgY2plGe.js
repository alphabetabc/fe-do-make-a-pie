var uploadedDataURL="/asset/get/s/data-1580912537837-ugkEvpX-.json",max=80,min=30,name="piduqu",heat=[[103.91400581563,30.845313456954,100*Math.random()],[103.9144223,30.845625820235,100*Math.random()],[103.9144223,30.846250546797,100*Math.random()],[103.9144223,30.846562910079,100*Math.random()],[103.9161923586,30.847916484297,100*Math.random()],[103.91660884297,30.848853574141,100*Math.random()],[103.91817065938,30.851144238204,100*Math.random()],[103.91869126485,30.851560722579,100*Math.random()],[103.91973247579,30.852081328047,100*Math.random()],[103.92046132344,30.852185449141,100*Math.random()],[103.92181489766,30.852185449141,100*Math.random()],[103.92264786641,30.851977206954,100*Math.random()],[103.92493853047,30.851248359297,100*Math.random()],[103.92566737813,30.850623632735,100*Math.random()],[103.92597974141,30.849998906172,100*Math.random()],[103.92639622579,30.849061816329,100*Math.random()],[103.92691683125,30.848020605391,100*Math.random()],[103.92722919454,30.846562910079,100*Math.random()],[103.9277498,30.845834062422,100*Math.random()],[103.9277498,30.845521699141,100*Math.random()],[103.92754155782,30.844896972579,100*Math.random()],[103.9277498,30.84354339836,100*Math.random()],[103.92827040547,30.843231035079,100*Math.random()],[103.9295198586,30.843022792891,100*Math.random()],[103.93087343282,30.842502187422,100*Math.random()],[103.93181052266,30.842814550704,100*Math.random()],[103.9327476125,30.843335156172,100*Math.random()],[103.93368470235,30.843959882735,100*Math.random()],[103.93441355,30.844272246016,100*Math.random()],[103.93535063985,30.844168124922,100*Math.random()],[103.93576712422,30.843855761641,100*Math.random()],[103.93680833516,30.843231035079,100*Math.random()],[103.93691245625,30.842502187422,100*Math.random()],[103.937745425,30.84187746086,100*Math.random()],[103.93909899922,30.840523886641,100*Math.random()],[103.94034845235,30.839899160079,100*Math.random()],[103.94159790547,30.840107402266,100*Math.random()],[103.9428473586,30.840419765547,100*Math.random()],[103.94513802266,30.84104449211,100*Math.random()],[103.94711632344,30.840523886641,100*Math.random()],[103.95003171407,30.839586796797,100*Math.random()],[103.95190589375,30.83937855461,100*Math.random()],[103.95430067891,30.839066191329,100*Math.random()],[103.95627897969,30.838962070235,100*Math.random()],[103.96002733907,30.839170312422,100*Math.random()],[103.9628386086,30.839482675704,100*Math.random()],[103.96466271101,30.839612984374,100*Math.random()]],data=[{name:"德源街道",value:[103.8463128,30.7729303,10]},{name:"郫筒街道",value:[103.8786131,30.8076189,20]},{name:"犀浦街道",value:[103.9687228,30.763231,32]},{name:"唐昌镇",value:[103.8111107,30.9333031,314]},{name:"安德街道",value:[103.8001774,30.8759107,63]},{name:"团结街道",value:[103.9754471,30.8190601,13]},{name:"红光街道",value:[103.9388733,30.776405,52]},{name:"安靖街道",value:[104.0111136,30.7697944,55]},{name:"三道堰镇",value:[103.9139119,30.8656977,435]},{name:"友爱镇",value:[103.7923883,30.8263319,23]}];myChart.showLoading(),$.get(uploadedDataURL,function(t){myChart.hideLoading(),echarts.registerMap(name,t),myChart.setOption(option={backgroundColor:"#044060",title:{text:"郫都区示例",left:"center",textStyle:{color:"#ffffff"}},tooltip:{trigger:"item",formatter:function(a){return console.log(a),typeof a.value[2]>"u"?a.name+" : "+(a.value?a.value:0):a.name+" : "+a.value[2]}},visualMap:[{min:0,max:heat.reduce(function(a=0,e){return a>e[2]?a:e[2]}),seriesIndex:0,show:!1,splitNumber:5,inRange:{color:["#d94e5d","#eac736","#50a3ba"].reverse()},textStyle:{color:"#fff"}},{min:0,max:data.reduce(function(a=0,e){return a>e.value[2]?a:e.value[2]}),seriesIndex:1,show:!1,splitNumber:5,inRange:{color:["#23074d","#cc5333"].reverse()},textStyle:{color:"#fff"}}],geo:{map:name,label:{normal:{show:!0},emphasis:{textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{borderColor:"#389BB7",areaColor:"#fff"},emphasis:{areaColor:"#389BB7",borderWidth:0}}},series:[{name:"AQI",type:"heatmap",coordinateSystem:"geo",pointSize:10,blurSize:30,data:heat},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(a){let e=a[2];return e=e>max?max:e,e=e<min?min:e,e},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:14},formatter:function(a){return a.value[2]}}},itemStyle:{color:"#F62157"},zlevel:6,data},{type:"map",map:name,geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:data.map(a=>({name:a.name,value:a.value[2]}))}]})});
