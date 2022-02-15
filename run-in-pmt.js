
var xoFiles_added = [
    'APIMSubscriptionsAnalytics/APIMSubscriptionsAnalytics.js',
    'APIMOverallApiUsage/APIMOverallApiUsage.js',
    'APIMFaultyPerApp/APIMFaultyPerApp.js',
    'APIMSignupsAnalytics/APIMSignupsAnalytics.js',
    'APIMAppCreatedAnalytics/APIMAppCreatedAnalytics.js',
    'APIMApiUsage/APIMApiUsage.js',
    'ApiThrottleAnalytics/ApiThrottleAnalytics.js',
    'APIMTopAppUsers/APIMTopAppUsers.js',
    'APIMTopApiUsers/APIMTopApiUsers.js',
    'APIMAppApiUsage/APIMAppApiUsage.js',
    'APIMTopFaultyApis/APIMTopFaultyApis.js',
    'APIMApiResourceUsageSummary/APIMApiResourceUsageSummary.js',
    'APIMApiVersionUsageSummary/APIMApiVersionUsageSummary.js',
    'ApiFaultAnalytics/ApiFaultAnalytics.js',
    'APIMTopThrottledOutApis/APIMTopThrottledOutApis.js',
    'APIMAlertSummary/APIMAlertSummary.js',
    'APIMAppResourceUsage/APIMAppResourceUsage.js',
    'AppAndAPIErrorTable/AppAndAPIErrorTable.js',
    'APIMApiErrorPercentages/APIMApiErrorPercentages.js',
    'APIMApiCreatedAnalytics/APIMApiCreatedAnalytics.js',
    'APIMApiBackendUsageSummary/APIMApiBackendUsageSummary.js'
];

var xoFiles_removed = xoFiles_added;

var gitRepoRoot = 'https://github.com/wso2-support/update-artifacts/blob/master/hamming/0479/';
var productRoot = 'wso2/dashboard/deployment/web-ui-apps/analytics-dashboard/extensions/widgets/';

$(document).ready(function () {
    for (var i = 0; i < xoFiles_added.length; i++) {
        var markup = "<tr><td colspan='7' style='padding: 5px'><a href='" + gitRepoRoot + xoFiles_added[i] + "'>" + gitRepoRoot + xoFiles_added[i] + "</a>" +
            "<p style='font-size: 12px'>" + productRoot + xoFiles_added[i] + "</p></td><td><img onclick='return deleteFiles(this)' class='delete-btn' src='../../images/icons/ic_delete_black.png' /></a></td></tr>";
        $("#addedFilesTable tbody").append(markup);
    }
    for (var i = 0; i < xoFiles_removed.length; i++) {

        var markup2 = "<tr><td colspan='7' style='padding: 5px'><a href='" + productRoot + xoFiles_removed[i] + "'>" + productRoot + xoFiles_removed[i] + "</a></td><td><img onclick='return deleteFiles(this)' class='delete-btn' src='../../images/icons/ic_delete_black.png' /></a></td></tr>";
        $("#removedFilesTable tbody").append(markup2);
    }

})


