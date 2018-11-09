var express = require('express');
var router = express.Router();

//const return_data = require('../module/base_fnc')

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    
    //res.set({ 'content-type': 'application/json;charset=utf-8' })
    let data = {
        test: "test"
    };

    res.json(data);

});

// post 
router.post('/MenuList', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.set({ 'content-type': 'application/json;charset=utf-8' })
    

    const ItemList = [
        { 
            Menukey : 12,
            ItemImage : "",
            MenuType : "SOCKET",
            bottom : null,
            MenuName : "APPmessager",
            Page : "/main/APPmessager"
        },
        { 
            Menukey : 2,
            MenuImage : "",
            MenuType : "SOCKET",
            bottom : null,
            MenuName : "ICUmessager",
            Page : "/main/ICUmessager"
        },
        { 
            Menukey : 3,
            MenuImage : "",
            MenuType : "WEBVIEW",
            bottom : null,
            MenuName : "ICSS",
            Page : "/main/ICSS"
        },
        {
            Menukey : 8,
            MenuImage : "",
            MenuType : "LOGOUT1",
            bottom : null,
            MenuName : "LOGOUT",
            Page : "/main/test"
        },
        {
            Menukey : 99,
            MenuImage : "",
            MenuType : "WEBVIEW",
            bottom : null,
            MenuName : "LOGOUT",
            Page : "/main/strap"
        },
        {
            Menukey : 1,
            MenuImage : "",
            MenuType : "WEBVIEW",
            MenuName : "LOGOUT",
            bottom : 1,
            Page : "/logout"
        },



    ];


    res.json(ItemList);

});

router.post('/MemberList', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.set({ 'content-type': 'application/json;charset=utf-8' })
    

    const MemberList = [
        { 
            no : 6141,
            name : "윤찬영",
            team : "develope",
            level : "주임",
            location_f : "b2",
            icu_title : "[전화관련 기술지원] 모바일 관련 유지보수",
            extension : 4302,
            icu_join : 1
        },
        { 
            no : 6186,
            name : "이진성",
            team : "develope",
            level : "주임",
            location_f : "b2",
            icu_title : "[2F 기술지원] 모바일(안드로이드)",
            extension : 4393,
            icu_join : 1
        },
        { 
            no : 2,
            name : "허주영",
            team : "develope",
            level : "사원",
            location_f : "b2",
            icu_title : "(주말상근)",
            extension : 0,
            icu_join : 0
        }
       
    ];


    res.json(MemberList);

});

router.post('/Login', function (req, res) {
    var user_name=req.body.email;
    var password=req.body.password;
    if(user_name=='admin' && password=='admin'){
        res.send('success');
    }
    else{
      res.send('Failure');
    }
})

router.post('/signin', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.set({ 'content-type': 'application/json;charset=utf-8' })
    console.log( req.body );

    const MemberList = [
        { 
            no : 6141,
            name : "윤찬영",
            team : "develope",
            level : "주임",
            location_f : "b2",
            icu_title : "[전화관련 기술지원] 모바일 관련 유지보수",
            extension : 4302,
            icu_join : 1
        },
        { 
            no : 6186,
            name : "이진성",
            team : "develope",
            level : "주임",
            location_f : "b2",
            icu_title : "[2F 기술지원] 모바일(안드로이드)",
            extension : 4393,
            icu_join : 1
        },
        { 
            no : 2,
            name : "허주영",
            team : "develope",
            level : "사원",
            location_f : "b2",
            icu_title : "(주말상근)",
            extension : 0,
            icu_join : 0
        }
       
    ];


    res.json(MemberList);

});

module.exports = router;
