function Clazz(){};function NullObject(){};InternalFunction=Object;Clazz.getClassName=function(Hz){if(Hz==null){return"NullObject";}if(typeof Hz=="function"){var clazz=Hz;if(clazz.__CLASS_NAME__!=null){return clazz.__CLASS_NAME__;}var Sc=clazz.toString();var idx0=Sc.indexOf("function");if(idx0==-1){if(Sc.charAt(0)=='['){return Sc.substring(1,Sc.length-1);}else{return Sc.replace(/[^a-zA-Z0-9]/g,'');}}var idx1=idx0+8;var idx2=Sc.indexOf("(",idx1);if(idx2==-1){return"Object";}var Nc=Sc.substring(idx1,idx2).replace(/^\s+/,"").replace(/\s+$/,"");if(Nc=="anonymous"){return"Function";}else{return Nc;}}else{var obj=Hz;if(obj instanceof Clazz.CastedNull){return obj.Nc;}else{var oT=typeof obj;if(oT=="string"){return"String";}else if(oT=="object"){if(obj.__CLASS_NAME__!=null){return obj.__CLASS_NAME__;}else if(obj.constructor==null){return"Object";}else{if(obj.constructor.__CLASS_NAME__==null){if(obj instanceof Number){return"Number";}else if(obj instanceof Boolean){return"Boolean";}else if(obj instanceof Array){return"Array";}}return Clazz.getClassName(obj.constructor);}}else if(oT=="number"){return"Number";}else if(oT=="boolean"){return"Boolean";}return Clazz.getClassName(obj.constructor);}}};Clazz.getClass=function(Hz){if(Hz==null){return Object;}if(typeof Hz=="function"){return Hz;}else{var Nc=null;var obj=Hz;if(obj instanceof Clazz.CastedNull){Nc=obj.Nc;}else{var oT=typeof obj;if(oT=="string"){return String;}else if(typeof obj=="object"){if(obj.__CLASS_NAME__!=null){Nc=obj.__CLASS_NAME__;}else if(obj.constructor==null){return Object;}else{return obj.constructor;}}}if(Nc!=null){return Clazz.evalType(Nc,true);}else{return obj.constructor;}}};Clazz.eP=function(Th,Sh){for(var o in Sh){if(o!="prototype"&&o!="superClazz"&&o!="__CLASS_NAME__"&&o!="implementz"&&!Clazz.cIF(Sh,o)){Th[o]=Sh[o];}}};Clazz.cIF=function(Sh,Nf){for(var k=0;k<Clazz.iFN.length;k++){if(Nf==Clazz.iFN[k]&&Clazz.innerFunctions[Nf]==Sh[Nf]){return true;}}return false;};Clazz.ip=function(Th,Sh){for(var o in Sh){if(o!="prototype"&&o!="superClazz"&&o!="__CLASS_NAME__"&&o!="implementz"){if(typeof Sh[o]=="function"){if(Clazz.cIF(Sh,o)){continue;}}Th[o]=Sh[o];Th.prototype[o]=Sh[o];}}};Clazz.aIC=function(){};Clazz.inheritArgs=new Clazz.aIC();Clazz.xic=function(Tz,clazzSuper,oSp){Clazz.eP(Tz,clazzSuper);if(oSp!=null){Tz.prototype=oSp;}else if(clazzSuper!=Number){Tz.prototype=new clazzSuper(Clazz.inheritArgs);}else{Tz.prototype=new Number();}Tz.superClazz=clazzSuper;Tz.prototype.__CLASS_NAME__=Tz.__CLASS_NAME__;};Clazz.implementOf=function(Tz,interfacez){if(arguments.length>=2){if(Tz.implementz==null){Tz.implementz=new Array();}var impls=Tz.implementz;if(arguments.length==2){if(typeof interfacez=="function"){impls[impls.length]=interfacez;Clazz.ip(Tz,interfacez);}else if(interfacez instanceof Array){for(var i=0;i<interfacez.length;i++){impls[impls.length]=interfacez[i];Clazz.ip(Tz,interfacez[i]);}}}else{for(var i=1;i<arguments.length;i++){impls[impls.length]=arguments[i];Clazz.ip(Tz,arguments[i]);}}}};Clazz.extendInterface=Clazz.implementOf;Clazz.eOE=function(Tz,anc){if(Tz==anc){return 0;}if(Tz.implementz!=null){var impls=Tz.implementz;for(var i=0;i<impls.length;i++){var level=Clazz.eOE(impls[i],anc);if(level>=0){return level+1;}}}return-1;};Clazz.gIL=function(tg,bs){if(tg==bs){return 0;}var isTgtStr=(typeof tg=="string");var isBaseStr=(typeof bs=="string");if((isTgtStr&&("void"==tg||"unknown"==tg))||(isBaseStr&&("void"==bs||"unknown"==bs))){return-1;}if((isTgtStr&&"NullObject"==tg)||NullObject==tg){if(bs!=Number&&bs!=Boolean&&bs!=NullObject){return 0;}}if(isTgtStr){tg=Clazz.evalType(tg);}if(isBaseStr){bs=Clazz.evalType(bs);}if(bs==null||tg==null){return-1;}var level=0;var zzalc=tg;while(zzalc!=bs&&level<10){if(zzalc.implementz!=null){var impls=zzalc.implementz;for(var i=0;i<impls.length;i++){var implsLevel=Clazz.eOE(impls[i],bs);if(implsLevel>=0){return level+implsLevel+1;}}}zzalc=zzalc.superClazz;if(zzalc==null){if(bs==Object){return level+1;}else{return-1;}}level++;}return level;};Clazz.instanceOf=function(obj,clazz){if(obj==null){return clazz==undefined;}if(clazz==null){return false;}if(obj instanceof clazz){return true;}else{var Nc=Clazz.getClassName(obj);return Clazz.gIL(Nc,clazz)>=0;}};Clazz.superCall=function(To,Tz,Nf,funParams){var fx=null;var i=-1;var Fc=To[Nf];if(Fc!=null){if(Fc.claxxOwner!=null){if(Fc.claxxOwner!=Tz){fx=Fc;}}else{var stacks=Fc.stacks;var length=stacks.length;for(i=length-1;i>=0;i--){if(Tz==stacks[i]){if(i>0){i--;fx=stacks[i].prototype[Nf];}else{fx=stacks[0].prototype[Nf]["\\unknown"];}break;}else if(Clazz.gIL(Tz,stacks[i])>0){fx=stacks[i].prototype[Nf];break;}}}}if(fx!=null){if(i==0&&Nf=="construct"){var ss=Fc.stacks;if(ss!=null&&ss[0].superClazz==null&&ss[0].con$truct!=null){ss[0].con$truct.apply(To,[]);}}return fx.apply(To,(funParams==null)?[]:funParams);}else if(Nf=="construct"){return;}throw new Clazz.MethodNotFoundException(To,Tz,Nf,Clazz.gPT(funParams).typeString);};Clazz.superConstructor=function(To,Tz,funParams){Clazz.superCall(To,Tz,"construct",funParams);if(Tz.con$truct!=null){Tz.con$truct.apply(To,[]);}};Clazz.CastedNull=function(asClazz){if(asClazz!=null){if(asClazz instanceof String){this.Nc=asClazz;}else if(asClazz instanceof Function){this.Nc=Clazz.getClassName(asClazz);}else{this.Nc=""+asClazz;}}else{this.Nc="Object";}this.toString=function(){return null;};this.valueOf=function(){return null;};};Clazz.castNullAs=function(asClazz){return new Clazz.CastedNull(asClazz);};Clazz.MethodException=function(){};Clazz.MethodNotFoundException=function(){this.toString=function(){return"MethodNotFoundException";};};Clazz.gPT=function(funParams){var params=new Array();params.hasCastedNull=false;if(funParams!=null){for(var i=0;i<funParams.length;i++){params[i]=Clazz.getClassName(funParams[i]);if(funParams[i]instanceof Clazz.CastedNull){params.hasCastedNull=true;}}}if(params.length==0){params[0]="void";}params.typeString="\\"+params.join('\\');return params;};Clazz.saem=function(To,claxxRef,fxName,funParams){var params=Clazz.gPT(funParams);var fx=To[fxName];if(fx.lastParams==params.typeString&&fx.lastClaxxRef==claxxRef){var methodParams=null;if(params.hasCastedNull){methodParams=new Array();for(var k=0;k<funParams.length;k++){if(funParams[k]instanceof Clazz.CastedNull){methodParams[k]=null;}else{methodParams[k]=funParams[k];}}}else{methodParams=funParams;}return fx.lastMethod.apply(To,methodParams);}fx.lastParams=params.typeString;fx.lastClaxxRef=claxxRef;var stacks=fx.stacks;var length=stacks.length;var began=false;for(var i=length-1;i>-1;i--){if(began||stacks[i]==claxxRef){var Fc=stacks[i].prototype[fxName];var ret=Clazz.tsae(To,Fc,params,funParams,fx);if(!(ret instanceof Clazz.MethodException)){return ret;}began=true;}}if("construct"==fxName){return;}throw new Clazz.MethodNotFoundException(To,claxxRef,fxName,params.typeString);};Clazz.ie$plit="\\2".split(/\\/).length==1;Clazz.tsae=function(To,Fc,params,funParams,fx){var methods=new Array();var generic=true;for(var fn in Fc){if(fn.charCodeAt(0)==92){var ps=(Clazz.ie$plit?fn:fn.substring(1)).split(/\\/);if(ps.length==params.length){methods[methods.length]=ps;}generic=false;continue;}if(generic&&fn=="funParams"&&Fc.funParams!=null){fn=Fc.funParams;var ps=(Clazz.ie$plit?fn:fn.substring(1)).split(/\\/);if(ps.length==params.length){methods[0]=ps;}break;}}if(methods.length==0){return new Clazz.MethodException();}var method=Clazz.sM(methods,params);if(method!=null){var f=null;if(generic){f=Fc;}else{f=Fc["\\"+method];}var methodParams=null;if(params.hasCastedNull){methodParams=new Array();for(var k=0;k<funParams.length;k++){if(funParams[k]instanceof Clazz.CastedNull){methodParams[k]=null;}else{methodParams[k]=funParams[k];}}}else{methodParams=funParams;}fx.lastMethod=f;return f.apply(To,methodParams);}return new Clazz.MethodException();};Clazz.sM=function(rO,pts){var rT=new Array();for(var i=0;i<rO.length;i++){var fL=new Array();var isFitted=true;for(var j=0;j<rO[i].length;j++){fL[j]=Clazz.gIL(pts[j],rO[i][j]);if(fL[j]<0){isFitted=false;break;}}if(isFitted){fL[pts.length]=i;rT[rT.length]=fL;}}if(rT.length==0){return null;}var rtT=rT;var min=rtT[0];for(var i=1;i<rtT.length;i++){var vl=true;for(var j=0;j<pts.length;j++){if(min[j]<rtT[i][j]){vl=false;;break;}}if(vl){min=rtT[i];}}var index=min[pts.length];return rO[index].join('\\');};Clazz.gDM=function(claxxRef,Nf){var delegating=function(){var r=arguments;return SAEM(this,r.callee.claxxReference,r.callee.methodName,r);};delegating.methodName=Nf;delegating.claxxReference=claxxRef;return delegating;};SAEM=Clazz.saem;Clazz.formatParameters=function(funParams){if(funParams==null||funParams.length==0){return"\\void";}else{var s=funParams.toString();s=s.replace(/~([NABSO])/g,function($0,$1){if($1=='N'){return"Number";}else if($1=='B'){return"Boolean"}else if($1=='S'){return"String";}else if($1=='O'){return"Object";}else if($1=='A'){return"Array"}return"Unknown";});return s.replace(/\s+/g,"").replace(/^|,/g,"\\").replace(/\$/g,"org.eclipse.s");}};Clazz.overrideMethod=function(Tz,Nf,Bf,funParams){Bf.exName=Nf;var fpName=Clazz.formatParameters(funParams);Bf.funParams=fpName;Bf.claxxOwner=Tz;Tz.prototype[Nf]=Bf;return Bf;};Clazz.defineMethod=function(Tz,Nf,Bf,funParams){Bf.exName=Nf;var fpName=Clazz.formatParameters(funParams);var f$=Tz.prototype[Nf];if(f$==null){Bf.funParams=fpName;Bf.claxxOwner=Tz;Tz.prototype[Nf]=Bf;Bf.exClazz=Tz;return Bf;}else if(f$.claxxOwner==Tz&&f$.funParams==fpName){return f$;}var oldFun=null;var oldStacks=new Array();if(f$.stacks==null){oldFun=f$;if(f$.claxxOwner!=null){oldStacks[0]=oldFun.claxxOwner;}}else{oldStacks=f$.stacks;}if(f$.stacks==null||f$.claxxReference!=Tz){f$=Tz.prototype[Nf]=Clazz.gDM(Tz,Nf);var arr=new Array();for(var i=0;i<oldStacks.length;i++){arr[i]=oldStacks[i];}f$.stacks=arr;}var ss=f$.stacks;if(ss.length==0){ss[ss.length]=Tz;}else{var existed=false;for(var i=ss.length-1;i>=0;i--){if(ss[i]==Tz){existed=true;break;}}if(!existed){ss[ss.length]=Tz;}}if(oldFun!=null){if(oldFun.claxxOwner==Tz){f$[oldFun.funParams]=oldFun;oldFun.claxxOwner=null;oldFun.funParams=null;}else if(oldFun.claxxOwner==null){f$["\\unknown"]=oldFun;}}Bf.exClazz=Tz;f$[fpName]=Bf;return f$;};Clazz.makeConstructor=function(Tz,Bf,funParams){var Nf="construct";Clazz.defineMethod(Tz,Nf,Bf,funParams);if(Tz.con$truct!=null){Tz.con$truct.index=Tz.con$truct.stacks.length;}};Clazz.allPackage=new Object();Clazz.lastPackageName=null;Clazz.lastPackage=null;Clazz.declarePackage=function(pkgName){if(Clazz.lastPackageName==pkgName){return Clazz.lastPackage;}if(pkgName!=null&&pkgName.length!=0){var pkgFrags=pkgName.split(/\./);var pkg=Clazz.allPackage;for(var i=0;i<pkgFrags.length;i++){if(pkg[pkgFrags[i]]==null){pkg[pkgFrags[i]]={__PKG_NAME__:((pkg.__PKG_NAME__!=null)?pkg.__PKG_NAME__+"."+pkgFrags[i]:pkgFrags[i])};if(i==0){window[pkgFrags[i]]=pkg[pkgFrags[i]];}}pkg=pkg[pkgFrags[i]]}Clazz.lastPackageName=pkgName;Clazz.lastPackage=pkg;return pkg;}};Clazz.evalType=function(typeStr,isQualified){var idx=typeStr.lastIndexOf(".");if(idx!=-1){var pkgName=typeStr.substring(0,idx);var pkg=Clazz.declarePackage(pkgName);var Nc=typeStr.substring(idx+1);return pkg[Nc];}else if(isQualified){return window[typeStr];}else if(typeStr=="number"){return Number;}else if(typeStr=="object"){return Object;}else if(typeStr=="string"){return String;}else if(typeStr=="boolean"){return Boolean;}else if(typeStr=="function"){return Function;}else if(typeStr=="void"||typeStr=="undefined"||typeStr=="unknown"){return typeStr;}else if(typeStr=="NullObject"){return NullObject;}else{return window[typeStr];}};Clazz.defineType=function(Nq,Fc,pc,interfacez){var idx=Nq.lastIndexOf(".");if(idx!=-1){var pkgName=Nq.substring(0,idx);var pkg=Clazz.declarePackage(pkgName);var Nc=Nq.substring(idx+1);if(pkg[Nc]!=null){return pkg[Nc];}pkg[Nc]=Fc;}else{if(window[Nq]!=null){return window[Nq];}window[Nq]=Fc;}Clazz.decorateAsType(Fc,Nq,pc,interfacez);return Fc;};Clazz.instantialize=function(To,args){if(args!=null&&args.length==1&&args[0]!=null&&args[0]instanceof Clazz.aIC){return;}var c=To.construct;if(c!=null){if(To.con$truct==null){c.apply(To,args);}else if(To.getClass().superClazz==null){To.con$truct.apply(To,[]);c.apply(To,args);}else if((c.claxxOwner!=null&&c.claxxOwner==To.getClass())||(c.stacks!=null&&c.stacks[c.stacks.length-1]==To.getClass())){c.apply(To,args);}else{if(c.claxxOwner!=null&&c.claxxOwner.superClazz==null&&c.claxxOwner.con$truct!=null){c.claxxOwner.con$truct.apply(To,[]);}else if(c.stacks!=null&&c.stacks.length==1&&c.stacks[0].superClazz==null){c.stacks[0].con$truct.apply(To,[]);}c.apply(To,args);To.con$truct.apply(To,[]);}}else if(To.con$truct!=null){To.con$truct.apply(To,[]);}};Clazz.iFN=["equals","getName"];Clazz.innerFunctions={equals:function(aFun){return this==aFun;},getName:function(){return Clazz.getClassName(this);},getResourceAsStream:function(name){var is=null;if(java.io.InputStream!=null){is=new java.io.InputStream();}else{is=new Object();is.__CLASS_NAME__="java.io.InputStream";is.close=function(){};}is.read=function(){return 0;};name=name.replace(/\\/g,'/');if(name.indexOf('/')==0){is.url=name.substring(1);}else{var Nc=this.__CLASS_NAME__;var bFr=null;if(window["ClazzLoader"]!=null){bFr=ClazzLoader.getClasspathFor(Nc);var x=bFr.lastIndexOf(Nc.replace(/\./g,"/"));if(x!=-1){bFr=bFr.substring(0,x);}else{bFr=null;}}else{var bins=Clazz.binaryFolders;if(bins!=null&&bins.length!=0){bFr=bins[0];}}if(bFr==null||bFr.length==0){bFr="bin/";}bFr=bFr.replace(/\\/g,'/');var length=bFr.length;var lastChar=bFr.charAt(length-1);if(lastChar!='/'){bFr+="/";}var idx=Nc.lastIndexOf('.');if(idx==-1){is.url=bFr+name;}else{is.url=bFr+Nc.substring(0,idx).replace(/\./g,'/')+"/"+name;}}return is;}};Clazz.dF=function(Fc,prefix,name){var qName=null;if(prefix==null){qName=name;window[name]=Fc;}else if(prefix.__PKG_NAME__!=null){qName=prefix.__PKG_NAME__+"."+name;prefix[name]=Fc;if(prefix==java.lang){window[name]=Fc;}}else{qName=prefix.__CLASS_NAME__+"."+name;prefix[name]=Fc;}Fc.__CLASS_NAME__=qName;Fc.prototype.__CLASS_NAME__=qName;Fc.equals=Clazz.innerFunctions.equals;Fc.getName=Clazz.innerFunctions.getName;Fc.getResourceAsStream=Clazz.innerFunctions.getResourceAsStream;};Clazz.declareInterface=function(prefix,name,interfacez){var Fc=function(){};Clazz.dF(Fc,prefix,name);if(interfacez!=null){Clazz.implementOf(Fc,interfacez);}return Fc;};Clazz.decorateAsClass=function(Fc,prefix,name,pc,interfacez,pi){var qName=null;Clazz.dF(Fc,prefix,name);if(pi!=null){Clazz.xic(Fc,pc,pi);}else if(pc!=null){Clazz.xic(Fc,pc);}if(interfacez!=null){Clazz.implementOf(Fc,interfacez);}return Fc;};Clazz.decorateAsType=function(Fc,Nq,pc,interfacez,pi){Fc.__CLASS_NAME__=Nq;Fc.prototype.__CLASS_NAME__=Nq;Fc.equals=Clazz.innerFunctions.equals;Fc.getName=Clazz.innerFunctions.getName;if(pi!=null){Clazz.xic(Fc,pc,pi);}else if(pc!=null){Clazz.xic(Fc,pc);}if(interfacez!=null){Clazz.implementOf(Fc,interfacez);}return Fc;};Clazz.declarePackage("java.lang");Clazz.MethodNotFoundException=function(obj,clazz,method,params){var paramStr="";if(params!=null){paramStr=params.substring(1).replace(/\\/g,",");}var leadingStr="";if(method!=null&&method!="construct"){leadingStr="Method";}else{leadingStr="Constructor";}this.message=leadingStr+" "+Clazz.getClassName(clazz)+"."+method+"("+paramStr+") is not found!";this.toString=function(){return"MethodNotFoundException:"+this.message;}};Clazz.prepareCallback=function(To,args){var classThisObj=args[0];var cbName="b$";if(To!=null&&classThisObj!=null&&classThisObj!=window){var obs=To[cbName];if(obs==null){obs=new Array();To[cbName]=obs;}var className=Clazz.getClassName(classThisObj);obs[className.replace(/org\.eclipse\.swt\./,"$wt.")]=classThisObj;var clazz=Clazz.getClass(classThisObj);while(clazz.superClazz!=null){clazz=clazz.superClazz;obs[Clazz.getClassName(clazz).replace(/org\.eclipse\.swt\./,"$wt.")]=classThisObj;}var cbs=classThisObj[cbName];if(cbs!=null&&cbs instanceof Array){for(var s in cbs){if(s!="length"){obs[s]=cbs[s];}}}}for(var i=0;i<args.length-1;i++){args[i]=args[i+1];}args.length--;};Clazz.innerTypeInstance=function(clazzInner,To,finalVars){var obj=null;if(arguments.length==3){obj=new clazzInner(To);}else if(arguments.length==4){obj=new clazzInner(To,arguments[3]);}else if(arguments.length==5){obj=new clazzInner(To,arguments[3],arguments[4]);}else if(arguments.length==6){obj=new clazzInner(To,arguments[3],arguments[4],arguments[5]);}else if(arguments.length==7){obj=new clazzInner(To,arguments[3],arguments[4],arguments[5],arguments[6]);}else if(arguments.length==8){obj=new clazzInner(To,arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]);}else if(arguments.length==9){obj=new clazzInner(To,arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8]);}else if(arguments.length==10){obj=new clazzInner(To,arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9]);}else{obj=new clazzInner();if(obj.construct==null){throw new String("No support anonymous class constructor with "+"more than 7 parameters.");}var args=new Array();for(var i=3;i<arguments.length;i++){args[i-3]=arguments[i];}obj.construct.apply(obj,args);}if(finalVars!=null&&To.f$==null){obj.f$=finalVars;}else if(finalVars==null&&To.f$!=null){obj.f$=To.f$;}else if(finalVars!=null&&To.f$!=null){var o=new Object();for(var attr in To.f$){o[attr]=To.f$[attr];}for(var attr in finalVars){o[attr]=finalVars[attr];}obj.f$=o;}return obj;};Clazz.cloneFinals=function(){var o=new Object();var length=arguments.length/2;for(var i=0;i<length;i++){o[arguments[i+i]]=arguments[i+i+1];}return o;};Clazz.isClassDefined=Clazz.isDefinedClass=function(Nc){if(Nc!=null&&Nc.length!=0){var pkgFrags=Nc.split(/\./);var pkg=null;for(var i=0;i<pkgFrags.length;i++){if(pkg==null){if(Clazz.allPackage[pkgFrags[0]]==null){return false;}pkg=Clazz.allPackage[pkgFrags[0]];}else{if(pkg[pkgFrags[i]]==null){return false;}pkg=pkg[pkgFrags[i]]}}return pkg!=null;}else{return false;}};Clazz.defineEnumConstant=function(clazzEnum,enumName,enumOrdinal,initialParams,clazzEnumExt){var o=null;if(clazzEnumExt!=null){o=new clazzEnumExt();}else{o=new clazzEnum();}Clazz.superConstructor(o,clazzEnum,[enumName,enumOrdinal]);if(initialParams!=null&&initialParams.length!=0){o.construct.apply(o,initialParams);}clazzEnum[enumName]=o;clazzEnum.prototype[enumName]=o;return o;};Clazz.newArray=function(){var args=arguments;if(arguments.length==1){if(arguments[0]instanceof Array){args=arguments[0];}}if(args.length<=1){return new Array();}else if(args.length==2){var dim=args[0];if(typeof dim=="string"){dim=dim.charCodeAt(0);}var val=args[1];var arr=new Array(dim);for(var i=0;i<dim;i++){arr[i]=val;}return arr;}else{var dim=args[0];if(typeof dim=="string"){dim=dim.charCodeAt(0);}var len=args.length-1;var xargs=new Array(len);for(var i=0;i<len;i++){xargs[i]=args[i+1];}var arr=new Array(dim);for(var i=0;i<dim;i++){arr[i]=Clazz.newArray(xargs);}return arr;}};Clazz.makeFunction=function(jsr){return function(e){if(e==null){e=window.event;}if(jsr.setEvent!=null){jsr.setEvent(e);}jsr.run();if(e!=null){e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}}if(jsr.returnSet==1){return jsr.returnNumber;}else if(jsr.returnSet==2){return jsr.returnBoolean;}else if(jsr.returnSet==3){return jsr.returnObject;}};};Clazz.defineStatics=function(clazz){for(var i=0;i<(arguments.length-1)/2;i++){var name=arguments[i+i+1];clazz[name]=clazz.prototype[name]=arguments[i+i+2];}};Clazz.prepareFields=function(clazz,fieldsFun){var stacks=new Array();if(clazz.con$truct!=null){var ss=clazz.con$truct.stacks;var idx=clazz.con$truct.index;for(var i=idx;i<ss.length;i++){stacks[i]=ss[i];}}clazz.con$truct=clazz.prototype.con$truct=function(){var stacks=arguments.callee.stacks;if(stacks!=null){for(var i=0;i<stacks.length;i++){stacks[i].apply(this,[]);}}};stacks[stacks.length]=fieldsFun;clazz.con$truct.stacks=stacks;clazz.con$truct.index=0;};Clazz.gMCM=function(args){var o=new Object();var argc=args.callee.caller;if(argc==null)return null;if(argc!=Clazz.tsae){argc=argc.arguments.callee.caller;if(argc==null)return null;}if(argc!=Clazz.tsae)return null;argc=argc.arguments.callee.caller;if(argc==null||argc!=Clazz.saem)return null;o.claxxRef=argc.arguments[1];o.fxName=argc.arguments[2];o.pts=Clazz.gPT(argc.arguments[3]);argc=argc.arguments.callee.caller;if(argc==null)return null;argc=argc.arguments.callee.caller;if(argc==null)return null;o.caller=argc;return o;};Clazz.checkPrivateMethod=function(args){var m=Clazz.gMCM(args);if(m==null)return null;var callerFx=m.claxxRef.prototype[m.caller.exName];if(callerFx==null)return null;var ppFun=null;if(callerFx.claxxOwner!=null){ppFun=callerFx.claxxOwner.prototype[m.fxName];}else{var stacks=callerFx.stacks;for(var i=stacks.length-1;i>=0;i--){var fx=stacks[i].prototype[m.caller.exName];if(fx==m.caller){ppFun=stacks[i].prototype[m.fxName];}else if(fx!=null){for(var fn in fx){if(fn.indexOf('\\')==0&&fx[fn]==m.caller){ppFun=stacks[i].prototype[m.fxName];break;}}}if(ppFun!=null){break;}}}if(ppFun!=null&&ppFun.claxxOwner==null){ppFun=ppFun["\\"+m.pts];}if(ppFun!=null&&ppFun.isPrivate&&ppFun!=args.callee){return ppFun;}return null;};var $fz=null;var c$=null;Clazz.cst=new Array();Clazz.pu$h=function(){if(c$!=null){Clazz.cst[Clazz.cst.length]=c$;}};Clazz.p0p=function(){if(Clazz.cst.length>0){var clazz=Clazz.cst[Clazz.cst.length-1];Clazz.cst.length--;return clazz;}else{return null;}};if(window["ClazzLoader"]!=null&&ClazzLoader.binaryFolders!=null){Clazz.binaryFolders=ClazzLoader.binaryFolders;}else{Clazz.binaryFolders=["bin/","","j2slib/"];}Clazz.addBinaryFolder=function(bin){if(bin!=null){var bins=Clazz.binaryFolders;for(var i=0;i<bins.length;i++){if(bins[i]==bin){return;}}bins[bins.length]=bin;}};Clazz.removeBinaryFolder=function(bin){if(bin!=null){var bins=Clazz.binaryFolders;for(var i=0;i<bins.length;i++){if(bins[i]==bin){for(var j=i;j<bins.length-1;j++){bins[j]=bins[j+1];}bins.length--;return bin;}}}return null;};Clazz.setPrimaryFolder=function(bin){if(bin!=null){Clazz.removeBinaryFolder(bin);var bins=Clazz.binaryFolders;for(var i=bins.length-1;i>=0;i--){bins[i+1]=bins[i];}bins[0]=bin;}};Clazz.load=function(musts,clazz,optionals,declaration){if(declaration!=null){declaration();}};java.lang.Object=Object;Object.getName=Clazz.innerFunctions.getName;Object.prototype.equals=function(obj){return this==obj;};Object.prototype.hashCode=function(){return this.toString().hashCode();};Object.prototype.getClass=function(){return Clazz.getClass(this);};Object.prototype.clone=function(){return this;};Object.prototype.finalize=function(){};Object.prototype.notify=function(){};Object.prototype.notifyAll=function(){};Object.prototype.wait=function(){};Object.prototype.toString=function(){if(this.__CLASS_NAME__!=null){return"["+this.__CLASS_NAME__+" object]";}else{return"[object]";}};w$=window;d$=document;System={out:{print:function(){},printf:function(){},println:function(){}},err:{print:function(){},printf:function(){},println:function(){}},arraycopy:function(src,srcPos,dest,destPos,length){for(var i=0;i<length;i++){dest[destPos+i]=src[srcPos+i];}}};popup=assert=log=error=window.alert;Thread=function(){};Thread.J2S_THREAD=Thread.prototype.J2S_THREAD=new Thread();Thread.currentThread=Thread.prototype.currentThread=function(){return this.J2S_THREAD;};$_J=Clazz.declarePackage;$_C=Clazz.decorateAsClass;$_Z=Clazz.instantialize;$_I=Clazz.declareInterface;$_D=Clazz.isClassDefined;$_H=Clazz.pu$h;$_P=Clazz.p0p;$_B=Clazz.prepareCallback;$_N=Clazz.innerTypeInstance;$_K=Clazz.makeConstructor;$_U=Clazz.superCall;$_R=Clazz.superConstructor;$_M=Clazz.defineMethod;$_V=Clazz.overrideMethod;$_S=Clazz.defineStatics;$_E=Clazz.defineEnumConstant;$_F=Clazz.cloneFinals;$_Y=Clazz.prepareFields;$_A=Clazz.newArray;$_O=Clazz.instanceOf;$_G=Clazz.inheritArgs;$_X=Clazz.checkPrivateMethod;$_Q=Clazz.makeFunction;