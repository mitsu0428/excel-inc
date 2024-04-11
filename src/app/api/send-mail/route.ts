import nodemailer from "nodemailer";

type ContactFormBody = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, company, email, phone, message }: ContactFormBody = req.body;

  // SMTPサーバーの設定
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info@excelinc-tokyo.com", // 自分のメールアドレス
      pass: "yourPassword", // 自分のメールパスワード
    },
  });

  // メールの内容
  const mailOptions = {
    from: "info@excelinc-tokyo.com", // 実際の送信元（自分のメールアドレス）
    replyTo: email, // ユーザーが返信する際に使用するアドレス（ユーザーのメールアドレス）
    to: "info@excel.com", // 送信先の会社のメールアドレス
    subject: `New contact from ${name}`, // メールの件名
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // メールの本文
    html: `<p>Name: ${name}</p><p>Company: ${company}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`, // HTML形式のメール本文（オプション）
  };

  // メールを送信
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
}
