function fixLink() {
        var inputText = document.getElementById("inputEbsco").value;
        var newLink = document.getElementById("newLink")
        var visitSite = document.getElementById("visitSiteBtn")
        var copyButton = document.getElementById("copyButton")
        var parser = document.createElement('a');
        var articleNumber = 0;
        parser.href = inputText
        var values = parser.search.toLowerCase()

        var subStringStart = values.indexOf("an=");
        values = values.substring(subStringStart + 3);
        var subStringEnd = values.indexOf("&");
        if (subStringEnd > 0) {
            var articleNumber = values.substring(0, subStringEnd);
        } else {
            var articleNumber = values;
        }

        if (articleNumber != 0) {
            newLink.value = "https://widgets.ebscohost.com/prod/customerspecific/nar/index.php?an=" + articleNumber;
            copyButton.className = "btn btn-success";
            visitSite.style.visibility = "visible";
        } else {
            newLink.value = "Link not found";
            copyButton.className = "btn btn-danger disabled";
            visitSite.style.visibility = "hidden";
        }

    }

    function copyClipboard() {
        var alertText = document.getElementById("alertText")
        var newLink = document.getElementById("newLink")
        newLink.select();
        document.execCommand("copy");
        alertText.style.visibility = "visible";
    }

    function hideAlert() {
        var alertText = document.getElementById("alertText");
        alertText.style.visibility = "hidden";
    }

    function visitSite() {
        var newLink = document.getElementById("newLink");
        window.open(newLink.value, '_blank')
    }