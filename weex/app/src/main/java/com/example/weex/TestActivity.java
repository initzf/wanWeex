package com.example.weex;

import android.os.Bundle;
import android.util.Log;

import com.example.weex.tool.AbsWeexActivity;

//http://192.168.1.246:8081/dist/test.js

public class TestActivity extends AbsWeexActivity {
    private static final String TAG = "TestActivity";

    private String title;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_test);

        String url = getIntent().getStringExtra("url");
        title = getIntent().getStringExtra("title");


        loadUrl(url);
    }

    @Override
    public void onBackPressed() {
        Log.i(TAG, "onBackPressed: " + title);
        setResult(RESULT_OK);
        super.onBackPressed();
    }
}
