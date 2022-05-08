// ************************************************************ //
// ************************************************************ //
// ************************************************************ //
// The following 4 variables need to be modified appropriately. //
// The format is depicted in sample file paths.                 //
var xoFiles_added = [
    'portal/gadgets/account-recovery/gadget.xml',
    'dashboard/js/jquery-3.6.0.min.js',
    'dashboard/js/jquery-ui-1.13.0.custom.min.js'];

var xoFiles_removed = [
    'portal/gadgets/account-recovery/js/ui/css/smoothness/jquery-ui-1.10.3.custom.min.css',
    'dashboard/js/jquery-1.8.3.min.js',
    'dashboard/js/jquery-2.1.0.min.js']


var gitRepoRoot = 'https://github.com/wso2-support/update-artifacts/blob/master/${wilkesORwilkinson}/${artifactFolderName}/';
var productRoot = 'repository/deployment/server/jaggeryapps/';

// ************************************************************ //
// ************************************************************ //
// ************************************************************ //


$(document).ready(function () {

    for (var i = 0; i < xoFiles_added.length; i++) {
        var markup = "<tr><td colspan='7' style='padding: 5px'><a href='" + gitRepoRoot + productRoot +
            xoFiles_added[i] + "'>" + gitRepoRoot + productRoot + xoFiles_added[i] + "</a>" +
            "<p style='font-size: 12px'>" + productRoot + xoFiles_added[i] +
            "</p></td><td><img onclick='return deleteFiles(this)' class='delete-btn' " +
            "src='../../images/icons/ic_delete_black.png' /></a></td></tr>";
        $("#addedFilesTable tbody").append(markup);
    }
    for (var i = 0; i < xoFiles_removed.length; i++) {
        var markup2 = "<tr><td colspan='7' style='padding: 5px'><a href='" + productRoot + xoFiles_removed[i] +
            "'>" + productRoot + xoFiles_removed[i] + "</a></td><td><img onclick='return deleteFiles(this)' " +
            "class='delete-btn' src='../../images/icons/ic_delete_black.png' /></a></td></tr>";
        $("#removedFilesTable tbody").append(markup2);
    }

})

