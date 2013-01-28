//  __  __                            _    _ _____ 
// |  \/  |                          | |  | |_   _|
// | \  / | __ _ _ __ _ __ ___   ___ | |  | | | |  
// | |\/| |/ _` | '__| '_ ` _ \ / _ \| |  | | | |  
// | |  | | (_| | |  | | | | | | (_) | |__| |_| |_ 
// |_|  |_|\__,_|_|  |_| |_| |_|\___/ \____/|_____|
//
// Created by Shida Li and Erica Xu
//
// Installation procedures:
// Chrome:
// 		Go to Wrench-Menu -> Tools -> Extensions
// 		Drag and drop "marmo-ui.user.js" into the extensions page
// 		Click on "Add" button
// Firefox:
// 		Download GreaseMonkey from 
// 		https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// 		Drag and drop "marmo-ui.user.js" into the browser
// 		Alternatively, open the js from userscript.org
// 		Wait and click on "Install" button
//
// ==UserScript==
// @name				MarmoUI
// @description			Marmoset Improved! Better UI and functionality
// @author				Erica Xu (www.ericaxu.com) and Shida Li (www.lishid.com)
// @version				1.1
// @include				*marmoset.student.cs.uwaterloo.ca*
// ==/UserScript==
//
// Some functionalities are inspired by Marmoset Plus from http://userscripts.org/scripts/show/134262
//


