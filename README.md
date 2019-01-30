# TouchTunes NodeJS Test

This repository is used to complete the NodeJS coding test given out to TouchTunes applicants.

## Getting Started

### Running

```
npm install
npm start
```

This will build the application by transpiling the ES6 code and outputting the files into a `dist` directory, and run the `index.js` file from there.

### Docker

```
docker image build -t touchtunes .
docker container run -it -p 3000:3000 touchtunes
```

## Usage

Once the app is up and running (served on port 3000), there are basically 3 API endpoints you can interact with:

- GET: `/api/jukebox/settings`: returns a list of settings available for all jukeboxes.
- GET: `/api/jukebox/components`: returns a list of components available on the jukebox we want to control.
- GET: `/api/jukebox/settings/filtered`: returns a list of settings on the jukebox where the required components list of each setting is either:
    - empty;
    - contains at least one component that's in the components array.

## Author

**Vartan Benohanian**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
