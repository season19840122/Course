
// ts-test.ts
let var1: string; // 类型注解 var1 = "开课吧"; // 正确
var1 = 4; // 错误

// 编译器类型推断可
let varAny: any;
varAny = 'xx';
varAny = 3;

// any类型也可用于数组
let arrAny: any[];
arrAny = [1, true, "free"]; arrAny[1] = 100;

// 函数中的类型约束
function greet(person: string): string {
  return 'hello, ' + person;
}

// void类型，常用于没有返回值的函数
function warn(): void {}