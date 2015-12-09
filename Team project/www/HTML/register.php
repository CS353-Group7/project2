<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';
?>
<!DOCTYPE html>
<html>
    <head>
       <meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <title>EduSign</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/carousel.css" rel="stylesheet">
        <script type="text/JavaScript" src="js/sha512.js"></script> 
        <script type="text/JavaScript" src="js/forms.js"></script>
    </head>
	<body>
	<div class="navbar-wrapper">
  <div class="container">
    <div class="navbar navbar-inverse navbar-static-top">
      
        <div class="navbar-header">
	    <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	      <span class="icon-bar"></span>
	      <span class="icon-bar"></span>
	      <span class="icon-bar"></span>
	    </a>
        <a class="navbar-brand" href="welcome.html">EduSign</a>
        </div>
         <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="welcome.html">Home</a></li>
            <li><a href=aboutUs.html>About Us</a></li>

            
            
        </ul>
     
          
        </div>

    </div>
  </div><!-- /container -->
</div>
<div class="container">
			<div class="text-center">
        <!-- Registration form to be output if the POST variables are not
        set or if the registration script caused an error. -->
        <h2>Register with us</h2>
        <?php
        if (!empty($error_msg)) {
            echo $error_msg;
        }
        ?>
		<div class = "container">
		<div class="text-center">
        <ul>
            <li>Usernames may contain only digits, upper and lowercase letters and underscores</li>
            <li>Emails must have a valid email format</li>
            <li>Passwords must be at least 6 characters long</li>
            <li>Passwords must contain
                <ul>
                    <li>At least one uppercase letter (A..Z)</li>
                    <li>At least one lowercase letter (a..z)</li>
                    <li>At least one number (0..9)</li>
                </ul>
            </li>
            <li>Your password and confirmation must match exactly</li>
        </ul>
		
        <form action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>" 
                method="post" 
                name="registration_form">
            Username:<br>
             <input type='text' 
                name='username' 
                id='username' /><br>
            Email: <br>
            <input type="text" name="email" id="email" /><br>
            Password: <br>
            <input type="password"
                             name="password" 
                             id="password"/><br>
            Confirm password:<br>
             <input type="password" 
                                     name="confirmpwd" 
                                     id="confirmpwd" /><br>
            <input type="button" 
                   value="Register" 
                   onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd);" /> 
        </form>
        <p>Return to the <a href="index.php">login page</a>.</p>
		</div>
		</div>
		</div>
		</div>
		
    </body>
</html>