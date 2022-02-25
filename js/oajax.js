function oajax(url,id,dom){
    var oajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    oajax.open('get',url,true);
    oajax.send();
    oajax.onreadystatechange = function(){
        if(oajax.readyState ===4 && oajax.status === 200){
                var res=JSON.parse(oajax.responseText); //拿到数据结果
                render(res);  //调用函数（传入结果（实参））
            }
        }
        function render(res) {
            console.log(res);
            var rep = template(id, {
                value: res
            })
            //渲染到页面
            document.getElementsByClassName(dom)[0].innerHTML = rep
        }
    }
