import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // memo: 587: SMTPポート
    // memo: trueで465ポート, falseでそれ以外のポートを使用
    const transporter = nodemailer.createTransport({
      host: "お名前.comのSMTPホスト",
      port: 587,
      secure: false,
      auth: {
        user: "あなたのメールアドレス",
        pass: "あなたのパスワード",
      },
    });

    const mailOptions = {
      from: "あなたのメールアドレス",
      to: "受信者メールアドレス",
      subject: "新しいコンタクトフォームのメッセージ",
      text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("メールが正常に送信されました。");
    } catch (error) {
      console.error("メール送信エラー:", error);
      res.status(500).send("メール送信に失敗しました。");
    }
  } else {
    res
      .status(405)
      .send({ message: "POSTメソッドのみがサポートされています。" });
  }
}
