// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var notify_opened = function (num) {

}

$(function(){

  if (localStorage["urls"]) {

    var urls = localStorage["urls"].split("\n");

    urls.forEach(function(url_i) {
      if (url_i !== '\n' && Boolean(url_i)) {
        chrome.tabs.create({url: url_i});
      }
    });

  } else {
    console.log("[Error][OpenYourUrls][OpenError]no urls are registered");
  }
  
});