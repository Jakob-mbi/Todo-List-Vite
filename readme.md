# Todo-list i Typescript

    Denna applikation är en Todo lista där man kan lista olika tasks, checka av dem när det är färdiga som extra funktinalitet så kan man se när man skapade en task och när den blev färdig. 

## Funktionaliteter 

    - Se alla uppgifter
    - Editerbar uppgifter
    - Beskrivande text
    - Toggla om en uppgift är färdiga eller inte
    - Ta bort en upgift
    - Ta bort alla uppgifter
    - Se när man skapat en uppgift och när man blivit klar efter man checkat av den.  

## Teknologier
    - Typescript
    - Bootstrap
    - Css
    - Vite
    - HTML

### styrkor
    
    Applikationen är relativt liten så strukturen är uppdelad där efter. 
    Utilitet fuktioner finns i util.ts filen som sedan används i list.ts filen. 

    Koden direkt relaterad till listan finns i filen list.ts
    Kodens dokumentaion består av både komentarer och meningsfulla namn på funktioner och variabler. 


### Svagheter

   Detta projekt använder sig ganska mycket av createdElement i funktionen addListItem
   snarare än innerHTML likt main.ts vilket kan gör koden mindre läsbar. 

   Projektet följer inte någora etablerad designprinciper eller arkitektur.  