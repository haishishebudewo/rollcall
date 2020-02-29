var class_information = [
    {name: "陈xx", gender: "男", student_id: "00000001", index: 1},
    {name: "陈X", gender: "男", student_id: "00000002", index: 2},
    {name: "陈X", gender: "男", student_id: "00000003", index: 3},//4
    {name: "赤xxx", gender: "男", student_id: "00000005", index: 4},
    {name: "邓xx", gender: "男", student_id: "00000006", index: 5},
    {name: "范xx", gender: "男", student_id: "00000007", index: 6},
    {name: "符x", gender: "女", student_id: "00000008", index: 7},
    {name: "龚xx", gender: "男", student_id: "00000009", index: 8},
    {name: "郭xx", gender: "女", student_id: "00000010", index: 9},
    {name: "何xx", gender: "男", student_id: "00000011", index: 10},
    {name: "何xx", gender: "女", student_id: "00000012", index: 11},
    {name: "宦x", gender: "男", student_id: "00000013", index: 12},
    {name: "姜Xx", gender: "男", student_id: "00000014", index: 13},
    {name: "江xxx", gender: "男", student_id: "00000015", index: 14},
    {name: "康xx", gender: "男", student_id: "00000016", index: 15},
    {name: "李x", gender: "女", student_id: "00000017", index: 16},
    {name: "廖xx", gender: "男", student_id: "00000018", index: 17},
    {name: "刘x", gender: "男", student_id: "00000019", index: 18},
    {name: "刘x", gender: "男", student_id: "00000020", index: 19},
    {name: "刘xx", gender: "女", student_id: "00000021", index: 20},
    {name: "吕xx", gender: "男", student_id: "000000122", index: 21},
    {name: "马xx", gender: "男", student_id: "00000023", index: 22},
    {name: "马X", gender: "男", student_id: "00000024", index: 23},
    {name: "毛xx", gender: "女", student_id: "00000025", index: 24},
    {name: "秦x", gender: "男", student_id: "00000026", index: 25},
    {name: "慎x", gender: "女", student_id: "00000028", index: 26},//27
    {name: "舒x", gender: "男", student_id: "00000029", index: 27},
    {name: "孙xx", gender: "男", student_id: "00000030", index: 28},
    {name: "唐xx", gender: "女", student_id: "00000031", index: 29},
    {name: "唐x", gender: "男", student_id: "00000032", index: 30},
    {name: "田x", gender: "男", student_id: "00000033", index: 31},//34
    {name: "王xx", gender: "男", student_id: "00000035", index: 32},
    {name: "王x", gender: "男", student_id: "00000036", index: 33},
    {name: "王x", gender: "男", student_id: "00000037", index: 34},
    {name: "文x", gender: "男", student_id: "00000038", index: 35},
    {name: "吴x", gender: "女", student_id: "00000039", index: 36},
    {name: "席x", gender: "男", student_id: "00000040", index: 37},
    {name: "鲜x", gender: "女", student_id: "00000041", index: 38},
    {name: "杨xx", gender: "男", student_id: "00000042", index: 39},
    {name: "易x", gender: "男", student_id: "00000043", index: 40},
    {name: "玉xxx", gender: "女", student_id: "1712212444", index: 41},
    {name: "扎xxx", gender: "男", student_id: "00000045", index: 42},
    {name: "张x", gender: "男", student_id: "00000046", index: 43},
    {name: "张x", gender: "男", student_id: "00000047", index: 44},
    {name: "张xx", gender: "男", student_id: "00000048", index: 45},
    {name: "张x", gender: "女", student_id: "00000049", index: 46},
    {name: "赵xx", gender: "女", student_id: "00000050", index: 47}];


// 获取对应id对象的函数
function my$(a) {
    return document.getElementById(a);
}

//获取对应标签名对象的函数
function getElement(a) {
    return document.getElementsByTagName(a);
}

var nameBtn = my$("classmate_name");
var inputBtnObj;
var timing;
var classmate_obj;
var student_ids;
//获取文本输入框
var input_btn_number = my$("input_btn_number");
var random_arr = [];

