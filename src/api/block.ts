import axios from "axios";

export class BlockchainService {
  static async uploadSectionData(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://core.blockchurna.tech/core/v1/upload-file-block",
      formData
    );
    return res.data;
  }

  static async getBlocks() {
    const res = await axios.get("http://core.blockchurna.tech/core/v1/blocks");
    return res.data;
  }

  static async verifyVote(
    userId: string,
    userPin: string,
    tsePin: string
  ): Promise<{
    vote: { position: string; candidate: string; hash: string };
  }> {
    const res = await axios.post(
      "http://core.blockchurna.tech/core/v1/verify-vote",
      {
        voter_id: userId,
        user_pin: userPin,
        tse_pin: tsePin,
      }
    );
    return res.data;
  }
}

export interface VerifyVoteResponse {
  vote: { position: string; candidate: string; hash: string };
}
