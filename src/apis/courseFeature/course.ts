import { ISpotType } from '@/stores/recommendedCourse/type';
import { getCookie } from '@/utils';
import axios from 'axios';
import axiosInstance from '..';

const handleAxiosError = (error: unknown) => {
  const errorCode =
    axios.isAxiosError(error) && error.response
      ? error.response.data.errorCode
      : null;
  throw { originalError: error, errorCode };
};

// export const findRecommentSpot = async (
//   latitude: number,
//   longitude: number,
//   contentTypeId: string
// ) => {
//   try {
//     const accessToken = getCookie('Authorization');
//     const url = `${process.env.VUE_APP_BASE_API}/api/v1/courses/tour/spots`;
//     const data = { latitude, longitude, contentTypeId };
//     // const data = {
//     //   latitude: 33.5115624162,
//     //   longitude: 126.5260587646,
//     //   contentTypeId: '38',
//     // };
//     const response = await axios.post(url, data, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     handleAxiosError(error);
//   }
// };

export type IFindRecommentSpotResponse = {
  id: string;
  updatedAt: string;
  latitude: number;
  longitude: number;
  title: string;
  imageUrl: string;
  content: string;
};

export const findRecommentSpot = async (
  latitude: number,
  longitude: number,
  contentTypeId: string
) => {
  try {
    const accessToken = getCookie('Authorization');
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/courses/tour/spots`;
    const data = {
      latitude: 33.5115624162,
      longitude: 126.5260587646,
      contentTypeId: '14',
    };

    const response: {
      data: Array<IFindRecommentSpotResponse>;
    } = {
      data: [
        {
          id: '1013246',
          updatedAt: '20240510103332',
          latitude: 126.5260587646,
          longitude: 33.5115624162,
          title: '동문재래시장',
          imageUrl:
            'http://tong.visitkorea.or.kr/cms/resource/86/3039486_image2_1.jpeg',
          content:
            '동문재래시장은 오랜 역사를  지닌 전통 재래시장으로 제주도를 대표하는 시장 중 하나이다. 동문재래수산시장과  더불어 제주도에서 가장 중요하면서 대규모의 상설 재래시장을 구성하고 있다. 1945년  8월 광복 직후 형성된 것이 시초인데, 이 시장은 당시 제주도의 유일한 상설시장으로  제주도 전체 상업 활동의 근거지가 되었다. 1954년 3월에 발생한 대형 화재로 시장  전체가 잿더미로 변하자 같은 해 11월 현재의 장소로 이전했다. 주요 취급 품목은  야채, 과일, 수산물, 약초, 곡물, 의류 등이 있다. 제주도의 대표 재래시장인 만큼 신선한 해산물이 인기다. 갈치회를 비롯한 다양한 모듬회를 저렴한 값에 구매할 수 있으며, 전복내장밥(게우밥) 삼합이나 통전복이 들어간 떡갈비 등 퓨전음식이 주목받고 있다.',
        },
        {
          id: '1013289',
          updatedAt: '20230423054547',
          latitude: 126.5405800026,
          longitude: 33.4993528886,
          title: '제주 특산품전시판매장',
          imageUrl:
            'http://tong.visitkorea.or.kr/cms/resource/24/1031524_image2_1.jpg',
          content:
            '제주특별자치도가 도내중소기업들의 판로난을 해결하고 제주특산품의 통합마케팅을 위하여 제주도중소기업종합지원센터 1층에 마련한 매장입니다.제주원료를 갖고 제주에서 생산되는 특산품만을 한곳에 전시․판매하는 곳인 이곳에서는 현재 138개업체의 농,수,축산품, 가공식품, 공예,향장품(香粧品) 등 2,200여개 산품들이 입점되어 있으며 전국에서 단일지역특산품매장으로는 가장 큰규모이다. 생산자와의 직거래를 통한 저렴한 가격 , 구매고객을 위한 최상의 서비스, 소비자들이 신뢰할수 품질관리시스템을를 추구하고 온-오프라인 판매장을 연계하여 제주의 쇼핑명소로 거듭 나고 있다.',
        },
        {
          id: '1014672',
          updatedAt: '20230612154300',
          latitude: 126.52466996,
          longitude: 33.5131677726,
          title: '제주 중앙지하상가',
          imageUrl:
            'http://tong.visitkorea.or.kr/cms/resource/58/1017258_image2_1.jpg',
          content:
            '제주시내 번화가인 중앙로에는 낡은 시설을 개.보수하여 새롭게 단장한 현대적인 지하아케이드가 조성되어 있다. 중앙로를 기점으로 서문로에서 동문로까지 잇는 지하 아케이드는 현재 300여 개의 점포가 들어서 있다. 주로 의류점이 많고 그 외 신발, 액세서리, 안경, 시계, 보석, 가방, 모자 등을 판매하는 상점들이 들어서 있으며 식당, 패스트푸드점 등과 중간, 중간에는 휴게 시설도 마련되어 고객의 쉼터도 자리잡고있다. 제주도 유일 지하상가이며 쾌적하고 가장 활발한 쇼핑 명소이다.',
        },
        {
          id: '1862763',
          updatedAt: '20230214164641',
          latitude: 126.5213730415,
          longitude: 33.512426135,
          title: '더 아일랜더',
          imageUrl:
            'http://tong.visitkorea.or.kr/cms/resource/01/2558001_image2_1.JPG',
          content:
            '2013년 제주의 원도심에서 오픈하여 제주도 기념품을 판매하고 있는 더 아일랜더는 최근 2호점인 라이프스타일 스토어와 함께 하나의 공간에서 새롭게 영업을 하고 있다. 기존의 제주도 기념품 외에 다양한 디자인 소품을 만나 보실 수 있으며, 작은 카페 공간도 함께 운영 중 이다.',
        },
      ],
    };

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const createCourse = async (
  courseName: string,
  visibilityStatus: boolean,
  keyword: string[],
  id: number,
  startPoint: ISpotType,
  wayPoint: ISpotType[],
  endPoint: ISpotType
) => {
  try {
    // const accessToken = getCookie('Authorization');
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/users/${id}/planners`;

    const spotCreateRequestDto =
      wayPoint.length > 0
        ? [startPoint, ...wayPoint, endPoint]
        : [startPoint, endPoint];

    const data = {
      title: courseName,
      isPrivate: visibilityStatus,
      tags: keyword,
      courseCreateRequestDto: {
        type: 'USER',
        title: courseName,
        userId: id,
      },
      spotCreateRequestDto,
    };

    const response = await axiosInstance.post(url, data);
    return response.data;

    // const response = await axios.post(url, data, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const searchCourse = async (
  latitude = 0.1,
  longitude = 0.1,
  query = '',
  category1 = '',
  category2 = '',
  category3 = ''
) => {
  try {
    const url = `http://localhost:8080/api/v1/search?latitude=${latitude}&longitude=${longitude}&query=${encodeURIComponent(
      query
    )}&category1=${encodeURIComponent(
      category1
    )}&category2=${encodeURIComponent(
      category2
    )}&category3=${encodeURIComponent(category3)}`;

    console.log('Request URL:', url);
    const response = await axiosInstance.get(url);
    return response.data;

    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    handleAxiosError(error);
  }
};
