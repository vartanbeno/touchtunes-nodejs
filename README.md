# TouchTunes NodeJS Test

This repository is used to complete the NodeJS coding test given out to TouchTunes applicants.

## Getting Started

### Running

```
npm start
```

This will build the application by transpiling the ES6 code and outputting the files into a `dist` directory, and run the `index.js` file from there.

### Docker

```
docker image build -t touchtunes .
docker container run -it -p 3000:3000 touchtunes
```

## Author

**Vartan Benohanian**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
