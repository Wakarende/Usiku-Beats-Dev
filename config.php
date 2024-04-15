<?PHP
//global variables

//set based on server URL:
define("DEV_MODE", (stristr($_SERVER['SERVER_NAME'], 'dev') !== false || stristr($_SERVER['SERVER_NAME'], 'test') !== false) );
define("GAME", "usiku-beats");

if(DEV_MODE){
    define("GAMES_SERVER", 'https://games-dev.usiku.games');
    define("MAIN_SERVER", 'https://staging.usiku.games');

}else{
    define("GAMES_SERVER", 'https://play.usiku.games');
    define("MAIN_SERVER", 'https://live.usiku.games');

}