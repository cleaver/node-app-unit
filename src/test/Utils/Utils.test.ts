import { IncomingMessage } from 'http';
import { Utils } from '../../app/Utils/Utils';

describe('Utils test suite', () => {
  test('getRequesPath valid request', () => {
    const url = { url: 'http://localhost:8080/login' } as IncomingMessage;
    const resultPath = Utils.getRequestBasePath(url);
    expect(resultPath).toBe('login');
  });

  test('getRequesPath invalid request', () => {
    const url = { url: 'http://localhost:8080/' } as IncomingMessage;
    const resultPath = Utils.getRequestBasePath(url);
    expect(resultPath).toBeFalsy();
  });
});
