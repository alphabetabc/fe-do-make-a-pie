option={title:{text:"Awesome Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{type:"line",data:[220,182,191,234,290,330,310]}]};var myData=["彝族","德昂族","哈尼族","傣族","壮族","苗族","傈僳族","拉祜族","佤族","纳西族","瑶族","景颇族","布依族","布朗族","阿昌族","独龙族"],databeast={2006:[389,259,262,324,232,176,196,214,133,370,268,360,185,392,392,153],2007:[111,315,139,375,204,352,163,258,385,209,209,243,204,352,163,258],2008:[227,210,328,292,241,110,130,185,392,392,153,187,150,200,250,300],2009:[100,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2010:[280,128,255,254,313,143,360,343,338,163,333,317,263,302,372,163],2011:[121,388,233,309,133,308,297,283,349,273,229,238,224,291,185,203],2012:[200,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2013:[380,129,173,101,310,393,386,296,366,268,208,149,356,239,208,330],2014:[363,396,388,108,325,120,180,292,200,309,223,236,209,271,215,216],2015:[300,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2016:[100,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2017:[280,128,255,254,313,143,360,343,338,163,333,317,263,302,372,163]},databeauty={2006:[121,388,233,309,133,308,297,283,349,273,229,238,224,291,185,203],2007:[200,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2008:[380,129,173,101,310,393,386,296,366,268,208,149,356,239,208,330],2009:[363,396,388,108,325,120,180,292,200,309,223,236,209,271,215,216],2010:[300,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2011:[100,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2012:[280,128,255,254,313,143,360,343,338,163,333,317,263,302,372,163],2013:[389,259,262,324,232,176,196,214,133,370,268,360,185,392,392,153],2014:[111,315,139,375,204,352,163,258,385,209,209,243,204,352,163,258],2015:[227,210,328,292,241,110,130,185,392,392,153,187,150,200,250,300],2016:[100,350,300,250,200,150,100,150,200,250,300,350,400,350,300,250],2017:[280,128,255,254,313,143,360,343,338,163,333,317,263,302,372,163]},timeLineData=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];option={baseOption:{backgroundColor:"#000",timeline:{show:!0,axisType:"category",tooltip:{show:!0,formatter:function(e){return console.log(e),e.name+"年数据统计"}},autoPlay:!0,currentIndex:6,playInterval:1e3,label:{normal:{show:!0,interval:"auto",formatter:"{value}年"}},data:[]},title:{textStyle:{color:"#fff",fontSize:16},subtext:"云南特有16个少数民族"},legend:{data:["帅哥","美女"],top:4,right:"10%",textStyle:{color:"#fff"}},tooltip:{show:!0,trigger:"axis",formatter:"{b}<br/>{a}: {c}人",axisPointer:{type:"shadow"}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},grid:[{show:!1,left:"4%",top:60,bottom:60,containLabel:!0,width:"46%"},{show:!1,left:"50.5%",top:80,bottom:60,width:"0%"},{show:!1,right:"4%",top:60,bottom:60,containLabel:!0,width:"46%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!0,textStyle:{color:"#B2B2B2",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#1F2022",width:1,type:"solid"}}},{gridIndex:1,show:!1},{gridIndex:2,type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!0,textStyle:{color:"#B2B2B2",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#1F2022",width:1,type:"solid"}}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,margin:8,textStyle:{color:"#D9EA0",fontSize:12}},data:myData},{gridIndex:1,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{color:"#8D9EA0",fontSize:12}},data:myData.map(function(e){return{value:e,textStyle:{align:"center"}}})},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{color:"#8D9EA0",fontSize:12}},data:myData}],series:[]},options:[]};for(var i=0;i<timeLineData.length;i++)option.baseOption.timeline.data.push(timeLineData[i]),option.options.push({title:{text:"少数民族"+timeLineData[i]+"各地少数民族帅哥美女统计"},series:[{name:"帅哥",type:"bar",barGap:20,barWidth:20,label:{normal:{show:!1},emphasis:{show:!0,position:"left",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#559F83"},emphasis:{color:"#08C7AE"}},data:databeast[timeLineData[i]]},{name:"美女",type:"bar",barGap:20,barWidth:20,xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!1},emphasis:{show:!0,position:"right",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#F58989"},emphasis:{color:"#F84646"}},data:databeauty[timeLineData[i]]}]});
