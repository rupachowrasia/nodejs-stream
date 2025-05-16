# Node.js Event Emitters
> In Node.js, the events module provides a way to implement event-driven architecture, where different parts of your application can communicate via emitting and listening to events.

## 🧵 When to Use

- Logging
- Messaging/event systems
- Async task management (e.g., background workers)
- Microservices event communication
- Streaming APIs
- Real-world use case - chat app, ticket system and logger

## 📚 Key Methods
- emitter.on(): Adds an event listener
- emitter.emit(): Triggers an event
- emitter.once(): Listens only for the first occurrence
- emitter.removeListener() / off(): Removes a listener
- emitter.removeAllListeners(): Clears all listeners for a given event

## 🚨 Tips
- Don’t forget to remove unused listeners to avoid memory leaks.
- You can increase the listener limit (default is 10):

## 🛠 Tech Stack

- Node.js 
- Node.js events module

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/rupachowrasia/nodejs-security-best-practices.git

# Move into the project directory
cd nodejs-security-best-practices

# Install dependencies
npm install

# Run the app
npm run start
