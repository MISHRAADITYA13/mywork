document.getElementById('logo_btn').addEventListener('click', function() {
    console.log("logo_btn working")
    var localFilePath = './mainpage.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });

  document.getElementById('home_btn').addEventListener('click', function() {
    console.log("home_btn working")
    var localFilePath = './mainpage.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });
  document.getElementById('library_btn').addEventListener('click', function() {
    console.log("library_btn working")
    var localFilePath = './library.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });
  document.getElementById('feedback_link').addEventListener('click', function() {
    console.log("feedback_link working")
    var localFilePath = './feedback.html';
    // window.open(localFilePath, '_blank');
    window.location.href = localFilePath;
  });
  document.getElementById('submit_symptoms_btn').addEventListener('click', function() {
    alert("Fetching data, please wait...");
  });
  
