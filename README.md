# dekorum-website

Dette er websitet for Vokalensemblet Dekorum. Det er skrevet i React med en administrativ backend i PHP. Al data er gemt i filer.

## Kom igang

Projektet er lavet med [Create React App](https://github.com/facebook/create-react-app).

## Tilgængelige scripts

I projektmappen, kan man køre frontenden lokalt med:

```shell
npm start
```

Det kører frontenden i developer-mode på  [http://localhost:3000](http://localhost:3000).

```shell
npm run build
``````

Bygger frontend-appen for produktion i mappen `build`.

For at køre backenden lokalt, kan følgende docker-kommando benyttes:

```shell
docker run -it --rm -p 80:80 --name dekorum-backend -v "$PWD"/public:/var/www/html php:7.2.2-apache
```

Admin-modulet kan så tilgås på [http://localhost/admin](http://localhost/admin).

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
