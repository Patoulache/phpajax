<?php


    $sortie 	= array("erreur" => "no","access"=>"denied");

	$ID		= $_POST["ID"] ?? "noid";
	$CLEU	= $_POST["CLEU"] ?? "nokey";

	$AUTH	= (($ID!="noid") && ($CLEU!="nokey"));

    if ($AUTH) {
        $sortie["access"]   = "granted";
        $sortie["validate"] = "236BZF89XDT8";
    }

    echo json_encode($sortie);

?>
