// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

$(function(){

  if (localStorage["urls"]) {
    $("#urls").text(localStorage["urls"]);
  } else {
    $("#urls").text("input your favorite urls");
  }

  $("#save").click(function () {
    localStorage["urls"] = $("#urls").val();
  });

  $("#export").click(function () {

    var date = new Date();
    var fileprefix = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "_";
    
    var content = $("#urls").val();
    var export_link = document.createElement('a');
    export_link.href = window.URL.createObjectURL( new Blob( [content] ) );
    export_link.download = fileprefix + "url.txt";
    export_link.click();
  });
  
});