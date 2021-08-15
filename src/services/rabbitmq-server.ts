import { Connection, Channel, connect, Message } from 'amqplib'
import { IMessagery } from './microservices-interfaces'
//import { Transport } from '@nestjs/microservices'
export class RabbitMQServer implements IMessagery {
  private conn: Connection
  private channel: Channel

  constructor(private uri: string = `amqp://localhost:5672`) {
    this.uri = uri
  }

  async start(): Promise<void> {
    this.conn = await connect(this.uri)
    this.channel = await this.conn.createChannel()
    console.info('Connected to RabbitMQ')
  }

  async publishInQueue(queue: string, message: string): Promise<void> {
    this.channel.assertQueue(queue, { durable: true })
    return this.channel.sendToQueue(queue, Buffer.from(message))
  }

  async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (msg: Message) => {
      callback(msg)
      this.channel.ack(msg)
    })
  }
}

// export const RabbitMQConnection = {
//   transport: Transport.RMQ,
//   options: {
//     urls: [`amqp://localhost:5672`],
//     queue: 'my_queue',
//     queueOptions: { durable: true },
//   },
// }
