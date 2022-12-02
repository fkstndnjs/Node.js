const path = require("path");

const string = __filename;

// 경로의 구분자 (Windows : \, POSIX : /)
console.log("path.sep : ", path.sep);
// 환경 변수의 구분자. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있다. (Windows : tpalzhffhs(;), POSIX : 콜론(:))
console.log("path.delimiter : ", path.delimiter);
console.log("\n");

console.log("---------------------------------");
// 파일이 위치한 폴더 경로를 보여줌
console.log("path.dirname() : ", path.dirname(string));
// 파일의 확장자를 보여줌
console.log("path.extname() : ", path.extname(string));
// 파일의 이름(확장자 포함)을 보여줌. 파일의 이름만 표시하고 싶다면 basename의 두 번째 인자로 파일의 확장자를 넣어주면 됨
console.log("path.basename() : ", path.basename(string));
console.log(
    "path.basename - extname : ",
    path.basename(string, path.extname(string))
);
console.log("\n");

console.log("-----------------------------------");
// 파일 경로를 roow, dir, base, ext, name으로 분리
console.log("path.parse() : ", path.parse(string));
// path.parse()한 객체를 파일 경로로 합침
console.log(
    "path.format() : ",
    path.format({
        root: "/",
        dir: "/Users/ysh/Documents/Git Repository/Node.js/path",
        base: "app.js",
        ext: ".js",
        name: "app",
    })
);
console.log(
    "path.normalize() : ",
    path.normalize(
        "/Users/////ysh/Documents///Git Repository///////Node.js/path"
    )
);
console.log("\n");

console.log("-----------------------------------");
console.log("path.isAbsolute(/Users/ysh) : ", path.isAbsolute("/Users/ysh"));
console.log("path.isAbsolute(./ysh) : ", path.isAbsolute("./ysh"));
console.log("\n");

console.log("-----------------------------------");
console.log(
    "path.relative() : ",
    path.relative("/Users/ysh/Documents/Git Repository/Node.js/path", "/Users")
);
console.log("path.join() : ", path.join(__dirname, ".."));
