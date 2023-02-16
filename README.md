# Activité pratique du contrôle #


## objectif ##

   Créer une application basée sur une architecture micro-service qui permet de gérer les factures contenant des produits et appartenant à un client.
 ### Travail a faire ###

        1.Créer le micro-service customer-service qui permet de gérer les client
        2.Créer le micro-service inventory-service qui permet de gérer les produits
        3. Créer la Gateway Spring cloud Gateway avec une Configuration statique du système de routage
        4. Créer l'annuaire Eureka Discrovery Service
        5. Faire une configuration dynamique des routes de la gateway
        6. Créer le service de facturation Billing-Service en utilisant Open Feign
        7. Créer un client Web Angular (Clients, Produits, Factures)
        8. Déployer le serveur keycloak :
             - Créer un Realm
             - Créer un client à sécuriser
             - Créer des utilisateurs
             - Créer des rôles
             - Affecter les rôles aux utilisateurs
             - Tester les différents modes d'authentification avec Postman en montrant les contenus de Access-Token, Refresh Token 
        9. Sécuriser les micro-services et le frontend angular en déployant les adaptateurs Keycloak
        10. Ajouter des Fonctionnalités supplémentaires de votre choix
        11. Livrable : Un Repository Github contenant :
           - Le code sources de l'ensemble des micro-services et du frontend
           - Le rapport montrant les différentes étapes dans le fichier README.MD

------------------------------------------------------------------------------------------------

## Dependances utilisé pour Customer service et Inventory Service ##
  ![image](https://user-images.githubusercontent.com/57690392/206128989-404bb77b-8741-4ce8-b744-33ce56ffc10a.png)
 
## Dépendances utilisé pour Billing Service ##

![image](https://user-images.githubusercontent.com/57690392/206129499-c16fe7f1-dc05-4210-8edf-6384aae04c0d.png)
![image](https://user-images.githubusercontent.com/57690392/206129527-2390b2fb-a408-4dd4-ac69-2b5a6f7c01c0.png)

## acces au liste des Clients avec Gateway ##

![image](https://user-images.githubusercontent.com/57690392/206129914-f35cf3b5-9bda-4529-9e4b-4993a5b58d71.png)
![image](https://user-images.githubusercontent.com/57690392/206129972-8e71b650-f3fa-4a73-b9d3-01ff67ddf5ac.png)


## Consultation des services avec Eureka discovery server ##

seul les services qui on Eureka discovery client comme dependance vont étre affiché 

![image](https://user-images.githubusercontent.com/57690392/206130510-058990c3-193f-4586-9f81-9bcf72bb1d73.png)

## Specification des routes dans un fichier .yml ##

  si URL contient /customer donc on va recuperer les données du service Customer automatiquement 
  
 
![image](https://user-images.githubusercontent.com/57690392/206130669-99140b0d-8a08-44a1-8243-9dc8b6a94aff.png)

   si URL contient /products donc on va recuperer les données du service Inventory automatiquement
   
 ![image](https://user-images.githubusercontent.com/57690392/206131044-9eaa8c37-2c10-4022-aea0-6473d2299e55.png)
 
  Exemple :
  
  ![image](https://user-images.githubusercontent.com/57690392/206131146-325be99b-d9db-475f-9329-dd94f9bd3a76.png)
  
## Specification des routes au niveau d'une classe JAVA ##

  On peut egalement faire la meme configuration du fichier YML dans une classe JAVA
  
  ![image](https://user-images.githubusercontent.com/57690392/206131524-eb89170b-806e-446e-b226-92870892d857.png)
  
  ça vas retourner la meme chose 
  
  ![image](https://user-images.githubusercontent.com/57690392/206131935-c8c04ce3-37dc-4a33-b8f0-3ca1012d3acb.png)
  
  Ou bien Gateway peut generer ses propre routes basé sur les discovery clients 
  
  ![image](https://user-images.githubusercontent.com/57690392/206132523-0b738bd5-bde8-4bec-97e2-7c61a7815905.png)
  
   Exemple :
   
  ![image](https://user-images.githubusercontent.com/57690392/206132688-0a78aa71-adf5-4ffa-948d-d3e577df06f8.png)
  
## Résoudre le probleme de endless loops  ##

    pour resoudre le probléme de endless loops quand on veut acceder au information de bill
   
    Avant
    
  ![image](https://user-images.githubusercontent.com/57690392/206133574-46ed835c-6402-4ede-aebd-6c46b6f582d8.png)
  
    on met l'objet on mode write only 
    
  ![image](https://user-images.githubusercontent.com/57690392/206133747-7e855dec-076e-492a-9f3f-1435a72078dd.png)
  
    resultat
    
  ![image](https://user-images.githubusercontent.com/57690392/206133878-520dc4e5-05b9-4fb9-9c61-5968666bd8b6.png)
  
## Affichage des information bills  ##

     Toutes les bills
     
   ![image](https://user-images.githubusercontent.com/57690392/206134355-970490aa-d69f-437d-9fb9-57465d1f0689.png)
   
      Par ID
      
   ![image](https://user-images.githubusercontent.com/57690392/206134446-1cfb9b72-d0da-4404-a74a-79a7bd4bbd34.png)
   
   
## Résoudre le problemes des clé etrangére  null dans la base de données  ##   
   
  


