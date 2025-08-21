// Find all page anchor href and override base link 
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(element => {
        const href = element.getAttribute('href');
        element.href = location.href.split("#")[0] + element.getAttribute("href");
        console.log("Updated anchor href to: ", element.href);
    });
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