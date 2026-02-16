import fs from "fs/promises";

import path from "path";

const filePath = new URL("./data.json", import.meta.url);

export async function readData() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
  }
}

export async function writeData(data: any) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing data:", error);
  }
}
