package com.example.weex.tool;

import android.content.Context;
import android.text.TextUtils;
import android.util.Log;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

/**
 * Created by zf on 2018/1/5.
 */

public class ImageAdapter implements IWXImgLoaderAdapter {
    private static final String TAG = "ImageAdapter";


    @Override
    public void setImage(String url, ImageView view, WXImageQuality quality, WXImageStrategy strategy) {

        Log.i(TAG, "setImage:= " + url);

        if (TextUtils.isEmpty(url)) {
            return;
        }

        if (url.startsWith("mipmap://") || url.startsWith("drawable://")) {

            int srcId = getDrawableId(WXEnvironment.getApplication(), url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")), url.substring(0, url.indexOf(":")));

            Glide.with(WXEnvironment.getApplication()).load(srcId).into(view);

            return;
        }

        Glide.with(WXEnvironment.getApplication()).load(url).into(view);
    }


    public int getDrawableId(Context sContext, String paramString, String type) {

        Log.i(TAG, "getDrawableId: " + paramString + "------" + type + "-----" + sContext.getPackageName());

        return sContext.getResources().getIdentifier(paramString, type, sContext.getPackageName());
    }
}
