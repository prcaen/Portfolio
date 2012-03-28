// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// tweetable 1.6.1 - jQuery twitter feed generator plugin
(function($){$.fn.tweetable=function(options){var defaults={limit:5,username:'philipbeel',time:false,replies:false,position:'append',onComplete:function($ul){}};var options=$.extend(defaults,options);return this.each(function(options){var act=$(this);var $tweetList=$('<ul class="tweetList">')[defaults.position.toLowerCase()+'To'](act);var tweetMonth='';var shortMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var api="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=";var count="&count=";$.getJSON(api+defaults.username+count+defaults.limit+"&callback=?",act,function(data){var ctr=0;$.each(data,function(i,tweet){if(defaults.replies===false&&tweet.in_reply_to_status_id!=null)return;i=ctr++;$tweetList.append('<li class="tweet_content_'+i+'"><p class="tweet_link_'+i+'">'+tweet.text.replace(/#(.*?)(\s|$)/g,'<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2')+'</p></li>');if(defaults.time==true){for(var iterate=0;iterate<=12;iterate++){if(shortMonths[iterate]==tweet.created_at.substr(4,3)){tweetMonth=iterate+1;if(tweetMonth<10){tweetMonth='0'+tweetMonth}}}$('.tweet_link_'+i).prepend('<p><small> '+tweet.created_at.substr(8,2)+'/'+tweetMonth+'/'+tweet.created_at.substr(26,4)+', '+tweet.created_at.substr(11,5)+'</small></p>')}});defaults.onComplete($tweetList)})})}})(jQuery);

