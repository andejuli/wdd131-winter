<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Temple Squares</h1>

    <?php
  $filename = 'counter.txt';
  $counter = file_get_contents($filename);
  $counter++;
  file_put_contents($filename, $counter);
?>

<p><?php echo $counter; ?></p>


    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyD5M6EEer17qcITKhKcXCsqynPK17704eg",
          authDomain: "temple-squares.firebaseapp.com",
          projectId: "temple-squares",
          storageBucket: "temple-squares.firebasestorage.app",
          messagingSenderId: "729328044875",
          appId: "1:729328044875:web:2290e3ff4fcbe0ff5cb6ce"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
      </script>
</body>
</html>