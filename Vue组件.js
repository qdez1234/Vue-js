//1.0 我们可以先去创建一个组件构造器定义一个组件
var myComponent=Vue.extend({
	template:"<div>囧囧</div>"
})
//1.1 使用组件的时候需要我们来注册
//
//1.2全局注册组件,第一个参数是组件名称,第二个参数是构造后组件
Vue.cpmponent("my-component","myComponent")




//父子组件     就是相当于在父组件里面局部注册一个子组件  接在全局注册一个父组件
var child={
	template:"<div>囧囧</div>"
}

//记得在父子组件里面我们当两个组件并行的时候不能直接放在根的dom下,需要将两个组件放在同一个div下面
var parent={
	template:"<div> <div>父组件</div> <child></child> </div>",
	components:{
		child:child
	}
}
Vue.component("parent",parent)


//父子组件进行通信,   记得组件里面的data必须是函数  父->子 通过props向子传数据,子->父通过events向父传递数据 
//谁需要数据,就在自己组件里面显示出来 比如 props:["message"]
//
//




