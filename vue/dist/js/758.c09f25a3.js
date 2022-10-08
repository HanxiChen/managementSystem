"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[758],{8758:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{margin:"10px 0"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入名称","suffix-icon":"el-icon-search"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-button",{staticClass:"ml-5",attrs:{type:"primary"},on:{click:e.load}},[e._v("搜索")]),t("el-button",{staticClass:"ml-5",attrs:{type:"warning"},on:{click:e.reset}},[e._v("重置")])],1),t("div",{staticStyle:{margin:"10px 0"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd()}}},[e._v("新增"),t("i",{staticClass:"el-icon-circle-plus-outline"})]),t("el-popconfirm",{staticClass:"ml-5",attrs:{"confirm-button-text":"确定","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定批量删除吗？"},on:{confirm:e.delBatch}},[t("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("批量删除"),t("i",{staticClass:"el-icon-remove-outline"})])],1)],1),t("el-table",{attrs:{data:e.tableData,border:"",stripe:"","header-cell-class-name":"headerBg","row-key":"id"},on:{"selection-change":e.handleSelectionChange}},[e._v("> "),t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),t("el-table-column",{attrs:{prop:"path",label:"路径"}}),t("el-table-column",{attrs:{prop:"pagePath",label:"页面路径"}}),t("el-table-column",{attrs:{label:"图标",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("i",{class:e.row.icon,staticStyle:{"font-size":"18px"}})]}}])}),t("el-table-column",{attrs:{prop:"description",label:"描述"}}),t("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[l.row.pid||l.row.path?e._e():t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(l.row.id)}}},[e._v("新增子菜单 "),t("i",{staticClass:"el-icon-plus"})]),t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.handleEdit(l.row)}}},[e._v("编辑 "),t("i",{staticClass:"el-icon-edit"})]),t("el-popconfirm",{staticClass:"ml-5",attrs:{"confirm-button-text":"确定","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定删除吗？"},on:{confirm:function(t){return e.handleDel(l.row.id)}}},[t("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除 "),t("i",{staticClass:"el-icon-remove-outline"})])],1)]}}])})],1),t("el-dialog",{attrs:{title:"菜单信息",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{attrs:{"label-width":"80px",size:"small"}},[t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"路径"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),t("el-form-item",{attrs:{label:"页面路径"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.pagePath,callback:function(t){e.$set(e.form,"pagePath",t)},expression:"form.pagePath"}})],1),t("el-form-item",{attrs:{label:"图标"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}},e._l(e.options,(function(l){return t("el-option",{key:l.name,attrs:{label:l.name,value:l.value}},[t("i",{class:l.value}),e._v(" "+e._s(l.name)+" ")])})),1)],1),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},o=[],i=l(2618),s={name:"Menu",data(){return{tableData:[],total:0,pageNum:1,pageSize:2,name:"",dialogFormVisible:!1,form:{},multipleSelection:[],options:[]}},created(){this.load()},methods:{load(){this.request.get("/menu",{params:{name:this.name}}).then((e=>{this.tableData=e.data}))},handleSizeChange(e){console.log(e),this.pageSize=e,this.load()},handleCurrentChange(e){console.log(e),this.pageNum=e,this.load()},reset(){this.name="",this.load()},handleAdd(e){this.dialogFormVisible=!0,this.form={},e&&(this.form.pid=e)},save(){this.request.post("/menu",this.form).then((e=>{"200"===e.code?(this.$message.success("保存成功"),this.dialogFormVisible=!1,this.load()):this.$message.error("保存失败")}))},handleSelectionChange(e){console.log(e),this.multipleSelection=e},delBatch(){let e=this.multipleSelection.map((e=>e.id));this.request.post("/menu/del/batch",e).then((e=>{"200"===e.code?(this.$message.success("批量删除成功"),this.load()):this.$message.error("删除失败")}))},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogFormVisible=!0,this.request.get("/menu/icons").then((e=>{this.options=e.data}))},handleDel(e){this.request.delete("/menu/"+e).then((e=>{"200"===e.code?(this.$message.success("删除成功"),this.load()):this.$message.error("删除失败")}))},exp(){window.open(`http://${i.I}:9090/role/export`)}}},n=s,r=l(1001),c=(0,r.Z)(n,a,o,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=758.c09f25a3.js.map