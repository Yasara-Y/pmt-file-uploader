# pmt-file-uploader
This script helps to automate the manual file addition and removal from the PMT tool.

This is useful when the no of files to be modified are comparatively high and hence intends to take away the overhead of manually adding and removing files one by one in PMT during the PR analysys phase.

Follow the below instructions
- Clone or download the add-remove-files.js from this repo.
- Provide the url of artifact folder in update artifacts repo which includes your artifacts for the `gitRepoRoot` variable. 
 
    * eg: 'https://github.com/wso2-support/update-artifacts/blob/master/wilkes/7911/'
- Provide the `productRoot` accordingly.
- Provide a comma-seperated list of file paths to be added to the product pack in the `xoFiles_added`var such that the full file path should be correctly composed when the `productRoot` is appended to the beginning.
- Similarly, add a comma-seperated list of files to be deleted from the product pack in `xoFiles_removed`.
- Next, you need to go to the “PR analysis screen” in PMT and run the `add-remove-files.js` script. To run the script you need to open the developer tools “Console” tab and paste the content and press “Return/Enter”.


