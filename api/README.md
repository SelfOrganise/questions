### Config


```
DB_HOST=
DB_PORT=
DB_USER=
DB_DATABASE=
DB_PASSWORD=
AUTH_DOMAIN=
AUTH_CLIENT_ID=
AUTH_CLIENT_SECRET=
```


Note for self: To decrypt `.env` file, 
* restore `pgp` keys into `.gnupg`, 
* `set -Ux SOPS_PGP_FP "F2F7 0F01 B674 04DD 66C9  263D 8D5F E85D CFDB 9BCD"` 
* and then run `sops -d encrypted.env`
