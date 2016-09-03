var init = function() {
    // Default Parameters
    defParameters();
    // defParameters(100, "#000");

    // Template Literals
    templateLiterals();
    // templateLiterals("Tony", "Lui");

    // Destructuring Assignment
    destructuringAssignment({
        name: "vicky",
        text: "wawawa"
    });

    // Enhanced Object Literals
    enhancedObjectLiterals();

    // Arrow Functions in
    logUpperCase.call({
        string: 'ES6 rocks'
    })();

    // Block-Scoped Constructs Let and Const
    blockScopedConstructs();

    // Classes
    es6Classes();
}

// Default Parameters默認參數
var defParameters = function(height = 50, color = "#ff0") {
    console.log("defParameters", height, color);
}

// Template Literals模板對象(模板字符串要使用反引號（``）)
var templateLiterals = function(first = "vicky", last = "wong") {
    var name = `Your name is ${first} ${last}.`;
    console.log("templateLiterals name", name);

    // Multi-line Strings多行字符串
    var html = `
        <h1>你好，</h1>
        &nbsp;
        <p>${name}</p>
    `;
    console.log("templateLiterals html", html);

    var message = SaferHTML `<p>${first} has sent you a bonk.</p>`;
    //與上面等價 var message = SaferHTML(templateData, bonk.sender);
    console.log("templateLiterals SaferHTML", message);

    // let amount = 100;
    // var i18nTag = i18n `Hello ${first}, you have ${amount}:c(CAD) in your bank account.`;
    // console.log("templateLiterals i18nTag", i18nTag);

    // var myBooks = [{
    //         title: "es6",
    //         author: "test1"
    //     }, {
    //         title: "javascript",
    //         author: "test2"
    //     }],
    //     libraryHtml = hashTemplate `
    //       <ul>
    //         #for book in ${myBooks}
    //           <li><i>#{book.title}</i> by #{book.author}</li>
    //         #end
    //       </ul>
    //     `;
    // console.log("templateLiterals hashTemplate", libraryHtml);
}

// 標籤模板，SaferHTML方法需自己實現（例子）
// templateData將會是Object.freeze(["<p>", " has sent you a bonk.</p>"]
function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}

// Destructuring Assignment解構賦值
var destructuringAssignment = function(args) {
    var {
        name,
        text
    } = args;
    console.log("destructuringAssignment", name, text);

    var contry = "tw,hk",
        [contry1, contry2] = contry.split(",");
    console.log("destructuringAssignment contry", contry1, contry2);
}

// Enhanced Object Literals增強的對象字面量
var enhancedObjectLiterals = function() {
    var human = {
        breathe() {
            console.log('breathing...');
        }
    };
    var worker = {
        __proto__: human, //设置此对象的原型为human,相当于继承human
        company: 'freelancer',
        work() {
            console.log('working...');
        }
    };
    human.breathe(); //输出 ‘breathing...’
    //调用继承来的breathe方法
    worker.breathe(); //输出 ‘breathing...’
    worker.work(); //输出 ‘working...’
}

// Arrow Functions in箭頭函數
var logUpperCase = function() {
    // call传递文本es5寫法
    // var _this = this;
    // this.string = this.string.toUpperCase();
    // return function() {
    //     return console.log(_this.string);
    // }
    // call传递文本es6寫法
    this.string = this.string.toUpperCase();
    return () => console.log(this.string);

    // es5寫法
    var _this = this;
    $('.btn').click(function(event) {
        _this.sendData();
    });
    // es6寫法 不需要用_this = this
    $('.btn').click((event) => {
        this.sendData();
    });

    // 消息数组es5寫法
    var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
    var messages = ids.map(function(value) {
        return "ID is " + value; // explicit return
    });
    // 消息数组es6寫法
    var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
    var messages = ids.map(value => `ID is ${value}`); // implicit return
    //es5寫法
    var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
    var messages = ids.map(function(value, index, list) {
        return 'ID of ' + index + ' element is ' + value + ' '; // explicit return
    });
    //es6寫法
    var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
    var messages = ids.map((value, index, list) => `ID of ${index} element is ${value} `); // implicit return
}

// Block-Scoped Constructs Let and Const块作用域和构造let和const
// let限制块级作用域
// var限制函数作用域
// const不变量，也是块级作用域就像let一样
var blockScopedConstructs = function() {
    var calculateTotalAmount = function(vip) {
        const amount = 0;
        if (vip) {
            const amount = 1;
        } { // more crazy blocks!
            const amount = 100; {
                const amount = 1000;
            }
        }
        return amount;
    }
    console.log(calculateTotalAmount(true));
}

// Classes (ES6没有用函数, 而是使用原型实现类)
var es6Classes = function() {
    class baseModel {
        constructor(options, data) { // class constructor，node.js 5.6暂时不支持options = {}, data = []这样传参
            this.name = 'Base';
            this.url = 'http://azat.co/api';
            this.data = data;
            this.options = options;
        }

        getName() { // class method
            console.log(`Class name: ${this.name}`);
        }
    }
    class AccountModel extends baseModel {
        constructor(options, data) {
            super({
                private: true
            }, ['32113123123', '524214691']); //call the parent method with super
            this.name = 'Account Model';
            this.url += '/accounts/';
        }
        get accountsData() { //calculated attribute getter
            // ... make XHR
            return this.data;
        }
    }
    let accounts = new AccountModel(5);
    accounts.getName();
    console.log('Data is %s', accounts.accountsData);
}