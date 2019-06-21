// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var notify_added = function (url) {

    const msg = 'URL:' + url + 'is added to your list.';
    const msg_title = 'open url adds the url to your list';

    const options = {
        iconUrl: 'images/oyu_128.png',
        type: 'list',
        title: msg_title,
        message: msg,
        priority: 1,
        items: [
            {
                title: msg_title,
                message: msg
            }
        ]
    };
    chrome.notifications.create(options);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, "iconPushed");
});

chrome.runtime.onInstalled.addListener(function() {
});

chrome.commands.onCommand.addListener(function(command) {

    if (command === "add_current_url_to_the_list") {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            
            if (localStorage["urls"]){
                var links = localStorage["urls"];

                if (links.endsWith('\n')) {
                    localStorage["urls"] += url + '\n';
                } else {
                    localStorage["urls"] += '\n' + url + '\n';
                }
            } else {
                localStorage["urls"] = url + '\n';
            }
            notify_added(url);
        });
    }
  });



