<?php 
if (isset($_POST["send_email"])) {
    # code...
    $name = $_POST["contactName"];
    $email = $_POST["emailAddress"];
    $subject = $_POST["subject"];
    $message = $_POST["msgCont"];


     if($name == ""){

    echo "Please enter your Name";
    exit();
  }
  elseif($subject == ""){

    echo "Please enter your message subject";
    exit();

  }
  
  elseif($email == ""){
    echo "Please enter your Email";
    exit();

  }
  
  elseif($message == ""){
    echo "Please enter message content";
    exit();

  }
    elseif(  $name != ""  && $email != "" && $subject != "" && $message != "" ){
        // header("Location: learn.php");   
         $to = "epospiky@gmail.com";
         $subject = "FROM YOUR SITE :".$subject;
         $txt = 'Hi Ernest,
            <br>I am '.$name.'</br>
            <br/> '.$message.'<br/>';

         $headers = "YOU HAVE A NEW MESSAGE FROM YOUR SITE" . "\r\n" ;
         $headers .= "MIME-Version: 1.0\r\n";
         $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
         mail($to,$subject,$txt,$headers);


        // header("Location: learn.php");

        echo "1";

        exit();
       
        

         }else{
            echo "message sending failded";
            exit();
         }



}

?>