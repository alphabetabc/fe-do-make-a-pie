var dat1=[1.32975,.73446,1.07846,1.6039,1.59164,.75674,.89142,1.15506,1.01984,1.31417,1.1532,1.30188,.43386,.86437,.91887,1.3767,1.55785,1.58465,1.3969,1.59359,1.0312,1.45073,1.76481,1.36922,1.01491,1.73875,1.33899,1.04864,1.07244,1.10719,.84458,1.36589,1.29653,.84777,.80882,.60057,.9382,.59218,.53427,.78772,1.25235,1.11252,1.29055,1.19789,.61446,.59251,.92561,.42841,.58712,.58517,.76998,1.28595],dat2=[6.51171,6.41896,8.64398,8.76261,6.10744,7.95055,9.15577,9.78661,5.6625,9.203,9.77247,7.91602,10.29542,9.70835,9.48838,12.57072,7.0001,7.59234,7.47995,8.47713,9.45659,6.42519,8.31992,6.19482,8.24389,9.16083,6.7241,9.09704,7.11733,5.81675,7.3939,7.38828,8.67023,8.99516,5.35969,5.30855,6.37254,7.64867,7.78171,9.21025,7.23132,7.32219,7.97415,6.26991,8.16005,8.95175,6.83914,7.26905,7.66744,6.94064,6.71675,6.66847],dat3=[54.61267,62.17738,60.36175,64.17317,77.82504,97.37343,76.73191,69.79229,69.73114,68.4161,68.42281,67.8841,69.93021,70.51422,68.51931,69.90459,70.87796,71.49032,71.38939,70.7525,70.69084,71.23426,71.34404,70.93427,70.77611,70.78939,70.34914,69.40944,69.02591,68.69572,69.18238,69.80055,69.32589,69.42801,69.48286,69.3096,69.02141,70.42617,70.97431,71.10531,70.66052,71.68668,71.58466,70.23408,70.56424,70.93905,68.91013,81.38,85.30324,87.53631,85.91771,62.69017],dat4=[];dat4[0]=[],dat4[1]=[],dat4[2]=[],option={color:["#7cffb2","#fddd60","#FF6347"],xAxis:{name:"时间 (s)",nameLocation:"middle",nameTextStyle:{fontWeight:"bolder",fontSize:20,lineHeight:56},axisLabel:{show:!0,fontSize:16},max:50,type:"value",minInterval:1},yAxis:{name:"伪距残差 (m)",nameLocation:"middle",nameTextStyle:{fontWeight:"bolder",fontSize:20,lineHeight:80},axisLabel:{show:!0,fontSize:16},type:"value",max:100,splitNumber:10},series:[{data:[],type:"line",smooth:!0},{data:[],type:"line",smooth:!0},{data:[],type:"line",smooth:!0}]};var pushIdx=0,intervalId=setInterval(function(){var e=pushIdx;dat4[0].push([e,dat1[e]]),dat4[1].push([e,dat2[e]]),dat4[2].push([e,dat3[e]]),pushIdx+=1,pushIdx>=51&&clearInterval(intervalId),myChart.setOption({series:[{data:dat4[0],type:"line",smooth:!0},{data:dat4[1],type:"line",smooth:!0},{data:dat4[2],type:"line",smooth:!0}]})},250);
