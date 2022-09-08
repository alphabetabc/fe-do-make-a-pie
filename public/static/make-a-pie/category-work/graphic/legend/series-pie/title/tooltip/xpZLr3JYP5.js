var light="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMzgwREIzMDA5QzExRUI5QTU4QzIwQkNBMzA5NDdEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwMzgwREI0MDA5QzExRUI5QTU4QzIwQkNBMzA5NDdEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjAzODBEQjEwMDlDMTFFQjlBNThDMjBCQ0EzMDk0N0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjAzODBEQjIwMDlDMTFFQjlBNThDMjBCQ0EzMDk0N0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5iscWYAAACtUlEQVR42rTWS0hUURzH8TvjNEylpmZIBhIYTW1iygp6IEXSg5CCaJH2oE0EQkjRojYZVNgqK3DlogdBRUFhQVlqURklYVGQU0EoZKJWGkMmpdP3yO/CZZLm0Z0DH2bm3HPn/Od/7vzP8USjUcvRslGHCjzDTbTjPQbw23K5eWICOIATOIeZWIxpCuApnqMNvRhyO4BJuIbZWGSuIYgQ1mMBijT2Je4rO2F0uRGAmaAF9TiK0Zix+QpspV6XIQ9vlZ0XaNXnlAKowmmsxqM4901BMeZjHdbq+fmubDzALXRiMJEAsnAdAZQnub5+5GCuAjGZmafv6lcwj7Vs4b8yawJACEM4pM//w4cgtqEeH9CPT2hBBbz2ePumg+hDiQsBxMrBUtTgDQaxxhlAliK7o+itNMpTEFcx2fR5tV7m/96YjkIT08wD2Y2FyDUdXj04ETRZ6W/VKEODKuv4EoRxPs2pN7ZjBBeRYfd7VWoLsByFyorbrUQl3q95KvXXH89AJT5iWA9IHTaiEB4XfvkMtCGC47iiTNw289iDzP92Ky6gU4PN61lswKwUJ8/UE2/aGUf/XvXdm+gmM9lONKBbA1/rCzYhkODkptjU6v525DuulavwVcb7kjnYgsv4ops6cBIrMPUf9+7CT/2IkKPfrjut5n2iqQw4MvNKv2pA749glV1YZAl6Na4RBY5rOzCmJbdSWdfD6FFNv4TP+Ko016qcn8IP3NAe8A7VKMYTPERuqgHUaIOxPxdhN5rQpYlH9cSbzJXirvaAYV3bHLsZJeOYMuCf4FpQG1uV1tp5zUzarEKUbffHngnjNXMCakafjmnRJAtSpg4uPXaHT5WvTHuCfcAwMnQu9GiT+qZjmzms7klhckt7TsTZ4dMEpdinyMxkI3r9hTEFNF0H1/06jLrS/ggwADY7MGLBsx02AAAAAElFTkSuQmCC",uploadedDataURLgrey="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM2Q0UwRkJCMDA5QzExRUJBOEYwRkMwRUVFODYyQjcwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM2Q0UwRkJDMDA5QzExRUJBOEYwRkMwRUVFODYyQjcwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzZDRTBGQjkwMDlDMTFFQkE4RjBGQzBFRUU4NjJCNzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzZDRTBGQkEwMDlDMTFFQkE4RjBGQzBFRUU4NjJCNzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xX1SxAAABOElEQVR42pSTzUpCURSFTzcxInqIBCULalIPkDhQsknPINigiXMjqAZNSoQEBX0JfyBI9AWaeQuaCL1DERiZa8vasBO8XTd8sF13r3XP8Zy7cnr75OZqB+RBFmxRG4FH0ACvdtgzfRQ8gCEogm2wRpLU5FkNrKspYsxdkHbBJS8sgDhXONYVlOfMHZACmyRFTUt+32viLlO1LsEJGIAPMqB2YebOxOvxD1ulKNu4CtjCDWizF09eAjJm4M79X2XTZyQgZoTnEAF2Jua55evX9LNTGBnhIETAoenfPd4wrWKIADvTk4Am+KEgR1UKMJc44+hpSIAP6mbomkd1BDaI9C0+0xKPHzHLSpjbmCOLqq9b0VMYg2NQBZMA44RvztHz52sU4RzsgQp4A9/gE7xQ2+cV/lLTVIABANYnPotMXZQcAAAAAElFTkSuQmCC",uploadedDataURLgreen="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJENjAxRjQ3MDA5QzExRUI5MjlDRTc1MTc1MjJEODBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJENjAxRjQ4MDA5QzExRUI5MjlDRTc1MTc1MjJEODBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQ2MDFGNDUwMDlDMTFFQjkyOUNFNzUxNzUyMkQ4MEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ2MDFGNDYwMDlDMTFFQjkyOUNFNzUxNzUyMkQ4MEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6DYL0fAAABJElEQVR42mKUeP2PAQ1oAXEKEHsCsSJU7B4Q7wDiOUB8DVkxI5IBbEDcB8SZQMzEgB2AFM8G4kIg/o5sAEjzViB2YSAO7IO68BfMpn40zVuA2AmIeaHYCSoGA05Q14JdoA2kLwIxM1SyHoibcNhcA8TNUPZfINZnggYYTPNWPJpBoAWIN0PZID0pIAM8kBT0EuH/fiS2B8gLP6GBCAJ8QPyZgAGgMPkEZf9iYiAd/Edigw24hyRgQoQBpkjsh0zQFAYDhUQYgKxmD8iAudAoAQFfaFQx4IlGX6RonAMy4AoQz0RS1AyNKkcg5oZiEHsTUhpggOq5QrWk/AuIvYF4KjTDMODJTCCbfaB6UHIjDICSdio0gSlBFT4ABRg0O19BVgwQYAA2s0iki8iZOQAAAABJRU5ErkJggg==",uploadedDataURLred="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQyODdEMzlBMDA5QzExRUI5ODZCRTc4OThCMUVBOTMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQyODdEMzlCMDA5QzExRUI5ODZCRTc4OThCMUVBOTMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDI4N0QzOTgwMDlDMTFFQjk4NkJFNzg5OEIxRUE5MzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDI4N0QzOTkwMDlDMTFFQjk4NkJFNzg5OEIxRUE5MzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VIaE4AAABKElEQVR42pSTQUrDUBCGX9LiRnqIBrrRhRvd19BFS+0tIuKye6Fgu61ZdVHaXqJtoAvxBG6E4DLoKZSA2n/K/2AM+pr+8JFhMjPvJTPjfQZNU9AJiEAH1OnLwAbMwasO9lSBI/AAboFv/tY3mIE++BBHVSUnoGXcksI3oMEb5vakuJC8BiGokZA+q5C33X3CKZ4voMKXA3D/zw3uwJD2Fzjz+cNscuJIFo3AirbkRFKgrQLGZr9iZbelQKAczyUK6JjAN4frR9m7LmTKcV6iwIWy331OmFW/RAEd8ygFFmyJqMdWGUcbe6qNcymQgqkKGrJVl+CYiL1UM2CYk9pdKDvKVk/FUc5BF0y4MMaxTHLyFXN+baOVjPY1Byxg4Jv8MK5zqoO3AgwAue4/Fr4uWAEAAAAASUVORK5CYII=";let dataPie2=[{name:"正常运行",value:60},{name:"正在维修",value:100},{name:"发生离线",value:40}],dataColor2=[{os1:"#22ffff",os2:"#22ffff"},{os1:"#5288bb",os2:"#5288bb"},{os1:"#ff0950",os2:"#ff0950"}],legendData=[],seriesData=[],radiusValue=40,total=0;dataPie2.forEach(function(A,i,e){total+=A.value});for(let A=0;A<dataPie2.length;A++)legendData.push(dataPie2[A].name),seriesData.push({type:"pie",clockWise:!1,radius:[radiusValue-18*A+"%",radiusValue-18*A+1+"%"],center:["20%","50%"],label:{normal:{show:!1}},hoverAnimation:!1,startAngle:150*A,data:[{value:total-dataPie2[A].value,tooltip:{show:!1},itemStyle:{normal:{color:"#041e36",borderWidth:5,borderColor:"#041e36",label:{show:!1}}}},{value:dataPie2[A].value,name:dataPie2[A].name,itemStyle:{normal:{borderWidth:5,borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:dataColor2[A].os1},{offset:1,color:dataColor2[A].os2}]),color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:dataColor2[A].os1},{offset:1,color:dataColor2[A].os2}])}}}]});option={backgroundColor:"#021228",graphic:{elements:[{type:"image",style:{image:light,width:24,height:24},left:"17.5%",top:"30%"}]},title:[{subtext:"228",textAlign:"center",textStyle:{color:"#ffffff",fontSize:12,lineHeight:12},subtextStyle:{color:"#ffffff",fontSize:12},x:"19%",y:"center"}],tooltip:{trigger:"item",show:!0,formatter:"{b} : <br/>{d}%",backgroundColor:"rgba(0,0,0,0.7)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);"},legend:{right:"5px",top:"center",orient:"vertical",itemGap:20,itemWidth:19,itemHeight:19,formatter:function(A){let i,e;for(let l=0;l<dataPie2.length;l++)dataPie2[l].name===A&&(i=dataPie2[l].value,e=(i/total*100).toFixed(2));return[" {blue|"+A+"}: {white|"+i+"}"]},textStyle:{lineHeight:20,color:"#a5dbff",align:"right",rich:{white:{color:"#2dcdf0",align:"right",fontSize:18},blue:{color:"#a5dbff",align:"right"}}},data:[{name:"正常运行",icon:"image://"+uploadedDataURLgreen},{name:"发生离线",icon:"image://"+uploadedDataURLred},{name:"正在维修",icon:"image://"+uploadedDataURLgrey}]},series:seriesData};
