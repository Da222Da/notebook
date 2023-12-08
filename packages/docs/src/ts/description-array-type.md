# 如何描述数组类型？

## 使用泛型来描述数组类型？

想要使用泛型来描述数组类型的话？看看下面代码就会了🚀💯。

```ts
const num:Array<number> = [1, 2, 3, 4]; // 数组类型
const str:Array<string> = ['1', '2', '3']; // 字符串类型

// 对象类型
interface myObj {
    name: string,
    age: number
}
const obj: Array<myObj> = [
    { name: '张三', age: 10 }, 
    { name: '李四', age: 20 }, 
]

// 任意类型的数组(啥也不写，默认就好)
const anys = [1, '2', { name: '张三', age: 10}, true];
```


## 使用接口来描述数组类型？

想要使用`interface`接口来描述数组类型的话？看看下面代码就会了🚀💯。

```ts
const num:number[] = [1, 2, 3, 4]; // 数字类型
const str:string[] = ['1', '2', '3']; // 字符串类型

// 对象类型
interface myObj {
    name: string,
    age: number
}
const obj: myObj[] = [
    { name: '张三', age: 10 }, 
    { name: '李四', age: 20 }, 
]

// 任意类型的数组(啥也不写，默认就好)
const anys = [1, '2', { name: '张三', age: 10}, true];
```