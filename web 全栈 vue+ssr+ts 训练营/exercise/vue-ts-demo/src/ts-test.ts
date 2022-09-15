// ts-test.ts
const var1 = "4"; // 类型注解 var1 = "开课吧"; // 正确
// var1 = '4'; // 错误

// 编译器类型推断可
let varAny: any;
varAny = "xx";
varAny = 3;

// any类型也可用于数组
const arrAny: any[] = [1, true, "free"];
arrAny[1] = 100;

// 函数中的类型约束
function greet(person: string): string {
  return "hello, " + person;
}

// void类型，常用于没有返回值的函数
function warn(): void {
  const a = 1;
}

// 类型别名
type Foobar = { foo: string; bar: string };
const objType: Foobar = { foo: "foo", bar: "bar" };

// 联合类型 or 的关系
let union: string | number;
union = "1";
union = 0;

// 交叉类型 and 的关系
type First = { first: number };
type Second = { seconde: number };
type FirstAndSecond = First & Second;

// 函数
// 1. 形参声明就是必填项
// 2. ？表示可选
function greeting(person: string, age = 18, msg?: string): string {
  return "Hello, " + person;
}
greeting("tom");

// 函数重载:以参数数量或类型区分多个同名函数
// 重载1
// function watch(cb1: () => void): void;
// 重载2
// function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void;
// 实现
// function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void) {
//   if (cb1 && cb2) {
//     console.log("执行watch重载2");
//   } else {
//     console.log("执行watch重载1");
//   }
// }
// watch( () => {} )
// watch( () => {}, (v1, v2) => {} )

class Parent {
  private _foo = "foo"; // 私有属性，不能在类的外部访问
  protected bar = "bar"; // 保护属性，可以在⼦类中访问
  // 参数属性：构造函数参数加修饰符，能够定义为成员属性
  constructor(public tua = "tua") {}
  // ⽅法也有修饰符
  // private someMethod() {}
  // 存取器：属性⽅式访问，可添加额外逻辑，控制读写性
  get foo() {
    return this._foo;
  }
  set foo(val) {
    this._foo = val;
  }
}

// 接⼝仅约束结构，不要求实现，使⽤更简单
// Person接⼝定义了解构
interface Person {
  firstName: string;
  lastName: string;
}
// greeting函数通过Person接⼝约束参数解构
function greeting(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
greeting({ firstName: "Jane", lastName: "User" }); // 正确
// greeting({ firstName: "Jane" }); // 错误

// *泛型（Generics）是指在定义函数、接⼝或类的时候，不预先指定具体的类型，⽽在使⽤的时候再指定类型的⼀种特性。以此增加代码通⽤性。
// 不⽤泛型
// interface Result {
// ok: 0 | 1;
// data: Feature[];
// }
// 使⽤泛型
interface Result<T> {
  ok: 0 | 1;
  data: T;
}
// 泛型⽅法
function getResult<T>(data: T): Result<T> {
  return { ok: 1, data };
}
// ⽤尖括号⽅式指定T为string
getResult<string>("hello");
// ⽤类型推断指定T为number
getResult(1);

// 装饰器
// 装饰器⽤于扩展类或者它的属性和⽅法。@xxx就是装饰器的写法
