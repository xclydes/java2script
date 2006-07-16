Clazz.load(["$wt.widgets.Scrollable"],"$wt.widgets.Composite",["java.util.Date","$wt.graphics.Point","$wt.internal.struct.MESSAGE","$.WINDOWPOS","$wt.widgets.Control","$.Menu"],function(){
c$=$_C(function(){
this.$layout=null;
this.lpwp=null;
this.tabList=null;
this.layoutCount=0;
this.children=null;
this.waitingForLayoutWithResize=false;
$_Z(this,arguments);
},$wt.widgets,"Composite",$wt.widgets.Scrollable);
$_K(c$,
function(parent,style){
$_R(this,$wt.widgets.Composite,[parent,style]);
this.children=new Array(0);
},"$wt.widgets.Composite,~N");
$_M(c$,"_getChildren",
function(){
var count=this.children.length;
var index=0;
var newChildren=new Array(0);
for(var i=0;i<count;i++){
var control=this.children[i];
if(control!=null&&control!=this){
newChildren[index++]=control;
}}
return newChildren;
});
$_M(c$,"_getTabList",
function(){
if(this.tabList==null)return this.tabList;
var count=0;
var length=this.tabList.length;
for(var i=0;i<length;i++){
if(!this.tabList[i].isDisposed())count++;
}
if(count==length)return this.tabList;
var newList=new Array(count);
var index=0;
for(var i=0;i<length;i++){
if(!this.tabList[i].isDisposed()){
newList[index++]=this.tabList[i];
}}
this.tabList=newList;
return this.tabList;
});
$_M(c$,"changed",
function(changed){
var length=changed.length;
for(var i=0;i<length;i++){
var control=changed[i];
var ancestor=false;
var composite=control.parent;
while(composite!=null){
ancestor=composite==this;
if(ancestor)break;
composite=composite.parent;
}
}
for(var i=0;i<length;i++){
var child=changed[i];
var composite=child.parent;
while(child!=this){
if(composite.$layout==null||!composite.$layout.flushCache(child)){
composite.state|=64;
}child=composite;
composite=child.parent;
}
}
},"~A");
$_V(c$,"checkBuffered",
function(){
});
$_M(c$,"computeTabList",
function(){
var result=$_U(this,$wt.widgets.Composite,"computeTabList",[]);
if(result.length==0)return result;
var list=this.tabList!=null?this._getTabList():this._getChildren();
for(var i=0;i<list.length;i++){
var child=list[i];
var childList=child.computeTabList();
if(childList.length!=0){
var newResult=new Array(result.length+childList.length);
System.arraycopy(result,0,newResult,0,result.length);
System.arraycopy(childList,0,newResult,result.length,childList.length);
result=newResult;
}}
return result;
});
$_M(c$,"computeSize",
function(wHint,hHint,changed){
var size;
if(this.$layout!=null){
if(wHint==-1||hHint==-1){
changed=new Boolean(changed|((this.state&64)!=0)).valueOf();
this.state&=-65;
size=this.$layout.computeSize(this,wHint,hHint,changed);
}else{
size=new $wt.graphics.Point(wHint,hHint);
}}else{
size=this.minimumSize(wHint,hHint,changed);
}if(size.x==0)size.x=64;
if(size.y==0)size.y=64;
if(wHint!=-1)size.x=wHint;
if(hHint!=-1)size.y=hHint;
var trim=this.computeTrim(0,0,size.x,size.y);
return new $wt.graphics.Point(trim.width,trim.height);
},"~N,~N,~B");
$_M(c$,"containerHandle",
function(){
return this.handle;
});
$_V(c$,"createHandle",
function(){
this.handle=d$.createElement("DIV");
this.handle.className="composite-default";
if((this.style&2048)!=0){
this.handle.className+=" composite-border";
}if(this.parent!=null){
var parentHandle=this.parent.containerHandle();
if(parentHandle!=null){
parentHandle.appendChild(this.handle);
}}this.state|=2;
});
$_M(c$,"findMenus",
function(control){
if(control==this)return new Array(0);
var result=$_U(this,$wt.widgets.Composite,"findMenus",[control]);
var children=this._getChildren();
for(var i=0;i<children.length;i++){
var child=children[i];
var menuList=child.findMenus(control);
if(menuList.length!=0){
var newResult=new Array(result.length+menuList.length);
System.arraycopy(result,0,newResult,0,result.length);
System.arraycopy(menuList,0,newResult,result.length,menuList.length);
result=newResult;
}}
return result;
},"$wt.widgets.Control");
$_M(c$,"fixChildren",
function(newShell,oldShell,newDecorations,oldDecorations,menus){
$_U(this,$wt.widgets.Composite,"fixChildren",[newShell,oldShell,newDecorations,oldDecorations,menus]);
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
children[i].fixChildren(newShell,oldShell,newDecorations,oldDecorations,menus);
}
},"$wt.widgets.Shell,$wt.widgets.Shell,$wt.widgets.Decorations,$wt.widgets.Decorations,~A");
$_M(c$,"fixChildrenList",
function(control){
var length=this.children.length;
if(this.children==null||length==0)return;
var newChildren=new Array(0);
for(var i=0;i<length;i++){
var child=this.children[i];
if(child!=null&&child!=control){
newChildren[newChildren.length]=child;
}}
this.children=newChildren;
},"$wt.widgets.Control");
$_M(c$,"fixTabList",
function(control){
if(this.tabList==null)return;
var count=0;
for(var i=0;i<this.tabList.length;i++){
if(this.tabList[i]==control)count++;
}
if(count==0)return;
var newList=null;
var length=this.tabList.length-count;
if(length!=0){
newList=new Array(length);
var index=0;
for(var i=0;i<this.tabList.length;i++){
if(this.tabList[i]!=control){
newList[index++]=this.tabList[i];
}}
}this.tabList=newList;
},"$wt.widgets.Control");
$_V(c$,"getBorderWidth",
function(){
if((this.style&2048)!=0){
return 2;
}return 0;
});
$_M(c$,"getChildren",
function(){
return this._getChildren();
});
$_M(c$,"getChildrenCount",
function(){
if(true)return 0;
return this._getChildren().length;
});
$_M(c$,"getLayout",
function(){
return this.$layout;
});
$_M(c$,"getTabList",
function(){
var tabList=this._getTabList();
if(tabList==null){
var count=0;
var list=this._getChildren();
var length=list.length;
for(var i=0;i<length;i++){
if(list[i].isTabGroup())count++;
}
tabList=new Array(count);
var index=0;
for(var i=0;i<length;i++){
if(list[i].isTabGroup()){
tabList[index++]=list[i];
}}
}return tabList;
});
$_M(c$,"hooksKeys",
function(){
return this.hooks(1)||this.hooks(2);
});
$_M(c$,"getLayoutDeferred",
function(){
return this.layoutCount>0;
});
$_M(c$,"isLayoutDeferred",
function(){
return this.layoutCount>0||this.parent.isLayoutDeferred();
});
$_M(c$,"layout",
function(){
this.layout(true);
});
$_M(c$,"layout",
function(changed){
if(this.$layout==null)return;
this.layout(changed,true);
},"~B");
$_M(c$,"layout",
function(changed,all){
if(this.$layout==null&&!all)return;
this.markLayout(changed,all);
this.updateLayout(true,all);
},"~B,~B");
$_M(c$,"layout",
function(changed){
var d=new java.util.Date();
var length=changed.length;
for(var i=0;i<length;i++){
var control=changed[i];
var ancestor=false;
var composite=control.parent;
while(composite!=null){
ancestor=composite==this;
if(ancestor)break;
composite=composite.parent;
}
}
d=new java.util.Date();
var updateCount=0;
var update=new Array(16);
for(var i=0;i<length;i++){
var child=changed[i];
var composite=child.parent;
while(child!=this){
if(composite.$layout!=null){
composite.state|=32;
if(!composite.$layout.flushCache(child)){
composite.state|=64;
}}if(updateCount==update.length){
var newUpdate=new Array(update.length+16);
System.arraycopy(update,0,newUpdate,0,update.length);
update=newUpdate;
}child=update[updateCount++]=composite;
composite=child.parent;
}
}
d=new java.util.Date();
for(var i=updateCount-1;i>=0;i--){
update[i].updateLayout(true,false);
}
d=new java.util.Date();
},"~A");
$_M(c$,"markLayout",
function(changed,all){
if(this.$layout!=null){
this.state|=32;
if(changed)this.state|=64;
}if(all){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
children[i].markLayout(changed,all);
}
}},"~B,~B");
$_M(c$,"minimumSize",
function(wHint,hHint,changed){
var children=this._getChildren();
var width=0;
var height=0;
var length=children.length;
for(var i=0;i<length;i++){
var rect=children[i].getBounds();
width=Math.max(width,rect.x+rect.width);
height=Math.max(height,rect.y+rect.height);
}
return new $wt.graphics.Point(width,height);
},"~N,~N,~B");
$_M(c$,"releaseChildren",
function(){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(!child.isDisposed())child.releaseResources();
}
});
$_M(c$,"releaseWidget",
function(){
this.releaseChildren();
$_U(this,$wt.widgets.Composite,"releaseWidget",[]);
if((this.state&2)!=0&&(this.style&16777216)!=0){
}this.children=null;
this.$layout=null;
this.tabList=null;
if(this.lpwp!=null){
var length=this.lpwp.length;
for(var i=0;i<length;i++){
this.lpwp[i].hwnd=null;
this.lpwp[i].hwndInsertAfter=null;
}
}this.lpwp=null;
});
$_M(c$,"removeControl",
function(control){
this.fixTabList(control);
this.fixChildrenList(control);
this.resizeChildren();
},"$wt.widgets.Control");
$_M(c$,"resizeChildren",
function(){
if(this.lpwp==null)return;
do{
var currentLpwp=this.lpwp;
this.lpwp=null;
if(!this.resizeChildren(true,currentLpwp)){
this.resizeChildren(false,currentLpwp);
}}while(this.lpwp!=null);
});
$_M(c$,"resizeChildren",
function(defer,pwp){
if(pwp==null)return true;
var hdwp=0;
if(defer){
if(hdwp==0)return false;
}var length=pwp.length;
for(var i=0;i<length;i++){
var wp=pwp[i];
if(wp!=null){
if(defer){
if(hdwp==0)return false;
}else{
this.SetWindowPos(wp.hwnd,null,wp.x,wp.y,wp.cx,wp.cy,wp.flags);
}}}
return true;
},"~B,~A");
$_M(c$,"setFixedFocus",
function(){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(child.setRadioFocus())return true;
}
for(var i=0;i<length;i++){
var child=children[i];
if(child.setFixedFocus())return true;
}
return $_U(this,$wt.widgets.Composite,"setFixedFocus",[]);
});
$_M(c$,"setFocus",
function(){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(child.setRadioFocus())return true;
}
for(var i=0;i<length;i++){
var child=children[i];
if(child.setFocus())return true;
}
return $_U(this,$wt.widgets.Composite,"setFocus",[]);
});
$_M(c$,"setLayout",
function(layout){
this.$layout=layout;
},"$wt.widgets.Layout");
$_M(c$,"setLayoutDeferred",
function(defer){
if(!defer){
if(--this.layoutCount==0){
if(!this.isLayoutDeferred())this.updateLayout(true,true);
}}else{
this.layoutCount++;
}},"~B");
$_M(c$,"setTabList",
function(tabList){
if(tabList!=null){
var length=tabList.length;
for(var i=0;i<length;i++){
var control=tabList[i];
}
var newList=new Array(length);
System.arraycopy(tabList,0,newList,0,length);
tabList=newList;
}this.tabList=tabList;
},"~A");
$_M(c$,"setResizeChildren",
function(resize){
if(resize){
this.resizeChildren();
}else{
var count=this.getChildrenCount();
if(count>1&&this.lpwp==null){
this.lpwp=new Array(count);
}}},"~B");
$_V(c$,"setTabGroupFocus",
function(){
if(this.isTabItem())return this.setTabItemFocus();
var takeFocus=(this.style&524288)==0;
if((this.state&2)!=0){
takeFocus=this.hooksKeys();
if((this.style&16777216)!=0)takeFocus=true;
}if(takeFocus&&this.setTabItemFocus())return true;
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
var child=children[i];
if(child.isTabItem()&&child.setRadioFocus())return true;
}
for(var i=0;i<length;i++){
var child=children[i];
if(child.isTabItem()&&child.setTabItemFocus())return true;
}
return false;
});
$_V(c$,"SetWindowPos",
function(hWnd,hWndInsertAfter,X,Y,cx,cy,uFlags){
if((this.style&2048)!=0){
cx-=4;
cy-=4;
}var el=hWnd;
el.style.left=X+"px";
el.style.top=Y+"px";
el.style.width=(cx>0?cx:0)+"px";
el.style.height=(cy>0?cy:0)+"px";
return true;
},"~O,~O,~N,~N,~N,~N,~N");
$_V(c$,"updateLayout",
function(resize,all){
if(this.isLayoutDeferred())return;
if((this.state&32)!=0){
var changed=(this.state&64)!=0;
this.state&=-97;
this.waitingForLayout=true;
this.waitingForLayoutWithResize=resize;
this.display.sendMessage(new $wt.internal.struct.MESSAGE(this,2,[resize,all]));
}if(all){
var children=this._getChildren();
var length=children.length;
for(var i=0;i<length;i++){
if($_O(children[i],$wt.widgets.Composite)){
this.display.sendMessage(new $wt.internal.struct.MESSAGE(children[i],2,[resize,all]));
}}
}},"~B,~B");
});
