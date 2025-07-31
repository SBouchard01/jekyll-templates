// Override base link if href is a page anchor
document.addEventListener("click", function(event) {
    var element = event.target;
    // console.log("Clicked element: ", element);
    try {
        if (element.tagName.toLowerCase() == "a" &&
            element.getAttribute("href").indexOf("#") === 0) {
                element.href = location.href.split("#")[0] + element.getAttribute("href");
            console.log("Updated anchor href to: ", element.href);
        }
    } catch (error) {
        console.error("No # in anchor href: ", error);
    }
});

async function openFile(fileUrl) {
    // Do not open if the URL is empty or undefined
    if (!fileUrl || fileUrl.trim() === "") {
        console.error("File URL is empty or undefined.");
        return;
    }
    // Check if the URL is valid
    try {
        new URL(fileUrl);
    } catch (error) {
        console.error("Invalid File URL: ", error);
        return;
    }
    console.log("Opening File URL: ", fileUrl);
    window.open(fileUrl, '_blank');
}