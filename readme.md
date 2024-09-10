# webserver info

För att köra webserver har vi instrallerat WSl och node

## linux commands

    > pwd - Visar aktiv mapp
        # ifall du skriver pwd i kommand baren så komme den skriva vart du är ex:
        '/home/robin/code/te22-sc-intro' eller '/home/robin' kan det stå

    > ls - lista alla filer
        # Supertrevligt att andvända för att se så att de filer du vill andväda
        finns men andvända bara ll gör samma fast bättre.

    > ll - viasr även dolda filer.
        > ls -la - gör samma som ll det är bara en förkortning.
        # Andvänd denna ls är sämre

    > cd - ändra plats till "...."
        > De olika commanden är 
            >.. - backåt / åvanför filen

            >"filnamn"  - bytter till filen du har skrivt. måste vara i en map nedan inte bara på datorn.
            
            >*kanppen enter på tangentbordet* - tar det tillbaka tillbörjan
    
    >rm - ska tabort filer men fattar inte hur tror man ska andvända node eller något likande innan

    >mkdir - skapar maps


## node

För att instalera ett nytt node project kan jag npm "node init -y" i en mapp. Detta skapar en  package.kom fil.


    >   bash
    mkdir serverprokect

    cd serverprojekt

    npm init -y


    >        js
        console.log("wsg gang")

    För node installerade vi express och nodemon
    För att avsluta node som kärs ,de nnodemon tryck 'ctrl + x'

    Vi skapade även en gitignore fil med kommandot 'echo node_module > .gitignore'
    för att ignore node_modules mappen när vi pushar till github.




        express
    vi gjorde en server som bara lokalts kunde nås på datorn.
    linerna vi andände var

import express from 'express'
app.use(express.static("public"))
const app = express() 
app.get('/', (request, res) => {
     res.static(500).sendfile('HEJSAN :D')
     })
app.listen(3000, () => (
    console.log('server is running on http://localhost:3000')
))

Express gör så att servern börjar existera och så att vi kan requestsa och responds till den.
app.get är gör något, så idetta tillfälle så req & res den i denna cod

För att vi ska få informaksionen på datorn så ska vi andvända request för att fråga servern om coden och då när den respondar så får vi code till servern, så funkar det korfattat.

När du kör en server andvänd cmd "npm run dev"

När du har gjort på dett sätt ska du all informaskion du vill andvända vid app.use foldern detta är för att det är där coden kommer kolla den ser att den existerar men du måste specifiera.
Så i detta tillfälle så ska du lägga alla bilder ect i public foldern. 

ngl vet inte varför vi andvänder njk men jag antar eftersom att man kan optimazera hemsdidans storlek.
