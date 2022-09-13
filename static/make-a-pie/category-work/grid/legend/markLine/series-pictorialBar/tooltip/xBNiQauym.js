const createSvg=()=>`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            width="${30}"
            height="${30}"
        >
            <style>
            </style>
            <defs>
            </defs>
            <g>
                <circle cx="5" cy="5" r="5" fill="yellow" />
                <circle cx="25" cy="5" r="5" fill="green" />
                <circle cx="5" cy="25" r="5" fill="green" />
                <circle cx="25" cy="25" r="5" fill="yellow" />
            </g>
        </svg>
    `,cretateSvgUrl=e=>{const i=createSvg(e),t=new Blob([i],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(t)};option={backgroundColor:"#0f375f",tooltip:{},legend:{data:["all"],textStyle:{color:"#ddd"}},xAxis:[{data:["11月","12月","1月","2月","3月","4月"],axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:20,textStyle:{color:"#ddd",fontSize:14}}}],yAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},markLine:{z:-1},animationEasing:"linear",series:[{type:"pictorialBar",name:"all",barWidth:"30%",hoverAnimation:!0,label:{show:!0,position:"top",formatter:"{c} m",fontSize:16,color:"#e54035"},symbol:"image://"+cretateSvgUrl(),symbolRepeat:!0,symbolSize:["100%","100%"],symbolOffset:[0,0],symbolMargin:"20%",symbolPosition:"start",data:[1200,1200,1500,906,1500,669].map(e=>({value:e,animationDelay:function(i,t){return t.index*30}})),markLine:{symbol:["none","none"],label:{show:!1},lineStyle:{color:"#e54035",width:2},data:[{yAxis:844}]}}]};
