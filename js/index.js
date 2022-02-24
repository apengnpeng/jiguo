// 小贝音响倒计时
var date1 = new Date();
var date2 = new Date('02 28,2022');
var t1 = date1.getTime();
var t2 = date2.getTime();
var t3 = t2-t1;
var ss = parseInt(t3/1000);
var num = ss;
var timer= setInterval(function(){
        num--;
        var s=parseInt(num%60)-0;
        var m = parseInt(num/60%60);
        var h =parseInt(num/60/60%24);
         var d = parseInt(num/60/60/24);
        p33.innerHTML='申请时间剩余：'+'<span>'+d+'</span>'+'天'+'<span>'+h+'</span>'+'小时'+'<span>'+m+'</span>'+'分钟'+s
    },1000)



//     封装ajax
function oajax(url,move){
var oajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
oajax.open('get',url,true);
oajax.send();
oajax.onreadystatechange = function(){
    if(oajax.readyState ===4 && oajax.status === 200){
            var res=JSON.parse(oajax.responseText); //拿到数据结果
            move(res);  //调用函数（传入结果（实参））
        }
    }
}


// 轮播图
window.onload = function(){
    function outmove(){
    var lbt = document.querySelector('.lbt');
    var timer=null,timer2=null;  //计时器id
    var index =1;
    timer = setInterval(function(){
        index++;
        if(index>=3){
            index=0;
            lbt.scrollLeft = 0;
        }
        lb1();
    },1000)

function lb1(){   //图片滚动函数
    var setp=0;             //起始步
    var maxsetp = 20;      //最大步
    var start = lbt.scrollLeft;          //开始位置
    var end = 1001*index; //结束位置
    var mi = (end-start)/ maxsetp;   //每步走多少
    timer2 = setInterval(function(){  
        setp++;   //步数开始增加
        if(setp>=maxsetp){   //当走到20 即最大步数 把当前图片宽度走完 一张图片结束
            clearInterval(timer2);        //结束一个 清除当前计时器
        }
        start += mi;         //下一次的开始位置（每次增加一步的距离）
        lbt.scrollLeft=start; //滚动条滚动距离（同样的 每次滚动一步的距离）
    },10)   //10和毫秒走一步
}
    }
    outmove()

// document.addEventListener('visibilitychange',function(){
//     // 当其选项卡的内容变得可见或隐藏时，会在文档上触发visibilitychange(能见度更改)事件
//     if(this.visibilityState=="hidden"){       //当隐藏（也就是切换页面了 就清除计时器）
//     console.log(this.visibilityState);

//     clearInterval(timer)
//     clearInterval(timer2)
//  };
//     if(this.visibilityState=="visible"){    //当出现（也就是打开这个页面了 就从新调用轮播图函数）
//     console.log(this.visibilityState);

//     outmove()
// };
// })
}
