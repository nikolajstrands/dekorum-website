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

- Generelt: Lav shell-script til byg og evt. deploy vha. SFTP.

- Admin: Ret "Gamle koncerter" til "Tidligere koncerter"

- Admin: Lav billedgalleri, man kan vælge fra i stedet for liste med filnavne

- Admin: Formater tidspunkt for koncerter

- Admin: Redigere sangere

- Site: sangere med lange navne ...

- Generelt: Få afviklet al forbindelse til gammelt WP-tema og til ThemeHunk

- Site: Tilføj følgende css el.lign. til når man hover over et koncert-card (evt. også sanger-kort):box-shadow: 0 4px 12px 0 rgba(0,0,0,.4);

- Site: Gør noget ved koncert-cards. Undertitel, tagline, m.v.

- Site: Kig på SEO

- Site: Head-data til præsentation af link på eksterne sider

- Site: Ny mailadresse

- Site: Skift evt. billeder

- Site: Evt. loading-spinner (fx logo!)

- Site: Testimonials

- Admin: Flere tekster kan redigeres dynamisk

- Site: SoMe-integration?

- Site: Hakkende grafik?