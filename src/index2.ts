

function add(num1: number, num2: number) {
    return num1 + num2;
}

let name = add(1, 3);
console.log(name);

let str: undefined | string = 'fsdfsdfdsg';

function throwError(msg: string): never {
    throw new Error(msg);
}

function continueFunc(): never {
    while (true) {}
}

//字面量类型
let gender: '男' | '女';
gender = '男';

let arr: []; //表示为该数组只能为空数组

let stu: {
    name: string;
    age: number;
};

//元组类型
let arr2: [string, number];
arr2 = ['fds', 234];

//类型别名
type Gender = '男' | '女';
type User = {
    name: string;
    age: number;
};

let user: User;
function getUsers(g: Gender): User[] {
    return [];
}

//函数的相关约束
/**
 * return a * b
 * @param a 
 * @param b 
 */
function combine(a: number, b: number): number;
/**
 * return a + b
 * @param a 
 * @param b 
 */
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('a and b must be same');
}

combine(3, 3);

//函数的可选参数
/**
 * 
 * @param a 
 * @param b 
 * @param c ?可以不选   c:number : undefined
 * @returns 
 */
function sum(a:number , b:number , c?:number){
    if(c){
        return a + b +c ;
    }else {
        return a + b;
    }
}


