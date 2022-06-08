db.createUser({
    user: 'the_username',
    pwd: 'the_password',
    roles: [
      {
        role: 'dbOwner',
        db: 'the_database',
      },
    ],
  });

db.createCollection('phones');

db.phones.insert({phone: '123-456-788', name: 'Bach'});