//处理时间个位
function getBit(bit) {
    return bit >= 10 ? bit : "0" + bit;
}

//获取当前时间
function time(times, branch, second) {
    var date = new Date();
    times = getBit(date.getHours());
    branch = getBit(date.getMinutes());
    second = getBit(date.getSeconds());
    return date.toLocaleDateString() + "\t" + times + ":" + branch + ":" + second;
}

//获取班级同学的name
for (let i = 0; i < class_information.length; i++) {
    inputBtnObj = document.createElement("input");
    nameBtn.appendChild(inputBtnObj);
    inputBtnObj.type = "button";
    inputBtnObj.value = class_information[i]["name"];
    inputBtnObj.id = "name_student_id" + (i + 1);


    //设置点击事件函数，查看同学信息
    function onclickINformation() {
        getFirstElementChild(my$("ul1")).innerHTML = "<h3>学生姓名：</h3>" + class_information[i].name;
        getNextElementSibling(getFirstElementChild(my$("ul1"))).innerHTML = "<h3>学生性别：</h3>" + class_information[i].gender;
        getLastElementChild(my$("ul1")).innerHTML = "<h3>学生学号：</h3>" + class_information[i].student_id;
    }

    getAddEventListener(my$("name_student_id" + (i + 1)), "click", onclickINformation);
}

//点击开始函数
function randomStart() {
    if (timing) {
        clearInterval(timing);
    }
    if (my$("input_btn_number").value == "" || my$("input_btn_number").value == 0) {
        alert("亲：请输入抽取的人数")
    }
    else {
        timing = setInterval(function () {
            for (var j = 0; j < class_information.length; j++) {
                my$("name_student_id" + class_information[j]["index"]).style.backgroundColor = "pink";
            }
            for (var i = 0; i < Number(my$("input_btn_number").value); i++) {
                student_ids = parseInt(Math.random() * 47 + 1);
                classmate_obj = my$("name_student_id" + student_ids);
                classmate_obj.style.backgroundColor = "red";
                random_arr.push(student_ids);
            }
            while (true) {
                if (random_arr.length > Number(my$("input_btn_number").value)) {
                    random_arr.shift();
                } else {
                    break;
                }
            }
        }, 200);
    }
}

//注册点击开始的点击事件，设置事件函数
getAddEventListener(my$("start"), "click", randomStart);

//点击结束函数
function randomEnd() {
    if (random_arr.length == 0) {
        alert("亲：请先点击开始")
    } else {
        clearInterval(timing);
        for (var i = 0; i < random_arr.length; i++) {
            let trObj = document.createElement("tr");
            my$("table_number").appendChild(trObj);
            let td_obj = document.createElement("td");
            trObj.appendChild(td_obj);
            td_obj.innerHTML = time();
            let td_one_obj = document.createElement("td");
            trObj.appendChild(td_one_obj);
            td_one_obj.innerHTML = class_information[random_arr[i] - 1].name + "<select style='margin-left: 6px '>" + "<option>已到</option>" + "<option>迟到</option>" + "<option>旷课</option>" + "<option>请假</option>" + "</select>";
            let td_two_obj = document.createElement("td");
            trObj.appendChild(td_two_obj);
            td_two_obj.innerHTML = class_information[random_arr[i] - 1].gender;
            let td_three_obj = document.createElement("td");
            trObj.appendChild(td_three_obj);
            td_three_obj.innerHTML = class_information[random_arr[i] - 1].student_id;
        }
    }
}

//注册点击结束的点击事件，设置事件函数
getAddEventListener(my$("end"), "click", randomEnd);

