import { FileService } from '../../../src';
import * as fs from 'fs';
import * as path from 'path';

const fileService = new FileService();

test('Testing "createFolder" method with one folder', () => {
  return fileService.createFolder('a');
});

test('Testing "createFolder" method with multiple folder', () => {
  return fileService.createFolder('a/b/c');
});

test('Testing "createFile" method with file in the base folder', () => {
  return fileService.createFile(
    'testSimple.json',
    JSON.stringify({ test: 'ok' }, null, 2)
  );
});

test('Testing "createFile" method with Stream', () => {
  const fileName = 'file-to-upload.json';
  return fileService.createFile(
    'testReadStream.json',
    fs.createReadStream(path.resolve(__dirname, fileName))
  );
});

test('Testing "createFile" method with file in mixed folders', () => {
  return fileService.createFile(
    'a/d/e/testComplex.json',
    JSON.stringify({ test: 'ok' }, null, 2)
  );
});

test('Testing "readFile" method', () => {
  return fileService
    .readFile('a/d/e/testComplex.json')
    .then((buffer) => expect(JSON.parse(buffer.toString()).test).toBe('ok'));
});

test('Testing "isFileExists" method', () => {
  return fileService
    .isFileExists('a/d/e/testComplex.json')
    .then((exists) => expect(exists).toBe(true));
});

test('Testing "isFolderExists" method', () => {
  return fileService
    .isFolderExists('a/b/c')
    .then((exists) => expect(exists).toBe(true));
});

test('Testing "isFile" method', () => {
  return fileService
    .isFile('a/d/e/testComplex.json')
    .then((isFile) => expect(isFile).toBe(true));
});

test('Testing "isFolder" method', () => {
  return fileService
    .isFolder('a/b/c')
    .then((isFolder) => expect(isFolder).toBe(true));
});

test('Testing "removeFile" method', () => {
  return fileService
    .removeFile('testSimple.json')
    .then(() => fileService.isFileExists('testSimple.json'))
    .then((exists) => expect(exists).toBe(false));
});

test('Testing "removeFolder" method', () => {
  return fileService
    .removeFolder('a/b')
    .then(() => fileService.isFolderExists('a/b'))
    .then((exists) => expect(exists).toBe(false));
});
