"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "@/app/styles/NextFont";

export default function Tokusyoho() {
	return (
		<Wrap>
			<CommentWrap>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						販売業者
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						株式会社EXCEL Inc.
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						代表責任者
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						代表取締役　樋口　絢太
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						所在地
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						〒107-0062 東京都港区南青山5-12-27 WISE512ビル 305
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						電話番号
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						03-6824-4903
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						電話受付時間
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						受付時間 10:00-18:00（土日祝を除く）
					</Text>
					<Text className={Font.Font.CustomGotchicA1.className}>
						※受付時間外の場合は、メールにてお問い合わせください。
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						メールアドレス
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						contact@excelinc-tokyo.com
					</Text>
					<Text className={Font.Font.CustomGotchicA1.className}>
						※受付時間外の場合は、メールにてお問い合わせください。
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						サイトURL
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						https://www.excelinc-tokyo.com/
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						商品の販売価格
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						各商品ページをご参照ください。
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						商品代金以外に必要な料金
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						・配送料: 1000円
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						支払方法
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						クレジットカード決済・コンビニ決済
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						支払時期
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						・クレジットカード決済: 商品注文時にお支払いが確定します。
					</Text>
					<Text className={Font.Font.CustomGotchicA1.className}>
						・コンビニ決済: 注文後3日以内にお支払いください。
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						商品の引渡またはサービス提供の時期
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						ご注文日から7営業日以内に発送いたします。
					</Text>
				</Comment>
				<Comment>
					<TitleH2_Tokusyoho className={Font.Font.CustomGotchicA1.className}>
						返品・交換
					</TitleH2_Tokusyoho>
					<Text className={Font.Font.CustomGotchicA1.className}>
						商品到着後14日以内に限り返品・交換が可能です。
					</Text>
					<Text className={Font.Font.CustomGotchicA1.className}>
						返品送料
						商品に欠陥がある場合には当方負担、お客様のご都合による返品・交換の場合にはお客様負担となります
					</Text>
				</Comment>
			</CommentWrap>
		</Wrap>
	);
}

const Wrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #383838;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;

  padding: 80px 60px;
  @media (max-width: 768px) {
    padding: 18px 18px;
  }
`;

const CommentWrap = styled.div`
  margin-top: 84px;
  width: 100%;
  max-width: 1181px;
`;

const Comment = styled.div`
  margin-top: 36px;
  color: #fff;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const TitleH2_Tokusyoho = styled.h2`
  font-size: 32px;
  color: #fff;
  letter-spacing: 10px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 55px;
  }
`;

const Text = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 170%;
  letter-spacing: 0.4px;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.28px;
  }
`;
