import React, { useEffect } from "react";

const FacebookPixel = () => {
    useEffect(() => {
        !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
            window,
            document,
            "script",
            "https://connect.facebook.net/en_US/fbevents.js"
        );
        // fbq("init", "3326218081018142");
        // fbq("track", "PageView");
        // fbq("track", "Contact");
        // fbq("track", "CompleteRegistration");
        // fbq("track", "Lead");
        // fbq("track", "SubmitApplication");
        fbq("track", "ViewContent");

        <noscript>
            <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=3326218081018142&ev=PageView&noscript=1"
            />
        </noscript>;


 
 
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1200274881200557');
fbq('track', 'PageView');
 
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1200274881200557&ev=PageView&noscript=1"
/></noscript>
 


    });
};

export default FacebookPixel;
