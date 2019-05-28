
  'use strict';
  const stage = ["準備中","準備中","準備中","準備中","準備中","準備中","準備中","準備中","準備中","準備中","準備中","準備中","ステージ開始","ダンスグループ","歌","大喜利","N高紹介?","午前の部終了","準備中","準備中","準備中","準備中","準備中","準備中","午後の部開始","ピクコン","シークレット","女装コンテスト","女装コンテスト","女装コンテスト","準備中","キャンフェス終了の合図"]
  function showClock1() {
    var nowTime = new Date();
    var nowmonth = nowTime.getMonth();
    var nowday = nowTime.getDay();
    var nowHour = nowTime.getHours();
    var nowMin  = nowTime.getMinutes();
    let offset = 9 * 6 + 3; //開始するHour * 6 + 開始するMin/10(切り捨て)
    let nownow = nowHour*6 + Math.floor(nowMin/10) - offset; 
    console.log(nownow)
    var msg;
    if(nowmonth < 12 || nowday < 9){
      msg = "<p class='text_ev'>今のステージ</p><p class='text_nowstage'> Coming Soon... </p>"
    }else if(nownow < 0 ||stage.length-1 < nownow){
      msg = "<p class='text_end'>N高等学校横浜キャンパス<br>キャンパスフェスティバルは<br>終了いたしました。<br>ご来場ありがとうございました。</p>"
    } else if(stage[nownow] == "準備中"){
      let tmp = nownow
      while(stage[nownow] == "準備中")nownow++;
      tmp = nownow - tmp;
      msg = "<p class='text_ev'>次のステージ</p><p class='text_nowstage'>" + stage[nownow] + "</p><p class='text_time'>約" + (tmp*10-nowMin%10) + "分後</p><p class~'text_schedule'><a href='Time.html'>今後のスケジュール</a></p>";
    } else {
      msg = "<p class='text_ev'>今のステージ</p><p class='text_nowstage'>" + stage[nownow] + "</p><p class='text_time'> を行なっています</p><p class~'text_schedule'><a href='Time.html'>今後のスケジュール</a></p>"
    }
    var nowSec  = nowTime.getSeconds();
    if(nowMin < 10) nowMin = "0" + nowMin
    if(nowHour < 10) nowHour = "0" + nowHour
    if(nowSec < 10) nowSec = "0" + nowSec
    
    document.getElementById("nowtime").innerHTML = msg;
 }
 setInterval('showClock1()',1000);


 //TOOD 9:30:00を0として10分ごとに1増やす15:00
 