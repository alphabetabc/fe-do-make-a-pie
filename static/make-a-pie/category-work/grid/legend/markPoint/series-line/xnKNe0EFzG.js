var predictEVFVC="0.0",predictFEV1="3.78",predictFEV1FVC="80.37",predictFVC="4.52",predictMEF25="2.27",predictMEF50="5.14",predictMEF75="8.04",predictMMEF7525="4.48",predictPEF="9.32";option={legend:{show:!0,orient:"vertical",right:20,top:50,itemGap:4,selected:!0,data:[{name:"之前",icon:"line",icon:"image://asset/get/s/data-1555323032699-byXK6EYDs.png"},{name:"之后1",icon:"line",icon:"image://asset/get/s/data-1555323013467-soKfGBDiV.png"},{name:"之后2",icon:"line",icon:"image://asset/get/s/data-1555323013467-soKfGBDiV.png"}]},xAxis:{min:"0",max:"8",splitNumber:8,name:"容积(L)",position:"bottom",nameGap:5,splitLine:{show:!1},axisLabel:{showMinLabel:!1,showMaxLabel:!1,margin:"-150"},axisTick:{show:!0,inside:!0},interval:1,show:!0},grid:{right:"10%"},yAxis:{min:"15",max:"-9",axisLabel:{showMinLabel:!1,showMaxLabel:!1},splitNumber:10,axisTick:{show:!0,inside:!0},name:"流速(L/S)",splitLine:{show:!1},show:!0},series:predictFVC>0?[{type:"line",smooth:!1,animation:!1,symbol:"none",data:[[0,predictPEF],[9,predictPEF]],itemStyle:{normal:{lineStyle:{color:"#333333",width:1,type:"dotted"}}},markPoint:{label:{color:"#000"},itemStyle:{color:"transparent"},data:[{xAxis:8,yAxis:predictPEF,value:"PEF",symbolOffset:[-13,35]}]}},{type:"line",symbol:"circle",symbolSize:4,hoverAnimation:!1,animation:!1,color:"#333333",data:[[0,0],[Number(predictFVC)/4,predictMEF75],[Number(predictFVC)/2,predictMEF50],[Number(predictFVC)/4*3,predictMEF25],[Number(predictFVC),0]],itemStyle:{normal:{lineStyle:{color:"#333333",width:1,type:"dotted"}}},markPoint:{label:{color:"#000",position:[20,38],formatter:function(e){return e.data.value.indexOf("MEF")!=-1?"{gray|MEF}{green|"+e.data.value.split("MEF")[1]+"%}":e.data.value},rich:{gray:{color:"red",fontSize:"12"},green:{color:"green",fontSize:"8",padding:[-4,0,0,3]}}},itemStyle:{color:"transparent"},data:[{xAxis:Number(predictFVC)/4,yAxis:predictMEF75,value:"MEF75"},{xAxis:Number(predictFVC)/2,yAxis:predictMEF50,value:"MEF50"},{xAxis:Number(predictFVC)/4*3,yAxis:predictMEF25,value:"MEF25"},{xAxis:predictFVC,yAxis:0,value:"FVC",symbolOffset:[0,-5]}]}},{name:"之前",type:"line",smooth:!0,symbol:"none",data:[[3.909,0],[3.905,-.25],[3.896,-.216],[3.889,-.2],[3.88,-.216],[3.872,-.183],[3.87,-.133],[3.87,0],[3.87,.1],[3.87,.083],[3.87,-.05],[3.87,-.066],[3.87,.05],[3.87,-.1],[3.87,-.116],[3.87,-.116],[3.87,0],[3.87,.083],[3.87,.083],[3.87,0],[3.87,.05],[3.87,.05],[3.87,.05],[3.87,0],[3.87,.05],[3.87,-.05],[3.865,-.283],[3.847,-.616],[3.792,-1.283],[3.731,-1.683],[3.659,-1.9],[3.581,-2.033],[3.499,-2.05],[3.414,-2.166],[3.325,-2.3],[3.231,-2.366],[3.136,-2.4],[3.039,-2.433],[2.942,-2.416],[2.845,-2.433],[2.746,-2.483],[2.648,-2.433],[2.549,-2.466],[2.451,-2.4],[2.355,-2.5],[2.258,-2.416],[2.162,-2.383],[2.066,-2.383],[1.972,-2.35],[1.88,-2.333],[1.784,-2.416],[1.687,-2.416],[1.59,-2.433],[1.494,-2.4],[1.398,-2.416],[1.302,-2.366],[1.209,-2.333],[1.114,-2.383],[1.019,-2.4],[.924,-2.383],[.828,-2.366],[.734,-2.283],[.646,-2.183],[.56,-2.1],[.479,-1.966],[.402,-1.816],[.335,-1.566],[.279,-1.25],[.235,-1],[.199,-.8],[.17,-.733],[.14,-.75],[.114,-.483],[.106,.05],[.106,0],[.106,.066],[.108,.15],[.114,.133],[.113,-.133],[.11,-.066],[.11,.083],[.111,.116],[.117,.166],[.12,.05],[.12,0],[.116,-.15],[.112,-.083],[.112,.083],[.112,.066],[.112,0],[.112,-.083],[.109,-.15],[.101,-.25],[.091,-.25],[.085,-.1],[.085,-.1],[.078,-.183],[.077,-.066],[.077,-.05],[.075,-.216],[.06,-.45],[.039,-.566],[.019,-.466],[.003,-.266],[.004,.116],[.004,.066],[.005,.066],[0,-.116],[.003,.116],[.003,0],[.004,.083],[.004,-.05],[.006,.116],[.006,0],[.009,.116],[.009,-.066],[.01,.116],[.015,.116],[.015,.083],[.015,0],[.015,0],[.015,0],[.015,0],[.015,0],[.015,.05],[.015,.05],[.015,0],[.015,0],[.015,.05],[.015,.05],[.015,.066],[.015,.083],[.015,0],[.015,-.05],[.015,-.116],[.009,-.183],[.01,.3],[.13,4.033],[.372,7.466],[.706,8.883],[1.067,9],[1.415,8.466],[1.745,8.033],[2.039,6.75],[2.272,5.35],[2.467,4.6],[2.635,3.95],[2.785,3.55],[2.917,3.15],[3.034,2.7],[3.136,2.433],[3.227,2.183],[3.308,1.883],[3.38,1.716],[3.445,1.566],[3.506,1.45],[3.562,1.35],[3.614,1.25],[3.661,1.116],[3.703,1.033],[3.743,.95],[3.78,.916],[3.815,.833],[3.847,.733],[3.873,.6],[3.897,.6],[3.92,.566],[3.942,.533],[3.962,.466],[3.979,.416],[3.995,.4],[4.009,.266],[4.015,.066],[4.016,0],[4.018,.083],[4.021,.066],[4.02,-.083],[4.015,-.1],[4.014,.05],[4.016,0],[4.017,.05],[4.018,.05],[4.02,.05],[4.022,.05],[4.023,0],[4.025,.05]],itemStyle:{normal:{lineStyle:{color:"#333333",width:2}}},markPoint:{data:[{type:"max",valueIndex:1,symbol:"triangle",symbolSize:[20,18],itemStyle:{color:"rgba(0, 0, 0, 0.0)",borderColor:"#000000",borderWidth:"1"},label:{show:!1}}]}},{name:"之后1",type:"line",smooth:!0,symbol:"none",data:[[3.539,0],[3.536,-.066],[3.536,0],[3.533,-.116],[3.527,-.133],[3.527,.083],[3.53,.066],[3.527,-.15],[3.519,-.25],[3.508,-.266],[3.497,-.25],[3.487,-.266],[3.477,-.266],[3.47,0],[3.47,-.066],[3.47,.1],[3.47,.066],[3.47,-.083],[3.47,-.1],[3.47,0],[3.47,0],[3.47,-.066],[3.47,-.116],[3.463,-.3],[3.447,-.466],[3.425,-.616],[3.391,-.9],[3.347,-1.283],[3.285,-1.766],[3.203,-2.2],[3.109,-2.433],[3.011,-2.383],[2.915,-2.4],[2.819,-2.4],[2.723,-2.433],[2.624,-2.45],[2.527,-2.383],[2.428,-2.433],[2.331,-2.45],[2.233,-2.416],[2.136,-2.433],[2.037,-2.45],[1.94,-2.433],[1.843,-2.4],[1.747,-2.383],[1.65,-2.45],[1.552,-2.516],[1.453,-2.516],[1.355,-2.416],[1.259,-2.416],[1.162,-2.4],[1.067,-2.366],[.976,-2.25],[.884,-2.35],[.789,-2.366],[.695,-2.333],[.603,-2.266],[.515,-2.2],[.43,-2.083],[.348,-1.966],[.274,-1.733],[.209,-1.55],[.151,-1.333],[.105,-.966],[.074,-.6],[.057,-.333],[.048,-.166],[.041,-.183],[.033,-.25],[.02,-.35],[.009,-.183],[.008,-.116],[.001,-.15],[0,.05],[0,-.083],[0,.066],[0,.066],[.01,.466],[.098,2.983],[.274,5.566],[.539,7.166],[.835,7.483],[1.138,7.633],[1.446,7.833],[1.757,7.616],[2.044,6.766],[2.275,5.183],[2.466,4.55],[2.643,4.266],[2.805,3.833],[2.95,3.45],[3.076,2.883],[3.183,2.516],[3.276,2.166],[3.355,1.85],[3.424,1.616],[3.485,1.433],[3.537,1.25],[3.585,1.15],[3.629,1.05],[3.67,1.016],[3.709,.95],[3.747,.9],[3.78,.8],[3.811,.75],[3.84,.7],[3.867,.633],[3.891,.566],[3.911,.466],[3.927,.35],[3.94,.3],[3.95,.216],[3.959,.266],[3.971,.283],[3.982,.3],[3.994,.283],[4.005,.233],[4.013,.15],[4.018,.15],[4.026,.2],[4.033,.166],[4.038,.083],[4.042,.116],[4.047,.1],[4.048,0],[4.049,.05],[4.05,0],[4.053,.133],[4.059,.15],[4.064,.116],[4.068,.066],[4.068,-.05],[4.067,0],[4.067,0],[4.067,.05],[4.069,0],[4.07,.05],[4.071,0],[4.071,0],[4.071,0],[4.071,0],[4.071,0],[4.067,-.25],[4.058,-.216],[4.051,-.2],[4.042,-.216],[4.034,-.183],[4.032,-.133],[4.032,0],[4.032,.1],[4.032,.083],[4.032,-.05],[4.032,-.066],[4.032,.05],[4.032,-.1],[4.032,-.116],[4.032,-.116],[4.032,0],[4.032,.083],[4.032,.083],[4.032,0],[4.032,.05],[4.032,.05],[4.032,.05],[4.032,0],[4.032,.05],[4.032,-.05],[4.027,-.283],[4.009,-.616],[3.954,-1.283],[3.893,-1.683],[3.821,-1.9],[3.743,-2.033],[3.661,-2.05],[3.576,-2.166],[3.487,-2.3],[3.393,-2.366],[3.298,-2.4],[3.201,-2.433],[3.104,-2.416],[3.007,-2.433],[2.908,-2.483],[2.81,-2.433],[2.711,-2.466],[2.613,-2.4],[2.517,-2.5],[2.42,-2.416],[2.324,-2.383],[2.228,-2.383],[2.134,-2.35],[2.042,-2.333],[1.946,-2.416],[1.849,-2.416],[1.752,-2.433],[1.656,-2.4],[1.56,-2.416],[1.464,-2.366],[1.371,-2.333],[1.276,-2.383],[1.181,-2.4],[1.086,-2.383],[.99,-2.366],[.896,-2.283],[.808,-2.183],[.722,-2.1],[.641,-1.966],[.564,-1.816],[.497,-1.566],[.441,-1.25],[.397,-1],[.361,-.8],[.332,-.733],[.302,-.75],[.276,0]],itemStyle:{normal:{lineStyle:{color:"#333333",width:1}}},markPoint:{data:[{type:"max",name:"最小值",valueIndex:1,symbol:"circle",symbolSize:[18,18],itemStyle:{color:"rgba(0, 0, 0, 0.0)",borderColor:"#333333",borderWidth:"1"},label:{show:!1}}]}},{name:"之后2",type:"line",smooth:!0,symbol:"none",data:[[2.631,-.1],[2.625,-.3],[2.606,-.6],[2.563,-1],[2.516,-1.35],[2.449,-1.933],[2.358,-2.383],[2.251,-2.9],[2.127,-3.266],[1.99,-3.483],[1.851,-3.45],[1.713,-3.466],[1.574,-3.483],[1.436,-3.4],[1.302,-3.3],[1.172,-3.183],[1.048,-3.033],[.932,-2.8],[.825,-2.616],[.724,-2.483],[.627,-2.366],[.529,-2.383],[.437,-2.25],[.35,-2.083],[.269,-2],[.192,-1.833],[.125,-1.5],[.073,-1.15],[.035,-.75],[.016,-.266],[.013,-.183],[.003,-.166],[.003,.083],[.003,.083],[.003,-.05],[0,-.066],[.006,.216],[.012,.05],[.013,.116],[.022,.283],[.033,.283],[.048,.433],[.076,.466],[.103,.95],[.162,2.083],[.292,4.15],[.491,5.466],[.716,5.65],[.936,5.316],[1.137,4.783],[1.317,4.283],[1.477,3.8],[1.622,3.466],[1.754,3.233],[1.878,2.966],[1.992,2.716],[2.094,2.416],[2.185,2.2],[2.269,2],[2.347,1.883],[2.421,1.816],[2.493,1.816],[2.563,1.666],[2.626,1.5],[2.682,1.35],[2.735,1.283],[2.786,1.266],[2.835,1.216],[2.883,1.166],[2.93,1.15],[2.975,1.1],[3.016,.983],[3.054,.933],[3.091,.916],[3.125,.783],[3.151,.566],[3.171,.45],[3.189,.45],[3.206,.45],[3.225,.466],[3.243,.45],[3.26,.416],[3.277,.416],[3.293,.416],[3.309,.416],[3.326,.4],[3.342,.383],[3.357,.4],[3.373,.383],[3.385,.266],[3.394,.183],[3.401,.166],[3.408,.2],[3.416,.2],[3.423,.133],[3.428,.1],[3.431,.083],[3.434,.083],[3.438,.083],[3.44,.066],[3.443,.066],[3.445,.066],[3.448,.066],[3.45,.05],[3.453,.066],[3.455,.05],[3.457,.066],[3.46,.066],[3.462,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.05],[3.465,.066],[3.465,.083],[3.465,.066],[3.465,.066],[3.465,.083],[3.465,.083],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.05],[3.465,.05],[3.465,.066],[3.465,.05],[3.465,.05],[3.465,.05],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.05],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.083],[3.465,.083],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.083],[3.465,.083],[3.465,.066],[3.465,.083],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.083],[3.465,.066],[3.465,.05],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.05],[3.465,.05],[3.465,.066],[3.465,.066],[3.465,.066],[3.465,.05],[3.465,.066],[3.465,.05],[3.465,.066],[3.465,.05],[3.465,.05],[3.465,.05],[3.465,.05],[3.465,-.083],[3.455,-.433],[3.396,-1.25],[3.331,-1.933],[3.24,-2.483],[3.122,-3.416],[2.967,-4.15],[2.791,-4.566],[2.601,-4.85],[2.406,-4.883],[2.21,-4.883],[2.019,-4.666],[1.835,-4.516],[1.66,-4.283],[1.494,-4],[1.339,-3.75],[1.197,-3.35],[1.071,-3],[.961,-2.516],[.872,-1.9],[.812,0]],itemStyle:{normal:{lineStyle:{color:"#333333",width:1}}},markPoint:{data:[{type:"max",name:"最小值",valueIndex:1,symbol:"circle",symbolSize:[18,18],itemStyle:{color:"rgba(0, 0, 0, 0.0)",borderColor:"#333333",borderWidth:"1"},label:{show:!1}}]}}]:[]};
