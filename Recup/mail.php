<?php

function verif_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$msg_err = "";

if(isset($_POST['email'])) {
    $nom = verif_input($_POST['nome']);
    $email = verif_input($_POST['email']);
    $message = verif_input($_POST['message']);

    $destinataire = "info@guanxigroup.com "; // Remplacez par votre adresse e-mail

    $sujet = "Nouveau message de $nom";
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message: $message\n";

    $entetes = "From: $nom <$email>\r\n";
    $entetes .= "Reply-To: $email\r\n";

    if(mail($destinataire, $sujet, $contenu, $entetes)) {
        $err_pass = "Votre e-mail a été envoyé avec succès.";
    } else {
        $err_pass = "Une erreur s'est produite lors de l'envoi de l'e-mail.";
    }
}

?>