import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).json({ message: 'Invalid input.' });

      return;
    }

    const newMessage = {
      name,
      email,
      message
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://Bishko:6969@cluster0.35ldd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      );
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong.' });

      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong.' });

      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message.', message: newMessage });
  }
};

export default handler;
