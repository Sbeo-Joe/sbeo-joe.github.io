---
title: "Waymo, 로보택시 3,800대 리콜 — 침수 도로 돌진 소프트웨어 결함 확인"
date: 2026-05-13T05:42:02+09:00
layout: "post"
description: "Waymo가 고인 물을 주행 가능 도면으로 오인하는 소프트웨어 결함으로 약 3,800대의 로보택시를 자발적으로 리콜했다. OTA 패치로 즉각 수정됐지만, 상업 운행 중인 자율주행 차량의 엣지 케이스 결함이 드러났다는 점에서 업계 전반의 안전성 논쟁이 다시 불붙었다."
categories:
  - 기술
tags:
  - "Waymo"
  - "자율주행"
  - "로보택시"
  - "리콜"
  - "Alphabet"
thumbnail: "https://www.engadget.com/img/gallery/waymo-recalls-nearly-4000-robotaxis-after-a-car-drove-directly-into-a-flooded-road/l-intro-1778610717.jpg"
---

자율주행 업계 선두 Waymo가 침수 도로를 인식하지 못하는 소프트웨어 결함으로 로보택시 약 <mark>3,800대</mark>를 자발적으로 리콜했다. 상업 운행 중인 전체 차량의 상당수가 포함된 이번 리콜은 자율주행 기술 신뢰성 논쟁을 다시 수면 위로 올렸다.

## 핵심 포인트

- 소프트웨어 결함으로 일부 Waymo 로보택시가 고인 물 또는 침수 도로로 직접 주행하는 사례 발생
- 회사는 자발적 리콜을 신고하고 OTA(Over-The-Air) 무선 소프트웨어 패치를 이미 전 차량에 배포 완료
- 리콜 대상 약 3,800대는 Waymo가 샌프란시스코·피닉스·오스틴·로스앤젤레스에서 운영 중인 상업 차량 대부분에 해당

## 결함의 내용 — 비가 오면 왜 멈추지 않았나

![이미지 1](https://www.engadget.com/img/gallery/waymo-recalls-nearly-4000-robotaxis-after-a-car-drove-directly-into-a-flooded-road/l-intro-1778610717.jpg)
*▲ Waymo 로보택시 리콜 사태 (Source: [Waymo recalls nearly 4,000 robotaxis after a car drove directly into a flooded road](https://www.engadget.com/2171165/waymo-recalls-nearly-4000-robotaxis-after-a-car-drove-directly-into-a-flooded-road/))*

Waymo의 로보택시는 라이다(LiDAR), 레이더, 카메라를 융합한 센서 시스템을 사용한다. 이번 결함은 <span class="hl-red">정체된 물(standing water)을 주행 가능한 노면으로 오인</span>하는 소프트웨어 로직의 문제였다. 차량이 침수 구간에 진입한 사례가 실제로 발생했으며, Waymo는 이 사실을 확인한 후 자발적으로 미국 도로교통안전국(NHTSA)에 리콜을 신고했다.

회사는 OTA 패치를 통해 소프트웨어를 즉시 업데이트했다. OTA 업데이트는 물리적 리콜 없이 원격으로 차량 소프트웨어를 수정하는 방식으로, 테슬라가 대중화시킨 자동차 업계의 표준 대응 수단이다. Waymo는 업데이트 적용 후 동일 결함이 재발하지 않았다고 밝혔다.

## 자율주행 신뢰성 — 완벽한 기술은 없다

이번 사태에서 주목할 점은 <span class="hl-blue">결함을 Waymo 스스로 신고했다</span>는 사실이다. 자발적 리콜은 숨기는 것보다 낫다는 기업 문화의 반증이기도 하지만, 역으로 <span class="hl-red">상업 운행 중인 자율주행 차량에 이런 결함이 존재했다는 사실</span>은 업계 전반의 안전 기준에 물음표를 던진다.

> "자율주행 기술이 '완전한 무인 운행'이라는 타이틀을 유지하려면, 인간 운전자가 당연히 피할 수 있는 상황에서도 실패하지 않아야 한다."

자율주행 업계는 수십만 마일 무사고 주행 기록을 앞세워 안전성을 홍보해왔다. 그러나 이번 침수 도로 결함처럼 <mark>엣지 케이스(드문 상황)</mark>에서의 실패는 "99.99% 안전"이라는 통계가 "100% 신뢰"를 의미하지 않는다는 것을 상기시킨다.

## 💰 투자 관점: Alphabet(GOOGL)과 자율주행 섹터

Waymo는 Alphabet(Google 모회사)의 자회사다. 이번 리콜 자체는 Alphabet 주가에 단기 충격을 주기엔 규모가 작다. 그러나 중장기 관점에서 투자자들이 주목해야 할 변수들이 있다.

| 변수 | 시나리오 |
|------|---------|
| NHTSA 추가 조사 | 규제 강화 → 자율주행 사업 지연 |
| 반복 결함 발생 | <span class="hl-red">상업 운행 허가 취소 리스크</span> |
| 경쟁사 대비 안전성 | <span class="hl-blue">자발적 공개로 투명성 신뢰 확보 가능</span> |
| IPO 준비 | 리콜 이력이 기업 가치 산정에 반영 |

Waymo의 경쟁사인 테슬라(TSLA) 의 완전자율주행(FSD), GM의 크루즈(상업 운행 중단 후 재개 준비 중), 바이두의 아폴로 등도 유사한 엣지 케이스 결함에서 자유롭지 않다. <span class="hl-blue">자율주행 ETF</span>(예: DRIV, KARS)는 이번 사태가 특정 기업이 아닌 섹터 전반의 규제 리스크를 재평가하는 계기가 됐다는 점에서 주목할 필요가 있다.

연결고리: <mark>Waymo 리콜</mark> → NHTSA 자율주행 감독 강화 → 운행 허가 절차 복잡화 → 자율주행 상용화 일정 지연 → Alphabet의 Waymo 사업 수익화 시점 후퇴.

## 향후 전망

소프트웨어 패치는 즉각 배포됐지만, 이번 사태가 남긴 질문은 더 근본적이다. 자율주행 차량이 비·눈·침수 등 악기상 조건에서 인간 운전자와 동등한 수준의 판단을 내릴 수 있는가? 이 질문이 규제 기관과 시장의 평가 기준이 될 것이다.

## 참고 기사

1. [Waymo recalls 3,800 robotaxis after glitch allowed some vehicles to 'drive into standing water'](https://www.cnbc.com/2026/05/12/waymo-recalls-3800-robotaxis-after-able-drive-into-standing-water.html) — CNBC
2. [Waymo recalls nearly 4,000 robotaxis after a car drove directly into a flooded road](https://www.engadget.com/2171165/waymo-recalls-nearly-4000-robotaxis-after-a-car-drove-directly-into-a-flooded-road/) — Engadget
