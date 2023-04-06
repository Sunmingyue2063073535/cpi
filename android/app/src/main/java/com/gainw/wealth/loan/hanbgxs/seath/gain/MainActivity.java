package com.gainw.wealth.loan.hanbgxs.seath.gain;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;

import io.branch.referral.Branch;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(EchoPlugin.class);
        super.onCreate(savedInstanceState);
        Branch.enableLogging();
        Branch.getAutoInstance(this);
    }
}
