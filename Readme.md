# simple-record

Creates record classes that can be instantiated from your `simple-interface`s.

### What?

You have an interface, want to create a record and a model out of it.

```js
import { createInterface } from 'simple-interface'
// we are gonna use createRecord function to create a record out of this interface.
import { createRecord } from 'simple-record'

const PostInterface = createInterface('PostInterface', {
  title: String,
  body: String
})

const PostRecord = createRecord(PostInterface)

const post = new PostRecord
// post.title === ''
// post.body === ''
```

# install

    npm install simple-record


# licence

MIT
