import 'isomorphic-fetch';
import {Schema} from 'contextable';

export const userSchema = new Schema({ // defining a model
  fields: {
    name: {
      type: 'String',
      validate: [ // field validations
        { // validator recipe
          validator: 'presence', // validator name
          message: 'is required' // validator error message
        }
      ]
    }
  },
  instanceMethods: {
    async $save () { // create new user on the remote server
      try {
        await this.$validate(); // reactively validate
        await fetch('/users', {method: 'POST'}) // send request to the remote server
          .then((r) => r.json()) // read JSON server response
          .then((r) => this.$applyErrors(r.errors)); // load and displays possible server errors
        return this.isValid(); // return true if a user has been created
      }
      catch (e) {
        return false; // user has not been created
      }
    }
  }
});
