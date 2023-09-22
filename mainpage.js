document.getElementById('home_link').addEventListener('click', function() {
    console.log("btn_1 working")
    var localFilePath = './mainpage.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
});

document.getElementById('library_link').addEventListener('click', function() {
    console.log("btn_1 working")
    var localFilePath = './library.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
});

document.getElementById('feedback_link').addEventListener('click', function() {
    console.log("btn_1 working")
    var localFilePath = './feedback.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
});

document.getElementById('patient_details_link').addEventListener('click', function() {
    console.log("btn_1 working")
    var localFilePath = './patient_details.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
});