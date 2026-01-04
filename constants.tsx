
import React from 'react';
import { Palette, Share2, Monitor, MessageSquare, Target, Lightbulb, PenTool, CheckCircle } from 'lucide-react';
import { ProcessStep, Review, PortfolioItem } from './types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "문의 & 상담",
    description: "원하시는 작업의 방향성과 요구사항을 꼼꼼하게 상담합니다.",
    icon: "MessageSquare"
  },
  {
    step: 2,
    title: "기획 및 방향 설정",
    description: "타겟 분석을 통해 가장 효과적인 비주얼 전략을 기획합니다.",
    icon: "Target"
  },
  {
    step: 3,
    title: "디자인 작업",
    description: "헬로밍만의 감각을 담아 고퀄리티 디자인 시안을 제작합니다.",
    icon: "PenTool"
  },
  {
    step: 4,
    title: "피드백 & 수정",
    description: "실시간 소통을 통해 고객님의 의견을 적극 반영하여 완성도를 높입니다.",
    icon: "Lightbulb"
  },
  {
    step: 5,
    title: "최종 전달",
    description: "완성된 결과물을 용도에 맞는 파일 형식으로 최종 전달합니다.",
    icon: "CheckCircle"
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: '메디컬 케어 병원 카드뉴스',
    category: 'SNS',
    description: '병원 브랜딩을 강화하는 정보 전달형 카드뉴스 디자인. 신뢰감 있는 블루 톤과 가독성 높은 레이아웃을 적용했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    client: '메디케어 병원',
    createdAt: Date.now() - 100000
  },
  {
    id: '2',
    title: 'IT 스타트업 런칭 로고',
    category: 'LOGO',
    description: '심플함과 전문성을 강조한 심볼형 로고 디자인. 기술력을 상징하는 직선적인 쉐입을 활용했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    client: '테크모아',
    createdAt: Date.now() - 200000
  },
  {
    id: '3',
    title: '베이커리 카페 인스타그램 콘텐츠',
    category: 'SNS',
    description: '감성적인 무드로 매출을 유도하는 메뉴 홍보 콘텐츠. 브랜드 특유의 따뜻한 감성을 비주얼화했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop',
    client: '브레드 가든',
    createdAt: Date.now() - 300000
  },
  {
    id: '4',
    title: '법률사무소 원페이지 웹사이트',
    category: 'WEB',
    description: '신뢰감을 주는 전문직 랜딩페이지 UI/UX 디자인. 권위 있고 차분한 딥 네이비 컬러 시스템을 구축했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    client: '법무법인 한결',
    createdAt: Date.now() - 400000
  },
  {
    id: '5',
    title: '뷰티 브랜드 패키지 로고',
    category: 'LOGO',
    description: '우아함과 트렌디함을 담은 타이포그래피 로고. 세리프 폰트를 커스텀하여 독창적인 아이덴티티를 부여했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop',
    client: '벨라 코스메틱',
    createdAt: Date.now() - 500000
  },
  {
    id: '6',
    title: '에듀테크 서비스 웹 대시보드',
    category: 'WEB',
    description: '사용자 편의성을 최우선으로 한 대시보드 UI 기획. 데이터 시각화와 직관적인 인터랙션에 집중했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    client: '이지런',
    createdAt: Date.now() - 600000
  }
];

export const REVIEWS: Review[] = [
  { id: 'r1', author: '김** 대표님', content: '피드백이 정말 빠르고 요청사항을 찰떡같이 알아들으세요. 결과물 대만족입니다!', rating: 5, platform: 'Kmong' },
  { id: 'r2', author: '이** 실장님', content: '디자인 감각이 너무 좋으셔서 로고 하나로 브랜드 이미지가 확 살았습니다.', rating: 5, platform: 'Kmong' },
  { id: 'r3', author: '박** 선생님', content: '어려운 내용이었는데 카드뉴스로 정말 깔끔하게 정리해주셨어요. 재의뢰 200%입니다.', rating: 5, platform: 'Direct' }
];
