package com.example.weex.tool;

import android.app.ActionBar;
import android.app.Activity;
import android.content.res.TypedArray;
import android.graphics.Point;
import android.os.Build;
import android.util.Log;
import android.view.ViewConfiguration;

import com.taobao.weex.WXEnvironment;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * Created by zf on 2018/1/12.
 */

public class CommonUtils {
    private static final String TAG = "WXTBUtil";

    private static boolean isSupportSmartBar = false;
    private static Boolean hasHardwareMenuKey = null;

    static {
        isSupportSmartBar = isSupportSmartBar();
    }
    public static int getDisplayWidth(Activity activity){
        int width=0;
        if (activity != null && activity.getWindowManager() != null && activity.getWindowManager().getDefaultDisplay() != null) {
            Point point=new Point();
            activity.getWindowManager().getDefaultDisplay().getSize(point);
            width = point.x;
        }
        return width;
    }

    public static int getDisplayHeight(Activity activity) {
        int height = 0;
        if (activity != null && activity.getWindowManager() != null && activity.getWindowManager().getDefaultDisplay() != null) {
            Point point=new Point();
            activity.getWindowManager().getDefaultDisplay().getSize(point);
            height=point.y;
        }

        Log.e(TAG, "isSupportSmartBar:" + isSupportSmartBar);

        if (isSupportSmartBar) {
            int smartBarHeight = getSmartBarHeight(activity);
            Log.e(TAG, "smartBarHeight:" + smartBarHeight);
            height -= smartBarHeight;
        }

        if (activity != null && activity.getActionBar() != null) {
            int actionbar= activity.getActionBar().getHeight();
            if(actionbar==0){
                TypedArray actionbarSizeTypedArray=activity.obtainStyledAttributes(new int[]{android.R.attr.actionBarSize});
                actionbar= (int) actionbarSizeTypedArray.getDimension(0,0);
            }
            Log.d(TAG, "actionbar:" + actionbar);
            height -= actionbar;
        }

        int status = getStatusBarHeight(activity);
        Log.d(TAG, "status:" + status);

        height -= status;

        Log.d(TAG,"height:"+height);
        return height;
    }

    private static int getStatusBarHeight(Activity activity) {
        Class<?> c;
        Object obj;
        Field field;
        int x;
        int statusBarHeight = 0;
        try {
            c = Class.forName("com.android.internal.R$dimen");
            obj = c.newInstance();
            field = c.getField("status_bar_height");
            x = Integer.parseInt(field.get(obj).toString());
            statusBarHeight = activity.getResources().getDimensionPixelSize(x);
        } catch (Exception e1) {
            e1.printStackTrace();
        }
        return statusBarHeight;
    }

    private static int getSmartBarHeight(Activity activity) {
        ActionBar actionbar = activity.getActionBar();
        if (actionbar != null)
            try {
                Class c = Class.forName("com.android.internal.R$dimen");
                Object obj = c.newInstance();
                Field field = c.getField("mz_action_button_min_height");
                int height = Integer.parseInt(field.get(obj).toString());
                return activity.getResources().getDimensionPixelSize(height);
            } catch (Exception e) {
                e.printStackTrace();
                actionbar.getHeight();
            }
        return 0;
    }

    private static boolean isSupportSmartBar() {
        boolean hasSmartBar = false;
        try {
            final Method method = Build.class.getMethod("hasSmartBar");
            if (method != null) {
                hasSmartBar = true;
            }
        } catch (final Exception e) {
            // return false;
        }
        return hasSmartBar;
    }

    public static<T extends Exception> void throwIfNull(Object object,T e) throws T {
        if(object == null){
            throw e;
        }
    }

    public static boolean hasHardwareMenuKey() {
        if (hasHardwareMenuKey == null) {
            ViewConfiguration vc = ViewConfiguration.get(WXEnvironment.getApplication());
            if (Build.VERSION.SDK_INT >= 14) {
                // boolean vc.hasPermanentMenuKey();
                try {
                    Method m = vc.getClass().getMethod("hasPermanentMenuKey",
                        new Class<?>[] {});
                    try {
                        hasHardwareMenuKey = (Boolean) m.invoke(vc, new Object[] {});
                    } catch (IllegalArgumentException e) {
                        hasHardwareMenuKey = false;
                    } catch (IllegalAccessException e) {
                        hasHardwareMenuKey = false;
                    } catch (InvocationTargetException e) {
                        hasHardwareMenuKey = false;
                    }
                } catch (NoSuchMethodException e) {
                    hasHardwareMenuKey = false;
                }
            }
            if (hasHardwareMenuKey == null) {
                if (Build.VERSION.SDK_INT < Build.VERSION_CODES.ICE_CREAM_SANDWICH)
                    hasHardwareMenuKey = true;
                else
                    hasHardwareMenuKey = false;
            }
        }
        return hasHardwareMenuKey;
    }
}

