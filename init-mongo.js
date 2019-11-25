db.auth('admin-user', 'admin-password')

db = db.getSiblingDB('magic8ball')
db.createUser(
    {
        user: 'ire',
        pwd: 'secret',
        roles: [
            {
                role: 'root',
                db: 'admin',
            }
        ]
    }
);
