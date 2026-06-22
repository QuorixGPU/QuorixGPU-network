export class MemoryManager {
  memory = [];

  save(data: unknown) {
    this.memory.push(data);
  }
}
