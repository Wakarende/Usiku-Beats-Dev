<?PHP 
	ini_set('display_errors', 0);

	include("config.php");  //load global config settings	
?>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="canonical" href="https://play.usiku.games/<?PHP echo GAME; ?>" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!-- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" /> -->
	<meta name="msapplication-tap-highlight" content="no" />
	<meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=1.0, minimum-scale=0.5, user-scalable=no, minimal-ui">
	<!-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">  -->

	
	

<meta name="apple-mobile-web-app-title" content="usiku-beats">
<meta name="application-name" content="usiku-beats">
<meta name="msapplication-TileColor" content="#fe9225">
<!-- <meta name="msapplication-config" content="favicons/cop/browserconfig.xml?v=1"> -->
<meta name="theme-color" content="#fe9225">
	
	<meta property="og:image:width" content="279">
	<meta property="og:image:height" content="279">
	<meta property="og:title" content="usiku-beats">
	<meta property="og:description" content="usiku-beats">
	<meta property="og:type" content="website">

	<title>usiku-beats</title>

	<?PHP include("../_common/global_js.php"); ?>
	
	<link rel="stylesheet" href="https://files.usiku.games/css/vex.css" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">	
	<link rel="stylesheet" href="./main.css" />

	<style>
		html,
		body {
			background: black;
		    padding: 0;
		    margin: 0;
		    height: 100vh;
		    height: -webkit-fill-available;
		    overflow: hidden;
		}
		#gameContainer{
			height: 100%;
    		overflow: auto;
		}

		#nonMobileOverlay{
			position: fixed;
			top:0px;
			bottom:0px;
			left:0px;
			right:0px;
			background: #E97D08;
			background: url('<?PHP echo $path_root;?>/assets/sprites/start_screen_comp.jpg');
			color: white;
			font-family: arial;
			font-weight: bold;
			font-size: 1.5em;
			padding: 200px;
			text-align: center;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			display:none;
		}
		#nonMobileOverlay div{
			max-width: 400px;
		    display: inline-block;
		}

	</style>


	<!-- End GameAnalytics -->
	<script src="https://files.usiku.games/js/jquery.js"></script>
	<script src="https://files.usiku.games/js/is_mobile.js"></script>
	<script src="https://files.usiku.games/js/vex.js"></script>
    
	<script src="lib/phaser.min.js"></script>	
	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
	<script src="https://unpkg.com/@tonejs/midi">
		const Midi = new Midi()
	</script>
	<script type="text/javascript" src="lib/rexuiplugin.min.js"></script>
	<script type="text/javascript" src="lib/rexspinnerplugin.min.js"></script>



	<script src="main.js"></script>

</head>

<body>
	<div id='gameContainer'></div>
</body>

</html>