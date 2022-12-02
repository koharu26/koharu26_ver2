  // ■■URLパラメータの取得■■
  function getUrlParam(param){
    var pageUrl = window.location.search.substring(1); //URLパラメータを取得（substringで1文字目の「?」はカット）
    var urlVar = pageUrl.split('&'); //「&」を基準に分割して配列に格納

    for (var i = 0; i < urlVar.length; i++){
      var paramName = urlVar[i].split('='); //「=」を基準に分割して配列に格納
        if (paramName[0] == param) {
          if (param == "area") {
            var areaName = areaChange(paramName[1]);
            return decodeURI(areaName);

          } else if (param == "position0") {
            return decodeURI("指定なし");

          } else if (param == "gender") {
            var genderValue = genderChange(paramName[1]);
            return decodeURI(genderValue);
            
          } else {
            return decodeURI(paramName[1]);
          };
        };
    };

      // エリアの変換 //
      function areaChange(region){
        if (region == "hokkaido") {
          return ("北海道");
          } else if (region == "touhoku") {
            return ("東北");
          } else if (region == "kanto") {
            return ("関東");
          } else if (region == "chubu") {
            return ("中部");
          } else if (region == "kinki") {
            return ("近畿");
          } else if (region == "chugoku") {
            return ("中国");
          } else if (region == "shikoku") {
            return ("四国");
          } else if (region == "kyushu") {
            return ("九州");
          } else if (region == "okinawa") {
            return ("沖縄");
        };
      };

      // 性別の変換 //
      function genderChange(gender){
        if (gender == "male") {
          return ("男性");
          } else if (gender == "female") {
            return ("女性");
          } else {
            return ("指定なし");
        };
      };
  };



// ■■チェックボックスのチェック状況取得■■
function checkCondition(check){
  var checkTarget = document.getElementById(check);

  if (checkTarget.checked) {
    alert ("check!!");
  };
};