//Variables here are volatile. They are not usable from within the page, but only within this script
var global_css = "body{font-family:'Droid Sans',helvetica,arial,sans-serif;color:#eee;background:#022d49;margin:0}h1{font-family:'Droid Sans',helvetica,arial,sans-serif;font-size:1.7em;font-weight:normal;margin:1em 0 .5em 7.5%}h2{font-family:'Droid Sans',helvetica,arial,sans-serif;font-size:1.5em;font-weight:normal;margin:1em 0 .5em 7.5%}h3{font-family:'Droid Sans',helvetica,arial,sans-serif;font-size:1.3em;font-weight:normal;margin:1em 0 .5em 7.5%;color:#eee}p{margin:1em 7.5%}a:link{color:#fc3;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}a:visited{color:#3e90c6}a:hover{color:#ff8700}div.header{background:#022d49;padding:4em 0 3em 0;margin:0;color:white;border:0}div.header p{text-align:center;font:4em 'Lobster',helvetica,sans-serif;padding:.3em;margin:0}div.breadcrumb{background:inherit;width:85%;margin:0 6% 0 7.5%;padding:0}div.breadcrumb p{background:inherit;font-family:'Droid Sans',helvetica,arial,sans-serif;font-variant:normal;width:80%;margin:0 6% 0 0;padding:.5em 0 0 0}div.logout,div.submit-button{background:#fc3;font-family:'Droid Sans',helvetica,arial,sans-serif;color:#03426a;width:7em;padding:.1em .5em;margin:0;text-align:center;font-weight:normal;-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity = 91);filter:alpha(opacity = 91);-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;cursor:pointer}div.logout p,div.submit-button p{font-size:1.5em;font-variant:normal;padding:0;margin:.1em auto}div.logout:hover,div.submit-button:hover{background:#eee;color:#03426a}div.logout a{font-family:inherit!important;font-weight:normal;color:#03426a!important;text-decoration:none!important}div.submit-button a{font-family:inherit;font-weight:normal;color:#111;text-decoration:none}div.submit-button{margin:1.5em 0 0 7.5%}div.breadcrumb p.nav{font-family:'Droid Sans',helvetica,arial,sans-serif;font-size:1.5em;font-variant:normal;font-weight:normal;display:inline-block;padding:0;margin:0}div.breadcrumb p a:link,div.breadcrumb p a:visited{color:#fc3;text-decoration:underline}div.breadcrumb p a:hover{color:#ff8700}div.footer{border-top:0;text-align:center;padding:.5em;margin:1em}div.footer a:visited{color:#fc3}div.footer a:hover{color:#ff8700}ul.my-courses,ul.all-courses{margin:0 0 0 5%;list-style:none;font-size:1.1em}ul.my-courses li,ul.all-courses li{margin:.3em 0}ul.release-tokens{margin:0 0 0 5%;list-style:none}ul.release-tokens li{margin:0 0 0 2%}table{border-style:ridge;border:0;border-collapse:collapse;width:100%;margin:2em 0 0 0;font-size:1em}table.submissions,table.stacktrace{width:85%;margin:2em auto 0 auto}form[name='submitform']{background:#fc3;color:#111;width:45%;margin:2em auto 0 auto;padding:.5em;-webkit-border-radius:1em;-moz-border-radius:1em;border-radius:1em;font-size:1.2em;text-align:center}form[name='submitform'] p{text-align:center;font-weight:bold}form[name='submitform'] input[type='submit']{color:#eee;background:#022d49;height:2em;width:6em;-webkit-border-radius:1em;-moz-border-radius:1em;border-radius:1em;border:0;cursor:pointer;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}form[name='submitform'] input[type='submit']:hover{background:#25a0ca}div.submission-bg{background:#fff;opacity:.7;position:fixed;width:100%;height:100%;top:0;left:0}div.submission-popup{background-color:#fc3;color:#111;display:block;border:0;position:fixed;text-align:left;width:50%;left:25%;top:30%;padding:1.5em}div.submission-popup a:link,div.submission-popup a:visited{color:#022d49}div.submission-popup h2{text-align:center}div.submission-popup h2,div.submission-popup p{color:#111;margin:.5em 0 1em 0}div.submission-popup form{margin:1em auto}a#submission-close{margin:0;width:50%;display:inline-block;position:inherit;text-align:right;color:#111;text-decoration:underline}div.submission-popup div.submit-button{margin:.5em auto;background:#c1dbed}div.submission-popup div.submit-button a:link{color:#fc3;text-decoration:none}div.submission-popup div.submit-button p{margin:.1em auto}div.submission-popup div.submit-button:hover{background:#eee}table a:link{color:#03426a;font-weight:bold}table a:visited{color:#0680cd}table a:hover{color:#ff8700}th{background:#2c6b94;color:#eee;font-size:1.1em;font-weight:normal;text-transform:capitalize!important;text-align:center;vertical-align:center;padding:1em .5em;border:0;margin:0}td{text-align:center;vertical-align:middle;padding:.5em;margin:0;border:0}th.description,td.description{text-align:center}td.left{text-align:left}td.long-result{text-align:left}th.number,td.number{text-align:right}col.right{border-right:0 solid black}div.build-output{margin:1em 7.5%;width:85%;background:#ffe799;color:#111;overflow-x:scroll}div.build-output pre{padding:1em 2em;letter-spacing:1px;font-family:monospace;white-space:pre;letter-spacing:1px}form{padding:0;margin:0}table.stacktrace td{padding-left:3em}input[type='file'],input[type='submit'],input[type='hidden']{font-family:'Droid Sans',helvetica,arial,sans-serif!important;font-size:1em}table.form td{padding:.25em;text-align:left}table.form td.label{font-weight:bold;text-align:right;background:#fff9e5;padding-left:3em;padding-right:.5em}table.form tr.submit td{background:#fc3;text-align:center}tr{color:#111;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out}table tr:hover{background:#9ac5e1}tr.r0{background:#f5fbff}tr.r1{background:#e4f4fe}tr.selected,tr.selected:hover{background:#fc3}tr.highlight{background:#00ffaf}td.passed{background:#5fbf5f}td.failed{background:#9f3f3f}td.error{background:#c00}td.huh{background:#fc3}td.timeout{background:#f0f}td.not_implemented{background:#fff}td.could_not_run{background:#808080}td.warning{background:#0000df}table.codetable{border-style:none;border-width:0;border-collapse:collapse;margin:0}table.codetable td{text-align:left;vertical-align:baseline;padding:0;border:0;margin:0}table.codetable td.codecoveredcount{text-align:right;background:#abcabd;vertical-align:baseline;padding:0 2px;border:0;margin:0}table.codetable td.codeuncoveredcount{text-align:right;background:#f0c8c8;vertical-align:baseline;padding:0 2px;border:0;margin:0}table.codetable td.codeuncovered{text-align:left;background:#f0c8c8;vertical-align:baseline;padding:0 2px;border:0;margin:0}table.codetable td.linenumber{text-align:right;background:#fff;vertical-align:baseline;padding:0 2px;border:0;margin:0}.codehighlight{background:#fff3cc}.codekeyword{color:green;font-weight:bold}.codestring{color:fuchsia}.codeliteral{color:fuchsia}.codecomment{color:blue;font-style:italic}.statusmessage{border:1px solid #cedff2;background-color:#f5faff;color:#039;padding:7px}";
var global_fonts = "WebFontConfig = { google: { families: ['Droid+Sans::latin', 'Lobster::latin'] } };";

