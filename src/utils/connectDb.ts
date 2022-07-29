/*ref connect & define type mongodb + ts + nextjs:
 https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/
 https://www.mongodb.com/compatibility/using-typescript-with-mongodb-tutorial
*/

import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB as string;

let cachedClient: Promise<MongoClient> | null = null;
let cachedDb: Db | null = null;

if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local',
    );
}

if (!dbName) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local',
    );
}

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await MongoClient.connect(uri, {
        //@ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    //@ts-ignore
    const db = await client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}
