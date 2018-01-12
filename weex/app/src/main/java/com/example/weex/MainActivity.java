package com.example.weex;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

public class MainActivity extends AppCompatActivity implements IWXRenderListener {
    private static final String TAG = "MainActivity";
    private WXSDKInstance mWxsdkInstance;
    private long mExitTime = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        initWeex();
    }

    private void initWeex() {
        destoryWeexInstance();

        if (mWxsdkInstance == null) {
            mWxsdkInstance = new WXSDKInstance(this);
        }
        mWxsdkInstance.registerRenderListener(this);

        /**
         * WXSample 可以替换成自定义的字符串，针对埋点有效。
         * template 是.we transform 后的 js文件。
         * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
         * jsonInitData 可以为空。
         */
        mWxsdkInstance.renderByUrl(MainActivity.class.getName(), "http://192.168.1.246:8081/dist/index.js", null, null, WXRenderStrategy.APPEND_ASYNC);
    }

    protected void destoryWeexInstance() {
        if (mWxsdkInstance != null) {
            mWxsdkInstance.registerRenderListener(null);
            mWxsdkInstance.destroy();
            mWxsdkInstance = null;
        }
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        Log.i(TAG, "onRenderSuccess: ");
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        Log.i(TAG, "onRefreshSuccess: ");
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Log.i(TAG, "onException: ");
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {

        super.onDestroy();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityDestroy();
        }
        destoryWeexInstance();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityResult(requestCode, resultCode, data);
        }

    }

    @Override
    public void onBackPressed() {
        if ((System.currentTimeMillis() - mExitTime) >= 2000) {
            Toast.makeText(this, "再按退出", Toast.LENGTH_SHORT).show();
            mExitTime = System.currentTimeMillis();
        } else {
            //super.onBackPressed();
            moveTaskToBack(false);
        }
    }
}