function loadMarmoUI(run)
{
	//Utility functions
	function getProtocol()
	{
		return "https:" == document.location.protocol ? "https" : "http";
	}

	function appendToHead(element)
	{
		document.getElementsByTagName("head")[0].appendChild(element);
	}

	function loadCSS()
	{
		var style = document.createElement("style");
		style.type = "text/css";
		if (style.styleSheet) style.styleSheet.cssText = global_css;
		else style.appendChild(document.createTextNode(global_css));
		appendToHead(style);
	}

	//Import fonts from google. Provided by Google Web Fonts
	function loadFonts()
	{
		//Create a script to pass data to Google's script
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.textContent = global_fonts;
		appendToHead(script);
		
		//Load the Google's script asynchronously
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = getProtocol() + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
		script.async = "true";
		appendToHead(script);
	}

	//Load jQuery from Google CDN
	function loadJQuery(run)
	{
		//Don't load twice
		if(typeof jquery != 'undefined' && jQuery) return;
		//Load jQuery
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = getProtocol() + "://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
		script.addEventListener("load", function ()
		{
			var script = document.createElement("script");
			script.type = "text/javascript";
			//Write the entire method into the script and run it
			script.textContent = "(" + run.toString() + ")()";
			document.body.appendChild(script);
		}, false);
		appendToHead(script);
	}

	loadFonts();
	loadCSS();
	loadJQuery(run);
}

