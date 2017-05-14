const hwp=require("html-webpack-plugin")
module.exports={
	entry:"./1.js",
	output:{
		filename:"app.js",
		path:"/dist"
	},
	module:{loaders:[
	{test:/\.css$/,loader:"style-loader!css-loader"},        
	{test:/\.(jpg|png)$/,loader:"url-loader?limit=40000"}  
	]},
	plugins:[new hwp({
           filename:"index.html",
           template:"./dist/index1.html"
           })] 
	} 