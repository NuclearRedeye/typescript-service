# Typescript Service

An experiment in how to create a service in typescript that makes use of the library experiment.

## Prerequisites

* You have a Linux or OSX machine. Windows should be supported via WSL 2 but has not been tested.
* You have installed a recent version of [GNU Make](https://www.gnu.org/software/make/).
* You have installed a recent version of [Docker](https://www.docker.com/).

## Quick Start

You can build the project for development using...

```
make
```

You can also package the project for distribution using...

```
make release
docker build -t typescript-service:latest .
```

## Usage

Once the service is running, you can use cURL to send requests to it...

```
curl -d '{"a":10, "b":5}' -H "Content-Type: application/json" -X POST http://localhost:8080/add
curl -d '{"a":10, "b":5}' -H "Content-Type: application/json" -X POST http://localhost:8080/subtract
curl -d '{"a":10, "b":5}' -H "Content-Type: application/json" -X POST http://localhost:8080/multiply
curl -d '{"a":10, "b":5}' -H "Content-Type: application/json" -X POST http://localhost:8080/divide
```

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/).