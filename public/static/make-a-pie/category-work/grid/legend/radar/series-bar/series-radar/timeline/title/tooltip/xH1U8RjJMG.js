var dataMap={};dataMap.datapoint1={2014:[.00287,.00961,.36,5e-4,.0044,6e-5],2013:[.00441,.00705,.4,5e-4,.0047,27e-5],2012:[.005,.062,.358,3e-4,.004,21e-5],2011:[.003,.296,.37,3e-4,.005,1e-4],2010:[5e-4,.01,.38,3e-4,.004,5e-4],2009:[5e-4,.01,.45,3e-4,.004,5e-4],2008:[5e-4,.01,.33,3e-4,.006,5e-4],2007:[5e-4,.01,.47,3e-4,.002,5e-4],2006:[.004,.01,.46,37e-5,.005,5e-4]},dataMap.datapoint2={2014:[.0035,.01367,.46,4e-4,.0037,6e-5],2013:[.00426,.00572,.51,8e-4,.003,8e-5],2012:[.00448,.039,.52,3e-4,.0041,9e-5],2011:[.0025,.277,.437,3e-4,.005,1e-4],2010:[5e-4,.01,.603,3e-4,.005,5e-4],2009:[5e-4,.01,.616,3e-4,.004,5e-4],2008:[5e-4,.01,.43,3e-4,.0012,5e-4],2007:[5e-4,.01,.73,3e-4,.0012,5e-4],2006:[.007,.02,.52,5e-4,.0057,5e-4]},dataMap.datapoint3={2014:[.0026,.0087,.46,4e-4,.0039,12e-5],2013:[.00411,.00557,.43,5e-4,.0029,6e-5],2012:[.0037,.0493,.45,3e-4,.004,2e-4],2011:[.002,.308,.43,3e-4,.005,16e-5],2010:[5e-4,.01,.5,3e-4,.005,5e-4],2009:[5e-4,.01,.6,3e-4,.004,5e-4],2008:[5e-4,.01,.42,3e-4,.001,5e-4],2007:[5e-4,.01,.74,3e-4,.001,5e-4],2006:[5e-4,.013,.46,45e-5,.0052,5e-4]},dataMap.datapoint4={2014:[.00328,.0061,.84,5e-4,.0025,6e-5],2013:[.00853,.011,1.56,5e-4,.004,6e-5],2012:[.00557,.0374,2.39,3e-4,.0106,11e-5],2011:[.0059,.358,1.86,3e-4,.011,2e-4],2010:[5e-4,.02,1.86,3e-4,.006,5e-4],2009:[5e-4,.01,1.57,3e-4,.005,5e-4],2008:[5e-4,.01,.77,3e-4,.005,5e-4],2007:[5e-4,.072,2.58,3e-4,.001,5e-4],2006:[.007,.03,1.25,54e-5,.0053,5e-4]},dataMap.datapoint5={2014:[.00309,.00849,.87,5e-4,.0022,6e-5],2013:[.00979,.03553,1.98,5e-4,.0031,6e-5],2012:[.0077,.0729,2.46,4e-4,.0059,24e-5],2011:[.0046,.467,1.76,4e-4,.01,19e-5],2010:[5e-4,.01,2.06,3e-4,.005,68e-5],2009:[5e-4,.01,1.76,8e-4,.007,6e-4],2008:[5e-4,.01,1.04,5e-4,.006,7e-4],2007:[5e-4,.02,1.77,5e-4,.002,8e-4],2006:[.01,.031,1.4,9e-4,.007,5e-4]},dataMap.datapoint6={2014:[.00516,.00842,1.06,5e-4,.0022,6e-5],2013:[.0054,.01611,1.17,5e-4,.0025,6e-5],2012:[.004,.0721,1.1,3e-4,.0041,13e-5],2011:[.002,.322,1.16,3e-4,.0072,2e-4,.002],2010:[5e-4,.01,1.31,3e-4,.004,6e-4],2009:[5e-4,.01,.94,3e-4,.0048,5e-4],2008:[5e-4,.02,.47,3e-4,.006,5e-4],2007:[5e-4,.01,.91,3e-4,9e-4,5e-4],2006:[.05,.023,1.3,53e-5,.006,5e-4]},dataMap.datapoint7={2014:[.00395,.00862,.76,5e-4,.0029,6e-5],2013:[.0075,.00591,1.1,5e-4,.0037,6e-5],2012:[.0052,.0613,.992,3e-4,.0097,19e-5],2011:[.0028,.261,1.55,4e-4,.0137,1e-4],2010:[5e-4,.01,1.86,7e-4,.007,5e-4],2009:[5e-4,.01,1.62,4e-4,.011,5e-4],2008:[8e-4,.01,1.1,8e-4,.01,7e-4],2007:[5e-4,.01,1.78,79e-5,.003,67e-5],2006:[.01,.18,1.44,77e-5,.0086,5e-4]},dataMap.datapoint8={2014:[.00597,.0064,.9,5e-4,.0019,6e-5],2013:[.00829,.0147,2.6,5e-4,.0035,6e-5],2012:[.005,.081,2.38,3e-4,.0053,18e-5],2011:[.004,.373,2.57,3e-4,.0075,2e-4],2010:[0,0,0,0,0,0],2009:[0,0,0,0,0,0],2008:[0,0,0,0,0,0],2007:[0,0,0,0,0,0],2006:[0,0,0,0,0,0]},option={baseOption:{timeline:{axisType:"category",autoPlay:!0,playInterval:1e3,data:["2006","2007","2008","2009","2010","2011","2012","2013","2014"],label:{formatter:function(a){return new Date(a).getFullYear()}}},title:{subtext:"数据来自那美克星环保局"},tooltip:{},legend:{x:"right",y:10,itemGap:20,itemWidth:28,itemHeight:18,data:["检测站点1","检测站点2","检测站点3","检测站点4","检测站点5","检测站点6","检测站点7","检测站点8"]},calculable:!0,grid:{top:150,right:"39%",left:"5%",bottom:100},xAxis:[{type:"category",axisLabel:{interval:0},data:["铜","锌","氟化物","硒","砷","铬"],splitLine:{show:!0}}],yAxis:[{type:"value",name:"监测结果(mg/L)"}],polar:[{indicator:[{name:"铜",max:.05},{name:"锌",max:.47},{name:"氟化物",max:2.57},{name:"硒",max:.001},{name:"砷",max:.014},{name:"铬",max:.001}],center:["82%","50%"],radius:200}],calculable:!0,series:[{name:"检测站点1",type:"bar"},{name:"检测站点2",type:"bar"},{name:"检测站点3",type:"bar"},{name:"检测站点4",type:"bar"},{name:"检测站点5",type:"bar"},{name:"检测站点6",type:"bar"},{name:"检测站点7",type:"bar"},{name:"检测站点8",type:"bar"},{name:"对比",type:"radar"}]},options:[{title:{text:"2006年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2006]},{data:dataMap.datapoint2[2006]},{data:dataMap.datapoint3[2006]},{data:dataMap.datapoint4[2006]},{data:dataMap.datapoint5[2006]},{data:dataMap.datapoint6[2006]},{data:dataMap.datapoint7[2006]},{data:dataMap.datapoint8[2006]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2006]},{name:"检测站点2",value:dataMap.datapoint2[2006]},{name:"检测站点3",value:dataMap.datapoint3[2006]},{name:"检测站点4",value:dataMap.datapoint4[2006]},{name:"检测站点5",value:dataMap.datapoint5[2006]},{name:"检测站点6",value:dataMap.datapoint6[2006]},{name:"检测站点7",value:dataMap.datapoint7[2006]},{name:"检测站点8",value:dataMap.datapoint8[2006]}]}]},{title:{text:"2007年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2007]},{data:dataMap.datapoint2[2007]},{data:dataMap.datapoint3[2007]},{data:dataMap.datapoint4[2007]},{data:dataMap.datapoint5[2007]},{data:dataMap.datapoint6[2007]},{data:dataMap.datapoint7[2007]},{data:dataMap.datapoint8[2007]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2007]},{name:"检测站点2",value:dataMap.datapoint2[2007]},{name:"检测站点3",value:dataMap.datapoint3[2007]},{name:"检测站点4",value:dataMap.datapoint4[2007]},{name:"检测站点5",value:dataMap.datapoint5[2007]},{name:"检测站点6",value:dataMap.datapoint6[2007]},{name:"检测站点7",value:dataMap.datapoint7[2007]},{name:"检测站点8",value:dataMap.datapoint8[2007]}]}]},{title:{text:"2008年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2008]},{data:dataMap.datapoint2[2008]},{data:dataMap.datapoint3[2008]},{data:dataMap.datapoint4[2008]},{data:dataMap.datapoint5[2008]},{data:dataMap.datapoint6[2008]},{data:dataMap.datapoint7[2008]},{data:dataMap.datapoint8[2008]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2008]},{name:"检测站点2",value:dataMap.datapoint2[2008]},{name:"检测站点3",value:dataMap.datapoint3[2008]},{name:"检测站点4",value:dataMap.datapoint4[2008]},{name:"检测站点5",value:dataMap.datapoint5[2008]},{name:"检测站点6",value:dataMap.datapoint6[2008]},{name:"检测站点7",value:dataMap.datapoint7[2008]},{name:"检测站点8",value:dataMap.datapoint8[2008]}]}]},{title:{text:"2009年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2009]},{data:dataMap.datapoint2[2009]},{data:dataMap.datapoint3[2009]},{data:dataMap.datapoint4[2009]},{data:dataMap.datapoint5[2009]},{data:dataMap.datapoint6[2009]},{data:dataMap.datapoint7[2009]},{data:dataMap.datapoint8[2009]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2009]},{name:"检测站点2",value:dataMap.datapoint2[2009]},{name:"检测站点3",value:dataMap.datapoint3[2009]},{name:"检测站点4",value:dataMap.datapoint4[2009]},{name:"检测站点5",value:dataMap.datapoint5[2009]},{name:"检测站点6",value:dataMap.datapoint6[2009]},{name:"检测站点7",value:dataMap.datapoint7[2009]},{name:"检测站点8",value:dataMap.datapoint8[2009]}]}]},{title:{text:"2010年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2010]},{data:dataMap.datapoint2[2010]},{data:dataMap.datapoint3[2010]},{data:dataMap.datapoint4[2010]},{data:dataMap.datapoint5[2010]},{data:dataMap.datapoint6[2010]},{data:dataMap.datapoint7[2010]},{data:dataMap.datapoint8[2010]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2010]},{name:"检测站点2",value:dataMap.datapoint2[2010]},{name:"检测站点3",value:dataMap.datapoint3[2010]},{name:"检测站点4",value:dataMap.datapoint4[2010]},{name:"检测站点5",value:dataMap.datapoint5[2010]},{name:"检测站点6",value:dataMap.datapoint6[2010]},{name:"检测站点7",value:dataMap.datapoint7[2010]},{name:"检测站点8",value:dataMap.datapoint8[2010]}]}]},{title:{text:"2011年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2011]},{data:dataMap.datapoint2[2011]},{data:dataMap.datapoint3[2011]},{data:dataMap.datapoint4[2011]},{data:dataMap.datapoint5[2011]},{data:dataMap.datapoint6[2011]},{data:dataMap.datapoint7[2011]},{data:dataMap.datapoint8[2011]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2011]},{name:"检测站点2",value:dataMap.datapoint2[2011]},{name:"检测站点3",value:dataMap.datapoint3[2011]},{name:"检测站点4",value:dataMap.datapoint4[2011]},{name:"检测站点5",value:dataMap.datapoint5[2011]},{name:"检测站点6",value:dataMap.datapoint6[2011]},{name:"检测站点7",value:dataMap.datapoint7[2011]},{name:"检测站点8",value:dataMap.datapoint8[2011]}]}]},{title:{text:"2012年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2012]},{data:dataMap.datapoint2[2012]},{data:dataMap.datapoint3[2012]},{data:dataMap.datapoint4[2012]},{data:dataMap.datapoint5[2012]},{data:dataMap.datapoint6[2012]},{data:dataMap.datapoint7[2012]},{data:dataMap.datapoint8[2012]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2012]},{name:"检测站点2",value:dataMap.datapoint2[2012]},{name:"检测站点3",value:dataMap.datapoint3[2012]},{name:"检测站点4",value:dataMap.datapoint4[2012]},{name:"检测站点5",value:dataMap.datapoint5[2012]},{name:"检测站点6",value:dataMap.datapoint6[2012]},{name:"检测站点7",value:dataMap.datapoint7[2012]},{name:"检测站点8",value:dataMap.datapoint8[2012]}]}]},{title:{text:"2013年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2013]},{data:dataMap.datapoint2[2013]},{data:dataMap.datapoint3[2013]},{data:dataMap.datapoint4[2013]},{data:dataMap.datapoint5[2013]},{data:dataMap.datapoint6[2013]},{data:dataMap.datapoint7[2013]},{data:dataMap.datapoint8[2013]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2013]},{name:"检测站点2",value:dataMap.datapoint2[2013]},{name:"检测站点3",value:dataMap.datapoint3[2013]},{name:"检测站点4",value:dataMap.datapoint4[2013]},{name:"检测站点5",value:dataMap.datapoint5[2013]},{name:"检测站点6",value:dataMap.datapoint6[2013]},{name:"检测站点7",value:dataMap.datapoint7[2013]},{name:"检测站点8",value:dataMap.datapoint8[2013]}]}]},{title:{text:"2014年地表水监测指标监测值"},series:[{data:dataMap.datapoint1[2014]},{data:dataMap.datapoint2[2014]},{data:dataMap.datapoint3[2014]},{data:dataMap.datapoint4[2014]},{data:dataMap.datapoint5[2014]},{data:dataMap.datapoint6[2014]},{data:dataMap.datapoint7[2014]},{data:dataMap.datapoint8[2014]},{data:[{name:"检测站点1",value:dataMap.datapoint1[2014]},{name:"检测站点2",value:dataMap.datapoint2[2014]},{name:"检测站点3",value:dataMap.datapoint3[2014]},{name:"检测站点4",value:dataMap.datapoint4[2014]},{name:"检测站点5",value:dataMap.datapoint5[2014]},{name:"检测站点6",value:dataMap.datapoint6[2014]},{name:"检测站点7",value:dataMap.datapoint7[2014]},{name:"检测站点8",value:dataMap.datapoint8[2014]}]}]}]};