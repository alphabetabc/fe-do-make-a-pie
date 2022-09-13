let majorArr=[["经贸学院","金融学","经济学","注册会计"],["教育学院","应用心理","思想政治","学前教育"],["电信学院","电子科技","机电应用"],["法学院","国际政治","马克思","法学","国际法学"],["管理学院","工商管理"],["外国语学院","同声传译","日语"],["传播学院","新闻学","新媒体"],["药学院","中医学"],["医学院","口腔医学"]],dataArr=[["金融学","rgba(45, 154, 255, 1)",!1],["经济学","rgba(45, 154, 255, 1)",!1],["注册会计","rgba(45, 154, 255, 1)",!1],["应用心理","rgba(150, 137, 244, 1)",!1],["思想政治","rgba(150, 137, 244, 1)",!1],["学前教育","rgba(150, 137, 244, 1)",!1],["电子科技","rgba(72, 213, 157, 1)",!1],["机电应用","rgba(72, 213, 157, 1)",!1],["国际政治","rgba(255, 155, 75, 1)",!1],["马克思","rgba(255, 155, 75, 1)",!1],["法学","rgba(255, 155, 75, 1)",!1],["国际法学","rgba(255, 155, 75, 1)",!1],["工商管理","rgba(45, 213, 255, 1)",!0],["同声传译","rgba(85, 173, 255, 1)",!0],["日语","rgba(85, 173, 255, 1)",!0],["新闻学","rgba(107, 230, 17, 1)",!0],["新媒体","rgba(107, 230, 17, 1)",!0],["中医学","rgba(255, 98, 142, 1)",!0],["口腔医学","rgba(255, 98, 142, 1)",!0]],linkArr=[["金融学","工商管理",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(45, 154, 2550, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["金融学","同声传译",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(45, 154, 2550, 1)"},{offset:1,color:"rgba(85, 213, 2550, 1)"}]}],["金融学","新闻学",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(45, 154, 2550, 1)"},{offset:1,color:"rgba(107, 213, 2550, 1)"}]}],["经济学","日语",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(45, 154, 2550, 1)"},{offset:1,color:"rgba(85, 173, 2550, 1)"}]}],["注册会计","新媒体",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(45, 154, 2550, 1)"},{offset:1,color:"rgba(107, 230, 170, 1)"}]}],["应用心理","工商管理",24,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(150, 137, 2440, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["思想政治","中医学",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(150, 137, 2440, 1)"},{offset:1,color:"rgba(255, 98, 1420, 1)"}]}],["学前教育","口腔医学",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(150, 137, 2440, 1)"},{offset:1,color:"rgba(255, 98, 1420, 1)"}]}],["学前教育","中医学",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(150, 137, 2440, 1)"},{offset:1,color:"rgba(255, 98, 1420, 1)"}]}],["机电应用","新媒体",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(72, 213, 1570, 1)"},{offset:1,color:"rgba(107, 230, 170, 1)"}]}],["电子科技","新闻学",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(72, 213, 1570, 1)"},{offset:1,color:"rgba(107, 230, 170, 1)"}]}],["机电应用","中医学",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(72, 213, 1570, 1)"},{offset:1,color:"rgba(255, 98, 1420, 1)"}]}],["机电应用","同声传译",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(72, 213, 1570, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["机电应用","工商管理",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(72, 213, 1570, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["国际政治","工商管理",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(255, 155, 750, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["马克思","工商管理",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(255, 155, 750, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["法学","工商管理",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(255, 155, 750, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}],["国际法学","工商管理",5,{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(255, 155, 750, 1)"},{offset:1,color:"rgba(45, 213, 2550, 1)"}]}]],links=linkArr.map(o=>({source:o[0],target:o[1],value:o[2],lineStyle:{color:o[3]}})),majorValue={},majorLeft={};links.map(o=>{majorLeft[o.source]=!0,majorValue[o.source]=majorValue[o.source]?majorValue[o.source]+o.value:o.value,majorValue[o.target]=majorValue[o.target]?majorValue[o.target]+o.value:o.value});let data=dataArr.map(o=>({name:o[0],itemStyle:{color:o[1]},label:{position:o[2]?"right":"left",textStyle:{fontSize:13,fontFamily:"SourceHanSansCN-Regular",color:"#666666"}},value:majorValue[o[0]]})),majorList=majorArr.map(o=>{let r=[...o];return{name:r.shift(),revert:!majorLeft[r[0]],majorList:r.map(e=>({name:e,value:majorValue[e]}))}}),preName=[],preLink=[];majorList.map(o=>{preName.push({name:o.name,label:{position:o.revert?"right":"left",color:"rgba(136, 136, 136, 1)"},itemStyle:{color:"transparent"}}),o.majorList.map(r=>{preLink.push({source:o.revert?r.name:o.name,target:o.revert?o.name:r.name,value:r.value,lineStyle:{color:"transparent"},emphasis:{lineStyle:{color:"transparent"}}})})});let links2=links.map(o=>({...o,lineStyle:{color:"transparent"}})),data2=data.map(o=>({...o,itemStyle:{color:"transparent"},label:{color:"transparent"}}));option={title:{text:"各专业转入转出情况",left:"0"},tooltip:{trigger:"item",triggerOn:"mousemove",formatter:o=>o.dataType=="edge"?`<span style="color:rgba(0, 255, 252, 1)">${o.data.source}</span>
                转
                <span style="color:rgba(0, 255, 252, 1)">${o.data.target}</span>
                <br/>
                <span style="color:rgba(0, 255, 252, 1)">${o.data.value}人</span>`:`<span style="color:rgba(0, 255, 252, 1)">${o.data.name}</span>
                <br/>
                ${o.data.label.position=="left"?"共转出":"共转入"}
                <span style="color:rgba(0, 255, 252, 1)">${o.value}人</span>
                `,rich:{textOther:{color:"rgba(0, 255, 252, 1)"}},extraCssText:"padding:20px;background:rgba(21, 64, 92, 1);width:123px;height:40px;fontSize:15px"},xAxis:{data:["转出专业","转入专业"],boundaryGap:!1,axisLabel:{color:"rgba(136, 136, 136, 1)",fontSize:13},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{show:!1},grid:{left:200,right:200,top:0,height:80,containLabel:!0},series:[{left:200,right:200,top:100,layoutIterations:0,type:"sankey",focusNodeAdjacency:"allEdges",itemStyle:{borderWidth:0,borderColor:"#aaa"},lineStyle:{color:"source",curveness:.5},nodeGap:1,data,links},{left:100,right:100,top:100,layoutIterations:0,type:"sankey",focusNodeAdjacency:"allEdges",itemStyle:{borderWidth:0,borderColor:"#aaa"},lineStyle:{color:"source",curveness:.5},silent:!0,nodeGap:1,data:[...preName,...data2],links:[...preLink,...links2]}]};