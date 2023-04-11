package com.gainw.wealth.loan.hanbgxs.seath.gain;

import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.analytics.FirebaseAnalytics;

import android.os.Bundle;
import android.os.Handler;

import androidx.annotation.NonNull;

import io.branch.referral.Branch;

public class DdidActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(RdjdjksEcho.class);
        super.onCreate(savedInstanceState);
        initVue();
    }
    private void initVue() {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                uploadInstanceId();
                initInstallReferrer();
            }
        },1000);
    }
    //上传id
    public static InstallReferrerClient referrerClient;
    public void initInstallReferrer() {
        referrerClient = InstallReferrerClient.newBuilder(this).build();
        Bridge bridge = getBridge();

        referrerClient.startConnection(new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                switch (responseCode) {
                    case InstallReferrerClient.InstallReferrerResponse.OK: {
                        try {
                            ReferrerDetails response = referrerClient.getInstallReferrer();
                            JSObject item = new JSObject();
                            item.put("type", 3);
                            item.put("installReferrer", response.getInstallReferrer());
                            item.put("installVersion", response.getInstallVersion());
                            item.put("googlePlayInstantParam", response.getGooglePlayInstantParam());
                            item.put("installBeginTimestampSeconds", response.getInstallBeginTimestampSeconds());
                            item.put("installBeginTimestampServerSeconds", response.getInstallBeginTimestampServerSeconds());
                            item.put("referrerClickTimestampSeconds", response.getReferrerClickTimestampSeconds());
                            item.put("referrerClickTimestampServerSeconds",  response.getReferrerClickTimestampServerSeconds());
                            String script = "window.updateData(" + item.toString() + ")";
                            bridge.getWebView().evaluateJavascript(script, null);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                        break;
                    }
                    case InstallReferrerClient.InstallReferrerResponse.FEATURE_NOT_SUPPORTED: {
                        JSObject item = new JSObject();
                        item.put("type", 3);
                        item.put("error","NOT_SUPPORTED");
                        String script = "window.updateData(" + item.toString() + ")";
                        bridge.getWebView().evaluateJavascript(script, null);
                        break;
                    }
                    case InstallReferrerClient.InstallReferrerResponse.SERVICE_UNAVAILABLE: {
                        JSObject item = new JSObject();
                        item.put("type", 3);
                        item.put("error","SERVICE_UNAVAILABLE");
                        String script = "window.updateData(" + item.toString() + ")";
                        bridge.getWebView().evaluateJavascript(script, null);
                        break;
                    }

                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {

            }
        });
    }
    public void uploadInstanceId(){
        FirebaseAnalytics.getInstance(this).getAppInstanceId().
                addOnCompleteListener(new OnCompleteListener<String>() {
                    @Override
                    public void onComplete(@NonNull Task<String> task) {
                        if (!task.isComplete() || !task.isSuccessful()) return;
                        String id = task.getResult();
                        Bridge bridge = getBridge();
                        JSObject item = new JSObject();
                        item.put("id", id);
                        item.put("type", 2);
                        String script = "window.updateData(" + item.toString() + ")";
                        bridge.getWebView().evaluateJavascript(script, null);
                    }
                });
    }
}
