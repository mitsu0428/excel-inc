// "use client";

// import React from "react";
// import styled from "styled-components";
// import * as NewsArea from "@/app/components/ui/NewsArea";

// import * as AssetsPath from "@/app/domain/assetsPath";
// import * as SNSList from "@/app/domain/snsList";

// import * as Font from "@/app/styles/NextFont";

// export const Component = () => {
// 	return (
// 		<Container>
// 			<ImageWrap>
// 				<StyledImageSP
// 					src={AssetsPath.topImage.topImageProdSP}
// 					alt="トップ画像"
// 				/>
// 				<StyledImageSmartPC
// 					src={AssetsPath.topImage.topImageProdPC}
// 					alt="トップ画像"
// 				/>
// 			</ImageWrap>

// 			<TextAreaSecond>
// 				<TitleH2_About className={Font.Font.CustomJosefinSans.className}>
// 					ABOUT
// 				</TitleH2_About>
// 				<TitleH2_Company className={Font.Font.CustomJosefinSans.className}>
// 					EXCEL inc.
// 				</TitleH2_Company>
// 				<TitleH2_Concept className={Font.Font.CustomJosefinSansThin.className}>
// 					BEYOND EXPECTATIONS AND IMAGINATIONS.
// 				</TitleH2_Concept>
// 			</TextAreaSecond>

// 			<TextAreaThird>
// 				<TextRight className={Font.Font.CustomGotchicA1.className}>
// 					革新的でワクワクする要素を探究しながら、常にクールに。
// 				</TextRight>
// 				<TextRight className={Font.Font.CustomGotchicA1.className}>
// 					未来に翔ける先駆者として、私たちが道を切り開いていこう。
// 				</TextRight>
// 				<br />
// 				<TextRight className={Font.Font.CustomGotchicA1.className}>
// 					明日さえも予測不可能な現代社会で、
// 				</TextRight>
// 				<TextRight className={Font.Font.CustomGotchicA1.className}>
// 					「誰よりも深く思考し」
// 				</TextRight>
// 				<TextRight className={Font.Font.CustomGotchicA1.className}>
// 					「誰よりも熱く行動し続け」
// 				</TextRight>
// 				<TextRight className={Font.Font.CustomGotchicA1.className}>
// 					世の中の期待と想像を超えるサービスを提供していきます。
// 				</TextRight>
// 			</TextAreaThird>

// 			<NewsArea.Component
// 				text="NEWS. 2024/02/20 Web site OPEN"
// 				linkTo={SNSList.snsLink.note.link}
// 			/>
// 		</Container>
// 	);
// };

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   overflow: hidden;
// `;

// const ImageWrap = styled.div`
//   width: 100%;
//   height: 100vh;
// `;

// const StyledImageSP = styled.img`
//   display: none;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const StyledImageSmartPC = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const TextAreaSecond = styled.div`
//   position: absolute;
//   top: 145px;
//   left: 70px;
//   text-align: left;

//   @media (max-width: 768px) {
//     top: 120px;
//     left: 36px;
//   }
// `;

// const TextAreaThird = styled.div`
//   width: 90%;
//   position: absolute;
//   bottom: 60px;
//   left: 70px;
//   text-align: left;

//   @media (max-width: 768px) {
//     bottom: 100px;
//     left: 24px;
//     padding: 0px;
//   }
// `;

// const TitleH2_About = styled.h2`
//   font-size: 50px;
//   text-align: left;
//   font-weight: 600;
//   color: #fff;
//   letter-spacing: 10px;
//   margin: 0;
//   opacity: 0.3;

//   @media (max-width: 768px) {
//     font-size: 34px;
//     line-height: 55px;
//   }
// `;

// const TitleH2_Company = styled.h2`
//   font-size: 70px;
//   text-align: left;
//   font-weight: 600;
//   color: #fff;
//   letter-spacing: 6px;
//   margin: 0;
//   white-space: nowrap;

//   @media (max-width: 768px) {
//     font-size: 40px;
//     line-height: 55px;
//   }
// `;

// const TitleH2_Concept = styled.h2`
//   color: #f9f9f9;
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   font-size: 28px;
//   font-style: italic;
//   font-weight: 200;
//   line-height: normal;
//   letter-spacing: 0.56px;

//   @media (max-width: 768px) {
//     font-size: 12px;
//     letter-spacing: 0.24px;
//   }
// `;

// const TextRight = styled.p`
//   color: #fff;
//   font-size: 16px;
//   line-height: 170%;
//   letter-spacing: 0.4px;
//   white-space: pre-wrap;

//   @media (max-width: 768px) {
//     font-size: 12px;
//     letter-spacing: 0.28px;
//   }
// `;
