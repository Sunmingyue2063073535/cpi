package com.gainw.wealth.loan.hanbgxs.seath.gain;

import android.app.Application;

import io.branch.referral.Branch;

public class MyApp extends Application
{

    @Override
    public void onCreate() {
        super.onCreate();
        onInit();
    }


    private void onInit() {
        Branch.enableLogging();
        Branch.getAutoInstance(this);
    }
}