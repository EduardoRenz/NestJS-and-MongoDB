export interface IMessagery {
  start(): Promise<void>
  publishInQueue(queue: string, message: string): Promise<void>
  consume(queue: string, callback: (message: any) => void)
}
