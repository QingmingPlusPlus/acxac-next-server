class SocketServerService {
  private static instance?: SocketServerService;

  private constructor() {
  };

  public static getInstance(): SocketServerService {
    if (!SocketServerService.instance) {
      SocketServerService.instance = new SocketServerService();
    }
    return SocketServerService.instance;
  }
}

export {
  SocketServerService
}