import * as path from 'path';

export default class File {
  /**
   * Get the absolute path of a file
   * @param {string)} fileName Filename
   * @returns {string} Lambda path
   */
  static getPath(relativaPath: string): string {
    if (!process.env.IS_OFFLINE) {
      return path.resolve(process.cwd(), relativaPath);
    }

    const IS_OFFLINE: boolean = /true/i.test(process.env.IS_OFFLINE);
    if (IS_OFFLINE) {
      return path.resolve(process.cwd(), relativaPath);
    }

    if (!process.env.LAMBDA_TASK_ROOT) {
      throw new Error("La variable de entorno 'LAMBDA_TASK_ROOT' no existe");
    }

    if (!process.env.AWS_LAMBDA_DISTRIBUTION_PATH) {
      throw new Error("La variable de entorno 'AWS_LAMBDA_DISTRIBUTION_PATH' no existe");
    }

    if (!process.env.AWS_LAMBDA_FUNCTION_NAME) {
      throw new Error("La variable de entorno 'AWS_LAMBDA_FUNCTION_NAME' no existe");
    }

    const root = process.env.LAMBDA_TASK_ROOT;
    const prefix = process.env.AWS_LAMBDA_DISTRIBUTION_PATH;
    const name = process.env.AWS_LAMBDA_FUNCTION_NAME;
    return path.resolve(root, prefix, name, relativaPath);
  }
}
