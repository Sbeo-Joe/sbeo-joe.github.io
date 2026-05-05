---
title: "AI가 열어놓은 사이버 위기 — Anthropic CEO 경고와 중국 해커의 Daemon Tools 공급망 공격"
date: 2026-05-06T05:35:42+09:00
layout: "post"
description: "Anthropic CEO 다리오 아모데이가 AI로 인해 수만 개의 취약점이 노출됐다며 사이버 위험의 임계점을 경고했다. 같은 날 카스퍼스키는 중국 해커가 전 세계적으로 사용되는 Daemon Tools 디스크 유틸리티에 한 달간 백도어를 심었다는 사실을 발견해 경고의 현실성을 입증했다."
categories:
  - 기술
tags:
  - "사이버보안"
  - "AI보안"
  - "Anthropic"
  - "공급망공격"
  - "DaemonTools"
  - "중국해커"
thumbnail: "https://cdn.arstechnica.net/wp-content/uploads/2022/08/GettyImages-1230467668-1152x648.jpg"
---

Anthropic CEO 다리오 아모데이 가 "AI 로 인해 소프트웨어·금융·정부 기관이 수만 개의 취약점에 노출됐다"며 <span class="hl-red">사이버 위험의 임계점(Moment of Danger)</span>을 선언했다. 이 경고가 나온 같은 날, 보안 업체 카스퍼스키는 전 세계 수백만 명이 사용하는 Daemon Tools 디스크 유틸리티가 한 달간 공급망 공격(Supply Chain Attack)으로 백도어가 심겨 있었다고 밝혔다. 배후로는 중국 연계 해커 그룹이 지목됐다.

## 핵심 포인트

- Anthropic CEO: AI 가 "수만 개" 취약점 노출 — <span class="hl-red">기업·은행·정부 대응 시간이 촉박</span>
- Daemon Tools, 한 달간 백도어 감염 — 카스퍼스키, 중국 해커 의심
- 미국 상무부, 구글·마이크로소프트·xAI 의 AI 모델 출시 전 안전성 테스트 의무화

## Anthropic CEO의 경고 — AI는 양날의 검

다리오 아모데이 는 이번 경고에서 AI 의 두 가지 상반된 역할을 동시에 지적했다. AI 는 취약점을 자동으로 탐지하고 패치하는 방어 도구이기도 하지만, 동시에 해커들이 취약점을 <span class="hl-red">전례없는 속도와 규모로 발굴하고 악용</span>하는 공격 도구이기도 하다.

> "소프트웨어 기업, 정부, 은행이 수만 개의 취약점을 수정할 좁은 시간이 주어졌다." — 다리오 아모데이, Anthropic CEO

![이미지 1](https://cdn.arstechnica.net/wp-content/uploads/2022/08/GettyImages-1230467668-1152x648.jpg)
*▲ AI 시대의 사이버 보안 위협 (Source: [Widely used Daemon Tools disk app backdoored in monthlong supply-chain attack](https://arstechnica.com/security/2026/05/widely-used-daemon-tools-disk-app-backdoored-in-monthlong-supply-chain-attack/))*

아모데이 의 경고는 과장이 아니다. 실제로 AI 기반 취약점 스캐닝 도구는 이미 사이버 범죄 생태계에서 활발히 유통되고 있다. 2025년 한 해에만 AI 보조 공격으로 인한 취약점 발견 속도가 전년 대비 <mark>3배</mark> 이상 빨라졌다는 보안 기관 집계도 있다.

## Daemon Tools 공급망 공격 — 한 달간 숨어있던 백도어

Daemon Tools 는 ISO 이미지 마운트, 가상 드라이브 생성 등에 쓰이는 소프트웨어로 전 세계 수백만 명이 사용한다. 카스퍼스키에 따르면 공격자는 Daemon Tools 의 공식 배포 채널에 침투해 정상 업데이트처럼 위장한 백도어 버전을 <mark>한 달</mark> 이상 배포했다.

| 항목 | 내용 |
|------|------|
| 피해 소프트웨어 | Daemon Tools (디스크 유틸리티) |
| 공격 방식 | 공급망 공격 — 공식 업데이트 채널 침투 |
| 감염 기간 | <mark>약 1개월</mark> |
| 배후 의심 | 중국 연계 해커 그룹 (카스퍼스키 추정) |
| 심각성 | 루트 수준 접근 가능 |

공급망 공격의 위험성은 사용자가 "신뢰할 수 있는 소스"에서 소프트웨어를 받았다고 믿는다는 점이다. <span class="hl-red">백신이나 방화벽도 정상 업데이트로 위장한 악성코드는 걸러내기 어렵다</span>. 2020년 솔라윈즈(SolarWinds) 공급망 공격으로 미국 정부 기관 수십 곳이 침해된 전례가 이를 잘 보여준다.

## 미국 정부의 대응 — AI 모델 출시 전 안전성 테스트

미국 상무부 는 구글, 마이크로소프트, xAI(일론 머스크) 의 AI 모델에 대해 출시 전 안전성 테스트를 의무화하는 협약을 체결했다. BBC에 따르면 이는 바이든 행정부 시절 체결된 자발적 협약을 강화한 것으로, AI 가 사이버 공격에 악용될 가능성을 선제적으로 차단하려는 조치다.

**연결고리 분석:**
AI 취약점 탐지 자동화 → 해커의 공격 속도·규모 급증 → 기업·정부 보안 인프라 투자 확대 → 사이버보안 섹터 수혜(크라우드스트라이크, 팔로알토 네트웍스 등)

- <span class="hl-blue">수혜</span>: 사이버보안 기업(CRWD, PANW, ZS), AI 보안 스타트업
- <span class="hl-red">리스크</span>: 공급망 소프트웨어 의존 기업 전반 — 검증 체계 없이 서드파티 도구를 쓰는 조직

Daemon Tools 사용자라면 즉시 설치된 버전을 점검하고, 최신 공식 패치로 업데이트해야 한다.

## 참고 기사

1. [Anthropic CEO warns of cyber moment of danger as AI exposes thousands of vulnerabilities](https://www.cnbc.com/2026/05/05/anthropic-ceo-cyber-moment-of-danger-mythos-vulnerabilities.html) — CNBC
2. [Widely used Daemon Tools disk app backdoored in monthlong supply-chain attack](https://arstechnica.com/security/2026/05/widely-used-daemon-tools-disk-app-backdoored-in-monthlong-supply-chain-attack/) — Ars Technica
3. [US to safety test new AI models from Google, Microsoft, xAI](https://www.bbc.com/news/articles/cgjp2we2j8go) — BBC
