# dekorum-website

Dette er websitet for Vokalensemblet Dekorum. Det er skrevet i React med en administrativ backend i PHP. Al data er gemt i filer.

## Kom igang

Projektet er lavet med [Create React App](https://github.com/facebook/create-react-app).

I projektmappen, kan man køre frontenden lokalt med:

```shell
npm start
```

Det kører frontenden i developer-mode på  [http://localhost:3000](http://localhost:3000).

For at køre backenden lokalt, kan følgende docker-kommando benyttes:

```shell
docker run -it --rm -p 80:80 --name dekorum-backend -v "$PWD"/public:/var/www/html php:7.2.2-apache
```
 

Admin-modulet kan så tilgås på [http://localhost/admin](http://localhost/admin).

## Deploy

```shell
npm run build
``````

Bygger frontend-appen for produktion i mappen `build`.

Filerne kan så kopieres over på serveren vha. Cyberduck.

Alt indhold i `build` kopieres, undtagen:
- mapperne `assets` og  `uploads` med indhold
- Mappen `admin` (dog indhold)
- filen `data.json`

Vigtigt! PHP-filerne kopieres uden `admin`-mappen, så det undgås at `.htaccess` og `.htpasswd`, som styrer adgang til administrationsmodulet, forsvinder fra serveren.

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
