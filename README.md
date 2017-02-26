<p align="center">
  <img src="http://imgur.com/KOCCUFd.png" width="200" height="200" alt="chick">
</p>

# 🐥 chick

window.fetch() api interface

* **Minimal** basic interface for *window.fetch()*.
* **Easy to use** http methods.
* Supported in old browsers IE8+ (using [unfetch polyfill](https://github.com/developit/unfetch))
* Written in ES6.

## Install

You can install `chick` from npm.

```markdown
npm install chick --save
```

or from yarn

```markdown
yarn add chick
```

## Usage

```javascript
import chick from 'chick';

chick.get('http://api.github.com/aganglada')
   .then(data => {
      console.log(data); 
   });
```

## Methods

#### get

Get data from anywhere at any time.

```javascript
import chick from 'chick';

chick.get('http://api.github.com/aganglada')
   .then(data => {
      console.log(data); 
   });
```

#### post

Create new data for a better future.

```javascript
import chick from 'chick';

chick.post('http://api.github.com/aganglada', {
    repo: {
        name: 'chick'
    }
})
   .then(data => {
      console.log(data); 
   });
```

#### put

Update data to maintain the world.

```javascript
import chick from 'chick';

chick.put('http://api.github.com/aganglada', {
    repo: {
        name: 'chick',
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
import chick from 'chick';

chick.patch('http://api.github.com/aganglada', {
    repo: {
        name: 'chick',
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
import chick from 'chick';

chick.delete('http://api.github.com/aganglada', {
    repo: {
        name: 'chick'
    }
})
   .then(data => {
      console.log(data); 
   });
```

## Contribute

If you like to contribute to this project be sure all the changes you made, 
make sense for everyone and they can continue using `chick` as their general api service.


## License

MIT &copy; aganglada