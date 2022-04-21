# wdio-toped
Automation testing can be found in two seperate file
1. login.e2e.js,
    consist 2 test case
        a. Login using not valid credential
        b. Login using with valid credential
    For running uses command 
        npx wdio wdio.conf.js --spec test/specs/login.e2e.js
      
2. Searching.e2e.js
    consist test case to Searching course with defined keyword
    For running uses command 
        npx wdio wdio.conf.js --spec test/specs/Searching.e2e.js          

 