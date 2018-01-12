package com.example.weex.tool;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zf on 2018/1/5.
 */

public class MyWXModule extends WXModule {
    private static final String TAG = "MyWXModule";


    @WXModuleAnno(moduleMethod = true, runOnUIThread = true)
    public void startActivity(String json) {
        if (TextUtils.isEmpty(json)) {
            return;
        }

        try {

            JSONObject nObject = new JSONObject(json);

            String url = nObject.getString("url");
            String title = nObject.getString("title");
            String action = nObject.getString("action");


            Intent intent = new Intent();
            intent.putExtra("url", url);
            intent.putExtra("title", title);
            intent.putExtra("action", action);

            Context mContext = mWXSDKInstance.getContext();

            intent.setComponent(new ComponentName(mContext.getPackageName(), "com.example.weex." + action));

            if (mContext instanceof Activity) {

                Activity activity = (Activity) mContext;

                activity.startActivityForResult(intent, 111);
            } else {
                mContext.startActivity(intent);
            }
        } catch (Exception e) {
            Log.i(TAG, "startActivity: " + e.getMessage());
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.i(TAG, "onActivityResult: " + requestCode);
        Log.i(TAG, "onActivityResult: " + resultCode);

        Map<String, Object> map = new HashMap<>();
        map.put("str", "钱钱钱钱钱钱");

        if (mWXSDKInstance != null) {
            mWXSDKInstance.fireGlobalEventCallback("wojiazaodiqiu", map);
        }
    }

    @WXModuleAnno(moduleMethod = true, runOnUIThread = true)
    public void getUserArgment(JSCallback mJsCallback) {
        Map<String, String> data = new HashMap<>();
        data.put("username", "我家造地球");
        data.put("str", "不要搜索了");
        //通知一次
        mJsCallback.invoke(data);
    }
}
