import { MongoClient, ObjectId } from 'mongodb'

export async function connectDatabase() {
	const client = await MongoClient.connect('mongodb+srv://tomasz:tomasz12345678@cluster0.p5pqqsa.mongodb.net/gradebook')
	return client
}

export async function insertDocument(client: any, collection: string, document: any) {
	const db = client.db()

	const result = await db.collection(collection).insertOne(document)

	return result
}

export async function getAllDocuments(client: any, collection: string) {
	const db = client.db()

	const documents = await db.collection(collection).find().toArray()

	return documents
}

export async function deleteOneDocument(client: any, collection: string, newsId: any) {
	const db = client.db()
	const documentId = new ObjectId(newsId)
	const deleteDocument = await db.collection(collection).deleteOne({ _id: documentId })
	return deleteDocument
}

export async function findOneGradeAndReplace(client: any, collection: string, filter: any, updatedData: any) {
	const db = client.db()

	console.log(updatedData)
	const modifyGrades = await db
		.collection(collection)
		.findOneAndReplace(filter, ...updatedData, { returnOriginal: false })

	return modifyGrades
}
