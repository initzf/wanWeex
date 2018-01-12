package com.example.weex;

import android.app.Application;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import com.example.weex.tool.ImageAdapter;
import com.example.weex.tool.MyWXModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
import com.taobao.weex.common.WXException;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by zf on 2018/1/5.
 */

public class MainApp extends Application {
    private static final String TAG = "MainApp";

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        try {
            WXSDKEngine.registerModule("myModule", MyWXModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }

        initDebugEnvironment(true, "192.168.1.246");


        WXSDKEngine.setActivityNavBarSetter(new IActivityNavBarSetter() {
            @Override
            public boolean push(String param) {
                Log.i(TAG, "push: " + param);

                if (!TextUtils.isEmpty(param)) {
                    try {
                        JSONObject nObject = new JSONObject(param);

                        String url = nObject.getString("url");
                        String title = nObject.getString("title");

                        Intent intent = new Intent(getApplicationContext(), TestActivity.class);
                        intent.putExtra("url", url);
                        intent.putExtra("title", title);
                        startActivity(intent);

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }

                return false;
            }

            @Override
            public boolean pop(String param) {
                Log.i(TAG, "pop: " + param);
                return false;
            }

            @Override
            public boolean setNavBarRightItem(String param) {
                Log.i(TAG, "setNavBarRightItem: " + param);
                return true;
            }

            @Override
            public boolean clearNavBarRightItem(String param) {
                Log.i(TAG, "clearNavBarRightItem: " + param);
                return true;
            }

            @Override
            public boolean setNavBarLeftItem(String param) {
                Log.i(TAG, "setNavBarLeftItem: " + param);
                return true;
            }

            @Override
            public boolean clearNavBarLeftItem(String param) {
                Log.i(TAG, "clearNavBarLeftItem: " + param);
                return true;
            }

            @Override
            public boolean setNavBarMoreItem(String param) {
                Log.i(TAG, "setNavBarMoreItem: " + param);
                return true;
            }

            @Override
            public boolean clearNavBarMoreItem(String param) {
                Log.i(TAG, "clearNavBarMoreItem: " + param);
                return true;
            }

            @Override
            public boolean setNavBarTitle(String param) {
                Log.i(TAG, "setNavBarTitle: " + param);
                return true;
            }
        });

        WXSDKEngine.initialize(this, config);
    }


    private void initDebugEnvironment(boolean connectable, String host) {
        if (!"DEBUG_SERVER_HOST".equals(host)) {
            WXEnvironment.sDebugServerConnectable = connectable;
            WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8081/debugProxy/native";
        }
    }
}
