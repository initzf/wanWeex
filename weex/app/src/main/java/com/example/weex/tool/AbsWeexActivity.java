package com.example.weex.tool;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zf on 2018/1/12.
 */

public abstract class AbsWeexActivity extends AppCompatActivity implements IWXRenderListener {
    private static final String TAG = "AbsWeexActivity";
    protected WXSDKInstance mInstance;
    protected Uri mUri;
    protected Boolean isLocalUrl = false;
    private String mUrl;// "http://your_current_IP:12580/examples/build/index.js";
    private String mPageName = TAG;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        createWeexInstance();
        mInstance.onActivityCreate();
    }


    protected void destoryWeexInstance() {
        if (mInstance != null) {
            mInstance.registerRenderListener(null);
            mInstance.destroy();
            mInstance = null;
        }
    }

    protected void createWeexInstance() {
        destoryWeexInstance();
        mInstance = new WXSDKInstance(this);
        mInstance.registerRenderListener(this);
    }

    protected void renderPageByURL(String url) {
        renderPageByURL(url, null);
    }

    protected void renderPageByURL(String url, String jsonInitData) {

        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, url);

        mInstance.renderByUrl(AbsWeexActivity.class.getName(), url, options, jsonInitData, WXRenderStrategy.APPEND_ASYNC);

    }

    @Override
    public void onStart() {
        super.onStart();
        if (mInstance != null) {
            mInstance.onActivityStart();
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        if (mInstance != null) {
            mInstance.onActivityResume();
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        if (mInstance != null) {
            mInstance.onActivityPause();
        }
    }

    @Override
    public void onStop() {
        super.onStop();
        if (mInstance != null) {
            mInstance.onActivityStop();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (mInstance != null) {
            mInstance.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (mInstance != null) {
            mInstance.onActivityResult(requestCode, resultCode, data);
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mInstance != null) {
            mInstance.onActivityDestroy();
        }

    }

    @Override
    public void onViewCreated(WXSDKInstance wxsdkInstance, View view) {
        setContentView(view);
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance wxsdkInstance, int width, int height) {

    }

    public void runWithPermissionsCheck(int requestCode, String permission, Runnable runnable) {
        if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this, permission)) {
                Toast.makeText(this, "please give me the permission", Toast.LENGTH_SHORT).show();
            } else {
                ActivityCompat.requestPermissions(this, new String[]{permission}, requestCode);
            }
        } else {
            if (runnable != null) {
                runnable.run();
            }
        }
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }


    public String getUrl() {
        return mUrl;
    }

    public void setUrl(String url) {
        mUrl = url;
    }

    public void loadUrl(String url) {
        setUrl(url);
        renderPage();
    }

    protected void preRenderPage() {

    }

    protected void postRenderPage() {

    }

    protected void renderPage() {
        preRenderPage();
        renderPageByURL(mUrl);
        postRenderPage();
    }
}

