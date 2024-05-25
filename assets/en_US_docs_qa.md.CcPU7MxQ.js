import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.CyshXYPG.js";const g=JSON.parse('{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/docs/qa.md","filePath":"en_US/docs/qa.md"}'),r={name:"en_US/docs/qa.md"},s=o('<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><h2 id="q-what-benefits-does-joining-travellings-bring-to-my-website" tabindex="-1">Q: What benefits does joining Travellings bring to my website? <a class="header-anchor" href="#q-what-benefits-does-joining-travellings-bring-to-my-website" aria-label="Permalink to &quot;Q: What benefits does joining Travellings bring to my website?&quot;">​</a></h2><p>A: The internet has transitioned from being closed to open, and now it&#39;s shifting back towards closure. In this environment, the traffic of standalone web pages (similar to &quot;indie games&quot;) is more or less affected. Travellings attempts to make traditional backlinks &quot;active,&quot; allowing web pages to relay traffic to each other, fostering a flow of traffic, and opening up the internet.</p><p>In theory, Travellings can increase web traffic.</p><p>With a rough estimate: Suppose there are currently 2 web pages joined Travellings, with 10 users using Travellings on each page, then each page seems to increase <code>10*2*1/2=10</code> traffic; if 10 web pages join Travellings, will each still increase 10 traffic on average? Obviously not, because:</p><ul><li>Visitors can use Travellings through multiple backlinks;</li><li>With more web pages having Travellings, single-site traffic will also increase;</li></ul><p>So let&#39;s recalculate, with 10 web pages joined Travellings, the relay times increase to 3, and each page has 15 users using Travellings, then each page increases <code>15*10*3/10=45</code> traffic. This is also why it is recommended to place the Travellings badge in a prominent position on your website (recommended in the top bar, sidebar), to keep the backlinks active and gain more traffic.</p><p>Currently, more webmasters are applying to join, so it is believed that Travellings is beneficial to web traffic — at least webmasters can make friends with each other 😉</p><p>Summary:</p><ul><li>For webmasters: Show your support for an open internet and potentially gain more traffic.</li><li>For visitors: Discover more quality web pages, a spontaneous online journey.</li></ul><h2 id="q-does-it-only-accept-blog-sites-to-join" tabindex="-1">Q: Does it only accept blog sites to join? <a class="header-anchor" href="#q-does-it-only-accept-blog-sites-to-join" aria-label="Permalink to &quot;Q: Does it only accept blog sites to join?&quot;">​</a></h2><p>A: <strong>All types of websites are qualified to join.</strong></p><p>It doesn&#39;t matter whether your website is a blog, a homepage, a tool, or a website navigation category. You are always welcome to join the Travellings project with your love of sharing.</p><h2 id="q-what-s-the-current-project-expenditure" tabindex="-1">Q: What&#39;s the current project expenditure? <a class="header-anchor" href="#q-what-s-the-current-project-expenditure" aria-label="Permalink to &quot;Q: What&#39;s the current project expenditure?&quot;">​</a></h2><p>A:</p><ul><li>Server: ¥50/month, used to maintain the project, such as statistical data and observing the online status of member websites.</li><li>Domain: ¥7/month, for renewing the project&#39;s .cn domain, averaged monthly over the year.</li></ul><h2 id="q-is-travellings-safe-and-secure" tabindex="-1">Q: Is Travellings safe and secure? <a class="header-anchor" href="#q-is-travellings-safe-and-secure" aria-label="Permalink to &quot;Q: Is Travellings safe and secure?&quot;">​</a></h2><p>A: Travellings prioritizes security and privacy.</p><p>All HTTPS to prevent hijacking; fully open-source both front and back end, respecting privacy; automatic deployment of mirrors, no manual intervention. Websites joining Travellings are all manually reviewed to ensure clean and high-quality traffic from the source.</p><h2 id="q-what-does-each-status-in-the-patrol-mean" tabindex="-1">Q: What does each status in the patrol mean? <a class="header-anchor" href="#q-what-does-each-status-in-the-patrol-mean" aria-label="Permalink to &quot;Q: What does each status in the patrol mean?&quot;">​</a></h2><p>A:</p><ul><li>RUN: Everything is normal.</li><li>LOST: The website is alive, but the Travellings badge is not found.</li><li>ERROR: The website has abnormalities.</li><li>Pure numbers: Indicates that the site returned a status code other than 200.</li><li>TIMEOUT: Indicates that the backend patrol exceeded 15 seconds when trying to connect to the site.</li><li>WAIT: Indicates pending, usually due to content violations or other special reasons. The site will not be patrolled and will not be assigned redirection until the issue is resolved (the maintenance team will notify the corresponding webmaster through Issues, etc.).</li></ul><p>Only the <code>RUN</code> status will be assigned redirection via API. Please wait for the next patrol for status updates. Hovering over the patrol status will show some error reasons.</p><h2 id="q-how-often-does-the-patrol-occur" tabindex="-1">Q: How often does the patrol occur? <a class="header-anchor" href="#q-how-often-does-the-patrol-occur" aria-label="Permalink to &quot;Q: How often does the patrol occur?&quot;">​</a></h2><p>A: The patrol backend has two stages of patrols<br> The first stage is for the backend patrol to quickly detect all sites (about 30 minutes)<br> In the second stage, the backend patrol will use a browser to recheck the abnormal sites detected in the first stage (which may take longer)<br> If the backend patrol server does not crash, it usually starts patrolling around 4 am every day.</p><h2 id="q-what-are-the-characteristics-of-the-patrol" tabindex="-1">Q: What are the characteristics of the patrol? <a class="header-anchor" href="#q-what-are-the-characteristics-of-the-patrol" aria-label="Permalink to &quot;Q: What are the characteristics of the patrol?&quot;">​</a></h2><p>A: The patrol backend uses a fixed User-Agent as<br><code>Mozilla/5.0 (compatible; Travellings Check Bot; +https://www.travellings.cn/docs/qa)</code><br> Using Tencent Cloud servers from Beijing, China for patrols<br> Please allow this feature in your firewall / WAF to prevent misjudgments by patrols, thus preventing Travellings from redirecting to your website. Generally, requests within a day will not exceed 10 times, and appropriate throttling can be applied to prevent this feature from being exploited by malicious users.</p><h2 id="q-why-is-my-website-marked-as-lost" tabindex="-1">Q: Why is my website marked as LOST? <a class="header-anchor" href="#q-why-is-my-website-marked-as-lost" aria-label="Permalink to &quot;Q: Why is my website marked as LOST?&quot;">​</a></h2><p>A: Travellings currently uses Axios (Node.JS) and Puppeteer for patrols every day.<br> If you are using server-side rendering frameworks like Next.JS, and cannot see the Travellings field in the view-source, it may not be detected by patrols.<br> You can try adding a comment with a travellings field to the public / index source code.<br> There may be plans to abolish patrols in the future, but so far, there is no good solution to such problems.<br> If you have any good ideas, please feel free to propose them to us.</p><h2 id="q-why-is-a-website-s-status-marked-as-run-but-i-can-t-access-it" tabindex="-1">Q: Why is a website&#39;s status marked as RUN, but I can&#39;t access it? <a class="header-anchor" href="#q-why-is-a-website-s-status-marked-as-run-but-i-can-t-access-it" aria-label="Permalink to &quot;Q: Why is a website&#39;s status marked as RUN, but I can&#39;t access it?&quot;">​</a></h2><p>A: Suppose a website performs well in coastal areas and loads smoothly, but cannot load in Tibet and other areas. In that case, Travellings will consider it normal. Therefore, you may encounter a very small number of abnormal URLs during the relay process. They can be opened in other areas. Currently, there is no solution to this problem.</p><h2 id="q-i-need-to-change-the-url-or-report-a-problematic-webpage-or-quit-travellings-or-contact-the-webmaster" tabindex="-1">Q: I need to change the URL or report a problematic webpage or quit Travellings or contact the webmaster. <a class="header-anchor" href="#q-i-need-to-change-the-url-or-report-a-problematic-webpage-or-quit-travellings-or-contact-the-webmaster" aria-label="Permalink to &quot;Q: I need to change the URL or report a problematic webpage or quit Travellings or contact the webmaster.&quot;">​</a></h2><p>A: If you need to change the URL/name, please go to <a href="https://github.com/travellings-link/travellings/issues" target="_blank" rel="noreferrer">Issues</a> and choose &quot;Request Information Change&quot; to fill it out.</p><p>If you need to report a problematic website to the maintenance team, please search for the corresponding site in <a href="https://list.travellings.cn/" target="_blank" rel="noreferrer">Members</a> and click on the Report (Flag) button on the right side to report it, and it will be processed as soon as possible.</p><p>If you need to provide feedback to the corresponding webmaster, it is recommended to search for the subdomain of the website you need to provide feedback on. For example, if the problematic website is: <a href="https://www.travellings.cn/" target="_blank" rel="noreferrer">https://www.travellings.cn/</a>, then search for travellings.cn. Please be careful not to enter extra spaces or slashes. Generally, you can find the issue raised during the application. If there are multiple issues, please @ the site owner under the earliest issue.</p><p>Feel free to discuss other questions or provide your suggestions via issues or GitHub Discussions.</p>',36),i=[s];function n(l,h,c,d,u,p){return a(),t("div",null,i)}const m=e(r,[["render",n]]);export{g as __pageData,m as default};
