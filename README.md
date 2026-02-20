<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>



## Description

Project finance 2026

## Project setup

1. Clonar el proyecto
2. ```bash $ pnpm install```
3. Clonar el archivo  ``` .env.template  ``` y renombrarlo a: ```.env```


## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Para la imagen de postgres en docker 

```bash
# Comprobar si estan los archivos y renombrar el .env.template a .env
 1. docker-compose.yaml
 2. .env

```

## Comprobar que si hay imagenes de docker corriendo 

```bash
# ver si hay alguna imagen levantada
$ docker ps

# detener una imagen
$ docker stop name_stop_image

```

## Ejecutar el comando para levantar la bbdd

```bash
$ docker compose up -d
```

## Registrar un nuevo server (General y connection) en pgAdmin4

```bash
  #Con los datos de de nuestro archivo .env
```


## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