function runMarmoUI()
{
	//Utilities
	var PAGE = {
		LOGIN: 				{value: 0, link: "marmoset"},
		COURSE_LIST: 		{value: 1, link: "view/index.jsp"},
		PROBLEM_LIST: 		{value: 2, link: "view/course.jsp?coursePK="},
		SUBMISSION_LIST: 	{value: 3, link: "view/project.jsp?projectPK="},
		SUBMISSION_DETAILS: {value: 4, link: "view/submission.jsp?submissionPK="},
		SUBMISSION_PAGE: 	{value: 5, link: "view/submitProject.jsp?projectPK="},
		CONFIRM_RELEASE:	{value: 6, link: "view/confirmReleaseRequest.jsp?submissionPK="},
		ERROR: 				{value: 7, link: "action/SubmitProjectViaWeb"},
		LOGIN_ERROR:		{value: 8, link: "authenticate/PerformLogin"}};

	function addTableHighlight()
	{
		//Add highlight to table rows
		$("table tr").click(function ()
		{
			$(this).siblings().removeClass("selected");
			$(this).addClass("selected");
		});
	}

	function applyChangesAll(current_page)
	{
		//Change page (browser) title
		document.title = "MarmoUI - " + document.title;
		//Change page title
		$("p:contains('Marmoset Submission and Testing Server')").html("Marmoset");

		//Add the favicon
		$("head").append("<link href='data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzzP9TM8z/gTPM/4EzzP/JM8z//zPM//8zzP/JM8z/gTPM/4EzzP9TAAAAAAAAAAAAAAAAAAAAAAAAAAAzzP9TM8z/qTPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z/qTPM/1MAAAAAAAAAAAAAAAAzzP9TM8z//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//Q1VB/0ktAv9DVUH/M8z/UwAAAAAzzP9TM8z/qT58gP9JLQL/M8z//zPM//8+fID/SS0C/zPM//8zzP//Q1VB/0ktAv8+fID/SS0C/0NVQf8zzP9TM8z/gTPM//9JLQL/SS0C/zPM//8zzP//SS0C/0ktAv8zzP//M8z//0ktAv9JLQL/M8z//zPM//8+fID/M8z/gTPM/4EzzP//SS0C/0ktAv8zzP//M8z//0ktAv9JLQL/M8z//zPM//9JLQL/SS0C/zPM//8zzP//OKTA/zPM/8kzzP/JM8z//0ktAv9JLQL/M8z//zPM//9JLQL/SS0C/zPM//8zzP//SS0C/0ktAv8zzP//M8z//zPM//8zzP/JM8z//zPM//9JLQL/SS0C/zPM//8zzP//SS0C/0ktAv8zzP//M8z//0ktAv9JLQL/M8z//zPM//8zzP//M8z//zPM//8zzP//SS0C/0ktAv8zzP//M8z//0ktAv9JLQL/M8z//zPM//9JLQL/SS0C/zPM//8zzP//M8z//zPM//8zzP/JM8z//0ktAv9JLQL/M8z//zPM//9JLQL/SS0C/zPM//8zzP//SS0C/0ktAv8zzP//M6r//zPM//8zzP/JM8z/gUNVQf9JLQL/SS0C/z58gP84pMD/SS0C/0ktAv8+fID/OKTA/0ktAv9JLQL/M8z//zOF//8zzP//M8z/yTPM/4E+fID/SS0C/z58gP9DVUH/SS0C/0ktAv8+fID/Q1VB/0NVQf9JLQL/PnyA/zPM//8tLeD/M8z//zPM/4EzzP9TM8z/qTPM/9czzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM//8zzP//LS3g/zPM/4EzzP+BAAAAADPM/1MzzP+0M8z//zPM//8zzP//M8z//zPM//8zzP//M6r//zOF//8tLeD/LS3g/y0t4P8tLeD/LS3g/wAAAAAAAAAAM8z/UzPM/6kzzP//M8z//zPM//8zzP//M8z//zPM//8zzP//M8z//zPM/4EtLeD/AAAAAAAAAAAAAAAAAAAAAAAAAAAzzP9TM8z/gTPM/4EzzP/JM8z//zPM//8zzP/JM8z/gTPM/4EzzP+BLS3g/wAAAAAAAAAA8A8AAOAHAADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAADgAwAA8AMAAA==' rel='icon' type='image/x-icon'>");

		//Add navigation CSS
		var nav = $("div.breadcrumb p:not(:contains('Logout'))").addClass("nav");
		$.each(nav.find("a"), function(index, value){$(value).text($.trim($(value).text()));});
		var navText = nav.html();
		if(typeof navText != "undefined" && current_page != PAGE.LOGIN.value)
		{
			navText = navText.substring(navText.indexOf(":") + 1);
			navText = "<a href='/'>Marmoset</a> | " + navText;
			navText = navText.replace(/\|/g, "&rsaquo;");
			nav.html(navText);
		}

		//Capitalize the table header for consistency
		$("th").css("text-transform", "capitalize");

		//Remove inconsistent (and useless) greeting message
		$("p:contains('Welcome')").remove();

		//Remove current time
		$(".footer").html("MarmoUI - Created by <a href='http://www.lishid.com'>Shida Li</a> and <a href='http://www.ericaxu.com'>Erica Xu</a>.");

		//Redirect logout
		$("div.logout a").attr("href", "/");

		//Google analytics helps for statistics
		$("body").append("<script type='text/javascript'>var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-38018139-1']); _gaq.push(['_trackPageview']);(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();</script>");
	}

	function applyChangesProblemsList()
	{
		function asyncLoadPage(element, requestURL, callback)
		{
			$.ajax({ url: requestURL, cache: false }).done(function(html){ callback(element, html, requestURL); });
		}

		function loadSubmission(tableRow, requestResult, requestURL)
		{
			//Find the entry that should contain the submission
			var entry = tableRow.find("td:eq(2)").html("");
			//Get the page from the request
			var page = $(requestResult.trim());
			//Get the scores
			var scores = page.find("tr:eq(1) td:contains('/')");

			scores.each(function(index, item) {
				 var matches = $(item).html().match(/(\d+)\s\/\s(\d+)/);
				 if(entry.html() != "") entry.append(" & ");
				 entry.append(matches[1] + " / " + matches[2]);
			});
		}

		//Remove useless breadcrumb
		$("h1").remove();
		//Remove "Projects"
		$("h2").remove();

		//Change submit button
		$("input[type='submit']").attr("value", "Submit");

		//Change "web <br> submission" to something better
		$("th:contains('web')").html("Submit Solution");

		//Add the submission column
		$("tr th:nth-child(2)").after("<th>Last submission</th>");
		$("tr td:nth-child(2)").after("<td>Loading...</td>");

		//Load the submission results asychronously via ajax
		$("tr").each(function(index, row){
				if(index == 0) return;
				var link = $(row).find("a:contains('view')").attr("href");
				asyncLoadPage($(row), link, loadSubmission);
		});

		//Add the click events for the submission popups
		var submit = $("a:contains('submit')").click(function(event){
			//Prevent redirection
			event.preventDefault();
			//Prevent closing
			event.stopPropagation();
			//The table row
			var row = $(this.parentNode.parentNode);
			//The project PK number
			var projectPK = $(this).attr("href").match("projectPK=([0-9]+)")[1];
			//Reset popup html
			var popup = $(".submission-popup").html("");
			//Add Close, Project, Submissions and Deadline
			popup.append("<a id='submission-close' href='#' onclick='$(\"#submission-box\").hide();return false;'>Close</a>");
			popup.append("<h2>Project: " + row.find("td:eq(0)").html() + " (" + row.find("td:eq(5)").html() + ")</h2>");
			popup.append("<p>Submissions: <a href='" + row.find("td:eq(1) a").attr("href") + "'>view</a></p>");
			popup.append("<p>Due: " + row.find("td:eq(4)").html() + "</p>");
			//Add the submission form
			popup.append("<form enctype='multipart/form-data' action='/action/SubmitProjectViaWeb' method='POST'>" +
			"<input type='hidden' name='projectPK' value='" + projectPK + "'>" +
			"<input type='hidden' name='submitClientTool' value='web'>" +
			"<input type='file' name='file' size='20'></form>" + 
			"<div class='submit-button'><p><a onclick='$(\"form\").submit();'>Submit</a></p></div>");

			//Fix the anchor having an extra space at the end
			$("h2 a").each(function (index, row) {$(row).text($(row).text().trim());});
			$("#submission-box").show();
		});

		//Add the submission box
		$("body").append("<div id='submission-box'><div class='submission-bg'></div><div class='submission-wrapper'><div class='submission-cell'><div class='submission-popup'></div></div></div></div>");
		$("#submission-box").hide();
		//Event for closing the submission popup
		$(".submission-bg").click(function(event){ $("#submission-box").hide(); });

		//Add highlight to table rows
		addTableHighlight();
	}

	function applyChangesSubmissionList()
	{
		//Add CSS class
		$("table").addClass("submissions");
		var submitLink = $("h3").eq(0).html();
		$("h3").eq(0).replaceWith("<div class='submit-button'><p>" + submitLink + "</p></p>");
		
		//Remove useless header for project. It's already in breadcrumb anyways
		$("h1").remove();
		//Remove "Submissions"
		$("h2").remove();
		//Change "detailed <br> test results" to something better
		$("th:contains('detailed')").html("Details");
		//Add highlight to table rows
		addTableHighlight();
	}

	function applyChangesSubmissionPage()
	{
		//Add CSS class
		$(".description").has("span").addClass("long-result");
		//Remove useless header for project. It's already in breadcrumb anyways
		$("h1").remove();
		//Remove name and user
		$("h2")[0].remove();
		//Remove Test results
		$("h2")[1].remove();
		$("h3").eq(0).replaceWith("<p>Note: failed = wrong, error = crashed.</p>");
		//Remove deadline
		$("p:contains('Deadline')").remove();
		$("th:contains('test')").text("Test");
		//For those who failed the test, change the pre to a normal p
		var pre = $("pre").eq(0).text();
		$("pre").eq(0).replaceWith("<div class='build-output'><pre>" + pre + "</pre></div>");
		//Add highlight to table rows
		addTableHighlight();
		//Release test
		var releaseTestElement = $("h3").has("a").eq(0);
		//Change the release test link to a button
		if(releaseTestElement.length)
		{
			var link = releaseTestElement.find("a").attr("href");
			releaseTestElement.replaceWith(
				"<div class='submit-button' style='width:10em'><p>" +
				"<a href='" + link + "' onclick='return confirm(\"Are you sure you want to release test this?\");'>" +
				"Release Test" +
				"</a></p><div>");
		}
		//Release tokens
		$("ul").eq(0).addClass("release-tokens");
	}

	//Load page
	var path = $(location).attr("href");
	var current_page = PAGE.LOGIN.value; //Default is LOGIN page
	//Check which page we're on
	for(var page in PAGE)
	{
		if(path.indexOf(PAGE[page].link) >= 0)
		{
			current_page = PAGE[page].value;
		}
	}

	//Universial pages changes
	applyChangesAll(current_page);

	//Page specific changes
	switch(current_page)
	{
		case PAGE.LOGIN.value:
			//Remove Logout button
			$("div.logout").remove();
			//Chang submit button
			$("input[type='submit']").attr("value", "Use this account");
			$("p:contains('please login as')").remove();
		break;
		case PAGE.COURSE_LIST.value:
			//TODO: make this into a table?

			//Add class to lists
			$("ul").eq(0).addClass("my-courses");
			//Remove the colon at the end of the links
			$("ul a").each(function (index, row) {$(row).text($(row).text().replace(":", ""));});
		break;
		case PAGE.PROBLEM_LIST.value:
			applyChangesProblemsList();
		break;
		case PAGE.SUBMISSION_LIST.value:
			applyChangesSubmissionList();
		break;
		case PAGE.SUBMISSION_DETAILS.value:
			applyChangesSubmissionPage();
		break;
		case PAGE.SUBMISSION_PAGE.value:
			//Change the weirdly written title
			$("h1").text("Web Submission");

			//Replace the form with something better looking
			$("table.form").eq(0).replaceWith("<p><input type='file' name='file' size='40'></p><p><input type='submit' value='Submit'></p>");
		break;
		case PAGE.CONFIRM_RELEASE.value:
			//Completely bypass this page and clicks the button for the user
			//There will be a confirmation popup in the previous page
			$("input[type='submit']").click();
		break;
		case PAGE.ERROR.value:
			//Change navigation for a go back button
			$(".nav").html("<a href='#' onclick='history.back(); return false;'>Go back</a>");
			//Remove the ugly image
			$("p img").remove();
			//Add something more constructive inside the title
			$("h1").text("Oops, Marmoset has encountered an error!");
			//jQuery for the hide/show effect
			$("table tr th").click(function() {
				$("table tr").has("td").toggle();
			}).append(" (Click for details)").css("cursor", "pointer");
			$("table tr").has("td").hide();
			//Remove the logout button as it's completely useless
			$(".logout").remove();
		break;
		case PAGE.LOGIN_ERROR.value:
			//If we get to this page, then something is wrong
			//First check if the page contains an error, if so, redirect back to homepage
			if($("h3:contains('Apache Tomcat')").length > 0) window.location = "/";
		break;
	}
}

loadMarmoUI(runMarmoUI);