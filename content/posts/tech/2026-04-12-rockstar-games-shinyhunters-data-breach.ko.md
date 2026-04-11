---
title: "ShinyHunters, GTA 개발사 록스타게임즈 클라우드 서버 침해 — 랜섬 거부 시 대규모 데이터 유출 위협"
date: 2026-04-12T05:39:17+09:00
layout: "post"
description: "해킹 그룹 ShinyHunters가 GTA 시리즈 개발사 록스타게임즈의 클라우드 서버를 침해했으며, 회사 측은 제3자 데이터 유출을 공식 확인했다. 랜섬 요구가 결렬될 경우 대규모 데이터 공개 위협이 이어지고 있어, 공급망 보안의 구조적 취약점이 다시 수면 위로 떠올랐다."
categories:
  - 기술
tags:
  - "록스타게임즈"
  - "해킹"
  - "사이버보안"
  - "GTA"
  - "ShinyHunters"
  - "공급망보안"
thumbnail: "https://o.aolcdn.com/images/dims?image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2026-04%2F471ee8f0-35ca-11f1-bbbd-0ec426119c0a&resize=1400%2C787&client=19f2b5e49a271b2bde77&signature=907249894c6685dcdae78576aaab2783ee9dae71"
---

해킹 그룹 **ShinyHunters** 가 GTA 개발사 **록스타게임즈(Rockstar Games)** 의 클라우드 서버를 침해했고, 록스타는 "제3자 데이터 침해(third-party data breach)가 발생했다"고 <mark>2026년 4월 11일</mark> 공식 인정했다.

## 핵심 포인트

- ShinyHunters: Microsoft·Google·Ticketmaster 대규모 해킹 이력 보유, 반복적 공급망 공격 수법 사용
- 록스타게임즈 "제3자 경유 데이터 유출" 공식 확인 — 침해 범위는 미공개
- 랜섬 요구 협상 결렬 시 탈취 데이터 전면 공개 위협 중

## ShinyHunters — 반복되는 공급망 공격

ShinyHunters는 <mark>2020년</mark>부터 활동한 고도화 해킹 그룹이다. 마이크로소프트(Microsoft), 구글(Google), 티켓마스터(Ticketmaster) 등 전 세계 최상위 기업들의 데이터를 연속 탈취한 이력이 있다. 이번에도 이들은 록스타게임즈의 클라우드 서버에 침투해 데이터를 확보했다고 주장했다. 록스타 측은 성명에서 직접 침투가 아닌 '제3자'를 경유한 침해임을 명시했다.

<span class="hl-red">공급망 해킹(supply chain attack)</span> 은 현재 사이버 위협 트렌드에서 가장 빠르게 증가하는 유형이다. 기업이 직접 방어하는 내부 시스템이 아니라, 협력 업체·클라우드 벤더·SaaS 서비스를 경유해 핵심 자산에 접근하는 방식이다. 현대 기업은 수십~수백 개의 외부 벤더와 데이터를 공유하기 때문에, 단 하나의 취약 고리만 뚫려도 최상위 기업의 기밀까지 노출된다.

![이미지 1](https://o.aolcdn.com/images/dims?image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2026-04%2F471ee8f0-35ca-11f1-bbbd-0ec426119c0a&resize=1400%2C787&client=19f2b5e49a271b2bde77&signature=907249894c6685dcdae78576aaab2783ee9dae71)
*Source: [Rockstar Games has confirmed it was hit by third-party data breach](https://www.engadget.com/cybersecurity/rockstar-games-has-confirmed-it-was-hit-by-third-party-data-breach-175112621.html?src=rss)*

## 무엇이 위험한가

현재 어떤 데이터가 유출됐는지는 공개되지 않았다. 그러나 게임 업계 특성상 <span class="hl-red">소스 코드, 미출시 개발 영상, 사용자 데이터</span> 가 주요 타깃이 된다. 록스타게임즈는 이미 <mark>2022년</mark> GTA 6 개발 영상이 <mark>90개 이상</mark> 대규모 유출된 전례가 있다. 당시 10대 해커가 Slack 채널에 침투해 미공개 게임 영상을 통째로 빼냈고, 업계 전체에 충격을 안겼다.

GTA 시리즈는 전 세계 누적 판매량 <mark>4억 장</mark>을 넘는 메가프랜차이즈다. 미출시 작품의 소스 코드나 출시 로드맵이 공개될 경우, 수십억 달러 규모의 IP 가치에 직접 타격이 가해진다.

> "제3자 데이터 침해가 발생했다는 사실을 확인했다" — 록스타게임즈 공식 성명

## 투자·산업 파급 효과

록스타게임즈 모회사 **테이크투 인터랙티브(Take-Two Interactive, TTWO)** 는 GTA 6의 성공에 상당 부분 의존하는 구조다. 소스 코드 유출이나 출시 일정 차질은 <span class="hl-red">주가 하방 압력</span> 으로 직결된다. 반면 이번 사건은 <span class="hl-blue">사이버보안 섹터</span> 에는 호재다. CrowdStrike(CRWD), SentinelOne(S), Palo Alto Networks(PANW) 같은 엔드포인트 보안 기업들은 공급망 보안 수요 증가의 수혜를 받을 가능성이 높다.

연결고리 분석: 대형 기업 해킹 증가 → 기업 보안 예산 확대 → 공급망 보안 솔루션 수요 급증 → 관련 보안주 상승 압력

ShinyHunters의 다음 행동과 록스타의 대응이 향후 핵심 변수다. 랜섬 협상이 결렬될 경우 사태 규모가 얼마나 커질지, 그리고 게임 업계 전반이 공급망 보안을 어떻게 재정비할지 주목된다.

## 참고 기사

1. [Rockstar Games has confirmed it was hit by third-party data breach](https://www.engadget.com/cybersecurity/rockstar-games-has-confirmed-it-was-hit-by-third-party-data-breach-175112621.html?src=rss) — Engadget
