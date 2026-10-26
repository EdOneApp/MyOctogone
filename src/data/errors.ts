export const errorPages = {
  "400": [
    "Requête incorrecte",
    "La demande n’a pas pu être comprise. Revenez à l’accueil pour poursuivre votre visite.",
    "Bad request",
    "This request could not be understood. Return home to continue browsing."
  ],
  "401": [
    "Identification nécessaire",
    "Cette ressource nécessite une identification. Si vous pensez devoir y accéder, contactez notre équipe.",
    "Authentication required",
    "This resource requires authentication. Contact our team if you believe you should have access."
  ],
  "403": [
    "Accès non autorisé",
    "Vous ne disposez pas des autorisations nécessaires pour consulter cette ressource.",
    "Access denied",
    "You do not have permission to view this resource."
  ],
  "404": [
    "On a perdu le chemin.",
    "Cette page n’existe pas, a été déplacée ou le lien est incomplet. Nos projets, eux, sont toujours là.",
    "We’ve lost the trail.",
    "This page does not exist, has moved or the link is incomplete. Our projects are still here."
  ],
  "405": [
    "Méthode non autorisée",
    "L’action demandée n’est pas disponible pour cette page. Reprenez votre navigation depuis l’accueil.",
    "Method not allowed",
    "This action is not available for this page. Continue from the home page."
  ],
  "408": [
    "La demande a pris trop de temps.",
    "La connexion a expiré avant la fin de la demande. Vérifiez votre connexion avant de réessayer.",
    "Request timed out",
    "The connection expired before the request completed. Check your connection before trying again."
  ],
  "410": [
    "Cette page a tourné la page.",
    "Le contenu demandé a été retiré. Découvrez les informations et projets disponibles sur notre site.",
    "This page has moved on.",
    "This content has been removed. Explore the information and projects available on our website."
  ],
  "422": [
    "Demande à vérifier",
    "Les informations transmises ne peuvent pas être traitées en l’état. Vérifiez les champs de votre formulaire.",
    "Please check your request",
    "The submitted information cannot be processed as provided. Check your form fields."
  ],
  "429": [
    "Un peu trop vite.",
    "Le service reçoit trop de demandes. Patientez quelques instants avant de réessayer.",
    "A little too fast.",
    "The service is receiving too many requests. Please wait a moment before trying again."
  ],
  "500": [
    "Un imprévu côté technique.",
    "Le service rencontre un problème interne. Vous pouvez revenir à l’accueil ou contacter notre équipe.",
    "An unexpected technical issue.",
    "The service has encountered an internal problem. Return home or contact our team."
  ],
  "502": [
    "La liaison est interrompue.",
    "Un service intermédiaire n’a pas reçu de réponse valide. Réessayez dans quelques instants.",
    "The connection was interrupted.",
    "An intermediary service did not receive a valid response. Please try again shortly."
  ],
  "503": [
    "Une courte pause.",
    "Le service est temporairement indisponible. Nous vous invitons à revenir dans quelques instants.",
    "A short pause.",
    "The service is temporarily unavailable. Please come back in a moment."
  ],
  "504": [
    "La réponse se fait attendre.",
    "Un service a mis trop de temps à répondre. Patientez un instant avant de renouveler votre demande.",
    "The response is taking a while.",
    "A service took too long to respond. Please wait before trying again."
  ],
  "maintenance": [
    "On prépare la suite.",
    "Une intervention technique peut rendre le site momentanément indisponible. Pour une demande, notre équipe reste joignable par e-mail.",
    "We’re preparing what comes next.",
    "Technical work may temporarily affect the website. Our team can still be reached by email."
  ],
  "hors-ligne": [
    "La connexion fait une pause.",
    "Vérifiez votre connexion Internet, puis réessayez. Si cette page est déjà chargée, vous pouvez conserver notre adresse e-mail pour nous écrire plus tard.",
    "Your connection is taking a break.",
    "Check your internet connection and try again. If this page is already loaded, save our email address to contact us later."
  ]
} as const;
export type ErrorCode = keyof typeof errorPages;
