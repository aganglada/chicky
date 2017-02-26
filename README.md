<p align="center">
  <img src="http://imgur.com/KOCCUFd.png" width="200" height="200" alt="chicky">
</p>

# 🐥 chicky

window.fetch() api interface

* **Minimal** basic interface for *window.fetch()*.
* **Easy to use** http methods.
* Supported in old browsers IE8+ (using [unfetch polyfill](https://github.com/developit/unfetch))
* Written in ES6.

## Install

You can install `chicky` from npm.

```markdown
npm install chicky --save
```

or from yarn

```markdown
yarn add chicky
```

## Usage

```javascript
import chicky from 'chicky';

chicky.get('http://api.github.com/aganglada')
   .then(data => {
      console.log(data); 
   });
```

## Methods

#### get

Get data from anywhere at any time.

```javascript
import chicky from chickyy;

chicky.get('http://api.github.com/aganglada')
   .then(data => {
      console.log(data); 
   });
```

#### post

Create new data for a better future.

```javascript
import chicky from 'chicky';

chicky.post('http://api.github.com/aganglada', {
    repo: {
        name: 'chicky'
    }
})
   .then(data => {
      console.log(data); 
   });
```

#### put

Update data to maintain the world.

```javascript
import chicky from chickyy;

chicky.put('http://api.github.com/aganglada', {
    repo: {
        name: 'chicky',
        owner: 'alex'
    }
})
   .then(data => {
      console.log(data); 
   });
```

#### patch

Change data of a single person and make it optimal.

```javascript
import chicky from 'chicky';

chicky.patch('http://api.github.com/aganglada', {
    repo: {
        name: 'chicky',
        owner: 'alex'
    }
})
   .then(data => {
      console.log(data); 
   });
```

#### delete

Get rid of things you don't need.

```javascript
import chicky from 'chicky';

chicky.delete('http://api.github.com/aganglada', {
    repo: {
        name: 'chicky'
    }
})
   .then(data => {
      console.log(data); 
   });
```

## Contribute

If you like to contribute to this project be sure all the changes you made, 
make sense for everyone and they can continue using `chicky` as their general api service.


## License

MIT &copy; aganglada