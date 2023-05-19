import fs from 'fs/promises';
import path from 'path';

type getAsyncFsDataProps = {
  folderName: string;
  fileName: string;
};

const getAsyncFsData = async <T,>({
  folderName,
  fileName,
}: getAsyncFsDataProps): Promise<T> => {
  const filePath = path.join(process.cwd(), folderName, fileName);
  const readFile: any = await fs.readFile(filePath);
  const response = JSON.parse(readFile);
  return response;
};

export { getAsyncFsData };
