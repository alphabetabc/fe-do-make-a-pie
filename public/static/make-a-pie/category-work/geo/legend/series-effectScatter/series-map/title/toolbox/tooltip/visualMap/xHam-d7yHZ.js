const JJJ="/asset/get/s/data-1568010881871-0of0Mrx7V.json";$.getJSON(JJJ,l=>{echarts.registerMap("JJJ",l);const s={厦门市:[118.11022,24.490474,20],福州市:[119.306239,26.075302,60],泉州市:[118.589421,24.908853,5],漳州市:[117.661801,24.510897,33],龙岩市:[117.02978,25.091603,20],莆田市:[119.007558,25.431011,8]};let o=[{dsid:592,name:"厦门市",value:109},{dsid:591,name:"福州市",value:999},{dsid:595,name:"泉州市",value:499},{dsid:596,name:"漳州市",value:1},{dsid:597,name:"龙岩市",value:1},{dsid:594,name:"莆田市",value:1}],n=function(e){let r=[];for(var t=0;t<e.length;t++){var a=s[e[t].name];a&&r.push({name:e[t].name,value:a.concat(e[t].value)})}return r};option={title:{text:"",subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/> {b}: {c}",textStyle:{fontSize:"24px"}},legend:{show:!1,orient:"horizontal",x:"left",data:[""]},geo:{map:"JJJ",left:"150",itemStyle:{normal:{color:"rgba(37,124,169)",label:{show:!0,textStyle:{color:"rgb(249, 249, 249)"}},borderWidth:3,borderColor:"rgba(37,124,169)",shadowColor:"rgba(37,124,169)",shadowOffsetY:15,shadowOffsetX:8}}},visualMap:{show:!1,x:"left",y:"center",seriesIndex:[0],min:1e3,max:3e3,text:["高","低"],color:["rgb(11,85,142)","rgb(13,106,177)"],textStyle:{color:"#fff"}},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},roamController:{show:!1,x:"right",mapTypeControl:{china:!1}},series:[{name:"行业：'全部'",type:"map",mapType:"JJJ",left:"150",roam:!1,itemStyle:{color:["rgb(11,85,142)","rgb(13,106,177)"],normal:{label:{show:!0,textStyle:{color:"rgb(249, 249, 249)"}},borderWidth:3,borderColor:"rgba(37,124,169)",areaColor:"rgba(20,78,139,1)"},emphasis:{label:{show:!0},borderColor:"#3baced",areaColor:"#0b558e"}},data:o},{name:"",type:"effectScatter",coordinateSystem:"geo",color:"rgba(209,250,12,0.5)",symbolSize:function(e){return e[2]/1},tooltip:{show:!1},label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"rgba(209,250,12,0.5)"}},zlevel:1,data:n(o)}]},myChart.setOption(option)});