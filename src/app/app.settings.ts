export class AppSettings {
  public static get API_ENDPOINT(): string {
    // return 'http://127.0.0.1:5000';
    return 'http://metabolitics.itu.edu.tr/api';
  }

  public static get NOTIFICATION_OPTIONS() {
    return { timeOut: 10000 };
  }
}
