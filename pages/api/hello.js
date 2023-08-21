// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  async function query(data) {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/minimaxir/sdxl-wrong-lora',
      {
        headers: {
          Authorization: 'Bearer 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',
        },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }
  const response = await query({ inputs: req.body.text });
  console.log(response);
  await res.status(200).json({ image: response });
}
