package com.konylabs.customwidget;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;

import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.ui.KonyCustomWidget;

public class N_customWidget extends JSLibrary {

 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new barcodescanner();
 return libs;
 }
		
		public N_customWidget(){
	}
	public String getNameSpace() {
		return "customWidget";
	}

static class barcodescanner extends JSLibrary {
 
 
	public static final String startCamera = "startCamera";
 
	String[] methods = { startCamera };
 String[] props = { "scanResultCallback", "barcodeFormats", "tradeMarkText", "textColor", "textSize", "borderColor", "borderLength", "laserColor", "maskColor", "flashEnabled", "autoFocusEnabled" };
 private static Hashtable<String, Integer> propertyTypeMappings = null;
 public Object createInstance(final Object[] properties, long jsobject) {
 if(propertyTypeMappings == null) {
 propertyTypeMappings = new Hashtable<String, Integer>();
 propertyTypeMappings.put("scanResultCallback",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 propertyTypeMappings.put("barcodeFormats",KonyCustomWidget.NATIVE_DATA_TYPE_VECTOR);
 propertyTypeMappings.put("tradeMarkText",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("textColor",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("textSize",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("borderColor",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("borderLength",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("laserColor",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("maskColor",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("flashEnabled",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_BOOLEAN);
 propertyTypeMappings.put("autoFocusEnabled",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_BOOLEAN);
 
 }

 KonyCustomWidget widget = new kony.com.barcodewidget.BarcodeWidgetView();
 widget.initProperties(properties,jsobject,propertyTypeMappings);
 return widget;
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 0 || paramLen > 1){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 ret = this.startCamera(params[0]
 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "barcodescanner";
	}
	public String[] getProperties() {
		// TODO Auto-generated method stub
		return props;
	}
	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] startCamera( Object self ){
 
		Object[] ret = null;
 ((kony.com.barcodewidget.BarcodeWidgetView)self).startCamera( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

};
