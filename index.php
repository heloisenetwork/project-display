<?php
$base='http://heloisenetwork.eu';
$page = file_get_contents($base);
$page= str_replace(' href="/',' href="'.$base.'/',$page);
$page= str_replace('</title>',' - Experimental Search Interface</title>',$page);
$page= str_replace('<h1 class="page-title">Home</h1>','<h1 class="page-title">Heloise - Experimental Search Interface</h1>',$page);
$page= str_replace('<p>Heloise - European Network on Digital Academic History</p>','<div class="alert error">The Heloise Search Interface requires activated Javascript.</div>',$page);
$page= str_replace('</head>','<link rel="stylesheet" type="text/css" media="screen" href="abaelardus.css" /><script type="text/javascript" src="http://code.jquery.com/jquery-3.1.1.min.js"></script><script type="text/javascript" src="config/abaelardus_config.js"></script><script type="text/javascript" src="abaelardus.js"></script></head>',$page);
$page= str_replace('<row id="footer" centered>','<row id="footer" centered><column cols="10"><b>The Search Interface is experimantal and does not include the complete heloise dataset.</b><br/>A more detailed view on the indexed datasets is available <a href="http://search-api.module.heloisenetwork.eu/_plugin/head/" target="_blank">here.</a></column></row><row id="footer" centered>',$page);



echo $page;
?>

