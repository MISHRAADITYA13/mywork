function open_symptoms(){
    console.log("symptoms_btn working")
    var localFilePath = './symptoms.html';
    window.location.href = localFilePath;
};
document.getElementById('logo_home_link').addEventListener('click', function() {
    console.log("btn_1 working")
    var localFilePath = './mainpage.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
});

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
    window.location.href = localFilePath;
});

// document.getElementById('symptoms_btn').addEventListener('click', function() {
//     console.log("symptoms_btn working")
//     var localFilePath = './symptoms.html';
//     window.location.href = localFilePath;
// });
