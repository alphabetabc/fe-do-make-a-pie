const createSvg=({width:t,height:s,shadowColor:e,shadowBlur:i,points:o})=>{const a=[`M${o[0][0]} ${o[0][1]}`];for(let r=1;r<o.length;r++)a.push(`L${o[r][0]} ${o[r][1]}`);a.push("Z");const l=a.join(" ");return`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            width="${t}"
            height="${s}"
        >
            <style>
                .st1 {
                    fill: transparent;
                    stroke: ${e};
                    stroke-width: ${i}px;
                    filter: url(#chart-inset-shadow);
                    clip-path: url(#chart-clip);
                }

            </style>
            <defs>
              
                <clipPath id="chart-clip">
                    <path d="${l}" />
                </clipPath>
                
                <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${i*.75}" />
            		<feMerge>
            			<feMergeNode in="gass" />
            		</feMerge>
            	</filter>

            </defs>
            <g>
                <path class="st1" d="${l}" />
            </g>
        </svg>
    `},cretateSvgUrl=t=>{const s=createSvg(t),e=new Blob([s],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(e)},dataSet=[["项目1","项目2","项目3","项目4","项目5"],[100,90,80,66,90],[70,30,60,86,20]],maxValue=[...dataSet[1],...dataSet[2]].reduce((t,s)=>Math.max(t,s),-1/0),radius=.8,theta=Math.PI*2/dataSet[2].length,getPoints=(t,s,e)=>s.map((i,o)=>{const a=o*theta,l=i/e,r=t-Math.sin(a)*t*l,n=t-Math.cos(a)*t*l;return[r,n]});option={backgroundColor:"#000000",tooltip:{},polar:{radius:radius*100+"%",center:["50%","50%"]},angleAxis:{type:"category",clockwise:!1,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1}},radiusAxis:{type:"value",max:100,splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},radar:{indicator:dataSet[0].map((t,s)=>({name:t,max:maxValue})),radius:radius*100+"%",center:["50%","50%"],shape:"polygon",splitNumber:4,name:{textStyle:{color:"#ffffff",fontSize:22}},splitArea:{areaStyle:{color:["rgba(255,255,255,0.1)","rgba(255,255,255,0.03)","rgba(255,255,255,0.1)","rgba(255,255,255,0.03)"]}},splitLine:{lineStyle:{color:["#6b6b6b","#6b6b6b","#6b6b6b","#6b6b6b","#6b6b6b","#6b6b6b"].reverse(),width:3}},axisLine:{lineStyle:{color:"rgba(238,238,238, 0.2)"}}},series:[{type:"custom",name:"s1-inset-shadow",silent:!0,coordinateSystem:"polar",data:[0],renderItem:(t,s)=>{const e=t.coordSys.r,i=t.coordSys.cx,o=t.coordSys.cy,a=i-e,l=o-e,r=2*e,n=2*e;return{type:"image",style:{image:cretateSvgUrl({width:r,height:n,shadowColor:"rgba(13, 178, 255, 1)",shadowBlur:30,points:getPoints(e,dataSet[1],100)}),x:a,y:l,width:r,height:n}}}},{name:"s1",type:"radar",tooltip:{trigger:"item"},data:[{value:dataSet[1]}],symbol:"circle",symbolSize:12,itemStyle:{normal:{color:"rgba(87,201,255,0.8)",borderColor:"rgba(87,201,255,0.2)",borderWidth:12}},areaStyle:{normal:{color:"transparent"}},lineStyle:{normal:{color:"rgba(13, 178, 255, 1)",width:5}}},{type:"custom",name:"s2-inset-shadow",silent:!0,coordinateSystem:"polar",data:[0],renderItem:(t,s)=>{const e=t.coordSys.r,i=t.coordSys.cx,o=t.coordSys.cy,a=i-e,l=o-e,r=2*e,n=2*e;return{type:"image",style:{image:cretateSvgUrl({width:r,height:n,shadowColor:"yellow",shadowBlur:30,points:getPoints(e,dataSet[2],100)}),x:a,y:l,width:r,height:n}}}},{name:"s2",type:"radar",tooltip:{trigger:"item"},data:[{value:dataSet[2]}],symbol:"circle",symbolSize:12,itemStyle:{normal:{color:"rgba(87,201,255,0.8)",borderColor:"rgba(87,201,255,0.2)",borderWidth:12}},areaStyle:{normal:{color:"transparent"}},lineStyle:{normal:{color:"yellow",width:5}},z:3}]};
