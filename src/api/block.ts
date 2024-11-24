import axios from "axios";

export class BlockchainService {
  static async uploadSessionData(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:40010/upload-file-block",
      formData
    );
    return res.data;
  }

  static async getBlocks() {
    const res = await axios.get("http://localhost:40010/blocks");
    return res.data;
  }
}