//百度搜索框
my$("input_btn_number").onkeyup = function () {
    var dataArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];
    if (my$("divObj1")) {
        my$("div_input_number").removeChild(my$("divObj1"));
    }
    let dataArrs = [];
    for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i].indexOf(this.value) == 0) {
            dataArrs.push(dataArr[i]);
        }
    }
    if (dataArrs.length == 0 || this.value.length == 0) {
        if (my$("divObj1")) {
            my$("div_input_number").removeChild(my$("divObj1"));
        }
        return;
    }
    let divObj = document.createElement("div");
    let inputObj = my$("div_input_number");
    divObj.style.width = "150px";
    divObj.style.border = "1px solid pink";
    divObj.id = "divObj1";
    inputObj.appendChild(divObj);
    let ulObj = document.createElement("ul");
    divObj.appendChild(ulObj);
    for (let i = 0; i < dataArrs.length; i++) {
        let liObj = document.createElement("li");
        liObj.style.listStyle = "none";
        liObj.style.cursor = "pointer";
        liObj.style.fontSize = 13 + "px";
        divObj.appendChild(liObj);
        liObj.innerHTML = dataArrs[i];
        getAddEventListener(liObj, "mouseover", function () {
            this.style.backgroundColor = "pink";
        });
        getAddEventListener(liObj, "mouseout", function () {
            this.style.backgroundColor = "";
        });
        getAddEventListener(liObj, "click", function () {
            input_btn_number.value = this.innerHTML;
            divObj.style.display = "none";
        })
    }
};
//添加提问按钮事件函数
getAddEventListener(input_btn_number, "focus", function () {
    if (this.placeholder == "请输入01,02形式的数字:") {
        this.placeholder = "";
        this.style.color = "black";
    }
});
getAddEventListener(input_btn_number, "blur", function () {
    if (this.placeholder == "") {
        this.placeholder = "请输入01,02形式的数字:";
        this.style.color = "gray";
    }
});

//重置
function setBtnReset() {
    window.location.reload();
}

getAddEventListener(my$("btns_reset"), "click", setBtnReset);

// function setPutQuestionsTo(){
//     window.history.back();
// }

//添加提问按钮点击事件
// getAddEventListener(my$("img_btn"),"click",setPutQuestionsTo());
//保存学生信息
// var ulInformationObj;
// var liInFormationNameObj;
// var liInformationGenderObj;
// var liInformationStudent_id;
//设置拿取学生信息函数
// function onclickName(elementName) {
//     return elementName.innerHTML = "<h3>学生姓名：</h3>" + liInFormationNameObj.innerHTML;
//
// }
//
// function onclickGender(elementGender) {
//     return elementGender.innerHTML = "<h3>学生性别：</h3>" + liInformationGenderObj.innerHTML;
// }
//
// function onclickStudentId(elementStudentId) {
//     return elementStudentId.innerHTML = "<h3>学生学号：</h3>" + liInformationStudent_id.innerHTML;
// }
// if (!getFirstElementChild(this)) {
//     ulInformationObj = document.createElement("ul");
//     this.appendChild(ulInformationObj);
//     ulInformationObj.id = "ul_information_obj";
// }
// if (my$("one")) {
//     my$("ul_information_obj").removeChild(my$("one"));
// }
// if (my$("two")) {
//     my$("ul_information_obj").removeChild(my$("two"));
// }
// if (my$("three")) {
//     my$("ul_information_obj").removeChild(my$("three"));
// }
// liInFormationNameObj = document.createElement("li");
// liInFormationNameObj.id = "one";
// my$("ul_information_obj").appendChild(liInFormationNameObj);
// liInFormationNameObj.innerHTML = class_information[i]["name"];
// liInformationGenderObj = document.createElement("li");
// my$("ul_information_obj").appendChild(liInformationGenderObj);
// liInformationGenderObj.id = "two";
// liInformationGenderObj.innerHTML = class_information[i]["gender"];
// liInformationStudent_id = document.createElement("li");
// liInformationStudent_id.id = "three";
// my$("ul_information_obj").appendChild(liInformationStudent_id);
// liInformationStudent_id.innerHTML = class_information[i]["student_id"];
// onclickName(getFirstElementChild(my$("ul1")));
// onclickGender(getNextElementSibling(getFirstElementChild(my$("ul1"))));
// onclickStudentId(getLastElementChild(my$("ul1")));