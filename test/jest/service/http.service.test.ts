import { AxiosError } from 'axios';
import { HttpService } from '../../../src/service';
import * as path from 'path';
import * as FormData from 'form-data';
import * as fs from 'fs';

const httpService = new HttpService();

test('Testing "request" method', () => {
  return httpService
    .request({
      url: 'https://postman-echo.com/get',
      method: 'GET',
      headers: { foo: 'bar' },
      params: { foo: 'bar' },
    })
    .then((value) => {
      expect<string>(value.data.args.foo).toBe('bar');
      expect<string>(value.data.headers.foo).toBe('bar');
    });
});

test('Testing "get" method', () => {
  return httpService
    .get('https://postman-echo.com/get?foo=bar')
    .then((value) => expect<string>(value.data.args.foo).toBe('bar'));
});

test('Testing "post" method', () => {
  return httpService
    .post('https://postman-echo.com/post', { foo: 'bar' })
    .then((value) => expect<string>(value.data.data.foo).toBe('bar'));
});

test('Testing upload a file', async () => {
  const fileName = 'file-to-upload.json';
  const file = await fs.readFileSync(path.resolve(__dirname, fileName));
  const fileContent = Buffer.from(file).toString();
  const form = new FormData();
  form.append('file', fs.createReadStream(path.resolve(__dirname, fileName)));
  return httpService
    .post('https://postman-echo.com/post', form, { headers: form.getHeaders() })
    .then((value) => {
      const downloadedFileContent = Buffer.from(
        value.data.files[fileName].split(',')[1],
        'base64'
      ).toString();
      expect(fileContent).toBe(downloadedFileContent);
    });
});

test('Testing "put" method', () => {
  return httpService
    .put('https://postman-echo.com/put', { foo: 'bar' })
    .then((value) => expect<string>(value.data.data.foo).toBe('bar'));
});

test('Testing "patch" method', () => {
  return httpService
    .patch('https://postman-echo.com/patch', { foo: 'bar' })
    .then((value) => expect<string>(value.data.data.foo).toBe('bar'));
});

test('Testing "delete" method', () => {
  return httpService
    .delete('https://postman-echo.com/delete')
    .then((value) => expect<number>(value.status).toBe(200));
});

test('Testing request headers', () => {
  return httpService
    .get('https://postman-echo.com/headers', { headers: { foo: 'bar' } })
    .then((value) => expect<string>(value.data.headers.foo).toBe('bar'));
});

test('Testing response headers', () => {
  return httpService
    .get('https://postman-echo.com/response-headers?foo=bar')
    .then((value) => expect<string>(value.headers.foo).toBe('bar'));
});

test('Testing basic auth', async () => {
  await httpService
    .get('https://postman-echo.com/basic-auth', {
      headers: { Authorization: 'Basic cG9zdG1hbjpwYXNzd29yZA==' },
    })
    .then((value) => expect<boolean>(value.data.authenticated).toBe(true));
  await httpService
    .get('https://postman-echo.com/basic-auth', {
      headers: { Authorization: 'Basic cG9zdG1hbjpwYXNzd29y' },
    })
    .catch((error: AxiosError) =>
      expect<number>(error.response.status).toBe(401)
    );
});
