# dekorum-website

Dette er websitet for Vokalensemblet Dekorum. Det er skrevet i React med en administrativ backend i PHP. Al data er gemt i filer.

## Kom igang

Projektet er lavet med [Create React App](https://github.com/facebook/create-react-app).

For at køre projektet lokalt, klones GitHub-projekt ned, og afhængigheder installeres (kræver at NodeJS er installeret på maskinen):

```shell
npm install
```

I projektmappen, kan man køre frontenden lokalt med:

```shell
npm start
```

Det kører frontenden i developer-mode på [http://localhost:3000](http://localhost:3000).

For at køre backenden lokalt, kan følgende docker-kommando benyttes (Kræver at Docker er installeret på maskinen):

```shell
docker run -it --rm -p 80:80 --name dekorum-backend -v "$PWD"/public:/var/www/html php:7.2.2-apache
```

Admin-modulet kan så tilgås på [http://localhost/admin](http://localhost/admin).

## Deploy

Følgende kommando bygger en optimeret produktionsudgave af frontend-appen i mappen `build`:

```shell
npm run build
``````

Filerne kan så kopieres over på serveren vha. en FTP-klient, såsom Cyberduck.

Gør følgende for at sikre, at data og filer ikke overskrives utilsigtet:

1) I mappen `build` (ikke i public!) slettes mapperne `assets` og  `uploads` med alt indhold, samt filen `data.json`.
2) Alt indhold i `build`undtagen `admin`-mappen kopieres til roden af serveren.
3) *Hvis* der er lavet rettelser i php-koden, kopieres *indholdet* af `admin`-mappen til `admin`-mappen på serveren. Ellers ignoreres denne.

Vigtigt! PHP-filerne kopieres uden selve `admin`-mappen, så det undgås at filerne `.htaccess` og `.htpasswd`, som styrer adgang til administrationsmodulet, forsvinder fra serveren.

## Backlog

- Admin: Slette sangerbillede, når sanger slettes?

- Generelt: Lav shell-script til byg og evt. deploy vha. SFTP.

- Admin: Lav billedgalleri, man kan vælge fra i stedet for liste med filnavne

- Generelt: Få afviklet al forbindelse til gammelt WP-tema og til ThemeHunk

- Site: Gør noget ved koncert-cards. Undertitel, tagline, m.v.

- Site: Kig på SEO

- Site: Head-data til præsentation af link på eksterne sider

- Admin: Flere tekster kan redigeres dynamisk

- Site: Hakkende grafik?
