"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[884],{8884:function(e,r,s){s.r(r),s.d(r,{default:function(){return l}});s(7658);var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"wrapper"},[r("div",{staticStyle:{margin:"100px auto","background-color":"#fff",width:"350px",height:"400px",padding:"20px","border-radius":"10px"}},[e._m(0),r("el-form",{ref:"userForm",attrs:{model:e.user,rules:e.rules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{staticStyle:{margin:"5px 0"},attrs:{size:"medium","prefix-icon":"el-icon-user"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{staticStyle:{margin:"5px 0"},attrs:{size:"medium","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),r("el-form-item",{attrs:{prop:"confirmPassword"}},[r("el-input",{staticStyle:{margin:"5px 0"},attrs:{size:"medium","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.user.confirmPassword,callback:function(r){e.$set(e.user,"confirmPassword",r)},expression:"user.confirmPassword"}})],1),r("el-form-item",[r("div",{staticStyle:{margin:"5px 0","text-align":"right"}},[r("el-button",{attrs:{type:"primary",size:"small",autocomplete:"off"},on:{click:e.login}},[e._v("注册")]),r("el-button",{attrs:{type:"warning",size:"small",autocomplete:"off"},on:{click:function(r){return e.$router.push("/login")}}},[e._v("返回登录")])],1)])],1)],1)])},i=[function(){var e=this,r=e._self._c;return r("div",{staticStyle:{margin:"20px 0","text-align":"center","font-size":"24px"}},[r("b",[e._v("注 册")])])}],a={name:"Login",data(){return{user:{},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}]}}},methods:{login(){this.$refs["userForm"].validate((e=>{if(e){if(this.password!==this.confirmPassword)return this.$message.error("两次输入密码不一样"),!1;this.request.post("/user/register",this.user).then((e=>{"200"===e.code?this.$message.success("注册成功"):this.$message.error(e.msg)}))}}))}}},o=a,n=s(1001),u=(0,n.Z)(o,t,i,!1,null,"16c91f56",null),l=u.exports}}]);
//# sourceMappingURL=884.f527d268.js.map