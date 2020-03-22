import * as fs from 'fs';
import { Stream } from 'stream';

export class FileService {
  private baseDir: string = `${process.cwd()}/tmp`;

  constructor() {
    if (!fs.existsSync(this.baseDir)) {
      fs.mkdirSync(this.baseDir);
    }
  }

  isFile(path: string): Promise<boolean> {
    return new Promise<boolean>((resolve) =>
      resolve(fs.lstatSync(`${this.baseDir}/${path}`).isFile())
    );
  }

  isFolder(path: string): Promise<boolean> {
    return new Promise<boolean>((resolve) =>
      resolve(fs.lstatSync(`${this.baseDir}/${path}`).isDirectory())
    );
  }

  createFile(
    fileName: string,
    fileData: string | Buffer | Stream,
    encoding: string = 'utf8',
    flag: string = 'w'
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      const writeFile = () => {
        if (fileData instanceof Stream) {
          const buffers = [];
          fileData.on('data', (chunk) => buffers.push(chunk));
          fileData.once('end', () => {
            fs.writeFileSync(
              `${this.baseDir}/${fileName}`,
              Buffer.concat(buffers),
              { encoding, flag }
            );
            resolve();
          });
        } else {
          fs.writeFileSync(`${this.baseDir}/${fileName}`, fileData, {
            encoding,
            flag,
          });
          resolve();
        }
      };
      if (fileName.includes('/')) {
        const folder = fileName.replace(/\/[^\/]*$/g, '');
        this.createFolder(folder).then(writeFile);
      } else {
        writeFile();
      }
    });
  }

  readFile(fileName: string): Promise<Buffer> {
    return new Promise<Buffer>((resolve) =>
      resolve(fs.readFileSync(`${this.baseDir}/${fileName}`))
    );
  }

  createReadFileStream(fileName: string): Promise<fs.ReadStream> {
    return new Promise<fs.ReadStream>((resolve) =>
      resolve(fs.createReadStream(`${this.baseDir}/${fileName}`))
    );
  }

  isFileExists(fileName: string): Promise<boolean> {
    return new Promise<boolean>((resolve) =>
      resolve(fs.existsSync(`${this.baseDir}/${fileName}`))
    );
  }

  removeFile(fileName: string) {
    return new Promise<void>((resolve) => {
      fs.unlinkSync(`${this.baseDir}/${fileName}`);
      resolve();
    });
  }

  createFolder(folderPath: string) {
    return new Promise<void>((resolve) => {
      fs.mkdirSync(`${this.baseDir}/${folderPath}`, { recursive: true });
      resolve();
    });
  }

  isFolderExists(folderPath: string): Promise<boolean> {
    return this.isFileExists(folderPath);
  }

  removeFolder(folderPath: string) {
    return new Promise<void>((resolve) => {
      const promises: Promise<void>[] = [];
      const files = fs.readdirSync(`${this.baseDir}/${folderPath}`);
      for (const file of files) {
        const filePath = `${
          folderPath.length > 0 ? `${folderPath}/` : ``
        }${file}`;
        if (fs.lstatSync(`${this.baseDir}/${filePath}`).isDirectory()) {
          promises.push(this.removeFolder(filePath));
        } else {
          promises.push(this.removeFile(filePath));
        }
      }
      Promise.all(promises)
        .then(() => fs.rmdirSync(`${this.baseDir}/${folderPath}`))
        .then(resolve);
    });
  }
}
