# Adobe Students x Milo
The Franklin based project for adobe student pages on www.adobe-students.com. Based off of milo-college.

## Developing
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `sudo npm install -g @adobe/aem-cli`
2. Run `aem up` this repo's folder. (opens your browser at `http://localhost:3000`)
3. Open this repo's folder in your favorite editor and start coding.

## Testing Milo Changes on Adobe Students Pages
1. Run 'aem up' in this folder to ensure the adobe-students site is running locally. 
2. Make changes in milo, and then from the milo folder, run `npm run libs`.
3. Milo will run at:
```
http://localhost:6456
```
4. On your `localhost:3000/` or the `main-<project>-<owner>` versions of your site, add the URL params: `?milolibs=local`
5. You should see milo changes occurring on adobe-students pages.
6. When needing to test on a adobe-students page while making a PR for milo, add the URL params: `?milolibs=<name-of-milo-branch>`to your test URLs.

## Creating New Blocks
When creating new blocks, first vet any requirements/author-experience in milo-community. There may be a way to achieve your goals with what currently exists in milo. 

## Testing
```sh
npm run test
```
or:
```sh
npm run test:watch
```
This will give you several options to debug tests. Note: coverage may not be accurate.

## Linting
To run the linter run:
```sh
npm run lint
```
To lint just js or css files, run
```sh
npm run lint:css
```
or:
```sh
npm run lint:js
```
If you need to lint just one file, you can run:
```sh
npx eslint file1.js
```

## Documentations that might help
  Development Process on Adobe Students Milo [wiki](https://github.com/adobecom/adobe-students/wiki)


## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

Please adhere to this project's `code of conduct`.

## GitHub Discussions
  Join the conversation in our [GitHub Discussions](https://github.com/orgs/adobecom/discussions).
