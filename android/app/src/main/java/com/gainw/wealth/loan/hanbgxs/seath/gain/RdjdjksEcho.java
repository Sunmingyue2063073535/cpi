package com.gainw.wealth.loan.hanbgxs.seath.gain;


import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;


@CapacitorPlugin(name = "MyEcho")
public class RdjdjksEcho extends Plugin {
    @PluginMethod()
    public void echo(PluginCall call) {
        JSObject ret = new JSObject();
        String value = call.getString("k");
        if (value.equals("getHeaderToken")) {
            ret.put("ga", getGaid(getContext()));
            ret.put("and", getAndroidID(getContext()));
            ret.put("appV", getAppVersionName(getContext()));
        }
        call.resolve(ret);
    }

    public static String getAndroidID(Context context) {
        try {
            String androidID = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ANDROID_ID);
            //LogUtil.e("androidID: " + androidID);
            return androidID;
        } catch (Exception e) {
            return null;
        }
    }
    public static String getGaid(Context context) {
        try {
            String Gaid = new AdvertisingIdClient(context).getAdvertisingIdInfo(context).getId();
            return Gaid;
        } catch (Exception e) {
            return null;
        }
    }
    public static String getAppVersionName(Context context) {
        String versionName = "";
        try {
            PackageManager pm = context.getPackageManager();
            PackageInfo pi = pm.getPackageInfo(context.getPackageName(), 0);
            versionName = pi.versionName;
            if (versionName == null || versionName.length() <= 0) {
                return "";
            }
        } catch (Exception e) {

        }
        return versionName;
    }


}